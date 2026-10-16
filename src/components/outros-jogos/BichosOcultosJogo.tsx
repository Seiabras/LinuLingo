import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, LinuPensando, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type NivelLinu } from '@/services/jogos-prefs';
import { primeiroAJogar } from '@/services/quem-comeca';
import { TEMAS_TCG, bichoDe } from '@/services/tcg/comum';
import {
  BARALHOS_O,
  armadilhasProntas,
  aplicarO,
  atqDe,
  cartaO,
  defDe,
  ehValidaO,
  lancesO,
  novaPartidaO,
  podeAtacarO,
  quemAge,
  sacrificiosDe,
  type AcaoO,
  type BaralhoO,
  type Baixada,
  type BichoO,
  type EstadoO,
  type EventoO,
  type Lado,
} from '@/services/tcg/ocultos-engine';
import { jogadaDoLinuO } from '@/services/tcg/ocultos-ia';
import { CartaTCG, FileiraCartas, Marcador, Selo, VersoCarta } from './tcg/CartaTCG';
import { BotaoTCG, Escolhas, TutorialTCG } from './tcg/ui';

/**
 * Bichos Ocultos: o jogo de cartas do LinuLingo com as regras principais do Yu-Gi-Oh! Trading Card
 * Game (motor em `services/tcg/ocultos-engine.ts`), contra o Linu. Toque num bicho da mão e escolha
 * se ele entra de frente ou virado (com sacrifício, toque antes nos bichos que vão embora). Na
 * batalha, toque no seu atacante e depois no bicho do Linu.
 */

const NIVEIS: { id: NivelLinu; nome: string }[] = [
  { id: 'facil', nome: 'Fácil' },
  { id: 'medio', nome: 'Médio' },
  { id: 'dificil', nome: 'Difícil' },
];
const BARALHOS = (Object.keys(BARALHOS_O) as BaralhoO[]).map((id) => ({ id, nome: TEMAS_TCG[id].nome }));

const FASE: Record<EstadoO['fase'], string> = {
  principal1: 'Fase principal',
  batalha: 'Batalha',
  principal2: 'Segunda fase principal',
  resposta: 'Armadilha?',
};

const TUTORIAL = [
  { titulo: 'O objetivo', texto: 'Cada lado começa com 8000 de vida. Zere a vida do Linu. Quem precisa comprar e não tem carta no baralho também perde.' },
  { titulo: 'Chamar', texto: 'Uma chamada por turno. Toque num bicho da mão e escolha: de frente, em ataque, ou virado, em defesa, sem o Linu saber quem é. Com 5 ou 6 estrelas, sacrifique 1 bicho seu; com 7 ou mais, 2.' },
  { titulo: 'Batalhar', texto: 'Toque em “Batalha”, depois no seu bicho e no do Linu. ATQ contra ATQ: o mais fraco cai e o dono perde a diferença. ATQ contra DEF: o defensor cai sem dano, mas DEF maior faz você perder a diferença.' },
  { titulo: 'Magias e armadilhas', texto: 'A magia faz efeito na hora. A armadilha fica baixada e, a partir do próximo turno, você pode dispará-la quando o Linu chamar um bicho ou atacar.' },
  { titulo: 'Posição', texto: 'Uma vez por turno, toque num bicho seu para trocar entre ataque e defesa (não no turno em que ele entrou). O virado vira para cima em ataque.' },
];

const nome = (l: Lado) => (l === 0 ? 'Você' : 'O Linu');
const tituloDe = (id: string) => {
  const c = cartaO(id);
  return c.arte ? bichoDe(c.arte).nome : c.nome;
};
const curto = (id: string) => tituloDe(id).split(',')[0]!;

