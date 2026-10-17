import { useEffect, useRef, useState, type ComponentType } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AmigoEscondido } from '@/components/AmigoEscondido';
import { Button, Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AvisoMicrofone } from '@/components/musica/AvisoMicrofone';
import { Pauta } from '@/components/musica/Pauta';
import { Teclado } from '@/components/musica/Teclado';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { tocarNota } from '@/services/musica/motor';
import { nomeNota } from '@/services/musica/notas';
import { useMicrofone } from '@/services/musica/useMicrofone';

const ESCALA_DO = [60, 62, 64, 65, 67, 69, 71, 72];
const sorteia = <T,>(xs: T[]) => xs[Math.floor(Math.random() * xs.length)]!;

/** O placar de uma rodada de 10 perguntas, com XP no fim. */
function usePlacar(fonte: string) {
  const { db, refresh } = useApp();
  const [n, setN] = useState(0);
  const [certos, setCertos] = useState(0);
  const marcar = (ok: boolean) => {
    if (ok) haptics.success();
    else haptics.error();
    setCertos((c) => c + (ok ? 1 : 0));
    const novo = n + 1;
    setN(novo);
    if (novo === 10 && db) void awardXp(db, 5, `musica-ouvido:${fonte}`).then(() => refresh());
  };
  return { n, certos, marcar, zerar: () => (setN(0), setCertos(0)) };
}

function Placar({ n, certos }: { n: number; certos: number }) {
  return (
    <Text className="text-xs font-bold text-slate-500">
      {Math.min(n, 10)}/10 · {certos} certas{n >= 10 ? ' · +5 XP' : ''}
    </Text>
  );
}

