import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import Svg, { Circle, G, Line, Path, Polyline, Text as SvgText } from 'react-native-svg';
import { DefsTextura, DefsVolume, idTextura, volumePeca } from '@/components/jogos/visual';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import {
  APOSTAS_FORA,
  DUPLO_ZERO,
  corDe,
  esperadoPorFicha,
  ordemDa,
  perdaEsperada,
  pleno,
  retorno,
  rotuloCasa,
  sortear,
  textoChance,
  type TipoRoda,
  tipoDeAposta,
  totalApostado,
  type Apostas,
} from '@/services/roleta';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { useIsDark } from '@/services/theme';

const INICIAL = 100;
const FICHAS = [1, 5, 10];
const COR_CASA = { verde: '#15803D', vermelho: '#B91C1C', preto: '#1E293B' };
const fmt = (n: number, casas = 1) => n.toFixed(casas).replace('.', ',');

/** Ponto no círculo: ângulo em graus a partir do topo, no sentido horário. */
const ponto = (c: number, r: number, graus: number) => {
  const a = (graus * Math.PI) / 180;
  return [c + r * Math.sin(a), c - r * Math.cos(a)];
};

function setor(c: number, r1: number, r2: number, a1: number, a2: number) {
  const [x1, y1] = ponto(c, r2, a1);
  const [x2, y2] = ponto(c, r2, a2);
  const [x3, y3] = ponto(c, r1, a2);
  const [x4, y4] = ponto(c, r1, a1);
  return `M${x1} ${y1} A${r2} ${r2} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${r1} ${r1} 0 0 0 ${x4} ${y4} Z`;
}

/** A roda desenhada: aro de madeira, as casas na ordem da roda (37 na europeia, 38 na americana) e o miolo. */
function Roda({ tamanho, ordem }: { tamanho: number; ordem: number[] }) {
  const PASSO = 360 / ordem.length;
  const c = tamanho / 2;
  const R = c - 1;
  return (
    <Svg width={tamanho} height={tamanho}>
      <DefsTextura material="madeira" escura />
      <DefsVolume />
      <Circle cx={c} cy={c} r={R} fill="#78350F" />
      <Circle cx={c} cy={c} r={R * 0.9} fill="#A16207" />
      {/* o veio do aro de madeira */}
      <Circle cx={c} cy={c} r={R} fill={`url(#${idTextura('madeira', true)})`} />
      {ordem.map((n, i) => {
        const a = i * PASSO;
        return (
          <G key={n}>
            <Path d={setor(c, R * 0.6, R * 0.86, a - PASSO / 2, a + PASSO / 2)} fill={COR_CASA[corDe(n)]} stroke="#FDE68A" strokeWidth={0.6} />
            <SvgText
              x={c}
              y={c - R * 0.77}
              fill="#FFFFFF"
              fontSize={Math.max(7, tamanho * 0.036)}
              fontWeight="bold"
              textAnchor="middle"
              transform={`rotate(${a} ${c} ${c})`}
            >
              {rotuloCasa(n)}
            </SvgText>
          </G>
        );
      })}
      <Circle cx={c} cy={c} r={R * 0.6} fill="#92400E" />
      <Circle cx={c} cy={c} r={R * 0.6} fill={`url(#${idTextura('madeira', true)})`} />
      <Circle cx={c} cy={c} r={R * 0.42} fill="#B45309" stroke="#FDE68A" strokeWidth={1} />
      {volumePeca(c, c, R * 0.42, 0.15)}
      {[0, 90, 180, 270].map((a) => {
        const [x, y] = ponto(c, R * 0.36, a);
        return <Line key={a} x1={c} y1={c} x2={x} y2={y} stroke="#FDE68A" strokeWidth={3} strokeLinecap="round" />;
      })}
      <Circle cx={c} cy={c} r={R * 0.08} fill="#FDE68A" />
      {/* a roda é uma bacia: a borda escurece um pouco */}
      {volumePeca(c, c, R, 0)}
    </Svg>
  );
}

interface Ponto {
  rodada: number;
  real: number;
  esperado: number;
}

