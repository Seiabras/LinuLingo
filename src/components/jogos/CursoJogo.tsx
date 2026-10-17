import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { CheckCircle2, Circle } from 'lucide-react-native';
import { CURSOS_JOGOS, type DesafioVelha, type LicaoJogo } from '@/data/cursos-jogos';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { MarcaVelha } from '@/components/VelhaBoard';
import { Surge } from './anim';
import { useTemaJogo } from './tema';

/** O desafio de uma lição da velha: a posição montada, e o aluno toca na casa certa. */
function DesafioDaVelha({ d, onAcerto }: { d: DesafioVelha; onAcerto: () => void }) {
  const tema = useTemaJogo();
  const [tocou, setTocou] = useState<number | null>(null);
  const certo = tocou !== null && d.respostas.includes(tocou);
  const casa = 64;
  return (
    <View className="items-center gap-2">
      <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">Desafio: é a vez do {d.vez.toUpperCase()}. Onde ele deve jogar?</Text>
      <View style={{ width: casa * 3 + 8, padding: 4, borderRadius: 12, backgroundColor: tema.moldura, flexDirection: 'row', flexWrap: 'wrap' }}>
        {Array.from({ length: 9 }, (_, i) => {
          const m = d.x.includes(i) ? 'x' : d.o.includes(i) ? 'o' : null;
          const errou = tocou === i && !certo;
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Casa ${i + 1}${m ? `, ${m.toUpperCase()}` : ''}`}
              disabled={m !== null || certo}
              onPress={() => {
                setTocou(i);
                if (d.respostas.includes(i)) {
                  haptics.acertou();
                  onAcerto();
                } else haptics.tapLight();
              }}
              style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: errou ? 'rgba(225,29,72,0.25)' : (i + Math.floor(i / 3)) % 2 ? tema.escuro : tema.claro, borderWidth: 1, borderColor: tema.moldura }}
            >
              {m && <MarcaVelha m={m} tamanho={casa * 0.75} />}
              {!m && tocou === i && (
                <Surge>
                  <MarcaVelha m={d.vez} tamanho={casa * 0.75} />
                </Surge>
              )}
            </Pressable>
          );
        })}
      </View>
      {tocou !== null && (
        <Text className={`text-center text-sm font-bold ${certo ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>{certo ? d.acerto : `Ainda não. ${d.dica}`}</Text>
      )}
    </View>
  );
}

/**
 * O curso “Aprenda a jogar” de um jogo: as lições em ordem, cada uma com o texto e, quando tem, o
 * desafio no tabuleiro. A lição sem desafio conta como feita ao abrir; com desafio, ao acertar
 * (5 XP por lição). O progresso fica em Meta (`curso_jogo_<id>`).
 */
export function CursoJogo({ jogo }: { jogo: string }) {
  const { db, refresh } = useApp();
  const curso = CURSOS_JOGOS[jogo];
  const [feitas, setFeitas] = useState<string[]>([]);
  const [aberta, setAberta] = useState<string | null>(null);
  const chave = `curso_jogo_${jogo}`;

  useEffect(() => {
    if (!db) return;
    getMeta(db, chave).then((v) => setFeitas((v ?? '').split(',').filter(Boolean)));
  }, [db, chave]);

  if (!curso) return null;

  const concluir = (l: LicaoJogo) => {
    if (feitas.includes(l.id) || !db) return;
    const novas = [...feitas, l.id];
    setFeitas(novas);
    void setMeta(db, chave, novas.join(','));
    awardXp(db, 5, `curso-jogo:${jogo}`).then(() => refresh());
  };

  return (
    <View className="gap-2">
      <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400">
        {feitas.length} de {curso.licoes.length} lições · fonte: {curso.fonte}
      </Text>
      {curso.licoes.map((l) => {
        const feita = feitas.includes(l.id);
        const open = aberta === l.id;
        return (
          <View key={l.id} className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60">
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ expanded: open }}
              onPress={() => {
                setAberta(open ? null : l.id);
                if (!open && !l.desafio) concluir(l);
              }}
              className="flex-row items-center gap-2"
            >
              {feita ? <CheckCircle2 size={20} color="#059669" /> : <Circle size={20} color="#94A3B8" />}
              <Text className="flex-1 text-base font-extrabold text-slate-900 dark:text-white">{l.titulo}</Text>
            </Pressable>
            {open && (
              <View className="mt-2 gap-3">
                <Text className="text-sm leading-6 text-slate-700 dark:text-slate-300">{l.texto}</Text>
                {l.desafio && <DesafioDaVelha d={l.desafio} onAcerto={() => concluir(l)} />}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
