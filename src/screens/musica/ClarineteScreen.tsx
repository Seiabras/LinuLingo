import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Button, Card, Screen, SectionTitle } from '@/components/ui';
import { AvisoMicrofone } from '@/components/musica/AvisoMicrofone';
import { DedilhadoClarinete } from '@/components/musica/DedilhadoClarinete';
import { Pauta } from '@/components/musica/Pauta';
import { CLARINETE, DEDILHADO_CLARINETE, NOME_DO_DEDO, type Afinacao } from '@/data/musica/instrumentos';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { tocarNota } from '@/services/musica/motor';
import { nomeComOitava, nomeComOitavaBemol, nomeNota } from '@/services/musica/notas';
import { useMicrofone } from '@/services/musica/useMicrofone';

/**
 * O curso de clarinete (pedido do dono, 17/10/2026: o primeiro instrumento, com a escolha entre o
 * clarinete em Si♭ e o em Dó, como no Tonestro). A partitura mostra a nota escrita; o app toca a nota
 * que o seu clarinete faz (o som real) e, pelo microfone, converte o som que ouve na nota escrita para
 * conferir. Fontes das partes e da história no comentário de `LICOES` e em `data/musica/instrumentos.ts`.
 */

// Ode à Alegria e Brilha, brilha, estrelinha em sol, escritas para caber nas primeiras notas do clarinete
const ODE_EM_SOL = [59, 59, 60, 62, 62, 60, 59, 57, 55, 55, 57, 59, 59, 57, 57];
const BRILHA_EM_SOL = [55, 55, 62, 62, 64, 64, 62, 60, 60, 59, 59, 57, 57, 55];

interface Licao {
  id: string;
  titulo: string;
  sobre: string;
  /** as notas escritas para praticar, em ordem */
  notas?: number[];
  /** se é uma música (as notas seguidas) ou nota por nota */
  musica?: boolean;
  texto?: string[];
}

/**
 * As partes e a história: Encyclopedia.com, “Clarinet” (as cinco partes, a palheta presa pela
 * braçadeira, a chave do polegar que faz soar uma 12ª acima; Johann Christoph Denner, de Nuremberg, por
 * volta de 1700, a partir do chalumeau) e Northern Illinois University, “Development of the clarinet”.
 */
const LICOES: Licao[] = [
  {
    id: 'conheca',
    titulo: 'Conheça o clarinete',
    sobre: 'As partes, a palheta e de onde ele veio.',
    texto: [
      'O clarinete se monta em cinco partes: a boquilha (onde fica a palheta, presa pela braçadeira), o barrilete, o corpo de cima (da mão esquerda), o corpo de baixo (da mão direita) e a campana.',
      'O som nasce na palheta, uma lâmina fina que vibra contra a boquilha quando você sopra. Os furos e as chaves mudam o tamanho do tubo e, com ele, a nota.',
      'Ele nasceu na Alemanha por volta de 1700: o construtor Johann Christoph Denner, de Nuremberg, é lembrado por transformar um instrumento mais antigo, o chalumeau, acrescentando a campana e uma chave que faz o som pular para uma 12ª acima. Essa chave, a de registro, está até hoje atrás do clarinete, junto do polegar.',
      'A mão esquerda fica em cima e a direita embaixo. O polegar direito segura o peso do clarinete por baixo, num apoio.',
    ],
  },
  { id: 'esquerda', titulo: 'As notas da mão esquerda', sobre: 'Sol solto, fá, mi, ré e dó: um dedo a mais em cada nota.', notas: [67, 65, 64, 62, 60] },
  { id: 'direita', titulo: 'A mão direita', sobre: 'Si, lá e sol grave: a mão direita entra.', notas: [59, 57, 55] },
  { id: 'brilha', titulo: 'Brilha, brilha, estrelinha', sobre: 'A primeira música inteira, do sol grave ao mi.', notas: BRILHA_EM_SOL, musica: true },
  { id: 'ode', titulo: 'Ode à Alegria', sobre: 'O tema de Beethoven, só com sol, lá, si, dó e ré.', notas: ODE_EM_SOL, musica: true },
];

const META_AFINACAO = 'musica_afinacao_clarinete';
const META_FEITAS = 'musica_clarinete_feitas';

