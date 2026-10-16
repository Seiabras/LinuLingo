import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, LinuPensando, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { primeiroAJogar } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type NivelLinu } from '@/services/jogos-prefs';
import { TEMAS_TCG } from '@/services/tcg/comum';
import {
  BARALHOS_D,
  NOME_PALAVRA,
  aplicarD,
  ataqueDe,
  cartaD,
  ehValidaD,
  lancesD,
  novaPartidaD,
  podeAtacarAgora,
  precisaDeAlvoD,
  vidaDe,
  type AcaoD,
  type AlvoD,
  type BaralhoD,
  type BichoD,
  type EstadoD,
  type EventoD,
  type Lado,
} from '@/services/tcg/duelo-bichos-engine';
import { jogadaDoLinuD } from '@/services/tcg/duelo-bichos-ia';
import { CartaTCG, FileiraCartas, Marcador, Selo, VersoCarta } from './tcg/CartaTCG';
import { BotaoTCG, Escolhas, TutorialTCG } from './tcg/ui';

/**
 * Duelo de Bichos: o jogo de cartas colecionáveis próprio do LinuLingo (motor em
 * `services/tcg/duelo-bichos-engine.ts`), contra o Linu. Krill que cresce a cada turno, bichos que
 * evoluem por cima do filhote e armadilhas viradas para baixo.
 */

const NIVEIS: { id: NivelLinu; nome: string }[] = [
  { id: 'facil', nome: 'Fácil' },
  { id: 'medio', nome: 'Médio' },
  { id: 'dificil', nome: 'Difícil' },
];
const BARALHOS = (Object.keys(BARALHOS_D) as BaralhoD[]).map((id) => ({ id, nome: TEMAS_TCG[id].nome }));

const TUTORIAL = [
  { titulo: 'O objetivo', texto: 'Cada lado começa com 20 de vida. Zere a vida do Linu. A partida dura uns 10 minutos.' },
  { titulo: 'O krill', texto: 'O krill paga as cartas. No começo de cada turno, o seu krill máximo sobe 1 (até 8) e enche. O custo de cada carta está no canto.' },
  { titulo: 'Bichos e evolução', texto: 'Toque num bicho da mão para pô-lo no campo. Ele só ataca no próximo turno, a não ser que tenha Ímpeto. A evolução vai por cima do filhote certo, se ele já estava no campo: toque na evolução e depois no filhote.' },
  { titulo: 'Atacar', texto: 'Toque num bicho seu e depois no alvo: um bicho do Linu ou o coração dele. Os dois trocam dano, e o dano fica. Guarda obriga os ataques a irem nela; Voo passa por cima.' },
  { titulo: 'Truques e armadilhas', texto: 'O truque faz efeito na hora. A armadilha fica virada para baixo e dispara sozinha no turno do Linu. Cuidado: o Linu também arma as dele!' },
];

const nome = (l: Lado) => (l === 0 ? 'Você' : 'O Linu');

function frase(ev: EventoD): string | null {
  switch (ev.t) {
    case 'jogou':
      return `${nome(ev.lado)} jogou ${cartaD(ev.carta).nome}.`;
    case 'evoluiu':
      return `${nome(ev.lado)} evoluiu para ${cartaD(ev.carta).nome}!`;
    case 'armou':
      return `${nome(ev.lado)} armou uma armadilha.`;
    case 'armadilha':
      return `Armadilha: ${cartaD(ev.carta).nome}!`;
    case 'anulou':
      return `${cartaD(ev.carta).nome} não fez efeito.`;
    case 'dano':
      return 'vida' in ev.alvo ? `${ev.alvo.lado === 0 ? 'Você perdeu' : 'O Linu perdeu'} ${ev.n} de vida.` : null;
    case 'morreu':
      return `${cartaD(ev.carta).nome} saiu do campo.`;
    case 'voltou':
      return `${cartaD(ev.carta).nome} voltou para a mão.`;
    case 'cura':
      return `${nome(ev.lado)} ganhou ${ev.n} de vida.`;
    case 'queimou':
      return `${nome(ev.lado)} estava com a mão cheia e descartou ${cartaD(ev.carta).nome}.`;
    case 'cansaco':
      return `${nome(ev.lado)} não tinha carta para comprar e perdeu 1 de vida.`;
    default:
      return null;
  }
}

const linhaDe = (id: string) => {
  const c = cartaD(id);
  if (c.tipo === 'truque') return 'Truque';
  if (c.tipo === 'armadilha') return 'Armadilha';
  return [c.tipo === 'evolucao' ? 'Evolução' : 'Bicho', ...(c.palavras ?? []).map((p) => NOME_PALAVRA[p])].join(' · ');
};