function textoDoEvento(ev: EventoO): string | null {
  switch (ev.t) {
    case 'chamou':
      return ev.carta ? `${nome(ev.lado)} chamou ${curto(ev.carta)}${ev.sacrificios ? ` (com ${ev.sacrificios} sacrifício${ev.sacrificios > 1 ? 's' : ''})` : ''}.` : `${nome(ev.lado)} chamou um bicho virado.`;
    case 'magia':
      return `${nome(ev.lado)} usou ${cartaO(ev.carta).nome}.`;
    case 'baixou':
      return `${nome(ev.lado)} baixou uma carta.`;
    case 'armadilha':
      return `Armadilha: ${cartaO(ev.carta).nome}!`;
    case 'posicao':
      return `${curto(ev.carta)} ficou em ${ev.posicao}.`;
    case 'ataca':
      return `${nome(ev.lado)} atacou${ev.alvo ? ` ${curto(ev.alvo)}` : ''}.`;
    case 'revelou':
      return `O virado era ${curto(ev.carta)}.`;
    case 'vida':
      return ev.n < 0 ? `${ev.lado === 0 ? 'Você perdeu' : 'O Linu perdeu'} ${-ev.n} de vida.` : `${nome(ev.lado)} ganhou ${ev.n} de vida.`;
    case 'caiu':
      return `${curto(ev.carta)} caiu.`;
    case 'destruiu':
      return `${cartaO(ev.carta).nome} foi destruída.`;
    case 'semCarta':
      return `${nome(ev.lado)} não tinha carta para comprar.`;
    default:
      return null;
  }
}

const linhaDe = (id: string) => {
  const c = cartaO(id);
  if (c.tipo === 'magia') return 'Magia';
  if (c.tipo === 'armadilha') return 'Armadilha';
  const k = sacrificiosDe(id);
  return `Bicho · ${'★'.repeat(c.estrelas!)}${k ? ` · ${k} sacrifício${k > 1 ? 's' : ''}` : ''}`;
};

function Numeros({ id, b }: { id: string; b?: BichoO }) {
  const c = cartaO(id);
  if (c.tipo !== 'bicho') return null;
  const atq = b ? atqDe(b) : c.atq!;
  return <Selo texto={`${atq}/${c.def}`} tamanho={15} fundo={b && b.bonus ? '#FEF3C7' : '#FFFFFF'} />;
}

