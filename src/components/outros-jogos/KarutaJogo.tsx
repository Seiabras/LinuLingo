import { useEffect, useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, PlacarJogo, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { Linu } from '@/components/Linu';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { KIMARIJI, lerMais, leituraDeCima, novoJogo, poema, proximo, REACAO_DO_LINU, tocar, versosDaCarta, type EstadoKaruta, type Jogador } from '@/services/karuta-engine';

const VOCE: Jogador = 0;
const LINU: Jogador = 1;
const rng = () => Math.random();
/** quanto o leitor demora em cada sílaba */
const MS_POR_SILABA = 320;

/**
 * A carta de pegar (torifuda): a segunda metade do poema, só em kana, em colunas verticais lidas da
 * direita para a esquerda, como nas cartas de verdade.
 */
function CartaDePegar({ n, largura, estado, onPress }: { n: number; largura: number; estado?: 'certa' | 'errada'; onPress?: () => void }) {
  const kana = [...versosDaCarta(n).join('')];
  const porColuna = Math.ceil(kana.length / 3);
  const colunas = [0, 1, 2].map((c) => kana.slice(c * porColuna, (c + 1) * porColuna));
  const fonte = Math.max(9, Math.floor((largura * 1.4) / (porColuna + 1.2)));
  const borda = estado === 'certa' ? '#10B981' : estado === 'errada' ? '#E11D48' : '#2F6B3A';
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={`Carta: ${versosDaCarta(n).join(' ')}`}
      disabled={!onPress}
      onPress={onPress}
      style={{ width: largura, height: largura * 1.4, borderRadius: 6, borderWidth: 3, borderColor: borda, backgroundColor: '#FBF6E9', paddingVertical: 4, paddingHorizontal: 2 }}
      className="active:opacity-80"
    >
      <View style={{ flex: 1, flexDirection: 'row-reverse', justifyContent: 'space-evenly' }}>
        {colunas.map((col, i) => (
          <View key={i} style={{ alignItems: 'center' }}>
            {col.map((k, j) => (
              <Text key={j} style={{ fontSize: fonte, lineHeight: fonte * 1.15, color: '#1F2937', fontWeight: '600' }}>
                {k}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </Pressable>
  );
}

/**
 * A karuta do Hyakunin Isshu, você contra o Linu. O leitor lê a primeira metade de um poema, sílaba
 * por sílaba; quem reconhecer primeiro toca na carta com a segunda metade. Fica com mais cartas quem
 * ganha.
 */
export default function KarutaJogo() {
  const { width } = useWindowDimensions();
  const largura = Math.min(width - 56, 560);
  // 4 por fileira: a largura menos a margem da mesa (8 de cada lado) e os 3 vãos de 8
  const W = Math.floor((largura - 16 - 3 * 8) / 4);
  const [prefs] = useJogosPrefs();
  const [s, setS] = useState<EstadoKaruta>(() => novoJogo(rng));
  const [tocouErrada, setTocouErrada] = useState<number | null>(null);
  const xp = useXpDeVitoria('karuta');
  const total = leituraDeCima(s.atual).length;

  const atualizar = (f: (x: EstadoKaruta) => EstadoKaruta) =>
    setS((x) => {
      const novo = f(x);
      if (novo.fase === 'fim' && x.fase !== 'fim' && novo.pontos[VOCE] > novo.pontos[LINU]) xp.dar();
      return novo;
    });

  // o leitor: uma sílaba de cada vez
  useEffect(() => {
    if (s.fase !== 'lendo' || s.lidas >= total) return;
    const t = setTimeout(() => setS(lerMais), s.lidas === 0 ? 900 : MS_POR_SILABA);
    return () => clearTimeout(t);
  }, [s.fase, s.lidas, s.atual, total]);

  // o Linu: toca na carta um tempo depois de ouvir as sílabas que decidem o poema (o kimariji)
  useEffect(() => {
    if (s.fase !== 'lendo' || s.lidas < KIMARIJI[s.atual]!) return;
    const [base, variacao] = REACAO_DO_LINU[prefs.nivel];
    const t = setTimeout(() => atualizar((x) => tocar(x, LINU, x.atual)), base + Math.random() * variacao);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s.fase, s.atual, s.lidas >= KIMARIJI[s.atual]!, prefs.nivel]);

  // depois de pegar, o poema inteiro fica à mostra um pouco, e vem o próximo
  useLinuJoga(s.fase === 'pegou', () => {
    setTocouErrada(null);
    atualizar(proximo);
  }, 3600);

  const tocarCarta = (n: number) => {
    if (s.fase !== 'lendo' || s.errou) return;
    haptics.tapLight();
    if (n !== s.atual) setTocouErrada(n);
    atualizar((x) => tocar(x, VOCE, n));
  };
  const novaPartida = () => {
    haptics.tapLight();
    setTocouErrada(null);
    xp.zerar();
    setS(novoJogo(rng));
  };

  const p = poema(s.atual);
  const lido = leituraDeCima(s.atual).slice(0, s.lidas);
  const instrucao =
    s.fase === 'pegou'
      ? s.pegou === VOCE
        ? 'Você pegou a carta!'
        : 'O Linu pegou a carta.'
      : s.errou
        ? 'Carta errada! Neste poema você não pode tocar de novo.'
        : 'Ouça o começo do poema e toque na carta com o fim dele.';
  const resultadoFinal =
    s.fase === 'fim'
      ? s.pontos[VOCE] > s.pontos[LINU]
        ? `Você ganhou, ${s.pontos[VOCE]} cartas a ${s.pontos[LINU]}!`
        : s.pontos[VOCE] < s.pontos[LINU]
          ? `O Linu ganhou, ${s.pontos[LINU]} cartas a ${s.pontos[VOCE]}.`
          : `Empate, ${s.pontos[VOCE]} a ${s.pontos[LINU]}.`
      : null;

  return (
    <View className="w-full items-center gap-3">
      <PlacarJogo
        jogadores={[
          { id: VOCE, nome: 'Você', amostra: <View />, extra: `${s.pontos[VOCE]} ${s.pontos[VOCE] === 1 ? 'carta' : 'cartas'}` },
          { id: LINU, nome: 'Linu', amostra: <Linu mood="feliz" size={18} animate={false} />, extra: `${s.pontos[LINU]} ${s.pontos[LINU] === 1 ? 'carta' : 'cartas'}` },
        ]}
        vez={s.pegou ?? -1}
        terminou={s.fase === 'fim'}
      />
      {resultadoFinal ? <FaixaResultado texto={resultadoFinal} tom={s.pontos[VOCE] > s.pontos[LINU] ? 'vitoria' : s.pontos[VOCE] < s.pontos[LINU] ? 'derrota' : 'empate'} /> : <Instrucao>{instrucao}</Instrucao>}

      {/* o leitor */}
      {s.fase !== 'fim' && (
        <View className="w-full items-center gap-1 rounded-2xl bg-amber-50 px-3 py-2 dark:bg-amber-950/40" style={{ maxWidth: largura }}>
          <Text className="text-[11px] font-bold text-amber-800 dark:text-amber-300">
            Poema {p.n} · {s.fase === 'pegou' ? `${p.autor} (${p.autorLeitura})` : `${s.mesa.length} cartas na mesa`}
          </Text>
          {s.fase === 'pegou' ? (
            <Surge key={`p${p.n}`}>
              <Text className="text-center text-base font-semibold text-slate-900 dark:text-slate-100">{p.texto.slice(0, 3).join(' ')}</Text>
              <Text className="text-center text-base font-semibold text-emerald-700 dark:text-emerald-300">{p.texto.slice(3).join(' ')}</Text>
            </Surge>
          ) : (
            <Text className="min-h-[28px] text-center text-xl font-bold tracking-widest text-slate-900 dark:text-slate-100">{lido || '…'}</Text>
          )}
        </View>
      )}

      <View className="flex-row flex-wrap justify-center gap-2 rounded-2xl p-2" style={{ width: largura, backgroundColor: '#C9A86A' }}>
        {s.mesa.map((n) => (
          <CartaDePegar key={n} n={n} largura={W} estado={tocouErrada === n && s.fase === 'lendo' ? 'errada' : undefined} onPress={s.fase === 'lendo' && !s.errou ? () => tocarCarta(n) : undefined} />
        ))}
        {s.fase === 'pegou' && <CartaDePegar n={s.atual} largura={W} estado="certa" />}
      </View>

      <Pressable accessibilityRole="button" onPress={novaPartida} className="rounded-full bg-slate-200 px-5 py-2.5 active:opacity-80 dark:bg-slate-700">
        <Text className="font-extrabold text-slate-800 dark:text-slate-100">{s.fase === 'fim' ? 'Nova partida' : 'Recomeçar'}</Text>
      </Pressable>
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        A carta traz a segunda metade do poema em kana, em colunas, da direita para a esquerda. A dificuldade do Linu (no Personalizar) muda a rapidez dele.
      </Text>
    </View>
  );
}