/** Saldo real × esperado, rodada a rodada (um eixo só: fichas). Toque para ler um ponto. */
function Grafico({ pontos, largura, legenda }: { pontos: Ponto[]; largura: number; legenda: string }) {
  const dark = useIsDark();
  const [lido, setLido] = useState<Ponto | null>(null);
  const altura = 150;
  const m = { e: 34, d: 8, c: 10, b: 20 };
  const valores = pontos.flatMap((p) => [p.real, p.esperado]);
  const min = Math.min(...valores, INICIAL - 10);
  const max = Math.max(...valores, INICIAL + 10);
  const n = Math.max(pontos.length - 1, 10);
  const x = (i: number) => m.e + (i / n) * (largura - m.e - m.d);
  const y = (v: number) => m.c + (1 - (v - min) / (max - min)) * (altura - m.c - m.b);
  const real = dark ? '#3B82F6' : '#2563EB';
  const esperado = dark ? '#D97706' : '#B45309';
  const tinta = dark ? '#94A3B8' : '#64748B';
  const grade = dark ? '#334155' : '#E2E8F0';
  const ultimo = pontos[pontos.length - 1];
  const ler = (lx: number) => {
    const i = Math.round(((lx - m.e) / (largura - m.e - m.d)) * n);
    setLido(pontos[Math.max(0, Math.min(pontos.length - 1, i))] ?? null);
  };
  return (
    <View className="gap-1">
      <View className="flex-row flex-wrap gap-3">
        <View className="flex-row items-center gap-1">
          <View style={{ width: 16, height: 2, backgroundColor: real }} />
          <Text className="text-xs text-slate-700 dark:text-slate-300">Seu saldo real</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <View style={{ width: 16, height: 0, borderTopWidth: 2, borderStyle: 'dashed', borderColor: esperado }} />
          <Text className="text-xs text-slate-700 dark:text-slate-300">Saldo esperado ({legenda})</Text>
        </View>
      </View>
      <Pressable accessibilityLabel="Gráfico do saldo real e do esperado; toque para ler uma rodada" onPress={(e) => ler(e.nativeEvent.locationX)}>
        <Svg width={largura} height={altura}>
          {[min, (min + max) / 2, max].map((v) => (
            <G key={v}>
              <Line x1={m.e} x2={largura - m.d} y1={y(v)} y2={y(v)} stroke={grade} strokeWidth={1} />
              <SvgText x={m.e - 4} y={y(v) + 3} fontSize={9} fill={tinta} textAnchor="end">
                {Math.round(v)}
              </SvgText>
            </G>
          ))}
          <SvgText x={m.e} y={altura - 4} fontSize={9} fill={tinta}>
            rodada 0
          </SvgText>
          <SvgText x={largura - m.d} y={altura - 4} fontSize={9} fill={tinta} textAnchor="end">
            {`rodada ${n}`}
          </SvgText>
          <Polyline points={pontos.map((p, i) => `${x(i)},${y(p.esperado)}`).join(' ')} fill="none" stroke={esperado} strokeWidth={2} strokeDasharray="5 4" />
          <Polyline points={pontos.map((p, i) => `${x(i)},${y(p.real)}`).join(' ')} fill="none" stroke={real} strokeWidth={2} strokeLinejoin="round" />
          {ultimo && <Circle cx={x(pontos.length - 1)} cy={y(ultimo.real)} r={4} fill={real} stroke={dark ? '#0F172A' : '#FFFFFF'} strokeWidth={2} />}
          {lido && <Line x1={x(lido.rodada)} x2={x(lido.rodada)} y1={m.c} y2={altura - m.b} stroke={tinta} strokeWidth={1} />}
        </Svg>
      </Pressable>
      {lido && (
        <Text className="text-xs text-slate-700 dark:text-slate-300">
          Rodada {lido.rodada}: real {fmt(lido.real, 0)} · esperado {fmt(lido.esperado)}
        </Text>
      )}
    </View>
  );
}