function Praticar({ licao, afinacao, aoTerminar }: { licao: Licao; afinacao: Afinacao; aoTerminar: () => void }) {
  const notas = licao.notas!;
  const [i, setI] = useState(0);
  const [ouvindo, setOuvindo] = useState(false);
  const [ultima, setUltima] = useState<number | null>(null);
  const alvo = notas[i];
  const fim = i >= notas.length;
  const soa = (escrita: number) => escrita + afinacao.transposicao;

  const avancar = () => {
    haptics.success();
    const n = i + 1;
    setI(n);
    if (n >= notas.length) {
      setOuvindo(false);
      aoTerminar();
    } else if (!licao.musica) setOuvindo(false);
  };
  // o microfone ouve o som real; a nota escrita é o som menos a transposição
  const conferir = useRef<(som: number) => void>(() => {});
  useEffect(() => {
    conferir.current = (som) => {
      const escrita = som - afinacao.transposicao;
      setUltima(escrita);
      if (escrita === notas[i]) avancar();
    };
  });
  const { erro } = useMicrofone(ouvindo && !fim, (n) => conferir.current(n.midi));

  if (fim)
    return (
      <Card className="items-center gap-2">
        <Text className="text-3xl">🎉</Text>
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{licao.musica ? `Você tocou “${licao.titulo}”!` : 'Lição completa!'}</Text>
        <Button title="De novo" variant="ghost" onPress={() => setI(0)} />
      </Card>
    );

  const tapados = DEDILHADO_CLARINETE[alvo!] ?? [];
  const janela = licao.musica ? notas.slice(i, i + 6).map((m, k) => ({ midi: m, cor: k === 0 ? '#d97706' : undefined })) : [{ midi: alvo!, cor: '#d97706' }];

  return (
    <Card className="gap-3">
      <Text className="text-xs font-bold text-slate-500">
        {licao.musica ? 'Nota' : 'Nota'} {i + 1} de {notas.length}
      </Text>
      <Pauta notas={janela} rotulos nomes={nomeNota} />
      <View className="flex-row items-center gap-3">
        <DedilhadoClarinete tapados={tapados} altura={180} />
        <View className="flex-1 gap-1">
          <Text className="text-2xl font-black text-slate-900 dark:text-white">{nomeNota(alvo!)}</Text>
          <Text className="text-xs text-slate-600 dark:text-slate-400">
            Escrito: {nomeComOitava(alvo!)} · no clarinete em {afinacao.nome}, soa {nomeComOitavaBemol(soa(alvo!))}
          </Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">{tapados.length ? `Tape: ${tapados.map((f) => NOME_DO_DEDO[f]).join(', ')}.` : 'Nenhum furo tapado: é o sol “solto”.'}</Text>
          <Pressable accessibilityRole="button" onPress={() => tocarNota(soa(alvo!), { duracao: 1.2 })} className="self-start rounded-full bg-orange-500 px-3 py-1 active:opacity-80">
            <Text className="text-xs font-bold text-white">▶ Ouvir como soa</Text>
          </Pressable>
        </View>
      </View>
      <Button title={ouvindo ? 'Parar de ouvir' : '🎤 Tocar no meu clarinete'} onPress={() => setOuvindo((o) => !o)} />
      {ouvindo && !erro && (
        <Text className="text-center text-sm text-slate-600 dark:text-slate-400">{ultima != null ? `Ouvi (escrito): ${nomeComOitava(ultima)}` : 'Toque a nota: o app está ouvindo.'}</Text>
      )}
      <AvisoMicrofone erro={erro} />
      <Pressable accessibilityRole="button" onPress={avancar} className="self-center active:opacity-70">
        <Text className="text-xs font-bold text-slate-500 underline">Estou sem o clarinete agora: próxima</Text>
      </Pressable>
    </Card>
  );
}

export default function ClarineteScreen() {
  const { db, refresh } = useApp();
  const [afinacao, setAfinacao] = useState<Afinacao>(CLARINETE.afinacoes[0]!);
  const [feitas, setFeitas] = useState<string[]>([]);
  const [aberta, setAberta] = useState<string | null>(null);

  useEffect(() => {
    if (!db) return;
    let vivo = true;
    void getMeta(db, META_AFINACAO).then((v) => {
      const a = CLARINETE.afinacoes.find((x) => x.id === v);
      if (vivo && a) setAfinacao(a);
    });
    void getMeta(db, META_FEITAS).then((v) => vivo && v && setFeitas(v.split(',')));
    return () => {
      vivo = false;
    };
  }, [db]);

  const escolher = (a: Afinacao) => {
    setAfinacao(a);
    if (db) void setMeta(db, META_AFINACAO, a.id);
  };
  const concluir = (id: string) => {
    if (feitas.includes(id)) return;
    const novas = [...feitas, id];
    setFeitas(novas);
    if (db) {
      void setMeta(db, META_FEITAS, novas.join(','));
      void awardXp(db, 10, `musica-clarinete:${id}`).then(() => refresh());
    }
  };
  const licao = LICOES.find((l) => l.id === aberta);

  return (
    <Screen>
      <Pressable accessibilityRole="button" onPress={() => (licao ? setAberta(null) : router.back())} className="mb-2 self-start active:opacity-70">
        <Text className="text-sm font-bold text-orange-700 dark:text-orange-400">‹ {licao ? 'Curso de clarinete' : 'Voltar'}</Text>
      </Pressable>
      <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{licao ? licao.titulo : 'Curso de clarinete'}</Text>
      <Text className="text-sm text-slate-600 dark:text-slate-400">{licao ? licao.sobre : 'Do primeiro sopro às primeiras músicas, com o dedilhado desenhado, a partitura e o app ouvindo você tocar.'}</Text>

      <SectionTitle>O seu clarinete</SectionTitle>
      <View className="flex-row flex-wrap gap-1.5">
        {CLARINETE.afinacoes.map((a) => (
          <Pressable
            key={a.id}
            accessibilityRole="radio"
            accessibilityState={{ selected: afinacao.id === a.id }}
            onPress={() => escolher(a)}
            className={`rounded-full border-2 px-3 py-1 ${afinacao.id === a.id ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">em {a.nome}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="mt-1 text-xs text-slate-600 dark:text-slate-400">
        {afinacao.sobre} A partitura é a mesma para todos; o que muda é o som. O dedilhado também é o mesmo.
      </Text>

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
            <Praticar key={`${licao.id}-${afinacao.id}`} licao={licao} afinacao={afinacao} aoTerminar={() => concluir(licao.id)} />
          )}
        </View>
      ) : (
        <>
          <SectionTitle>Lições</SectionTitle>
          <View className="gap-2">
            {LICOES.map((l, k) => (
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
          <Text className="mt-3 text-[10px] text-slate-500">
            Dedilhado básico do sistema Boehm (The Woodwind Fingering Guide). Transposição: teoria.com. História: Encyclopedia.com e Northern Illinois University.
          </Text>
        </>
      )}
    </Screen>
  );
}