function Opcoes<T extends string>({ opcoes, resposta, escolha, aoEscolher }: { opcoes: [T, string][]; resposta: T; escolha: T | null; aoEscolher: (t: T) => void }) {
  return (
    <View className="flex-row gap-2">
      {opcoes.map(([k, n]) => {
        const cor = escolha == null ? 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900' : k === resposta ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : escolha === k ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 opacity-50 dark:border-slate-700';
        return (
          <Pressable key={k} accessibilityRole="button" disabled={escolha != null} onPress={() => aoEscolher(k)} className={`flex-1 items-center rounded-xl border-2 py-3 ${cor}`}>
            <Text className="font-bold text-slate-800 dark:text-slate-100">{n}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

/** Qual das duas notas é mais aguda? */
function MaisAguda() {
  const placar = usePlacar('aguda');
  const nova = () => {
    const a = 55 + Math.floor(Math.random() * 25);
    let b = a;
    while (b === a) b = a + (Math.floor(Math.random() * 9) - 4);
    return [a, b] as const;
  };
  const [par, setPar] = useState(nova);
  const [escolha, setEscolha] = useState<'1' | '2' | null>(null);
  const ouvir = () => {
    tocarNota(par[0], { duracao: 0.8 });
    tocarNota(par[1], { duracao: 0.8, atraso: 0.9 });
  };
  const resposta = par[1] > par[0] ? '2' : '1';
  return (
    <Card className="gap-3">
      <Placar n={placar.n} certos={placar.certos} />
      <Button title="▶ Ouvir as duas notas" variant="ghost" onPress={ouvir} />
      <Opcoes
        opcoes={[
          ['1', 'A 1ª'],
          ['2', 'A 2ª'],
        ]}
        resposta={resposta}
        escolha={escolha}
        aoEscolher={(k) => {
          setEscolha(k);
          placar.marcar(k === resposta);
        }}
      />
      {escolha && (
        <>
          <Pauta notas={[{ midi: par[0] }, { midi: par[1] }]} rotulos nomes={nomeNota} />
          <Button
            title="Próxima"
            onPress={() => {
              setPar(nova());
              setEscolha(null);
            }}
          />
        </>
      )}
    </Card>
  );
}

/** O acorde é maior (alegre) ou menor (triste)? Fundamental, terça (4 ou 3 semitons) e quinta. */
function MaiorMenor() {
  const placar = usePlacar('maior-menor');
  const novo = () => ({ raiz: 55 + Math.floor(Math.random() * 12), maior: Math.random() < 0.5 });
  const [ac, setAc] = useState(novo);
  const [escolha, setEscolha] = useState<'maior' | 'menor' | null>(null);
  const notas = [ac.raiz, ac.raiz + (ac.maior ? 4 : 3), ac.raiz + 7];
  const ouvir = () => notas.forEach((m) => tocarNota(m, { duracao: 1.5, volume: 0.3 }));
  const resposta = ac.maior ? 'maior' : 'menor';
  return (
    <Card className="gap-3">
      <Placar n={placar.n} certos={placar.certos} />
      <Button title="▶ Ouvir o acorde" variant="ghost" onPress={ouvir} />
      <Opcoes
        opcoes={[
          ['maior', 'Maior'],
          ['menor', 'Menor'],
        ]}
        resposta={resposta}
        escolha={escolha}
        aoEscolher={(k) => {
          setEscolha(k);
          placar.marcar(k === resposta);
        }}
      />
      {escolha && (
        <>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            {nomeNota(ac.raiz)} {resposta}: a nota do meio fica {ac.maior ? '4' : '3'} semitons acima da primeira. A diferença de um semitom muda o caráter do acorde.
          </Text>
          <Button
            title="Próximo"
            onPress={() => {
              setAc(novo());
              setEscolha(null);
            }}
          />
        </>
      )}
    </Card>
  );
}

/** O app toca o dó e depois uma nota da escala de dó: qual é? Responda no teclado. */
function QueNota() {
  const placar = usePlacar('que-nota');
  const [alvo, setAlvo] = useState(() => sorteia(ESCALA_DO.slice(1)));
  const [escolha, setEscolha] = useState<number | null>(null);
  const ouvir = () => {
    tocarNota(60, { duracao: 0.8 });
    tocarNota(alvo, { duracao: 1, atraso: 1 });
  };
  const destaque: Record<number, string> = {};
  if (escolha != null) {
    destaque[alvo] = '#bbf7d0';
    if (escolha !== alvo) destaque[escolha] = '#fecaca';
  }
  return (
    <Card className="gap-3">
      <Placar n={placar.n} certos={placar.certos} />
      <Text className="text-sm text-slate-700 dark:text-slate-300">Primeiro toca o dó (a referência), depois a nota misteriosa. Ache-a no teclado.</Text>
      <Button title="▶ Ouvir" variant="ghost" onPress={ouvir} />
      <Teclado
        de={60}
        ate={72}
        destaque={destaque}
        aoTocar={(m) => {
          tocarNota(m);
          if (escolha != null) return;
          setEscolha(m);
          placar.marcar(m === alvo);
        }}
      />
      {escolha != null && (
        <>
          <Pauta notas={[{ midi: 60 }, { midi: alvo, cor: '#16a34a' }]} rotulos nomes={nomeNota} />
          <Button
            title="Próxima"
            onPress={() => {
              setAlvo(sorteia(ESCALA_DO.slice(1)));
              setEscolha(null);
            }}
          />
        </>
      )}
    </Card>
  );
}

/** O app toca uma nota e você canta (ou toca) a mesma: o microfone confere, em qualquer oitava. */
function CanteANota() {
  const placar = usePlacar('cante');
  const [alvo, setAlvo] = useState(() => sorteia(ESCALA_DO));
  const [ouvindo, setOuvindo] = useState(false);
  const [acertou, setAcertou] = useState(false);
  // o microfone avisa a cada nota nova; o alvo mais novo fica no ref
  const conferir = useRef<(midi: number) => void>(() => {});
  useEffect(() => {
    conferir.current = (midi) => {
      if (acertou || (((midi - alvo) % 12) + 12) % 12 !== 0) return;
      setAcertou(true);
      setOuvindo(false);
      placar.marcar(true);
    };
  });
  const { nota, erro } = useMicrofone(ouvindo, (n) => conferir.current(n.midi));
  return (
    <Card className="gap-3">
      <Placar n={placar.n} certos={placar.certos} />
      <Pauta notas={[{ midi: alvo, cor: acertou ? '#16a34a' : undefined }]} rotulos nomes={nomeNota} />
      <Button title={`▶ Ouvir o ${nomeNota(alvo)}`} variant="ghost" onPress={() => tocarNota(alvo, { duracao: 1.5 })} />
      {acertou ? (
        <>
          <Text className="text-center font-bold text-emerald-700 dark:text-emerald-400">Isso! Você cantou o {nomeNota(alvo)}.</Text>
          <Button
            title="Próxima"
            onPress={() => {
              setAlvo(sorteia(ESCALA_DO));
              setAcertou(false);
            }}
          />
        </>
      ) : (
        <>
          <Button title={ouvindo ? 'Parar de ouvir' : '🎤 Cantar a nota'} onPress={() => setOuvindo((o) => !o)} />
          {ouvindo && !erro && <Text className="text-center text-sm text-slate-600 dark:text-slate-400">{nota ? `Ouvindo: ${nomeNota(nota.midi)}` : 'Cante a nota…'}</Text>}
          <AvisoMicrofone erro={erro} />
          <Text className="text-[11px] text-slate-500">Vale em qualquer oitava: vozes graves e agudas cantam o mesmo dó em alturas diferentes.</Text>
        </>
      )}
    </Card>
  );
}

const EXERCICIOS: { id: string; nome: string; sobre: string; Componente: ComponentType }[] = [
  { id: 'aguda', nome: 'Qual é mais aguda?', sobre: 'Duas notas: diga qual é a mais aguda (mais fina).', Componente: MaisAguda },
  { id: 'maior-menor', nome: 'Maior ou menor?', sobre: 'O acorde soa alegre (maior) ou triste (menor)?', Componente: MaiorMenor },
  { id: 'que-nota', nome: 'Que nota é?', sobre: 'Ouça o dó e depois uma nota da escala: ache-a no teclado.', Componente: QueNota },
  { id: 'cante', nome: 'Cante a nota', sobre: 'O app toca, você canta, o microfone confere.', Componente: CanteANota },
];

/** Ouvido: treino de ouvido em rodadas de 10, como os apps de ear training. */
export default function OuvidoScreen() {
  const [aberto, setAberto] = useState<string | null>(null);
  const ex = EXERCICIOS.find((e) => e.id === aberto);
  return (
    <Screen>
      <AreaCabecalho area="musica" titulo={ex ? ex.nome : 'Ouvido'} subtitulo={ex ? ex.sobre : 'Treinos curtos para reconhecer notas e acordes só de ouvir. Use fone, se puder.'} />
      {/* um amigo do Linu escondido aqui (ver amigos-linu.ts) */}
      <AmigoEscondido id="orca" tamanho={38} style={{ position: 'absolute', right: 4, top: 26 }} />
      {ex ? (
        <>
          <Pressable accessibilityRole="button" onPress={() => setAberto(null)} className="mb-2 mt-2 self-start active:opacity-70">
            <Text className="text-sm font-bold text-orange-700 dark:text-orange-400">‹ Todos os treinos</Text>
          </Pressable>
          <ex.Componente />
        </>
      ) : (
        <>
          <SectionTitle>Treinos</SectionTitle>
          <View className="gap-2">
            {EXERCICIOS.map((e) => (
              <Pressable key={e.id} accessibilityRole="button" onPress={() => setAberto(e.id)} className="active:opacity-80">
                <Card className="gap-0.5">
                  <Text className="text-base font-extrabold text-slate-900 dark:text-white">{e.nome}</Text>
                  <Text className="text-xs text-slate-600 dark:text-slate-400">{e.sobre}</Text>
                </Card>
              </Pressable>
            ))}
          </View>
        </>
      )}
    </Screen>
  );
}
