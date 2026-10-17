import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Button, Card, Screen, SectionTitle } from '@/components/ui';
import { AvisoMicrofone } from '@/components/musica/AvisoMicrofone';
import { BracoCordas, DesenhoKalimba } from '@/components/musica/BracoCordas';
import { Pauta } from '@/components/musica/Pauta';
import { Teclado } from '@/components/musica/Teclado';
import {
  cabeNoCurso,
  cursoDeInstrumento,
  escalaMaior,
  escolherTom,
  laminasDaKalimba,
  meioDoCurso,
  posicaoNasCordas,
  type AfinacaoCordas,
  type CursoInstrumento,
} from '@/data/musica/cursos-instrumentos';
import { MELODIAS } from '@/data/musica/melodias';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { tocarNota } from '@/services/musica/motor';
import { nomeComOitava, nomeNota } from '@/services/musica/notas';
import { useMicrofone } from '@/services/musica/useMicrofone';

/**
 * Os cursos de violão, viola caipira, viola de arco, cavaquinho e banjo de samba, violoncelo,
 * baixolão, kalimba e sanfona (pedido do dono, 17/10/2026), no mesmo molde do curso de clarinete:
 * o desenho de onde tocar, a partitura na clave do instrumento e o microfone conferindo. O texto e as
 * fontes de cada um estão em `data/musica/cursos-instrumentos.ts`.
 */

interface Licao {
  id: string;
  titulo: string;
  sobre: string;
  notas?: number[];
  musica?: boolean;
  texto?: string[];
}

/** As lições de um curso: conhecer, as primeiras notas, a escala e as duas músicas, no tom que cabe. */
function licoesDo(curso: CursoInstrumento, afinacao: AfinacaoCordas | undefined): Licao[] {
  const cabe = (m: number) => cabeNoCurso(curso, afinacao, m);
  const meio = meioDoCurso(curso, afinacao);
  const melodia = (id: string) => MELODIAS.find((m) => m.id === id)!.notas;
  const tomBrilha = escolherTom(melodia('estrelinha'), cabe, meio) ?? 0;
  const tomOde = escolherTom(melodia('ode'), cabe, meio) ?? 0;
  // a escala: no tom da primeira música, com a tônica mais grave em que as 8 notas cabem
  let escala = escalaMaior(60 + tomBrilha);
  for (let d = -36; d <= 24; d += 12) {
    const e = escalaMaior(60 + tomBrilha + d);
    if (e.every(cabe)) {
      escala = e;
      break;
    }
  }
  const primeiras =
    curso.tipo === 'cordas'
      ? {
          id: 'soltas',
          titulo: 'As cordas soltas',
          sobre: 'Da mais grave para a mais aguda, sem apertar nada.',
          notas: [...afinacao!.cordas].reverse().map((c) => c.midi),
        }
      : curso.tipo === 'kalimba'
        ? { id: 'meio', titulo: 'As lâminas do meio', sobre: 'Dó, ré, mi, fá e sol: o polegar vai de um lado para o outro.', notas: [60, 62, 64, 65, 67] }
        : { id: 'cinco', titulo: 'Cinco dedos, cinco notas', sobre: 'Dó, ré, mi, fá e sol na mão direita, um dedo em cada tecla.', notas: [60, 62, 64, 65, 67] };
  return [
    { id: 'conheca', titulo: `Conheça: ${curso.nome.toLowerCase()}`, sobre: 'As partes, a afinação e de onde ele veio.', texto: curso.conheca },
    primeiras,
    { id: 'escala', titulo: 'A escala maior', sobre: `De ${nomeNota(escala[0]!)} a ${nomeNota(escala[7]!)}: tom, tom, semitom, tom, tom, tom, semitom.`, notas: escala },
    { id: 'brilha', titulo: 'Brilha, brilha, estrelinha', sobre: 'A primeira música inteira.', notas: melodia('estrelinha').map((m) => m + tomBrilha), musica: true },
    { id: 'ode', titulo: 'Ode à Alegria', sobre: 'O tema de Beethoven.', notas: melodia('ode').map((m) => m + tomOde), musica: true },
  ];
}

/** Onde tocar, em palavras: “2ª corda (si), casa 1”. */
function ondeTocar(curso: CursoInstrumento, afinacao: AfinacaoCordas | undefined, midi: number): string {
  if (curso.tipo === 'cordas' && afinacao) {
    const p = posicaoNasCordas(midi, afinacao.cordas, curso.casaMax ?? 4);
    if (!p) return '';
    const corda = `${p.corda + 1}ª ${afinacao.cordas[0]?.par ? 'par' : 'corda'} (${afinacao.cordas[p.corda]!.nome})`;
    if (p.casa === 0) return `${corda} solta.`;
    return curso.trastes ? `${corda}, casa ${p.casa}.` : `${corda}, ${p.casa} ${p.casa === 1 ? 'semitom' : 'semitons'} acima da corda solta.`;
  }
  if (curso.tipo === 'kalimba') return midi === 60 ? 'A lâmina do meio, a mais comprida.' : 'A lâmina laranja.';
  return 'A tecla laranja.';
}

