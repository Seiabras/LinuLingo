import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AvisoMicrofone } from '@/components/musica/AvisoMicrofone';
import { Pauta } from '@/components/musica/Pauta';
import { Teclado } from '@/components/musica/Teclado';
import { MELODIAS, type Melodia } from '@/data/musica/melodias';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { tocarNota } from '@/services/musica/motor';
import { letraNota, nomeNota } from '@/services/musica/notas';
import { useMicrofone } from '@/services/musica/useMicrofone';

type Modo = 'livre' | 'musica';

/**
 * Tocar: o teclado na tela com a pauta em cima (cada nota tocada aparece na partitura). No modo
 * “Siga a música”, a próxima nota da melodia brilha na pauta e no teclado; dá para tocar na tela ou no
 * seu instrumento de verdade, com o microfone ouvindo (decisão do dono, 17/10/2026).
 */
export default function TocarScreen() {
  const { db, refresh } = useApp();
  const [modo, setModo] = useState<Modo>('livre');
  const [letras, setLetras] = useState(false);
  const [tocadas, setTocadas] = useState<number[]>([]);
  const [melodia, setMelodia] = useState<Melodia>(MELODIAS[0]!);
  const [pos, setPos] = useState(0);
  const [errou, setErrou] = useState<number | null>(null);
  const [comMicrofone, setComMicrofone] = useState(false);
  // com o microfone, a nota ouvida conta como tocada (o `acertar` mais novo fica no ref)
  const acertarRef = useRef<(midi: number, soar: boolean) => void>(() => {});
  const { nota: ouvida, erro } = useMicrofone(modo === 'musica' && comMicrofone, (n) => acertarRef.current(n.midi, false));
  const nome = letras ? letraNota : nomeNota;
  const fim = pos >= melodia.notas.length;

  const acertar = (midi: number, soar: boolean) => {
    if (fim) return;
    if (midi === melodia.notas[pos]) {
      if (soar) tocarNota(midi);
      setErrou(null);
      const p = pos + 1;
      setPos(p);
      if (p >= melodia.notas.length) {
        haptics.success();
        if (db) void awardXp(db, 5, `musica-tocar:${melodia.id}`).then(() => refresh());
      }
    } else {
      if (soar) tocarNota(midi);
      setErrou(midi);
    }
  };

  useEffect(() => {
    acertarRef.current = (midi, soar) => {
      if (midi === melodia.notas[pos]) acertar(midi, soar);
    };
  });

  const tocarLivre = (midi: number) => {
    tocarNota(midi);
    setTocadas((t) => [...t, midi].slice(-8));
  };

  const recomecar = (m: Melodia = melodia) => {
    setMelodia(m);
    setPos(0);
    setErrou(null);
  };

  const proxima = melodia.notas[pos];
  const destaque: Record<number, string> = {};
  if (modo === 'musica' && proxima != null) destaque[proxima] = '#fde68a';
  if (errou != null) destaque[errou] = '#fecaca';
  // na pauta, as próximas notas da melodia: a atual em destaque
  const janela = melodia.notas.slice(pos, pos + 6).map((m, i) => ({ midi: m, cor: i === 0 ? '#d97706' : undefined }));

  return (
    <Screen>
      <AreaCabecalho area="musica" titulo="Tocar" subtitulo="O teclado na tela e a partitura em cima. Toque livre ou siga uma música, na tela ou no seu instrumento." />

      <View className="mt-3 flex-row gap-2">
        {(
          [
            ['livre', 'Livre'],
            ['musica', 'Siga a música'],
          ] as const
        ).map(([k, n]) => (
          <Pressable
            key={k}
            accessibilityRole="tab"
            accessibilityState={{ selected: modo === k }}
            onPress={() => setModo(k)}
            className={`flex-1 rounded-xl border-2 p-2 ${modo === k ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-center text-sm font-bold text-slate-700 dark:text-slate-200">{n}</Text>
          </Pressable>
        ))}
      </View>

      {modo === 'musica' && (
        <View className="mt-2 flex-row flex-wrap gap-1.5">
          {MELODIAS.map((m) => (
            <Pressable
              key={m.id}
              accessibilityRole="radio"
              accessibilityState={{ selected: melodia.id === m.id }}
              onPress={() => recomecar(m)}
              className={`rounded-full border-2 px-3 py-1 ${melodia.id === m.id ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{m.nome}</Text>
            </Pressable>
          ))}
        </View>
      )}

      <Card className="mt-3 gap-2">
        {modo === 'livre' ? (
          <>
            <Pauta notas={tocadas.map((m) => ({ midi: m }))} rotulos nomes={nome} />
            <Text className="text-center text-sm text-slate-600 dark:text-slate-400">
              {tocadas.length ? `Última nota: ${nome(tocadas[tocadas.length - 1]!)}` : 'Toque uma tecla e veja a nota aparecer na pauta.'}
            </Text>
          </>
        ) : fim ? (
          <View className="items-center gap-2 py-4">
            <Text className="text-3xl">🎉</Text>
            <Text className="text-lg font-extrabold text-slate-900 dark:text-white">Você tocou “{melodia.nome}”!</Text>
            <Button title="Tocar de novo" onPress={() => recomecar()} />
          </View>
        ) : (
          <>
            <Pauta notas={janela} rotulos nomes={nome} />
            <Text className="text-center text-sm text-slate-700 dark:text-slate-300">
              Nota {pos + 1} de {melodia.notas.length}: toque <Text className="font-extrabold">{nome(proxima!)}</Text>
              {errou != null ? ` (você tocou ${nome(errou)})` : ''}
            </Text>
            <Text className="text-center text-xs text-slate-500">{melodia.sobre}</Text>
          </>
        )}
      </Card>

      <View className="mt-3">
        <Teclado de={60} ate={79} aoTocar={(m) => (modo === 'livre' ? tocarLivre(m) : acertar(m, true))} destaque={destaque} />
      </View>

      <View className="mt-2 flex-row flex-wrap items-center gap-2">
        <Pressable accessibilityRole="switch" accessibilityState={{ checked: letras }} onPress={() => setLetras((l) => !l)} className="rounded-full border border-slate-300 px-3 py-1 dark:border-slate-600">
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{letras ? 'Nomes: C D E' : 'Nomes: dó ré mi'}</Text>
        </Pressable>
        {modo === 'musica' && (
          <Pressable
            accessibilityRole="switch"
            accessibilityState={{ checked: comMicrofone }}
            onPress={() => setComMicrofone((c) => !c)}
            className={`rounded-full border px-3 py-1 ${comMicrofone ? 'border-orange-500 bg-orange-500' : 'border-slate-300 dark:border-slate-600'}`}
          >
            <Text className={`text-xs font-bold ${comMicrofone ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>🎤 {comMicrofone ? 'Ouvindo o seu instrumento' : 'Tocar no meu instrumento'}</Text>
          </Pressable>
        )}
      </View>
      {modo === 'musica' && comMicrofone && (
        <View className="mt-2 gap-1">
          <AvisoMicrofone erro={erro} />
          {!erro && <Text className="text-xs text-slate-600 dark:text-slate-400">{ouvida ? `Ouvindo: ${nome(ouvida.midi)}` : 'Toque ou cante a nota: o app está ouvindo.'}</Text>}
        </View>
      )}

      <SectionTitle>Dica</SectionTitle>
      <Text className="text-sm text-slate-600 dark:text-slate-400">
        Na pauta da clave de sol, o dó central fica numa linha pequena embaixo das cinco linhas. Cada passo de uma linha para o espaço de cima é uma nota a mais: dó, ré, mi, fá, sol, lá, si.
      </Text>
    </Screen>
  );
}
