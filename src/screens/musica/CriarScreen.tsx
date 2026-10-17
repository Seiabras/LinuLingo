import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Button, Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { Pauta } from '@/components/musica/Pauta';
import { MELODIAS } from '@/data/musica/melodias';
import { getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';
import { compartilharArquivo } from '@/services/compartilhar-arquivo';
import {
  codificarCriacao,
  criacaoVazia,
  decodificarCriacao,
  ESCALAS_CRIAR,
  exemploCriacao,
  NOME_MAX_CRIACAO,
  nomeDeArquivo,
  redimensionar,
  surpresa,
  TAMANHOS_CRIAR,
  TIMBRES_CRIAR,
  wavDaCriacao,
  type Criacao,
  type EscalaCriar,
  type TimbreCriar,
} from '@/services/musica/criacao';
import { tocarClique, tocarNota } from '@/services/musica/motor';
import { nomeNota } from '@/services/musica/notas';
import { sendLink } from '@/services/share';
import { siteUrl } from '@/services/site-url';

const CORES = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6', '#3b82f6', '#8b5cf6', '#ec4899'];
const CELULA = 20;
const META_CRIACOES = 'musica_criacoes';
const MAX_SALVAS = 50;

interface Salva {
  /** o link da música (o mesmo trecho do envio), que guarda tudo */
  codigo: string;
  nome: string;
  quando: string;
}

/**
 * Criar: uma grade para montar melodias (como o Song Maker do Chrome Music Lab e o Ableton Learning
 * Music). Cada linha é uma nota da escala escolhida, cada coluna um tempo; a última linha é a batida. A
 * melodia aparece também na pauta. Pedido do dono (17/10/2026): salvar as músicas, enviar como link ou
 * como arquivo de áudio, e mais opções: a escala, o timbre, o tamanho, os exemplos e a surpresa.
 */
export default function CriarScreen() {
  const { db } = useApp();
  // a música que chegou por link (na web, o trecho depois do “#”), lida uma vez ao abrir
  const [recebida] = useState(() => (Platform.OS === 'web' && typeof window !== 'undefined' && window.location.hash ? decodificarCriacao(window.location.hash) : null));
  const [musica, setMusica] = useState<Criacao>(() => recebida ?? criacaoVazia(16));
  const [tocando, setTocando] = useState(false);
  const [coluna, setColuna] = useState(-1);
  const [salvas, setSalvas] = useState<Salva[]>([]);
  const [aviso, setAviso] = useState<string | null>(() => (recebida ? `Você recebeu ${recebida.nome ? `“${recebida.nome}”` : 'uma música'}. Toque em ▶ para ouvir.` : null));
  const estado = useRef(musica);
  useEffect(() => {
    estado.current = musica;
  }, [musica]);
  const linhas = ESCALAS_CRIAR[musica.escala].notas;

  // um link aberto com o app já nesta tela (só muda o “#”, sem recarregar)
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const aoMudar = () => {
      const m = decodificarCriacao(window.location.hash);
      if (!m) return;
      setMusica(m);
      setAviso(`Você recebeu ${m.nome ? `“${m.nome}”` : 'uma música'}. Toque em ▶ para ouvir.`);
    };
    window.addEventListener('hashchange', aoMudar);
    return () => window.removeEventListener('hashchange', aoMudar);
  }, []);

  // as músicas guardadas
  useEffect(() => {
    if (!db) return;
    void getMeta(db, META_CRIACOES).then((v) => {
      try {
        if (v) setSalvas(JSON.parse(v) as Salva[]);
      } catch {
        // lista estragada: começa vazia
      }
    });
  }, [db]);

  useEffect(() => {
    if (!tocando) return;
    let c = 0;
    const passo = () => {
      const m = estado.current;
      const notas = ESCALAS_CRIAR[m.escala].notas;
      if (c >= m.colunas) c = 0;
      notas.forEach((midi, i) => m.grade[i]![c] && tocarNota(midi, { duracao: 0.5, volume: 0.35, timbre: m.timbre }));
      if (m.batida[c]) tocarClique(c % 4 === 0);
      setColuna(c);
      c = (c + 1) % m.colunas;
    };
    passo();
    const id = setInterval(passo, 60000 / musica.bpm / 2); // cada coluna é uma colcheia
    return () => {
      clearInterval(id);
      setColuna(-1);
    };
  }, [tocando, musica.bpm]);

  const mudar = (m: Partial<Criacao>) => setMusica((atual) => ({ ...atual, ...m }));
  const alternar = (l: number, c: number) => {
    if (!musica.grade[l]![c]) tocarNota(linhas[l]!, { duracao: 0.4, timbre: musica.timbre });
    setMusica((m) => ({ ...m, grade: m.grade.map((linha, i) => (i === l ? linha.map((v, j) => (j === c ? !v : v)) : linha)) }));
  };

  const guardarLista = (lista: Salva[]) => {
    setSalvas(lista);
    if (db) void setMeta(db, META_CRIACOES, JSON.stringify(lista));
  };
  const salvar = () => {
    const nome = musica.nome.trim() || `Música ${salvas.length + 1}`;
    const codigo = codificarCriacao({ ...musica, nome });
    mudar({ nome });
    guardarLista([{ codigo, nome, quando: new Date().toISOString() }, ...salvas.filter((s) => s.nome !== nome)].slice(0, MAX_SALVAS));
    setAviso(`“${nome}” foi salva em Minhas músicas.`);
  };
  const enviarLink = async () => {
    const url = `${siteUrl().replace(/\/$/, '')}/criar#${codificarCriacao(musica)}`;
    const r = await sendLink(url, `Ouça ${musica.nome ? `“${musica.nome}”` : 'a música'} que eu fiz no LinuLingo:`);
    setAviso(r === 'copiado' ? 'Link copiado: cole na conversa.' : r === 'falhou' ? 'Não deu para enviar o link.' : null);
  };
  const enviarAudio = async () => {
    try {
      const r = await compartilharArquivo(`${nomeDeArquivo(musica.nome)}.wav`, wavDaCriacao(musica), 'audio/wav', 'Enviar a música');
      if (r === 'enviado' && Platform.OS === 'web') setAviso('O arquivo de áudio foi gerado.');
    } catch (e) {
      setAviso((e as Error).message);
    }
  };

  const melodia = Array.from({ length: musica.colunas }, (_, c) => linhas.find((_, l) => musica.grade[l]![c]))
    .filter((m): m is number => m != null)
    .slice(0, 12);
  const chip = (on: boolean) => `rounded-full border-2 px-3 py-1 ${on ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`;
  const chipTxt = 'text-xs font-bold text-slate-700 dark:text-slate-200';

  return (
    <Screen>
      <AreaCabecalho area="musica" titulo="Criar" subtitulo="Toque nos quadrados para montar uma melodia e uma batida. Cada linha é uma nota; cada coluna, um tempo." />
      {aviso && (
        <Pressable accessibilityRole="button" onPress={() => setAviso(null)} className="mt-3 rounded-xl bg-orange-50 p-3 dark:bg-orange-950/50">
          <Text className="text-sm text-orange-900 dark:text-orange-100">{aviso}</Text>
        </Pressable>
      )}

      <View className="mt-3 gap-2">
        <View className="flex-row flex-wrap items-center gap-1.5">
          <Text className="text-xs font-bold text-slate-500">Escala:</Text>
          {(Object.keys(ESCALAS_CRIAR) as EscalaCriar[]).map((e) => (
            <Pressable key={e} accessibilityRole="radio" accessibilityState={{ selected: musica.escala === e }} onPress={() => mudar({ escala: e })} className={chip(musica.escala === e)}>
              <Text className={chipTxt}>{ESCALAS_CRIAR[e].nome}</Text>
            </Pressable>
          ))}
        </View>
        <View className="flex-row flex-wrap items-center gap-1.5">
          <Text className="text-xs font-bold text-slate-500">Som:</Text>
          {(Object.keys(TIMBRES_CRIAR) as TimbreCriar[]).map((t) => (
            <Pressable key={t} accessibilityRole="radio" accessibilityState={{ selected: musica.timbre === t }} onPress={() => mudar({ timbre: t })} className={chip(musica.timbre === t)}>
              <Text className={chipTxt}>{TIMBRES_CRIAR[t]}</Text>
            </Pressable>
          ))}
          <Text className="ml-2 text-xs font-bold text-slate-500">Tempos:</Text>
          {TAMANHOS_CRIAR.map((n) => (
            <Pressable key={n} accessibilityRole="radio" accessibilityState={{ selected: musica.colunas === n }} onPress={() => setMusica((m) => redimensionar(m, n))} className={chip(musica.colunas === n)}>
              <Text className={chipTxt}>{n}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Card className="mt-3 gap-2">
        <ScrollView horizontal showsHorizontalScrollIndicator={musica.colunas > 16}>
          <View className="gap-0.5">
            {linhas.map((m, l) => (
              <View key={l} className="flex-row items-center gap-0.5">
                <Text className="w-7 text-[10px] font-bold text-slate-500">{nomeNota(m)}</Text>
                {musica.grade[l]!.map((v, c) => (
                  <Pressable
                    key={c}
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: v }}
                    accessibilityLabel={`${nomeNota(m)}, tempo ${c + 1}`}
                    onPress={() => alternar(l, c)}
                    style={{ width: CELULA, height: CELULA, backgroundColor: v ? CORES[l] : undefined, opacity: coluna === c && !v ? 0.6 : 1 }}
                    className={`rounded-sm ${v ? '' : c % 4 === 0 ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-800'} ${coluna === c ? 'border border-orange-500' : ''}`}
                  />
                ))}
              </View>
            ))}
            <View className="mt-1 flex-row items-center gap-0.5">
              <Text className="w-7 text-[10px] font-bold text-slate-500">bat.</Text>
              {musica.batida.map((v, c) => (
                <Pressable
                  key={c}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: v }}
                  accessibilityLabel={`batida, tempo ${c + 1}`}
                  onPress={() => setMusica((m) => ({ ...m, batida: m.batida.map((x, j) => (j === c ? !x : x)) }))}
                  style={{ width: CELULA, height: CELULA }}
                  className={`rounded-full ${v ? 'bg-slate-700 dark:bg-slate-300' : 'bg-slate-100 dark:bg-slate-800'} ${coluna === c ? 'border border-orange-500' : ''}`}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <View className="flex-row items-center gap-2">
          <Button title={tocando ? '■ Parar' : '▶ Tocar'} className="flex-1" onPress={() => setTocando((t) => !t)} />
          <Pressable accessibilityRole="button" accessibilityLabel="Mais devagar" onPress={() => mudar({ bpm: Math.max(60, musica.bpm - 10) })} className="h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-700">
            <Text className="font-bold text-slate-700 dark:text-slate-200">−</Text>
          </Pressable>
          <Text className="w-16 text-center text-xs font-bold text-slate-600 dark:text-slate-300">{musica.bpm} bpm</Text>
          <Pressable accessibilityRole="button" accessibilityLabel="Mais rápido" onPress={() => mudar({ bpm: Math.min(200, musica.bpm + 10) })} className="h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-700">
            <Text className="font-bold text-slate-700 dark:text-slate-200">+</Text>
          </Pressable>
        </View>
        <View className="flex-row flex-wrap gap-2">
          <Button title="Surpresa" variant="ghost" onPress={() => setMusica((m) => surpresa(m))} />
          <Button title="Limpar" variant="ghost" onPress={() => setMusica((m) => ({ ...criacaoVazia(m.colunas), escala: m.escala, timbre: m.timbre, bpm: m.bpm }))} />
        </View>
      </Card>

      {melodia.length > 0 && (
        <Card className="mt-3 gap-1">
          <Text className="text-xs font-bold text-orange-700 dark:text-orange-400">A sua melodia na pauta</Text>
          <Pauta notas={melodia.map((m) => ({ midi: m }))} rotulos nomes={nomeNota} />
        </Card>
      )}

      <SectionTitle>Salvar e enviar</SectionTitle>
      <Card className="gap-2">
        <TextInput
          value={musica.nome}
          onChangeText={(t) => mudar({ nome: t.slice(0, NOME_MAX_CRIACAO) })}
          placeholder="O nome da sua música"
          placeholderTextColor="#94a3b8"
          accessibilityLabel="O nome da sua música"
          className="rounded-xl border-2 border-slate-200 px-3 py-2 text-base text-slate-900 dark:border-slate-700 dark:text-white"
        />
        <Button title="Salvar em Minhas músicas" onPress={salvar} />
        <View className="flex-row gap-2">
          <Button title="Enviar o link" variant="ghost" className="flex-1" onPress={() => void enviarLink()} />
          <Button title="Enviar o áudio" variant="ghost" className="flex-1" onPress={() => void enviarAudio()} />
        </View>
        <Text className="text-xs text-slate-600 dark:text-slate-400">O link abre a música no LinuLingo de quem recebe, pronta para tocar e mudar. O áudio é um arquivo .wav, que toca em qualquer celular.</Text>
      </Card>

      <SectionTitle>Para começar</SectionTitle>
      <View className="flex-row flex-wrap gap-2">
        {MELODIAS.filter((m) => m.id !== 'parabens').map((m) => (
          <Button key={m.id} title={m.nome} variant="ghost" onPress={() => setMusica(exemploCriacao(m.nome, m.notas))} />
        ))}
      </View>

      {salvas.length > 0 && (
        <>
          <SectionTitle>Minhas músicas</SectionTitle>
          <View className="gap-2">
            {salvas.map((s) => (
              <Card key={s.nome + s.quando} className="flex-row items-center gap-2">
                <View className="flex-1">
                  <Text className="font-extrabold text-slate-900 dark:text-white">{s.nome}</Text>
                  <Text className="text-xs text-slate-500">{new Date(s.quando).toLocaleDateString('pt-BR')}</Text>
                </View>
                <Button
                  title="Abrir"
                  variant="ghost"
                  onPress={() => {
                    const m = decodificarCriacao(s.codigo);
                    if (m) setMusica(m);
                  }}
                />
                <Button title="Apagar" variant="ghost" onPress={() => guardarLista(salvas.filter((x) => x !== s))} />
              </Card>
            ))}
          </View>
        </>
      )}
    </Screen>
  );
}