function Numeros({ id, x }: { id: string; x?: BichoD }) {
  const c = cartaD(id);
  if (c.tipo !== 'bicho' && c.tipo !== 'evolucao') return null;
  const atk = x ? ataqueDe(x) : c.ataque!;
  const v = x ? vidaDe(x) : c.vida!;
  return (
    <View style={{ flexDirection: 'row', gap: 2 }}>
      <Selo texto={atk} tamanho={16} fundo={x && x.bonus > 0 ? '#FEF3C7' : '#FDE68A'} />
      <Selo texto={v} tamanho={16} fundo={x && x.dano > 0 ? '#FECACA' : '#BBF7D0'} />
    </View>
  );
}

const Krill = ({ id }: { id: string }) => <Selo texto={cartaD(id).custo} tamanho={16} fundo="#FDA4AF" />;

export default function DueloBichosJogo() {
  const [prefs] = useJogosPrefs();
  const [meu, setMeu] = useState<BaralhoD>('gelo');
  const [dele, setDele] = useState<BaralhoD>('savana');
  const [nivel, setNivel] = useState<NivelLinu>(prefs.nivel);
  const [e, setE] = useState<EstadoD>(() => novaPartidaD('gelo', 'savana', Math.random, primeiroAJogar<Lado>(prefs.quemComeca, 0, 1)));
  const [passo, setPasso] = useState(0);
  const [mao, setMao] = useState<number | null>(null);
  const [atacante, setAtacante] = useState<number | null>(null);
  const [aviso, setAviso] = useState('');
  const [novos, setNovos] = useState<Set<number>>(new Set());
  const xp = useXpDeVitoria('duelo-de-bichos');

  const fim = e.vencedor !== null;
  const minha = !fim && e.vez === 0;
  const eu = e.lados[0];
  const linu = e.lados[1];
  const lances = useMemo(() => (minha ? lancesD(e) : []), [e, minha]);

  const fazer = (a: AcaoD) => {
    if (!ehValidaD(e, a)) return;
    const n = aplicarD(e, a);
    const antes = new Set(e.lados.flatMap((L) => L.campo.map((x) => `${x.uid}:${x.carta}`)));
    setNovos(new Set(n.lados.flatMap((L) => L.campo.filter((x) => !antes.has(`${x.uid}:${x.carta}`)).map((x) => x.uid))));
    haptics.tapLight();
    setE(n);
    setPasso((p) => p + 1);
    setMao(null);
    setAtacante(null);
    // o dano na vida vem somado (“Você perdeu 6 de vida”), e as outras frases na ordem
    const perdeu = [0, 1].map((l) => n.eventos.reduce((t, ev) => (ev.t === 'dano' && 'vida' in ev.alvo && ev.alvo.lado === l ? t + ev.n : t), 0));
    const fr = [
      ...n.eventos.filter((ev) => !(ev.t === 'dano' && 'vida' in ev.alvo)).map(frase),
      ...perdeu.map((q, l) => (q > 0 ? `${l === 0 ? 'Você perdeu' : 'O Linu perdeu'} ${q} de vida.` : null)),
    ].filter(Boolean);
    if (fr.length) setAviso(fr.slice(0, 3).join(' '));
    if (n.vencedor === 0) xp.dar();
  };

  const pensando = useLinuJoga(!fim && e.vez === 1, () => fazer(jogadaDoLinuD(e, nivel, Math.random)), 800, passo);

  const novaPartida = (b0 = meu, b1 = dele) => {
    setE(novaPartidaD(b0, b1, Math.random, primeiroAJogar<Lado>(prefs.quemComeca, 0, 1)));
    setPasso((p) => p + 1);
    setMao(null);
    setAtacante(null);
    setAviso('');
    setNovos(new Set());
    xp.zerar();
  };

  const tocarNaMao = (uid: number) => {
    if (!minha) return;
    const m = eu.mao.find((x) => x.uid === uid)!;
    const c = cartaD(m.carta);
    setAtacante(null);
    if (c.tipo === 'armadilha') return fazer({ t: 'armar', uid });
    if (c.tipo === 'evolucao' || precisaDeAlvoD(m.carta)) {
      if (lances.some((a) => (a.t === 'jogar' || a.t === 'evoluir') && a.uid === uid)) setMao(mao === uid ? null : uid);
      return;
    }
    fazer({ t: 'jogar', uid });
  };

  const tocarNoAlvo = (alvo: AlvoD) => {
    if (!minha) return;
    if (mao !== null) {
      const c = cartaD(eu.mao.find((m) => m.uid === mao)!.carta);
      if (c.tipo === 'evolucao' && !('vida' in alvo)) fazer({ t: 'evoluir', uid: mao, sobre: alvo.uid });
      else fazer({ t: 'jogar', uid: mao, alvo });
      return;
    }
    if (atacante !== null && alvo.lado === 1) return fazer({ t: 'atacar', uid: atacante, alvo });
    if (alvo.lado === 0 && !('vida' in alvo)) {
      const x = eu.campo.find((y) => y.uid === alvo.uid);
      if (x && podeAtacarAgora(e, x)) setAtacante(atacante === x.uid ? null : x.uid);
    }
  };

  const ehAlvo = (alvo: AlvoD) => {
    if (mao !== null) {
      const c = cartaD(eu.mao.find((m) => m.uid === mao)!.carta);
      if (c.tipo === 'evolucao') return !('vida' in alvo) && ehValidaD(e, { t: 'evoluir', uid: mao, sobre: alvo.uid });
      return ehValidaD(e, { t: 'jogar', uid: mao, alvo });
    }
    if (atacante !== null) return ehValidaD(e, { t: 'atacar', uid: atacante, alvo });
    return false;
  };

  const danoEm = new Map<number, number>();
  for (const ev of e.eventos) if (ev.t === 'dano' && !('vida' in ev.alvo)) danoEm.set(ev.alvo.uid, (danoEm.get(ev.alvo.uid) ?? 0) + ev.n);

  const bicho = (lado: Lado, x: BichoD) => {
    const c = cartaD(x.carta);
    const alvo = ehAlvo({ lado, uid: x.uid });
    const pode = minha && lado === 0 && mao === null && podeAtacarAgora(e, x);
    const carta = (
      <View style={{ alignItems: 'center', transform: atacante === x.uid ? [{ translateY: -8 }] : undefined }}>
        <CartaTCG
          largura={64}
          titulo={c.nome}
          bioma={c.bioma}
          arte={c.arte}
          canto={x.embaixo.length ? <Selo texto={`E${x.embaixo.length}`} tamanho={14} fundo="#C4B5FD" /> : undefined}
          rodape={<Numeros id={x.carta} x={x} />}
          destaque={atacante === x.uid ? 'atacando' : alvo ? 'alvo' : pode ? 'pode' : null}
          apagada={lado === 0 && minha && x.atacou}
          onPress={() => tocarNoAlvo({ lado, uid: x.uid })}
          rotulo={`${c.nome}, ataque ${ataqueDe(x)}, vida ${vidaDe(x)}${(c.palavras ?? []).length ? `, ${(c.palavras ?? []).map((p) => NOME_PALAVRA[p]).join(', ')}` : ''}${pode ? ', pode atacar' : ''}${alvo ? ', alvo' : ''}`}
        />
        {danoEm.has(x.uid) && (
          <Surge key={`d${passo}`} style={{ position: 'absolute', top: 4 }}>
            <Selo texto={`−${danoEm.get(x.uid)}`} cor="#FFFFFF" fundo="#DC2626" tamanho={20} />
          </Surge>
        )}
      </View>
    );
    return <View key={x.uid}>{novos.has(x.uid) ? <Surge key={`n${x.uid}-${x.carta}`}>{carta}</Surge> : carta}</View>;
  };

  const armadilhas = (l: Lado) =>
    e.lados[l].armadilhas.map((t) => (
      <View key={t.uid} accessibilityLabel={l === 0 ? `Sua armadilha: ${cartaD(t.carta).nome}` : 'Armadilha do Linu, virada para baixo'}>
        <VersoCarta largura={26} altura={36} />
      </View>
    ));

  const alvoVidaLinu = ehAlvo({ lado: 1, vida: true });
  const instrucao = fim
    ? ''
    : !minha
      ? pensando
        ? ''
        : 'Vez do Linu.'
      : mao !== null
        ? cartaD(eu.mao.find((m) => m.uid === mao)!.carta).tipo === 'evolucao'
          ? 'Toque no filhote marcado para evoluir.'
          : 'Toque no alvo marcado de vermelho.'
        : atacante !== null
          ? 'Toque no alvo do ataque: um bicho do Linu ou o coração dele.'
          : 'Jogue cartas com o seu krill, toque num bicho seu para atacar, ou passe a vez.';
  const resultado = fim ? (e.vencedor === 0 ? { texto: 'Você venceu o Linu no Duelo de Bichos!', tom: 'vitoria' as const } : { texto: 'O Linu venceu desta vez.', tom: 'derrota' as const }) : null;

  return (
    <View className="w-full gap-3" style={{ alignSelf: 'stretch', maxWidth: 720 }}>
      <TutorialTCG jogo="duelo-de-bichos" passos={TUTORIAL} />

      <View className="gap-1 rounded-2xl bg-slate-100 p-2 dark:bg-slate-800/70">
        <View className="flex-row flex-wrap items-center gap-2">
          <Pressable accessibilityRole="button" accessibilityLabel={`Vida do Linu: ${linu.vida}${alvoVidaLinu ? ', alvo' : ''}`} disabled={!alvoVidaLinu} onPress={() => tocarNoAlvo({ lado: 1, vida: true })} className={alvoVidaLinu ? 'rounded-full border-2 border-red-500' : ''}>
            <Marcador rotulo="Linu" valor={Math.max(0, linu.vida)} destaque={e.vez === 1 && !fim} />
          </Pressable>
          <Selo texto={`${linu.krill}/${linu.krillMax}`} tamanho={18} fundo="#FDA4AF" />
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{linu.mao.length} na mão</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">baralho {linu.baralho.length}</Text>
          <View className="flex-row gap-1">{armadilhas(1)}</View>
        </View>
        <FileiraCartas rotulo="Bichos do Linu">{linu.campo.length ? linu.campo.map((x) => bicho(1, x)) : <Text className="py-6 text-xs text-slate-500 dark:text-slate-400">Nenhum bicho do Linu no campo.</Text>}</FileiraCartas>
      </View>

      <View className="items-center gap-2">
        <Text className="text-xs font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Turno {e.turno} · {nome(e.vez)}
        </Text>
        {!!aviso && <Text className="text-center text-xs font-semibold text-slate-700 dark:text-slate-200">{aviso}</Text>}
        {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}
        {minha && (
          <View className="flex-row flex-wrap justify-center gap-2">
            {(mao !== null || atacante !== null) && <BotaoTCG texto="Cancelar" onPress={() => (setMao(null), setAtacante(null))} />}
            <BotaoTCG texto="Passar a vez" cor="verde" onPress={() => fazer({ t: 'passar' })} />
          </View>
        )}
      </View>

      <View className="gap-1 rounded-2xl bg-emerald-50 p-2 dark:bg-emerald-950/40">
        <FileiraCartas rotulo="Seus bichos">{eu.campo.length ? eu.campo.map((x) => bicho(0, x)) : <Text className="py-6 text-xs text-slate-500 dark:text-slate-400">Nenhum bicho seu no campo.</Text>}</FileiraCartas>
        <View className="flex-row flex-wrap items-center gap-2">
          <Marcador rotulo="Você" valor={Math.max(0, eu.vida)} destaque={e.vez === 0 && !fim} />
          <View className="flex-row items-center gap-1">
            <Selo texto={`${eu.krill}/${eu.krillMax}`} tamanho={18} fundo="#FDA4AF" />
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">krill</Text>
          </View>
          <Text className="text-xs text-slate-500 dark:text-slate-400">baralho {eu.baralho.length}</Text>
          <View className="flex-row gap-1">{armadilhas(0)}</View>
        </View>
        <FileiraCartas rotulo="Sua mão">
          {eu.mao.map((m) => {
            const c = cartaD(m.carta);
            const pode = lances.some((a) => (a.t === 'jogar' || a.t === 'evoluir' || a.t === 'armar') && a.uid === m.uid);
            return (
              <CartaTCG
                key={m.uid}
                largura={96}
                titulo={c.nome}
                bioma={c.bioma}
                arte={c.arte}
                simbolo={c.tipo === 'truque' ? 'magia' : c.tipo === 'armadilha' ? 'armadilha' : undefined}
                canto={<Krill id={m.carta} />}
                linha={linhaDe(m.carta)}
                texto={c.texto}
                rodape={<Numeros id={m.carta} />}
                destaque={mao === m.uid ? 'selecionada' : pode ? 'pode' : null}
                apagada={minha && !pode}
                onPress={() => tocarNaMao(m.uid)}
                rotulo={`${c.nome}, ${linhaDe(m.carta)}, custa ${c.custo} de krill${c.texto ? `: ${c.texto}` : ''}${pode ? ', pode jogar' : ''}`}
              />
            );
          })}
        </FileiraCartas>
      </View>

      <View className="gap-2 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60">
        <Escolhas titulo="Seu baralho:" opcoes={BARALHOS} valor={meu} onEscolher={(b) => (setMeu(b), novaPartida(b, dele))} />
        <Escolhas titulo="Baralho do Linu:" opcoes={BARALHOS} valor={dele} onEscolher={(b) => (setDele(b), novaPartida(meu, b))} />
        <Escolhas titulo="Linu:" opcoes={NIVEIS} valor={nivel} onEscolher={setNivel} />
        <Text className="text-xs text-slate-500 dark:text-slate-400">{TEMAS_TCG[meu].sobre}</Text>
        <View className="items-start">
          <BotaoTCG texto="Nova partida" onPress={() => novaPartida()} />
        </View>
      </View>
    </View>
  );
}
