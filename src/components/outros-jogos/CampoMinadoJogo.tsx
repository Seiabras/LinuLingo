import { useEffect, useState } from 'react';
import { Platform, Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { FaixaResultado, Instrucao, useXpDeVitoria } from '@/components/jogos/ui';
import { abrir, abrirVolta, marcar, minasRestantes, NIVEIS_CAMPO, novoCampo, type EstadoCampo, type NivelCampo } from '@/services/campo-minado-engine';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { useIsDark } from '@/services/theme';
import { Grupo, Opcao } from './arcade';

const rng = () => Math.random();
/** as cores clássicas dos números: 1 azul, 2 verde, 3 vermelho… */
const COR_NUMERO = ['', '#1D4ED8', '#15803D', '#DC2626', '#1E3A8A', '#7F1D1D', '#0F766E', '#111827', '#6B7280'];
const chaveRecorde = (n: NivelCampo) => `campo-minado:${n}`;

/** A mina, desenhada pelo app: uma bola com pontas. */
function Mina({ t, explodiu }: { t: number; explodiu?: boolean }) {
  return (
    <Svg width={t} height={t} viewBox="0 0 20 20">
      {explodiu && <Rect x={0} y={0} width={20} height={20} fill="#EF4444" />}
      {[0, 45, 90, 135].map((a) => (
        <Line key={a} x1={10} y1={2} x2={10} y2={18} stroke="#111827" strokeWidth={1.8} transform={`rotate(${a} 10 10)`} />
      ))}
      <Circle cx={10} cy={10} r={5.6} fill="#111827" />
      <Circle cx={8} cy={8} r={1.5} fill="#FFFFFF" />
    </Svg>
  );
}

/** A bandeira, desenhada pelo app. */
function Bandeira({ t }: { t: number }) {
  return (
    <Svg width={t} height={t} viewBox="0 0 20 20">
      <Path d="M7 3 L15 6.5 L7 10 Z" fill="#DC2626" />
      <Line x1={7} y1={3} x2={7} y2={16} stroke="#111827" strokeWidth={1.6} />
      <Rect x={4} y={15} width={9} height={2.4} fill="#111827" />
    </Svg>
  );
}

/**
 * O Campo Minado (ver `services/campo-minado-engine.ts` e a história em `data/outros-jogos/videogames.ts`):
 * abra todas as casas sem mina. Os números dizem quantas minas há em volta. No celular, troque entre
 * “Abrir” e “Bandeira” ou segure a casa para pôr bandeira; no computador, o botão direito põe a
 * bandeira. Tocar num número com as bandeiras certas em volta abre as outras vizinhas.
 */
export default function CampoMinadoJogo() {
  const dark = useIsDark();
  const { width } = useWindowDimensions();
  const [prefs, mudarPrefs] = useJogosPrefs();
  const [nivel, setNivel] = useState<NivelCampo>('iniciante');
  const [s, setS] = useState<EstadoCampo>(() => novoCampo('iniciante'));
  const [modoBandeira, setModoBandeira] = useState(false);
  const [inicio, setInicio] = useState<number | null>(null);
  const [agora, setAgora] = useState(0);
  const xp = useXpDeVitoria('campo-minado');
  // a hora em que a partida acabou, para o relógio parar
  const [fim, setFim] = useState<number | null>(null);

  // o relógio: conta do primeiro toque até o fim
  useEffect(() => {
    if (s.fase !== 'jogando' || inicio === null) return;
    const t = setInterval(() => setAgora(Date.now()), 250);
    return () => clearInterval(t);
  }, [s.fase, inicio]);
  const segundos = inicio === null ? 0 : Math.floor(((s.fase === 'jogando' ? agora : (fim ?? agora)) - inicio) / 1000);

  const recorde = prefs.recordes[chaveRecorde(nivel)];

  const atualizar = (novo: EstadoCampo) => {
    if (novo === s) return;
    if (s.fase === 'novo' && novo.fase !== 'novo') {
      const t = Date.now();
      setInicio(t);
      setAgora(t);
    }
    if (novo.fase === 'ganhou' && s.fase !== 'ganhou') {
      const agoraFim = Date.now();
      setFim(agoraFim);
      const tempo = Math.max(1, Math.floor((agoraFim - (inicio ?? agoraFim)) / 1000));
      haptics.success();
      xp.dar();
      if (recorde === undefined || tempo < recorde) mudarPrefs({ recordes: { ...prefs.recordes, [chaveRecorde(nivel)]: tempo } });
    }
    if (novo.fase === 'perdeu' && s.fase !== 'perdeu') {
      setFim(Date.now());
      haptics.tapLight();
    }
    setS(novo);
  };

  const tocar = (i: number) => {
    if (s.aberta[i]) return atualizar(abrirVolta(s, i));
    if (modoBandeira) {
      haptics.tapLight();
      return atualizar(marcar(s, i));
    }
    haptics.tapLight();
    atualizar(abrir(s, i, rng));
  };
  const segurar = (i: number) => {
    if (s.aberta[i]) return;
    haptics.tapLight();
    atualizar(marcar(s, i));
  };
  const recomecar = (n: NivelCampo = nivel) => {
    setNivel(n);
    setS(novoCampo(n));
    setInicio(null);
    setFim(null);
    xp.zerar();
  };

  // o tamanho da casa: cabe na tela até o intermediário; o especialista rola de lado no celular
  const util = Math.min(width - 40, 720);
  const casa = Math.max(24, Math.min(36, Math.floor(util / s.colunas)));
  const fundoFechada = dark ? '#475569' : '#CBD5E1';
  const fundoAberta = dark ? '#1E293B' : '#F1F5F9';

  const grade = (
    <View style={{ width: casa * s.colunas + 6, borderWidth: 3, borderColor: dark ? '#334155' : '#94A3B8', borderRadius: 6 }}>
      {Array.from({ length: s.linhas }, (_, r) => (
        <View key={r} style={{ flexDirection: 'row' }}>
          {Array.from({ length: s.colunas }, (_, c) => {
            const i = r * s.colunas + c;
            const aberta = s.aberta[i];
            const n = s.vizinhas[i]!;
            const conteudo = aberta ? (
              s.mina[i] ? (
                <Mina t={casa - 6} explodiu={s.explodiu === i} />
              ) : n > 0 ? (
                <Text style={{ color: COR_NUMERO[n], fontWeight: '900', fontSize: casa * 0.55 }}>{n}</Text>
              ) : null
            ) : s.bandeira[i] ? (
              <Bandeira t={casa - 8} />
            ) : null;
            const errada = s.fase === 'perdeu' && s.bandeira[i] && !s.mina[i];
            return (
              <Pressable
                key={c}
                accessibilityRole="button"
                accessibilityLabel={aberta ? (s.mina[i] ? 'Mina' : n > 0 ? `${n} minas em volta` : 'Vazia') : s.bandeira[i] ? 'Bandeira' : 'Casa fechada'}
                onPress={() => tocar(i)}
                onLongPress={() => segurar(i)}
                delayLongPress={350}
                {...(Platform.OS === 'web'
                  ? {
                      onContextMenu: (e: { preventDefault: () => void }) => {
                        e.preventDefault();
                        segurar(i);
                      },
                    }
                  : {})}
                style={{
                  width: casa,
                  height: casa,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: aberta ? fundoAberta : fundoFechada,
                  borderWidth: aberta ? 0.5 : 2,
                  borderColor: aberta ? (dark ? '#334155' : '#CBD5E1') : dark ? '#64748B' : '#E2E8F0',
                  borderBottomColor: aberta ? undefined : dark ? '#1E293B' : '#94A3B8',
                  borderRightColor: aberta ? undefined : dark ? '#1E293B' : '#94A3B8',
                }}
              >
                {conteudo}
                {errada && <Text style={{ position: 'absolute', color: '#DC2626', fontWeight: '900', fontSize: casa * 0.7 }}>×</Text>}
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );

  return (
    <View className="w-full items-center gap-3">
      <Grupo titulo="Nível">
        {(Object.keys(NIVEIS_CAMPO) as NivelCampo[]).map((k) => (
          <Opcao key={k} ativo={nivel === k} onPress={() => recomecar(k)}>
            {`${NIVEIS_CAMPO[k].nome} · ${NIVEIS_CAMPO[k].colunas}×${NIVEIS_CAMPO[k].linhas}, ${NIVEIS_CAMPO[k].minas} minas`}
          </Opcao>
        ))}
      </Grupo>

      <View className="flex-row items-center gap-4">
        <Text className="text-base font-extrabold text-slate-800 dark:text-slate-100">Minas: {minasRestantes(s)}</Text>
        <Text className="text-base font-extrabold text-slate-800 dark:text-slate-100">Tempo: {segundos}s</Text>
        <Text className="text-xs text-slate-500 dark:text-slate-400">recorde: {recorde !== undefined ? `${recorde}s` : '—'}</Text>
      </View>

      {s.fase === 'ganhou' ? (
        <FaixaResultado texto={`Campo limpo em ${segundos} segundos!${recorde === undefined || segundos <= recorde ? ' Recorde!' : ''}`} tom="vitoria" />
      ) : s.fase === 'perdeu' ? (
        <FaixaResultado texto="Bum! Você abriu uma mina." tom="derrota" />
      ) : (
        <Instrucao>{s.fase === 'novo' ? 'Toque em qualquer casa para começar: a primeira nunca tem mina.' : 'Os números dizem quantas minas há nas 8 casas em volta.'}</Instrucao>
      )}

      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={{ maxWidth: '100%' }}>
        {grade}
      </ScrollView>

      <View className="flex-row flex-wrap justify-center gap-2">
        <Pressable
          accessibilityRole="switch"
          accessibilityState={{ checked: modoBandeira }}
          onPress={() => setModoBandeira((x) => !x)}
          className={`flex-row items-center gap-2 rounded-full px-4 py-2 ${modoBandeira ? 'bg-rose-600' : 'bg-slate-200 dark:bg-slate-700'}`}
        >
          <Bandeira t={18} />
          <Text className={`font-extrabold ${modoBandeira ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>{modoBandeira ? 'Pondo bandeiras' : 'Abrindo casas'}</Text>
        </Pressable>
        <Pressable accessibilityRole="button" onPress={() => recomecar()} className="rounded-full bg-emerald-600 px-4 py-2 active:opacity-80">
          <Text className="font-extrabold text-white">Novo campo</Text>
        </Pressable>
      </View>
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        Segure uma casa (ou clique com o botão direito) para pôr ou tirar a bandeira. Tocar num número com as bandeiras certas em volta abre as outras vizinhas.
      </Text>
    </View>
  );
}
