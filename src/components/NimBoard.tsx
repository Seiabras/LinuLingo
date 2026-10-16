import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Ellipse, Rect } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useNomesJogadores } from '@/services/jogos-prefs';
import { MAX_PALITOS, MAX_PILHAS, PILHAS_PRONTAS, bitsPara, createInitialState, emBinario, jogar, lanceVencedor, somaNim, type JogadorN, type NimState } from '@/services/nim-engine';
import { lanceNim } from '@/services/nim-ia';
import { Collapsible } from '@/components/ui';
import { Some, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** Um palito de fósforo, desenhado pelo app. */
function Palito({ altura, marcado }: { altura: number; marcado?: boolean }) {
  const l = altura * 0.22;
  return (
    <Svg width={l} height={altura} viewBox="0 0 10 46">
      <Rect x={3} y={6} width={4} height={39} rx={1.2} fill={marcado ? '#FCD34D' : '#E7C38B'} stroke={marcado ? '#B45309' : '#A47A3F'} strokeWidth={0.8} />
      {/* o brilho do palito e da cabeça, com a luz vindo do alto à esquerda */}
      <Rect x={3.7} y={8} width={0.9} height={35} rx={0.45} fill="#FFFFFF" opacity={0.45} />
      <Ellipse cx={5} cy={6} rx={3.6} ry={5} fill={marcado ? '#F97316' : '#B91C1C'} />
      <Ellipse cx={3.9} cy={4.2} rx={1.1} ry={1.6} fill="#FFFFFF" opacity={0.4} />
    </Svg>
  );
}

function Escolha({ ativo, texto, onPress }: { ativo: boolean; texto: string; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      onPress={onPress}
      className={`rounded-full border-2 px-3 py-1 ${ativo ? 'border-conecta bg-conecta-50 dark:border-conecta-400 dark:bg-conecta-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
    >
      <Text className="text-xs font-bold text-slate-800 dark:text-slate-100">{texto}</Text>
    </Pressable>
  );
}

function Mais({ texto, onPress, desativado }: { texto: string; onPress: () => void; desativado?: boolean }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={texto === '+' ? 'Mais um palito' : 'Menos um palito'} disabled={desativado} onPress={onPress} className={`h-7 w-7 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 ${desativado ? 'opacity-40' : ''}`}>
      <Text className="font-extrabold text-slate-800 dark:text-slate-100">{texto}</Text>
    </Pressable>
  );
}

/**
 * Nim (ver `nim-engine.ts`): pilhas de palitos; na vez, toque num palito e tire ele e os que estão
 * depois dele na mesma pilha. Normal: quem tira o último ganha. Misère: quem tira o último perde.
 */
export function NimBoard() {
  const [prefs] = useJogosPrefs();
  const nomeJ = useNomesJogadores();
  const tema = useTemaJogo();
  const inicio = useCallback(() => createInitialState([3, 4, 5]), []);
  const h = useHistorico<NimState>(inicio, 'nim');
  const s = h.state;
  const xp = useXpDeVitoria('nim');
  const [marca, setMarca] = useState<{ pilha: number; desde: number } | null>(null);
  const [montando, setMontando] = useState(false);
  const [porque, setPorque] = useState(false);

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.vez, h.pilha[0]!.vez === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.vez === LINU && s.vencedor === null;
  const nome = (j: JogadorN) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : nomeJ(j === 0 ? 0 : 1));

  const fazer = useCallback(
    (pilha: number, quantos: number) => {
      const next = jogar(s, { pilha, quantos });
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next);
      setMarca(null);
      if (next.vencedor !== null && (!contraLinu || next.vencedor !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceNim(s, prefs.nivel);
      if (l) fazer(l.pilha, l.quantos);
    },
    800,
  );

  const reiniciarCom = (pilhas: number[], misere: boolean) => {
    haptics.tapLight();
    xp.zerar();
    setMarca(null);
    h.jogar(createInitialState(pilhas, misere), null);
  };
  const desfazer = () => {
    haptics.tapLight();
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.vez === LINU) n++;
    h.desfazer(n);
    setMarca(null);
  };

  const altura = 46;
  const quantos = marca ? s.pilhas[marca.pilha]! - marca.desde : 0;
  const u = s.ultimo;
  const minhaVez = !vezDoLinu && s.vencedor === null;
  const resultado = (() => {
    if (s.vencedor === null) return null;
    const quemTirou = u ? nome(u.quem) : '';
    const fim = s.misere ? `${quemTirou} tirou o último palito e perdeu.` : `${quemTirou} tirou o último palito.`;
    const texto = contraLinu ? (s.vencedor !== LINU ? `${fim} Você venceu o Linu!` : `${fim} O Linu venceu.`) : `${fim} ${nome(s.vencedor)} venceu!`;
    return { texto, tom: !contraLinu || s.vencedor !== LINU ? ('vitoria' as const) : ('derrota' as const) };
  })();

  const presetAtivo = PILHAS_PRONTAS.find((p) => p.pilhas.join() === s.inicio.join());
  const bits = bitsPara(s.inicio);
  const x = somaNim(s.pilhas);
  const certo = lanceVencedor(s.pilhas, s.misere);

  return (
    <View className="items-center gap-3">
      {/* as escolhas: modo e pilhas */}
      <View className="flex-row flex-wrap justify-center gap-2">
        <Escolha ativo={!s.misere} texto="Normal: o último ganha" onPress={() => s.misere && reiniciarCom(s.inicio, false)} />
        <Escolha ativo={s.misere} texto="Misère: o último perde" onPress={() => !s.misere && reiniciarCom(s.inicio, true)} />
      </View>
      <View className="flex-row flex-wrap justify-center gap-2">
        {PILHAS_PRONTAS.map((p) => (
          <Escolha key={p.id} ativo={presetAtivo?.id === p.id} texto={p.nome} onPress={() => reiniciarCom(p.pilhas, s.misere)} />
        ))}
        <Escolha ativo={montando || !presetAtivo} texto="Montar as minhas" onPress={() => setMontando((m) => !m)} />
      </View>
      {presetAtivo && <Text className="text-center text-[11px] text-slate-600 dark:text-slate-400">{presetAtivo.nota}</Text>}
      {montando && (
        <View className="w-full max-w-sm gap-1 rounded-2xl bg-slate-50 p-2 dark:bg-slate-800/60">
          {s.inicio.map((n, k) => (
            <View key={k} className="flex-row items-center justify-between gap-2">
              <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">Pilha {k + 1}</Text>
              <View className="flex-row items-center gap-2">
                <Mais texto="−" desativado={n <= 1} onPress={() => reiniciarCom(s.inicio.map((v, i) => (i === k ? v - 1 : v)), s.misere)} />
                <Text className="w-5 text-center text-sm font-extrabold text-slate-900 dark:text-white">{n}</Text>
                <Mais texto="+" desativado={n >= MAX_PALITOS} onPress={() => reiniciarCom(s.inicio.map((v, i) => (i === k ? v + 1 : v)), s.misere)} />
              </View>
            </View>
          ))}
          <View className="flex-row justify-center gap-2 pt-1">
            <Escolha ativo={false} texto="+ pilha" onPress={() => s.inicio.length < MAX_PILHAS && reiniciarCom([...s.inicio, 3], s.misere)} />
            <Escolha ativo={false} texto="− pilha" onPress={() => s.inicio.length > 1 && reiniciarCom(s.inicio.slice(0, -1), s.misere)} />
          </View>
        </View>
      )}

      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <Palito altura={18} /> }))}
        vez={s.vez}
        terminou={s.vencedor !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : pensando || vezDoLinu ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {marca
            ? `Tirar ${quantos} ${quantos === 1 ? 'palito' : 'palitos'} da pilha ${marca.pilha + 1}? Toque em “Tirar”, ou noutro palito para mudar.`
            : `${contraLinu ? 'Sua vez' : `Vez do ${nome(s.vez)}`}: toque num palito. Saem ele e os que estão depois dele, na mesma pilha. ${s.misere ? 'Quem tirar o último perde.' : 'Quem tirar o último ganha.'}`}
        </Instrucao>
      )}

      <Moldura largura={300} altura={s.pilhas.length * (altura + 14) + 16} fundo={tema.superficie}>
        <View style={{ width: 300, paddingVertical: 8 }} className="items-center">
          {s.pilhas.map((n, k) => {
            const tirados = u && u.pilha === k ? u.quantos : 0;
            return (
              <View key={k} style={{ height: altura + 14 }} className="flex-row items-center justify-center gap-1.5">
                <Text style={{ color: tema.linha }} className="w-6 text-right text-[11px] font-bold">
                  {k + 1}
                </Text>
                {Array.from({ length: n }, (_, i) => {
                  const marcado = !!marca && marca.pilha === k && i >= marca.desde;
                  return (
                    <Pressable
                      key={i}
                      accessibilityRole="button"
                      accessibilityLabel={`Pilha ${k + 1}, palito ${i + 1} de ${n}: tirar ${n - i}`}
                      disabled={!minhaVez}
                      onPress={() => {
                        haptics.tapLight();
                        setMarca(marca && marca.pilha === k && marca.desde === i ? null : { pilha: k, desde: i });
                      }}
                      style={{ paddingHorizontal: 2, transform: [{ translateY: marcado ? -5 : 0 }] }}
                    >
                      <Palito altura={altura} marcado={marcado} />
                    </Pressable>
                  );
                })}
                {/* os que acabaram de sair, sumindo */}
                {prefs.animacoes &&
                  Array.from({ length: tirados }, (_, i) => (
                    <View key={`t${h.lances}-${i}`} style={{ paddingHorizontal: 2 }}>
                      <Some dy={-24} atraso={i * 60}>
                        <Palito altura={altura} />
                      </Some>
                    </View>
                  ))}
                {n === 0 && tirados === 0 && <Text style={{ color: tema.linha }} className="text-[11px] italic">vazia</Text>}
              </View>
            );
          })}
        </View>
      </Moldura>

      {marca && minhaVez && (
        <Surge>
          <Pressable accessibilityRole="button" onPress={() => fazer(marca.pilha, quantos)} className="rounded-full bg-emerald-600 px-5 py-2 active:opacity-80">
            <Text className="font-extrabold text-white">
              Tirar {quantos} da pilha {marca.pilha + 1}
            </Text>
          </Pressable>
        </Surge>
      )}

      <ControlesJogo onRecomecar={() => reiniciarCom(s.inicio, s.misere)} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />

      <View className="w-full max-w-md">
        <Collapsible title="Por que o Linu ganha?" open={porque} onToggle={() => setPorque((v) => !v)}>
          <View className="gap-2 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60">
            <Text className="text-xs text-slate-700 dark:text-slate-200">
              O segredo é a “soma nim”, descoberta pelo matemático Charles Bouton em 1901. Escreva cada pilha em binário, o jeito de contar só com 0 e 1 (da direita para a esquerda, as colunas valem 1, 2, 4 e 8). Depois olhe cada coluna: ela tem um número par ou ímpar de “1”?
            </Text>
            <View className="items-center">
              {s.pilhas.map((n, k) => (
                <Text key={k} className="font-mono text-sm text-slate-900 dark:text-white">
                  pilha {k + 1}: {String(n).padStart(2, ' ')} → {emBinario(n, bits)}
                </Text>
              ))}
              <Text className="font-mono text-sm font-extrabold text-slate-900 dark:text-white">
                soma nim: {emBinario(x, bits)} {x === 0 ? '(todas as colunas pares)' : '(alguma coluna ímpar)'}
              </Text>
            </View>
            <Text className="text-xs text-slate-700 dark:text-slate-200">
              Quem deixa TODAS as colunas pares está ganhando: o outro, tire o que tirar, deixa alguma coluna ímpar, e você conserta de novo. Assim, no fim, quem fica com a mesa vazia é o outro. Na misère, a regra é a mesma até o finzinho: quando sobrarem só pilhas de 1 palito, deixe um número ímpar delas.
            </Text>
            <Text className="text-xs font-bold text-slate-800 dark:text-slate-100">
              {s.vencedor !== null
                ? 'A partida acabou: recomece e tente deixar as colunas pares.'
                : certo
                  ? `Agora, quem joga (${nome(s.vez).toLowerCase()}) pode ganhar: tirando ${certo.quantos} da pilha ${certo.pilha + 1}.`
                  : `Agora, quem joga (${nome(s.vez).toLowerCase()}) está em apuros: não há lance que ganhe, se o outro jogar certo.`}
            </Text>
            <Text className="text-xs text-slate-600 dark:text-slate-400">No difícil, o Linu faz essa conta a cada lance. Se, na sua vez, todas as colunas estiverem pares, ele não erra mais.</Text>
          </View>
        </Collapsible>
      </View>
    </View>
  );
}