/** Um botão de aposta, com a chance e quanto paga. */
function BotaoAposta({ id, valor, onPress, desligado, tipo }: { id: string; valor: number; onPress: () => void; desligado: boolean; tipo: TipoRoda }) {
  const t = tipoDeAposta(id)!;
  const cor = id === 'vermelho' ? 'bg-red-700' : id === 'preto' ? 'bg-slate-800 dark:bg-slate-950' : 'bg-emerald-700';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Apostar em ${t.nome}: chance de ${textoChance(t, tipo)}, paga ${t.paga} por 1`}
      disabled={desligado}
      onPress={onPress}
      className={`w-[31.5%] rounded-xl p-2 active:opacity-80 ${cor}`}
    >
      <Text className="text-sm font-extrabold text-white">{t.nome}</Text>
      <Text className="text-[10px] text-white/90">{textoChance(t, tipo)}</Text>
      <Text className="text-[10px] text-white/90">paga {t.paga} por 1</Text>
      {valor > 0 && (
        <View className="absolute right-1 top-1 h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-amber-400 px-1">
          <Text className="text-[10px] font-extrabold text-slate-900">{valor}</Text>
        </View>
      )}
    </Pressable>
  );
}

/**
 * Roleta europeia (um zero), só com fichas de mentira, para ver a probabilidade funcionando: a chance
 * de cada aposta, a vantagem da casa (1/37 ≈ 2,7%) e um gráfico do saldo esperado × o real. Não há
 * dinheiro, compra nem prêmio: as fichas não saem daqui e acabar com elas não custa nada.
 */
/** As variantes da roleta (seletor “Variante” da página): cada uma começa uma sessão nova. */
export default function RoletaJogo() {
  const [variante] = useVariante('roleta');
  const tipo: TipoRoda = variante === 'americana' || variante === 'partage' ? variante : 'europeia';
  return <Roleta key={tipo} tipo={tipo} />;
}

/** O que cada roda leva, em média, para escrever na tela. */
const VANTAGEM_TEXTO: Record<TipoRoda, string> = {
  europeia: '−2,7% do apostado',
  americana: '−5,26% do apostado',
  partage: '−1,35% nas apostas simples, −2,7% nas outras',
};

function Roleta({ tipo }: { tipo: TipoRoda }) {
  const ordem = ordemDa(tipo);
  const PASSO = 360 / ordem.length;
  const { width } = useWindowDimensions();
  const [prefs] = useJogosPrefs();
  const larguraUtil = Math.min(width - 64, 560);
  const tamanhoRoda = Math.min(280, larguraUtil);

  const [ficha, setFicha] = useState(5);
  const [apostas, setApostas] = useState<Apostas>({});
  const [saldo, setSaldo] = useState(INICIAL);
  const [apostado, setApostado] = useState(0);
  const [pontos, setPontos] = useState<Ponto[]>([{ rodada: 0, real: INICIAL, esperado: INICIAL }]);
  const [ultimos, setUltimos] = useState<number[]>([]);
  const [girando, setGirando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [numeros, setNumeros] = useState(false);

  const giroRoda = useSharedValue(0);
  const giroBola = useSharedValue(0);
  const raioBola = useSharedValue(0); // 0 = no aro, 1 = caída na casa
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => (timer.current ? clearTimeout(timer.current) : undefined), []);

  const estiloRoda = useAnimatedStyle(() => ({ transform: [{ rotate: `${giroRoda.value}deg` }] }));
  const estiloBola = useAnimatedStyle(() => ({ transform: [{ rotate: `${giroBola.value}deg` }] }));
  const R = tamanhoRoda / 2 - 1;
  const estiloRaio = useAnimatedStyle(() => ({ transform: [{ translateY: raioBola.value * R * 0.2 }] }));

  const total = totalApostado(apostas);
  const apostar = (id: string) => {
    if (girando) return;
    if (total + ficha > saldo) return setMensagem('Não há fichas para essa aposta. Tire alguma ou use uma ficha menor.');
    haptics.tapLight();
    setMensagem(null);
    setApostas((a) => ({ ...a, [id]: (a[id] ?? 0) + ficha }));
  };

  /** Registra o resultado de uma rodada (ou de várias, na simulação). */
  const registrar = (sorteados: number[]) => {
    let s = saldo;
    let ap = apostado;
    let esp = pontos[pontos.length - 1]!.esperado;
    const perda = perdaEsperada(apostas, tipo);
    const novos: Ponto[] = [];
    let base = pontos.length - 1;
    for (const n of sorteados) {
      s = s - total + retorno(apostas, n, tipo);
      ap += total;
      esp -= perda;
      novos.push({ rodada: ++base, real: s, esperado: esp });
    }
    setSaldo(s);
    setApostado(ap);
    setPontos((p) => [...p, ...novos]);
    setUltimos((u) => [...sorteados.slice(-12).reverse(), ...u].slice(0, 12));
    return s;
  };

  const girar = () => {
    if (girando || total === 0 || total > saldo) return;
    haptics.tapLight();
    setMensagem(null);
    const n = sortear(Math.random, tipo);
    const i = ordem.indexOf(n);
    const dur = prefs.animacoes ? 4200 : 0;
    // a roda gira no sentido horário e para com a casa sorteada no topo; a bolinha corre ao contrário
    // e também para no topo, caindo do aro para dentro da casa
    const atual = giroRoda.value % 360;
    const alvo = (((-i * PASSO - atual) % 360) + 360) % 360;
    giroRoda.value = giroRoda.value - atual;
    giroRoda.value = withTiming(3 * 360 + alvo, { duration: dur, easing: Easing.out(Easing.cubic) });
    giroBola.value = 0;
    giroBola.value = withTiming(-5 * 360, { duration: dur, easing: Easing.out(Easing.quad) });
    raioBola.value = 0;
    raioBola.value = withDelay(dur * 0.7, withTiming(1, { duration: dur * 0.3, easing: Easing.bounce }));
    setGirando(true);
    timer.current = setTimeout(() => {
      const ganho = retorno(apostas, n, tipo);
      const s = registrar([n]);
      setGirando(false);
      const cor = corDe(n);
      setMensagem(
        `Saiu ${rotuloCasa(n)} (${cor}).${tipo === 'partage' && n === 0 && ganho > 0 ? ' Saiu o zero: as apostas simples voltam pela metade.' : ''} ${ganho > 0 ? `Voltaram ${ganho} fichas das ${total} apostadas.` : `As ${total} fichas apostadas ficaram com a casa.`}${s < total ? ' Não sobram fichas para repetir essas apostas.' : ''}`,
      );
    }, dur + 150);
  };

  const simular = (vezes: number) => {
    if (girando || total === 0) return;
    const sorteados: number[] = [];
    let s = saldo;
    for (let k = 0; k < vezes && s >= total; k++) {
      const n = sortear(Math.random, tipo);
      sorteados.push(n);
      s = s - total + retorno(apostas, n, tipo);
    }
    if (sorteados.length === 0) return;
    registrar(sorteados);
    setMensagem(`Simulei ${sorteados.length} rodadas com as mesmas apostas${sorteados.length < vezes ? ' (até as fichas acabarem)' : ''}. Veja como o saldo real segue a linha do esperado.`);
  };

  const recomecar = () => {
    if (girando) return;
    setSaldo(INICIAL);
    setApostado(0);
    setPontos([{ rodada: 0, real: INICIAL, esperado: INICIAL }]);
    setUltimos([]);
    setApostas({});
    setMensagem(null);
  };

  const esperadoAgora = INICIAL - pontos[pontos.length - 1]!.esperado;
  const realAgora = INICIAL - saldo;
  const rodadas = pontos.length - 1;
  const semFichas = saldo < 1;

  return (
    <View className="w-full gap-3">
      <Text className="rounded-xl bg-sky-50 p-2 text-center text-xs font-semibold text-sky-900 dark:bg-sky-950/60 dark:text-sky-100">
        Fichas de mentira, só para aprender: nada aqui vale dinheiro, nada se compra e nada se ganha fora deste jogo.
      </Text>

      {/* a roda e a bolinha */}
      <View className="items-center">
        <View style={{ width: tamanhoRoda, height: tamanhoRoda + 12 }}>
          {/* o marcador fixo no topo, onde a casa sorteada para */}
          <View style={{ position: 'absolute', left: tamanhoRoda / 2 - 7, top: 0, zIndex: 2 }}>
            <Svg width={14} height={12}>
              <Path d="M0 0 L14 0 L7 12 Z" fill="#F59E0B" />
            </Svg>
          </View>
          <View style={{ position: 'absolute', top: 12 }}>
            <Animated.View style={estiloRoda}>
              <Roda tamanho={tamanhoRoda} ordem={ordem} />
            </Animated.View>
            <Animated.View style={[{ position: 'absolute', left: 0, top: 0, width: tamanhoRoda, height: tamanhoRoda }, estiloBola]} pointerEvents="none">
              <Animated.View
                style={[
                  { position: 'absolute', left: tamanhoRoda / 2 - 6, top: tamanhoRoda / 2 - R * 0.95 - 6, width: 12, height: 12, borderRadius: 6, backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#94A3B8' },
                  estiloRaio,
                ]}
              />
            </Animated.View>
          </View>
        </View>
      </View>

      {ultimos.length > 0 && (
        <View className="flex-row flex-wrap items-center justify-center gap-1">
          <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">Últimos:</Text>
          {ultimos.map((n, k) => (
            <View key={k} style={{ backgroundColor: COR_CASA[corDe(n)] }} className="h-6 w-6 items-center justify-center rounded-full">
              <Text className="text-[10px] font-bold text-white">{rotuloCasa(n)}</Text>
            </View>
          ))}
        </View>
      )}

      {!!mensagem && <Text className="text-center text-sm font-semibold text-slate-800 dark:text-slate-100">{mensagem}</Text>}

      {/* o placar das fichas e da matemática */}
      <View className="flex-row flex-wrap gap-2">
        {[
          ['Fichas', `${saldo}`],
          ['Rodadas', `${rodadas}`],
          ['Apostado no total', `${apostado}`],
          ['Perda esperada', `${fmt(esperadoAgora)}`],
          ['Perda real', realAgora >= 0 ? `${realAgora}` : `ganhou ${-realAgora}`],
        ].map(([rotulo, v]) => (
          <View key={rotulo} className="min-w-[30%] flex-1 rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
            <Text className="text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400">{rotulo}</Text>
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">{v}</Text>
          </View>
        ))}
      </View>

      <Grafico pontos={pontos} largura={larguraUtil} legenda={VANTAGEM_TEXTO[tipo]} />
      {rodadas >= 10 && (
        <Text className="text-xs leading-5 text-slate-700 dark:text-slate-300">
          {saldo > pontos[pontos.length - 1]!.esperado
            ? 'Você está acima da linha esperada: isso é sorte de curto prazo. Com mais rodadas, o saldo tende a se aproximar da linha que desce, porque a vantagem da casa nunca muda.'
            : 'Você está abaixo da linha esperada: é o azar de curto prazo somado à vantagem da casa. Com mais rodadas, o saldo tende a ficar perto da linha que desce.'}
        </Text>
      )}

      {semFichas ? (
        <View className="gap-2 rounded-2xl bg-amber-50 p-3 dark:bg-amber-950/50">
          <Text className="text-sm text-slate-800 dark:text-slate-100">
            As fichas acabaram. É isso que a vantagem da casa faz quando se joga por muito tempo: ninguém escapa da média. Recomece para tentar de novo.
          </Text>
        </View>
      ) : (
        <>
          <View className="flex-row flex-wrap items-center gap-2">
            <Text className="text-xs font-extrabold uppercase text-slate-600 dark:text-slate-400">Ficha</Text>
            {FICHAS.map((f) => (
              <Pressable
                key={f}
                accessibilityRole="radio"
                accessibilityState={{ selected: ficha === f }}
                onPress={() => setFicha(f)}
                className={`h-9 w-9 items-center justify-center rounded-full border-2 ${ficha === f ? 'border-amber-600 bg-amber-400' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
              >
                <Text className={`text-xs font-extrabold ${ficha === f ? 'text-slate-900' : 'text-slate-700 dark:text-slate-200'}`}>{f}</Text>
              </Pressable>
            ))}
            <Text className="text-xs text-slate-600 dark:text-slate-400">Toque numa aposta para pôr uma ficha.</Text>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-2">
            {APOSTAS_FORA.map((a) => (
              <BotaoAposta key={a.id} id={a.id} valor={apostas[a.id] ?? 0} onPress={() => apostar(a.id)} desligado={girando} tipo={tipo} />
            ))}
          </View>

          <Pressable accessibilityRole="button" onPress={() => setNumeros((v) => !v)} className="self-start rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800">
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {numeros ? 'Esconder os números' : `Apostar num número só (1 em ${ordem.length}, paga 35 por 1)`}
            </Text>
          </Pressable>
          {numeros && (
            <View className="flex-row flex-wrap gap-1">
              {[...Array.from({ length: 37 }, (_, n) => n), ...(tipo === 'americana' ? [DUPLO_ZERO] : [])].map((n) => (
                <Pressable
                  key={n}
                  accessibilityRole="button"
                  accessibilityLabel={`Apostar no número ${rotuloCasa(n)}`}
                  disabled={girando}
                  onPress={() => apostar(pleno(n).id)}
                  style={{ backgroundColor: COR_CASA[corDe(n)] }}
                  className="h-9 w-9 items-center justify-center rounded-lg active:opacity-70"
                >
                  <Text className="text-xs font-bold text-white">{rotuloCasa(n)}</Text>
                  {(apostas[`n${n}`] ?? 0) > 0 && (
                    <View className="absolute -right-1 -top-1 h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-0.5">
                      <Text className="text-[9px] font-extrabold text-slate-900">{apostas[`n${n}`]}</Text>
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          )}

          {total > 0 && (
            <View className="gap-1 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60">
              <Text className="text-sm font-bold text-slate-900 dark:text-white">Suas apostas: {total} fichas por rodada</Text>
              {Object.entries(apostas).map(([id, v]) => {
                const t = tipoDeAposta(id)!;
                return (
                  <Text key={id} className="text-xs text-slate-700 dark:text-slate-300">
                    {t.nome}: {v} · chance {textoChance(t, tipo)} · paga {t.paga} por 1 · em média perde {fmt(-v * esperadoPorFicha(t, tipo), 2)} por rodada
                  </Text>
                );
              })}
              <Text className="text-xs text-slate-600 dark:text-slate-400">
                {tipo === 'americana'
                  ? 'Com o 0 e o 00, toda aposta perde, em média, 2 fichas a cada 38 apostadas: quase o dobro da roda europeia.'
                  : tipo === 'partage'
                    ? 'Com o “la partage”, as apostas simples perdem só metade quando sai o 0: em média, 1 ficha a cada 74. As outras continuam perdendo 1 a cada 37.'
                    : 'Toda aposta perde, em média, 1 ficha a cada 37 apostadas. Juntar apostas não muda isso: a vantagem da casa é a mesma em todas.'}
              </Text>
            </View>
          )}

          <View className="flex-row flex-wrap gap-2">
            <Pressable
              accessibilityRole="button"
              disabled={girando || total === 0}
              onPress={girar}
              className={`flex-1 items-center rounded-xl bg-emerald-600 px-3 py-3 active:opacity-80 ${girando || total === 0 ? 'opacity-40' : ''}`}
            >
              <Text className="font-extrabold text-white">{girando ? 'Girando…' : 'Girar'}</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              disabled={girando || total === 0}
              onPress={() => simular(100)}
              className={`flex-1 items-center rounded-xl bg-slate-200 px-3 py-3 active:opacity-80 dark:bg-slate-700 ${girando || total === 0 ? 'opacity-40' : ''}`}
            >
              <Text className="text-center font-bold text-slate-800 dark:text-slate-100">Simular 100 rodadas</Text>
            </Pressable>
          </View>
          <Pressable accessibilityRole="button" disabled={girando} onPress={() => setApostas({})} className="self-center">
            <Text className="text-xs font-bold text-conecta dark:text-conecta-400">Tirar todas as apostas</Text>
          </Pressable>
        </>
      )}
      <Pressable accessibilityRole="button" disabled={girando} onPress={recomecar} className="self-center rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
        <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Recomeçar com {INICIAL} fichas</Text>
      </Pressable>
    </View>
  );
}