function Praticar({ curso, afinacao, licao, aoTerminar }: { curso: CursoInstrumento; afinacao: AfinacaoCordas | undefined; licao: Licao; aoTerminar: () => void }) {
  const notas = licao.notas!;
  const [i, setI] = useState(0);
  const [ouvindo, setOuvindo] = useState(false);
  const [ultima, setUltima] = useState<number | null>(null);
  const alvo = notas[i];
  const fim = i >= notas.length;
  const escrita = (m: number) => m + curso.escritaAcima;
  const laminas = useMemo(() => laminasDaKalimba(), []);

  const avancar = () => {
    haptics.acertou();
    const n = i + 1;
    setI(n);
    if (n >= notas.length) {
      setOuvindo(false);
      aoTerminar();
    } else if (!licao.musica) setOuvindo(false);
  };
  // os graves (violoncelo, baixolão) e os pares em oitava (viola caipira): vale a nota em qualquer oitava
  const confere = (ouvida: number, pedida: number) => (curso.oitavaLivre ? (((ouvida - pedida) % 12) + 12) % 12 === 0 : ouvida === pedida);
  const conferir = useRef<(som: number) => void>(() => {});
  useEffect(() => {
    conferir.current = (som) => {
      setUltima(som);
      if (notas[i] !== undefined && confere(som, notas[i]!)) avancar();
    };
  });
  const { erro } = useMicrofone(ouvindo && !fim, (n) => conferir.current(n.midi));

  if (fim)
    return (
      <Card className="items-center gap-2">
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{licao.musica ? `Você tocou “${licao.titulo}”!` : 'Lição completa!'}</Text>
        <Button title="De novo" variant="ghost" onPress={() => setI(0)} />
      </Card>
    );

  const janela = licao.musica ? notas.slice(i, i + 6).map((m, k) => ({ midi: escrita(m), cor: k === 0 ? '#d97706' : undefined })) : [{ midi: escrita(alvo!), cor: '#d97706' }];
  const posicao = curso.tipo === 'cordas' && afinacao ? posicaoNasCordas(alvo!, afinacao.cordas, curso.casaMax ?? 4) : null;
  const ext = curso.extensao;
  // a sanfona: um pedaço do teclado em volta da nota, para as teclas não ficarem pequenas demais
  const de = ext ? Math.max(ext[0], Math.min(alvo! - 7, ext[1] - 17)) : 0;

  return (
    <Card className="gap-3">
      <Text className="text-xs font-bold text-slate-500">
        Nota {i + 1} de {notas.length}
      </Text>
      <Pauta notas={janela} rotulos nomes={(m) => nomeNota(m)} clave={curso.clave} />
      {curso.tipo === 'cordas' && afinacao && <BracoCordas cordas={afinacao.cordas} casas={curso.casaMax ?? 4} trastes={!!curso.trastes} alvo={posicao} />}
      {curso.tipo === 'kalimba' && <DesenhoKalimba laminas={laminas} alvo={alvo} nomes={nomeNota} />}
      {curso.tipo === 'teclado' && <Teclado de={de} ate={de + 17} aoTocar={(m) => tocarNota(m, { duracao: 0.8 })} destaque={{ [alvo!]: '#f97316' }} />}
      <View className="gap-1">
        <Text className="text-2xl font-black text-slate-900 dark:text-white">{nomeNota(alvo!)}</Text>
        <Text className="text-sm text-slate-700 dark:text-slate-300">{ondeTocar(curso, afinacao, alvo!)}</Text>
        {curso.escritaAcima ? (
          <Text className="text-xs text-slate-600 dark:text-slate-400">
            Soa {nomeComOitava(alvo!)}; na partitura, uma oitava acima ({nomeComOitava(escrita(alvo!))}).
          </Text>
        ) : null}
        <Pressable accessibilityRole="button" onPress={() => tocarNota(alvo!, { duracao: 1.2 })} className="self-start rounded-full bg-orange-500 px-3 py-1 active:opacity-80">
          <Text className="text-xs font-bold text-white">▶ Ouvir como soa</Text>
        </Pressable>
      </View>
      <Button title={ouvindo ? 'Parar de ouvir' : `Tocar no meu instrumento`} onPress={() => setOuvindo((o) => !o)} />
      {ouvindo && !erro && <Text className="text-center text-sm text-slate-600 dark:text-slate-400">{ultima != null ? `Ouvi: ${nomeComOitava(ultima)}` : 'Toque a nota: o app está ouvindo.'}</Text>}
      <AvisoMicrofone erro={erro} />
      <Pressable accessibilityRole="button" onPress={avancar} className="self-center active:opacity-70">
        <Text className="text-xs font-bold text-slate-500 underline">Estou sem o instrumento agora: próxima</Text>
      </Pressable>
    </Card>
  );
}