export default function BichosOcultosJogo() {
  const [prefs] = useJogosPrefs();
  const [meu, setMeu] = useState<BaralhoO>('gelo');
  const [dele, setDele] = useState<BaralhoO>('savana');
  const [nivel, setNivel] = useState<NivelLinu>(prefs.nivel);
  // quem começa: a escolha comum dos jogos (jogosPrefs.quemComeca), que aparece no cartão do jogo
  const [e, setE] = useState<EstadoO>(() => novaPartidaO('gelo', 'savana', Math.random, primeiroAJogar<Lado>(prefs.quemComeca, 0, 1)));
  const [passo, setPasso] = useState(0);
  // a carta da mão escolhida (bicho para chamar, magia com alvo) e os sacrifícios marcados
  const [mao, setMao] = useState<number | null>(null);
  const [sacs, setSacs] = useState<number[]>([]);
  // o bicho do campo escolhido (para atacar ou mudar de posição)
  const [sel, setSel] = useState<number | null>(null);
  const [aviso, setAviso] = useState('');
  const [novos, setNovos] = useState<Set<number>>(new Set());
  const xp = useXpDeVitoria('bichos-ocultos');

  const quem = quemAge(e);
  const fim = e.vencedor !== null;
  const minha = !fim && quem === 0;
  const eu = e.lados[0];
  const linu = e.lados[1];
  const lances = useMemo(() => (minha ? lancesO(e) : []), [e, minha]);

  const limpar = () => {
    setMao(null);
    setSacs([]);
    setSel(null);
  };

  const fazer = (a: AcaoO) => {
    if (!ehValidaO(e, a)) return;
    const n = aplicarO(e, a);
    const antes = new Set(e.lados.flatMap((L) => L.bichos.map((b) => b.uid)));
    setNovos(new Set(n.lados.flatMap((L) => L.bichos.filter((b) => !antes.has(b.uid)).map((b) => b.uid))));
    haptics.tapLight();
    setE(n);
    setPasso((p) => p + 1);
    limpar();
    const frases = n.eventos.map(textoDoEvento).filter(Boolean);
    if (frases.length) setAviso(frases.slice(0, 3).join(' '));
    if (n.vencedor === 0) xp.dar();
  };

  const pensando = useLinuJoga(!fim && quem === 1, () => fazer(jogadaDoLinuO(e, nivel, Math.random)), 750, passo);

  const novaPartida = (b0 = meu, b1 = dele) => {
    setNovos(new Set());
    setE(novaPartidaO(b0, b1, Math.random, primeiroAJogar<Lado>(prefs.quemComeca, 0, 1)));
    setPasso((p) => p + 1);
    setAviso('');
    limpar();
    xp.zerar();
  };

  const cartaNaMao = mao !== null ? eu.mao.find((m) => m.uid === mao) : undefined;
  const cMao = cartaNaMao ? cartaO(cartaNaMao.carta) : undefined;
  const precisa = cMao?.tipo === 'bicho' ? sacrificiosDe(cartaNaMao!.carta) : 0;

  // ── toques ──
  const tocarNaMao = (uid: number) => {
    if (!minha) return;
    const m = eu.mao.find((x) => x.uid === uid)!;
    const c = cartaO(m.carta);
    const meus = lances.filter((a) => 'uid' in a && a.uid === uid);
    if (!meus.length) return;
    setSel(null);
    if (c.tipo === 'armadilha') return fazer({ t: 'baixar', uid });
    if (c.tipo === 'magia' && meus.length === 1 && meus[0]!.t === 'magia' && !meus[0]!.alvo) return fazer(meus[0]!);
    setSacs([]);
    setMao(mao === uid ? null : uid);
  };

  const tocarNoBicho = (lado: Lado, b: BichoO) => {
    if (!minha) return;
    // a magia com alvo
    if (cMao?.tipo === 'magia') {
      const a: AcaoO = { t: 'magia', uid: mao!, alvo: { lado, uid: b.uid } };
      if (ehValidaO(e, a)) fazer(a);
      return;
    }
    // os sacrifícios para a chamada
    if (cMao?.tipo === 'bicho' && lado === 0 && precisa > 0) {
      setSacs((xs) => (xs.includes(b.uid) ? xs.filter((x) => x !== b.uid) : xs.length < precisa ? [...xs, b.uid] : xs));
      return;
    }
    if (e.fase === 'batalha') {
      if (lado === 0) {
        if (podeAtacarO(e, b)) setSel(sel === b.uid ? null : b.uid);
        return;
      }
      if (sel !== null) fazer({ t: 'atacar', uid: sel, alvo: b.uid });
      return;
    }
    if (lado === 0) setSel(sel === b.uid ? null : b.uid);
  };

  const tocarNaBaixada = (lado: Lado, x: Baixada) => {
    if (!minha || cMao?.efeito !== 'vendaval' || lado !== 1) return;
    fazer({ t: 'magia', uid: mao!, alvo: { lado, uid: x.uid } });
  };

  // ── o que mostrar ──
  const bichoNaMesa = (lado: Lado, b: BichoO) => {
    const c = cartaO(b.carta);
    const escondido = b.virado && lado === 1;
    const ehSac = sacs.includes(b.uid);
    const alvoMagia = cMao?.tipo === 'magia' && ehValidaO(e, { t: 'magia', uid: mao!, alvo: { lado, uid: b.uid } });
    const alvoAtaque = e.fase === 'batalha' && sel !== null && lado === 1 && ehValidaO(e, { t: 'atacar', uid: sel, alvo: b.uid });
    const podeIr = minha && lado === 0 && podeAtacarO(e, b);
    const destaque = ehSac ? 'atacando' : alvoMagia || alvoAtaque ? 'alvo' : sel === b.uid ? 'selecionada' : podeIr ? 'pode' : null;
    const w = 60;
    const carta = escondido ? (
      <Pressable accessibilityRole="button" accessibilityLabel={`Bicho virado do Linu${alvoAtaque || alvoMagia ? ', toque para escolher' : ''}`} onPress={() => tocarNoBicho(lado, b)} style={{ transform: [{ rotate: '90deg' }], margin: 10, borderWidth: alvoAtaque || alvoMagia ? 3 : 0, borderColor: '#DC2626', borderRadius: 6 }}>
        <VersoCarta largura={w} altura={Math.round(w * 1.4)} />
      </Pressable>
    ) : (
      <CartaTCG
        largura={w}
        titulo={curto(b.carta)}
        bioma={c.bioma}
        arte={c.arte}
        apagada={b.virado}
        virada={b.posicao === 'defesa'}
        rodape={<Numeros id={b.carta} b={b} />}
        destaque={destaque}
        onPress={() => tocarNoBicho(lado, b)}
        rotulo={`${tituloDe(b.carta)}, ${atqDe(b)} de ataque e ${defDe(b)} de defesa, em ${b.posicao}${b.virado ? ', virado' : ''}${alvoMagia || alvoAtaque ? ', toque para escolher' : podeIr ? ', pode atacar' : lado === 0 && cMao?.tipo === 'bicho' && precisa > 0 ? ', toque para o sacrifício' : ''}`}
      />
    );
    return (
      <View key={b.uid} style={{ alignItems: 'center' }}>
        {novos.has(b.uid) ? <Surge key={`n${b.uid}`}>{carta}</Surge> : carta}
        <Text style={{ fontSize: 9, fontWeight: '800' }} className="text-slate-600 dark:text-slate-300">
          {ehSac ? 'sacrifício' : b.virado ? 'virado' : b.posicao === 'ataque' ? 'ataque' : 'defesa'}
        </Text>
      </View>
    );
  };

  const baixadas = (lado: Lado) => {
    const L = e.lados[lado];
    if (!L.baixadas.length) return null;
    return (
      <View className="flex-row flex-wrap items-center gap-1">
        <Text className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Baixadas:</Text>
        {L.baixadas.map((x) =>
          lado === 1 ? (
            <Pressable key={x.uid} accessibilityRole="button" accessibilityLabel={`Carta baixada do Linu${cMao?.efeito === 'vendaval' ? ', toque para destruir' : ''}`} onPress={() => tocarNaBaixada(lado, x)} style={{ borderWidth: cMao?.efeito === 'vendaval' ? 2 : 0, borderColor: '#DC2626', borderRadius: 4 }}>
              <VersoCarta largura={22} altura={31} />
            </Pressable>
          ) : (
            <View key={x.uid} className="rounded bg-violet-100 px-1.5 py-0.5 dark:bg-violet-900/60">
              <Text className="text-[10px] font-bold text-violet-800 dark:text-violet-200">
                {cartaO(x.carta).nome}
                {x.posta >= e.turno ? ' (próx. turno)' : ''}
              </Text>
            </View>
          ),
        )}
      </View>
    );
  };

  const resposta = minha && e.fase === 'resposta' ? armadilhasProntas(e, 0, e.gatilho!) : [];
  const gatilhoTexto = (() => {
    if (e.fase !== 'resposta' || !e.gatilho) return '';
    const b = linu.bichos.find((x) => x.uid === e.gatilho!.bicho);
    if (e.gatilho.tipo === 'chamada') return `O Linu chamou ${b ? curto(b.carta) : 'um bicho'}. Usar uma armadilha?`;
    return `${b ? curto(b.carta) : 'Um bicho'} do Linu vai atacar. Usar uma armadilha?`;
  })();

  const instrucao = (() => {
    if (fim) return '';
    if (!minha) return pensando ? '' : 'Vez do Linu.';
    if (e.fase === 'resposta') return gatilhoTexto;
    if (cMao?.tipo === 'bicho') return precisa > sacs.length ? `Toque em ${precisa - sacs.length} bicho${precisa - sacs.length > 1 ? 's' : ''} seu${precisa - sacs.length > 1 ? 's' : ''} para o sacrifício.` : 'Escolha: de frente (ataque) ou virado (defesa).';
    if (cMao?.tipo === 'magia') return cMao.efeito === 'vendaval' ? 'Toque numa carta baixada do Linu.' : 'Toque no bicho marcado de vermelho.';
    if (e.fase === 'batalha') return sel !== null ? (linu.bichos.length ? 'Toque no bicho do Linu que vai ser atacado.' : 'Toque em “Ataque direto”.') : 'Toque num bicho seu marcado de verde para atacar, ou termine a batalha.';
    if (sel !== null) return 'Mude a posição desse bicho, ou toque em outra carta.';
    return e.turno === 1 ? 'Primeiro turno: chame um bicho e baixe armadilhas. Quem começa não ataca agora.' : eu.chamou ? 'Jogue magias, baixe armadilhas, vá para a batalha ou termine o turno.' : 'Chame um bicho, jogue magias e baixe armadilhas.';
  })();

  const resultado = fim ? (e.vencedor === 0 ? { texto: 'Você venceu o Linu nos Bichos Ocultos!', tom: 'vitoria' as const } : { texto: 'O Linu venceu desta vez.', tom: 'derrota' as const }) : null;
  const chamadaPronta = cMao?.tipo === 'bicho' && sacs.length === precisa;
  const selBicho = sel !== null ? eu.bichos.find((b) => b.uid === sel) : undefined;

  return (
    <View className="w-full gap-3">
      <TutorialTCG jogo="bichos-ocultos" passos={TUTORIAL} />

      {/* o lado do Linu */}
      <View className="gap-1 rounded-2xl bg-slate-100 p-2 dark:bg-slate-800/70">
        <View className="flex-row flex-wrap items-center gap-2">
          <Marcador rotulo="Linu" valor={linu.vida} destaque={quem === 1 && !fim} />
          <View className="flex-row items-center gap-1">
            <VersoCarta largura={12} altura={17} />
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{linu.mao.length} na mão</Text>
          </View>
          <Text className="text-xs text-slate-500 dark:text-slate-400">baralho {linu.baralho.length}</Text>
        </View>
        {baixadas(1)}
        <FileiraCartas rotulo="Bichos do Linu">{linu.bichos.length ? linu.bichos.map((b) => bichoNaMesa(1, b)) : <Text className="py-6 text-xs text-slate-500 dark:text-slate-400">Nenhum bicho do Linu no campo.</Text>}</FileiraCartas>
      </View>

      {/* o meio */}
      <View className="items-center gap-2">
        <Text className="text-xs font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Turno {e.turno} · {nome(e.vez)} · {FASE[e.fase]}
        </Text>
        {!!aviso && <Text className="text-center text-xs font-semibold text-slate-700 dark:text-slate-200">{aviso}</Text>}
        {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}
        {minha && (
          <View className="flex-row flex-wrap justify-center gap-2">
            {e.fase === 'resposta' && (
              <>
                {resposta.map((x) => (
                  <BotaoTCG key={x.uid} texto={cartaO(x.carta).nome} cor="laranja" onPress={() => fazer({ t: 'responder', uid: x.uid })} />
                ))}
                <BotaoTCG texto="Não usar" onPress={() => fazer({ t: 'responder', uid: null })} />
              </>
            )}
            {cMao?.tipo === 'bicho' && (
              <>
                <BotaoTCG texto="De frente (ataque)" cor="laranja" desligado={!chamadaPronta} onPress={() => fazer({ t: 'chamar', uid: mao!, modo: 'ataque', sacrificios: sacs })} />
                <BotaoTCG texto="Virado (defesa)" cor="azul" desligado={!chamadaPronta} onPress={() => fazer({ t: 'chamar', uid: mao!, modo: 'virado', sacrificios: sacs })} />
              </>
            )}
            {mao !== null && <BotaoTCG texto="Cancelar" onPress={limpar} />}
            {selBicho && e.fase !== 'batalha' && mao === null && <BotaoTCG texto={selBicho.virado ? 'Virar para cima' : selBicho.posicao === 'ataque' ? 'Pôr em defesa' : 'Pôr em ataque'} cor="azul" desligado={!lances.some((a) => a.t === 'posicao' && a.uid === sel)} onPress={() => fazer({ t: 'posicao', uid: sel! })} />}
            {e.fase === 'batalha' && sel !== null && linu.bichos.length === 0 && <BotaoTCG texto="Ataque direto" cor="laranja" onPress={() => fazer({ t: 'atacar', uid: sel, alvo: null })} />}
            {e.fase === 'principal1' && mao === null && lances.some((a) => a.t === 'batalha') && <BotaoTCG texto="Batalha" cor="laranja" onPress={() => fazer({ t: 'batalha' })} />}
            {e.fase === 'batalha' && <BotaoTCG texto="Fim da batalha" onPress={() => fazer({ t: 'fimBatalha' })} />}
            {e.fase !== 'resposta' && mao === null && <BotaoTCG texto="Fim do turno" cor="verde" onPress={() => fazer({ t: 'fim' })} />}
          </View>
        )}
      </View>

      {/* o seu lado */}
      <View className="gap-1 rounded-2xl bg-emerald-50 p-2 dark:bg-emerald-950/40">
        <FileiraCartas rotulo="Seus bichos">{eu.bichos.length ? eu.bichos.map((b) => bichoNaMesa(0, b)) : <Text className="py-6 text-xs text-slate-500 dark:text-slate-400">Nenhum bicho seu no campo.</Text>}</FileiraCartas>
        {baixadas(0)}
        <View className="flex-row flex-wrap items-center gap-2">
          <Marcador rotulo="Você" valor={eu.vida} destaque={quem === 0 && !fim} />
          <Text className="text-xs text-slate-500 dark:text-slate-400">baralho {eu.baralho.length}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">{eu.chamou ? 'chamada do turno: já foi' : 'chamada do turno: falta'}</Text>
        </View>
        <FileiraCartas rotulo="Sua mão">
          {eu.mao.map((m) => {
            const c = cartaO(m.carta);
            const pode = lances.some((a) => 'uid' in a && a.uid === m.uid && a.t !== 'posicao' && a.t !== 'atacar');
            return (
              <CartaTCG
                key={m.uid}
                largura={96}
                titulo={curto(m.carta)}
                bioma={c.bioma}
                arte={c.arte}
                simbolo={c.tipo === 'magia' ? 'magia' : c.tipo === 'armadilha' ? 'armadilha' : undefined}
                canto={c.tipo === 'bicho' ? <Selo texto={`${c.estrelas}★`} tamanho={16} fundo="#FEF3C7" /> : undefined}
                linha={linhaDe(m.carta)}
                texto={c.texto || undefined}
                rodape={<Numeros id={m.carta} />}
                destaque={mao === m.uid ? 'selecionada' : pode ? 'pode' : null}
                apagada={minha && !pode}
                onPress={() => tocarNaMao(m.uid)}
                rotulo={`${tituloDe(m.carta)}, ${linhaDe(m.carta)}${c.tipo === 'bicho' ? `, ${c.atq} de ataque e ${c.def} de defesa` : `: ${c.texto}`}${pode ? ', pode jogar' : ''}`}
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