export default function CursoInstrumentoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const curso = cursoDeInstrumento(id ?? '');
  const { db, refresh } = useApp();
  const [afinacaoId, setAfinacaoId] = useState<string | null>(null);
  const [feitas, setFeitas] = useState<string[]>([]);
  const [aberta, setAberta] = useState<string | null>(null);
  const metaAfinacao = `musica_afinacao_${id}`;
  const metaFeitas = `musica_${id}_feitas`;

  useEffect(() => {
    if (!db || !curso) return;
    let vivo = true;
    void getMeta(db, metaAfinacao).then((v) => vivo && v && setAfinacaoId(v));
    void getMeta(db, metaFeitas).then((v) => vivo && v && setFeitas(v.split(',')));
    return () => {
      vivo = false;
    };
  }, [db, curso, metaAfinacao, metaFeitas]);

  const afinacao = curso?.afinacoes?.find((a) => a.id === afinacaoId) ?? curso?.afinacoes?.[0];
  const licoes = useMemo(() => (curso ? licoesDo(curso, afinacao) : []), [curso, afinacao]);
  if (!curso)
    return (
      <Screen>
        <Text className="text-slate-700 dark:text-slate-300">Curso não encontrado.</Text>
      </Screen>
    );

  const escolher = (a: AfinacaoCordas) => {
    setAfinacaoId(a.id);
    if (db) void setMeta(db, metaAfinacao, a.id);
  };
  const concluir = (lid: string) => {
    if (feitas.includes(lid)) return;
    const novas = [...feitas, lid];
    setFeitas(novas);
    if (db) {
      void setMeta(db, metaFeitas, novas.join(','));
      void awardXp(db, 10, `musica-${curso.id}:${lid}`).then(() => refresh());
    }
  };
  const licao = licoes.find((l) => l.id === aberta);

  return (
    <Screen>
      <Pressable accessibilityRole="button" onPress={() => (licao ? setAberta(null) : router.back())} className="mb-2 self-start active:opacity-70">
        <Text className="text-sm font-bold text-orange-700 dark:text-orange-400">‹ {licao ? `Curso de ${curso.nome.toLowerCase()}` : 'Voltar'}</Text>
      </Pressable>
      <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{licao ? licao.titulo : `Curso de ${curso.nome.toLowerCase()}`}</Text>
      <Text className="text-sm text-slate-600 dark:text-slate-400">{licao ? licao.sobre : curso.chamada}</Text>

      {curso.afinacoes && curso.afinacoes.length > 1 && (
        <>
          <SectionTitle>A afinação da sua {curso.nome.toLowerCase()}</SectionTitle>
          <View className="flex-row flex-wrap gap-1.5">
            {curso.afinacoes.map((a) => (
              <Pressable
                key={a.id}
                accessibilityRole="radio"
                accessibilityState={{ selected: afinacao?.id === a.id }}
                onPress={() => escolher(a)}
                className={`rounded-full border-2 px-3 py-1 ${afinacao?.id === a.id ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              >
                <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{a.nome}</Text>
              </Pressable>
            ))}
          </View>
        </>
      )}
      {afinacao && <Text className="mt-1 text-xs text-slate-600 dark:text-slate-400">{`${afinacao.nome}: ${afinacao.sobre}`}</Text>}

      {licao ? (
        <View className="mt-3">
          {licao.texto ? (
            <Card className="gap-2">
              {licao.texto.map((t) => (
                <Text key={t} className="text-sm text-slate-700 dark:text-slate-300">
                  {t}
                </Text>
              ))}
              <Button
                title="Entendi"
                onPress={() => {
                  concluir(licao.id);
                  setAberta(null);
                }}
              />
            </Card>
          ) : (
            <Praticar key={`${licao.id}-${afinacao?.id ?? ''}`} curso={curso} afinacao={afinacao} licao={licao} aoTerminar={() => concluir(licao.id)} />
          )}
        </View>
      ) : (
        <>
          <SectionTitle>Lições</SectionTitle>
          <View className="gap-2">
            {licoes.map((l, k) => (
              <Pressable key={l.id} accessibilityRole="button" onPress={() => setAberta(l.id)} className="active:opacity-80">
                <Card className="flex-row items-center gap-3">
                  <View className={`h-10 w-10 items-center justify-center rounded-full ${feitas.includes(l.id) ? 'bg-orange-500' : 'bg-orange-100 dark:bg-orange-900'}`}>
                    <Text className={`font-black ${feitas.includes(l.id) ? 'text-white' : 'text-orange-800 dark:text-orange-200'}`}>{feitas.includes(l.id) ? '✓' : k + 1}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-extrabold text-slate-900 dark:text-white">{l.titulo}</Text>
                    <Text className="text-xs text-slate-600 dark:text-slate-400">{l.sobre}</Text>
                  </View>
                </Card>
              </Pressable>
            ))}
          </View>
          <Text className="mt-3 text-[10px] text-slate-500">{curso.creditos}</Text>
        </>
      )}
    </Screen>
  );
}
