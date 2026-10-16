import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, LinuPensando, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { primeiroAJogar } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type NivelLinu } from '@/services/jogos-prefs';
import { BIOMAS, TEMAS_TCG, bichoDe } from '@/services/tcg/comum';
import {
  BARALHOS_B,
  NOME_HAB,
  aplicarB,
  cartaB,
  ehValida,
  energiaLivre,
  forcaDe,
  lancesSimples,
  novaPartidaB,
  podeAtacar,
  podeBloquear,
  precisaDeAlvoB,
  quemAge,
  resistenciaDe,
  type AcaoB,
  type AlvoB,
  type BaralhoB,
  type BichoEmJogo,
  type EstadoB,
  type EventoB,
  type Lado,
} from '@/services/tcg/biomas-engine';
import { jogadaDoLinuB } from '@/services/tcg/biomas-ia';
import { CartaTCG, FileiraCartas, Marcador, Selo, SimboloDesenho, VersoCarta } from './tcg/CartaTCG';
import { BotaoTCG, Escolhas, TutorialTCG } from './tcg/ui';

/**
 * Duelo dos Biomas: o jogo de cartas do LinuLingo com as regras principais do Magic: The Gathering
 * (motor em `services/tcg/biomas-engine.ts`), contra o Linu. Toque numa carta da mão para jogá-la
 * (com alvo, toque depois no bicho); na primeira fase principal, toque nos seus bichos para escolher
 * os atacantes. Quando o Linu ataca, toque num bicho seu e depois no atacante para bloquear.
 */

const NIVEIS: { id: NivelLinu; nome: string }[] = [
  { id: 'facil', nome: 'Fácil' },
  { id: 'medio', nome: 'Médio' },
  { id: 'dificil', nome: 'Difícil' },
];
const BARALHOS = (Object.keys(BARALHOS_B) as BaralhoB[]).map((id) => ({ id, nome: TEMAS_TCG[id].nome }));

const FASE: Record<EstadoB['fase'], string> = {
  principal1: 'Fase principal',
  bloqueio: 'Bloqueios',
  janela: 'Magias rápidas',
  principal2: 'Segunda fase principal',
};

const TUTORIAL = [
  { titulo: 'O objetivo', texto: 'Cada lado começa com 20 de vida. Zere a vida do Linu. Quem precisa comprar e não tem carta no baralho também perde.' },
  { titulo: 'Biomas e energia', texto: 'Jogue 1 bioma por turno. Cada bioma vira para dar 1 energia. O custo da carta aparece no canto: os pontos coloridos são do bioma, o resto é livre.' },
  { titulo: 'Chamar bichos', texto: 'Toque numa carta da mão para jogá-la. O bicho que chega só ataca no próximo turno, a não ser que tenha Ímpeto.' },
  { titulo: 'Atacar', texto: 'Na fase principal, toque nos seus bichos para escolher os atacantes e depois em “Atacar”. Eles viram. O Linu escolhe quem bloqueia quem; o que não for bloqueado acerta a vida dele.' },
  { titulo: 'Bloquear', texto: 'Quando o Linu ataca, toque num bicho seu e depois no atacante. Os dois trocam dano de uma vez. O dano some no fim do turno: só sai quem levou dano igual ou maior que a resistência.' },
  { titulo: 'Magias', texto: 'O feitiço só vai na sua fase principal. A magia rápida também vai depois dos bloqueios, para virar um combate. Habilidades: Voo, Alcance, Ímpeto, Vigia e Atropelar.' },
];

const nome = (l: Lado) => (l === 0 ? 'Você' : 'O Linu');

function textoDoEvento(ev: EventoB): string | null {
  switch (ev.t) {
    case 'lancou':
      return `${nome(ev.lado)} jogou ${tituloDe(ev.carta)}.`;
    case 'bioma':
      return `${nome(ev.lado)} pôs um bioma de ${cartaB(ev.carta).nome.toLowerCase()}.`;
    case 'atacam':
      return `${nome(ev.lado)} ataca com ${ev.uids.length} ${ev.uids.length === 1 ? 'bicho' : 'bichos'}.`;
    case 'bloqueiam':
      return ev.pares.length ? `${nome(ev.lado)} bloqueia com ${ev.pares.length}.` : `${nome(ev.lado)} não bloqueia.`;
    case 'dano':
      return 'vida' in ev.alvo ? `${ev.alvo.lado === 0 ? 'Você perdeu' : 'O Linu perdeu'} ${ev.n} de vida.` : null;
    case 'morreu':
      return `${tituloDe(ev.carta)} saiu do campo.`;
    case 'voltou':
      return `${tituloDe(ev.carta)} voltou para a mão.`;
    case 'vida':
      return `${nome(ev.lado)} ganhou ${ev.n} de vida.`;
    case 'semCarta':
      return `${nome(ev.lado)} não tinha carta para comprar.`;
    default:
      return null;
  }
}

const tituloDe = (id: string) => {
  const c = cartaB(id);
  return c.arte ? bichoDe(c.arte).nome : c.nome;
};

const linhaDe = (id: string) => {
  const c = cartaB(id);
  if (c.tipo === 'bioma') return 'Bioma';
  if (c.tipo === 'feitico') return 'Feitiço';
  if (c.tipo === 'rapida') return 'Magia rápida';
  return ['Bicho', ...(c.habs ?? []).map((h) => NOME_HAB[h])].join(' · ');
};

/** O custo no canto: um selo com o total e os pontos do bioma. */
function Custo({ id, pequeno = false }: { id: string; pequeno?: boolean }) {
  const c = cartaB(id);
  if (!c.custo) return null;
  const b = BIOMAS[c.bioma];
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
      {c.custo.livre > 0 && <Selo texto={c.custo.livre} tamanho={pequeno ? 13 : 15} fundo="#E7E5E4" />}
      {Array.from({ length: c.custo.bioma }, (_, k) => (
        <View key={k} style={{ width: pequeno ? 10 : 12, height: pequeno ? 10 : 12, borderRadius: 6, backgroundColor: b.cor, borderWidth: 1, borderColor: b.corEscura }} />
      ))}
    </View>
  );
}

function Numeros({ b, id }: { b?: BichoEmJogo; id: string }) {
  const c = cartaB(id);
  if (c.tipo !== 'bicho') return null;
  const f = b ? forcaDe(b) : c.forca!;
  const r = b ? resistenciaDe(b) - b.dano : c.resistencia!;
  const mexeu = b && (b.bonus > 0 || b.dano > 0);
  return <Selo texto={`${f}/${r}`} tamanho={16} fundo={mexeu ? '#FEF3C7' : '#FFFFFF'} />;
}

export default function DueloBiomasJogo() {
  const [prefs] = useJogosPrefs();
  const [meu, setMeu] = useState<BaralhoB>('gelo');
  const [dele, setDele] = useState<BaralhoB>('mata');
  const [nivel, setNivel] = useState<NivelLinu>(prefs.nivel);
  const [e, setE] = useState<EstadoB>(() => novaPartidaB('gelo', 'mata', Math.random, primeiroAJogar<Lado>(prefs.quemComeca, 0, 1)));
  const [passo, setPasso] = useState(0);
  const [mira, setMira] = useState<number | null>(null);
  const [atacantes, setAtacantes] = useState<number[]>([]);
  const [bloqSel, setBloqSel] = useState<number | null>(null);
  const [pares, setPares] = useState<[number, number][]>([]);
  const [aviso, setAviso] = useState('');
  // os bichos que acabaram de entrar (surgem com animação)
  const [novos, setNovos] = useState<Set<number>>(new Set());
  const xp = useXpDeVitoria('duelo-dos-biomas');

  const quem = quemAge(e);
  const fim = e.vencedor !== null;
  const minha = !fim && quem === 0;
  const eu = e.lados[0];
  const linu = e.lados[1];
  const lances = useMemo(() => (minha ? lancesSimples(e) : []), [e, minha]);

  const limparSelecao = () => {
    setMira(null);
    setAtacantes([]);
    setBloqSel(null);
    setPares([]);
  };

  const fazer = (a: AcaoB) => {
    if (!ehValida(e, a)) return;
    const n = aplicarB(e, a);
    const antes = new Set(e.lados.flatMap((L) => L.bichos.map((b) => b.uid)));
    setNovos(new Set(n.lados.flatMap((L) => L.bichos.filter((b) => !antes.has(b.uid)).map((b) => b.uid))));
    haptics.tapLight();
    setE(n);
    setPasso((p) => p + 1);
    limparSelecao();
    // o dano na vida vem somado (“Você perdeu 6 de vida”), e as outras frases na ordem
    const perdeu = [0, 1].map((l) => n.eventos.reduce((t, ev) => (ev.t === 'dano' && 'vida' in ev.alvo && ev.alvo.lado === l ? t + ev.n : t), 0));
    const frases = [
      ...n.eventos.filter((ev) => !(ev.t === 'dano' && 'vida' in ev.alvo)).map(textoDoEvento),
      ...perdeu.map((q, l) => (q > 0 ? `${l === 0 ? 'Você perdeu' : 'O Linu perdeu'} ${q} de vida.` : null)),
    ].filter(Boolean);
    if (frases.length) setAviso(frases.slice(0, 3).join(' '));
    if (n.vencedor === 0) xp.dar();
  };

  const pensando = useLinuJoga(!fim && quem === 1, () => fazer(jogadaDoLinuB(e, nivel, Math.random)), 750, passo);

  const novaPartida = (b0 = meu, b1 = dele) => {
    setNovos(new Set());
    setE(novaPartidaB(b0, b1, Math.random, primeiroAJogar<Lado>(prefs.quemComeca, 0, 1)));
    setPasso((p) => p + 1);
    setAviso('');
    limparSelecao();
    xp.zerar();
  };

  // ── toques ──
  const tocarNaMao = (uid: number) => {
    if (!minha) return;
    const m = eu.mao.find((x) => x.uid === uid)!;
    const c = cartaB(m.carta);
    if (c.tipo === 'bioma') return fazer({ t: 'bioma', uid });
    if (precisaDeAlvoB(m.carta)) {
      if (lances.some((a) => a.t === 'lancar' && a.uid === uid)) setMira(mira === uid ? null : uid);
      return;
    }
    fazer({ t: 'lancar', uid });
  };

  const tocarNoBicho = (lado: Lado, b: BichoEmJogo) => {
    if (!minha) return;
    if (mira !== null) {
      const alvo: AlvoB = { lado, uid: b.uid };
      if (ehValida(e, { t: 'lancar', uid: mira, alvo })) fazer({ t: 'lancar', uid: mira, alvo });
      return;
    }
    if (e.fase === 'principal1' && lado === 0 && !e.atacou && podeAtacar(e, b)) {
      setAtacantes((xs) => (xs.includes(b.uid) ? xs.filter((x) => x !== b.uid) : [...xs, b.uid]));
      return;
    }
    if (e.fase === 'bloqueio') {
      if (lado === 0) {
        if (b.virado) return;
        // tocar de novo num bloqueador já usado desfaz o bloqueio
        if (pares.some(([bl]) => bl === b.uid)) {
          setPares((ps) => ps.filter(([bl]) => bl !== b.uid));
          return;
        }
        setBloqSel(bloqSel === b.uid ? null : b.uid);
        return;
      }
      if (lado === 1 && bloqSel !== null && e.combate!.atacantes.includes(b.uid)) {
        const bloq = eu.bichos.find((x) => x.uid === bloqSel)!;
        if (!podeBloquear(bloq, b) || pares.some(([, at]) => at === b.uid)) return;
        setPares((ps) => [...ps, [bloqSel, b.uid]]);
        setBloqSel(null);
      }
    }
  };

  // ── o que mostrar ──
  const danoNoBicho = new Map<number, number>();
  for (const ev of e.eventos) if (ev.t === 'dano' && !('vida' in ev.alvo)) danoNoBicho.set(ev.alvo.uid, (danoNoBicho.get(ev.alvo.uid) ?? 0) + ev.n);

  const bichoNaMesa = (lado: Lado, b: BichoEmJogo) => {
    const c = cartaB(b.carta);
    const atacando = (e.combate?.atacantes.includes(b.uid) ?? false) || atacantes.includes(b.uid);
    const bloqueando = e.combate ? Object.values(e.combate.bloqueios).includes(b.uid) || pares.some(([bl]) => bl === b.uid) : false;
    const ehAlvo = mira !== null && ehValida(e, { t: 'lancar', uid: mira, alvo: { lado, uid: b.uid } });
    const podeIr = minha && e.fase === 'principal1' && lado === 0 && !e.atacou && podeAtacar(e, b);
    const destaque = bloqSel === b.uid ? 'selecionada' : ehAlvo ? 'alvo' : atacando ? 'atacando' : bloqueando ? 'selecionada' : podeIr ? 'pode' : null;
    const bloqueadoPor = e.combate ? e.combate.bloqueios[b.uid] ?? pares.find(([, at]) => at === b.uid)?.[0] : undefined;
    const carta = (
      <View style={{ alignItems: 'center', transform: atacando ? [{ translateY: lado === 0 ? -8 : 8 }] : undefined }}>
        <CartaTCG
          largura={62}
          titulo={tituloDe(b.carta)}
          bioma={c.bioma}
          arte={c.arte}
          virada={b.virado && !atacando}
          rodape={<Numeros b={b} id={b.carta} />}
          destaque={destaque}
          onPress={() => tocarNoBicho(lado, b)}
          rotulo={`${tituloDe(b.carta)}, ${forcaDe(b)} de força e ${resistenciaDe(b) - b.dano} de resistência${b.virado ? ', virado' : ''}${(c.habs ?? []).length ? `, ${(c.habs ?? []).map((h) => NOME_HAB[h]).join(', ')}` : ''}`}
        />
        {danoNoBicho.has(b.uid) && (
          <Surge key={`d${passo}`} style={{ position: 'absolute', top: 4 }}>
            <Selo texto={`−${danoNoBicho.get(b.uid)}`} cor="#FFFFFF" fundo="#DC2626" tamanho={20} />
          </Surge>
        )}
        {bloqueadoPor !== undefined && (
          <Text numberOfLines={1} style={{ fontSize: 9, fontWeight: '800', maxWidth: 66 }} className="text-orange-700 dark:text-orange-300">
            bloqueado
          </Text>
        )}
      </View>
    );
    return <View key={b.uid}>{novos.has(b.uid) ? <Surge key={`n${b.uid}`}>{carta}</Surge> : carta}</View>;
  };

  const instrucao = (() => {
    if (fim) return '';
    if (!minha) return pensando ? '' : 'Vez do Linu.';
    if (mira !== null) return 'Escolha o alvo: toque num bicho marcado de vermelho.';
    if (e.fase === 'bloqueio') return bloqSel !== null ? 'Agora toque no atacante que esse bicho vai bloquear.' : 'O Linu atacou! Toque num bicho seu e depois no atacante para bloquear, ou confirme sem bloquear.';
    if (e.fase === 'janela') return 'Quer usar uma magia rápida antes do dano? Toque nela, ou passe.';
    if (e.fase === 'principal1') return eu.biomaJogado ? 'Jogue cartas, escolha atacantes (toque nos seus bichos) ou termine o turno.' : 'Jogue um bioma e cartas da mão. Toque nos seus bichos para atacar.';
    return 'Segunda fase principal: jogue mais cartas ou termine o turno.';
  })();

  const resultado = fim ? (e.vencedor === 0 ? { texto: 'Você venceu o Linu no Duelo dos Biomas!', tom: 'vitoria' as const } : { texto: 'O Linu venceu desta vez.', tom: 'derrota' as const }) : null;
  const livres = (l: Lado) => energiaLivre(e.lados[l]).length;

  return (
    <View className="w-full gap-3" style={{ alignSelf: 'stretch', maxWidth: 720 }}>
      <TutorialTCG jogo="duelo-dos-biomas" passos={TUTORIAL} />

      {/* o lado do Linu */}
      <View className="gap-1 rounded-2xl bg-slate-100 p-2 dark:bg-slate-800/70">
        <View className="flex-row flex-wrap items-center gap-2">
          <Marcador rotulo="Linu" valor={Math.max(0, linu.vida)} destaque={quem === 1 && !fim} />
          <View className="flex-row items-center gap-1">
            <SimboloDesenho simbolo="energia" bioma={dele} tamanho={16} />
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {livres(1)}/{linu.biomas.length}
            </Text>
          </View>
          <View className="flex-row items-center gap-1">
            <VersoCarta largura={12} altura={17} />
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{linu.mao.length} na mão</Text>
          </View>
          <Text className="text-xs text-slate-500 dark:text-slate-400">baralho {linu.baralho.length}</Text>
        </View>
        <FileiraCartas rotulo="Bichos do Linu">{linu.bichos.length ? linu.bichos.map((b) => bichoNaMesa(1, b)) : <Text className="py-6 text-xs text-slate-500 dark:text-slate-400">Nenhum bicho do Linu no campo.</Text>}</FileiraCartas>
      </View>

      {/* o meio: a fase, o aviso e os botões */}
      <View className="items-center gap-2">
        <Text className="text-xs font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Turno {e.turno} · {nome(e.vez)} · {FASE[e.fase]}
        </Text>
        {!!aviso && <Text className="text-center text-xs font-semibold text-slate-700 dark:text-slate-200">{aviso}</Text>}
        {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}
        {minha && (
          <View className="flex-row flex-wrap justify-center gap-2">
            {e.fase === 'principal1' && atacantes.length > 0 && <BotaoTCG texto={`Atacar com ${atacantes.length}`} cor="laranja" onPress={() => fazer({ t: 'atacar', uids: atacantes })} />}
            {e.fase === 'bloqueio' && <BotaoTCG texto={pares.length ? `Confirmar ${pares.length} ${pares.length === 1 ? 'bloqueio' : 'bloqueios'}` : 'Não bloquear'} cor="azul" onPress={() => fazer({ t: 'bloquear', pares })} />}
            {e.fase === 'janela' && <BotaoTCG texto="Passar" onPress={() => fazer({ t: 'passar' })} />}
            {mira !== null && <BotaoTCG texto="Cancelar" onPress={() => setMira(null)} />}
            {(e.fase === 'principal1' || e.fase === 'principal2') && <BotaoTCG texto="Fim do turno" cor="verde" onPress={() => fazer({ t: 'fim' })} />}
          </View>
        )}
      </View>

      {/* o seu lado */}
      <View className="gap-1 rounded-2xl bg-emerald-50 p-2 dark:bg-emerald-950/40">
        <FileiraCartas rotulo="Seus bichos">{eu.bichos.length ? eu.bichos.map((b) => bichoNaMesa(0, b)) : <Text className="py-6 text-xs text-slate-500 dark:text-slate-400">Nenhum bicho seu no campo.</Text>}</FileiraCartas>
        <View className="flex-row flex-wrap items-center gap-2">
          <Marcador rotulo="Você" valor={Math.max(0, eu.vida)} destaque={quem === 0 && !fim} />
          <View className="flex-row items-center gap-1">
            <SimboloDesenho simbolo="energia" bioma={meu} tamanho={16} />
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {livres(0)}/{eu.biomas.length} energia
            </Text>
          </View>
          <Text className="text-xs text-slate-500 dark:text-slate-400">baralho {eu.baralho.length}</Text>
        </View>
        <FileiraCartas rotulo="Sua mão">
          {eu.mao.map((m) => {
            const c = cartaB(m.carta);
            const pode = lances.some((a) => (a.t === 'bioma' || a.t === 'lancar') && a.uid === m.uid);
            return (
              <CartaTCG
                key={m.uid}
                largura={96}
                titulo={tituloDe(m.carta)}
                bioma={c.bioma}
                arte={c.arte}
                simbolo={c.tipo === 'bioma' ? 'bioma' : c.tipo === 'rapida' ? 'rapida' : c.tipo === 'feitico' ? 'magia' : undefined}
                canto={<Custo id={m.carta} />}
                linha={linhaDe(m.carta)}
                texto={c.texto}
                rodape={<Numeros id={m.carta} />}
                destaque={mira === m.uid ? 'selecionada' : pode ? 'pode' : null}
                apagada={minha && !pode}
                onPress={() => tocarNaMao(m.uid)}
                rotulo={`${tituloDe(m.carta)}, ${linhaDe(m.carta)}${c.texto ? `: ${c.texto}` : ''}${pode ? ', pode jogar' : ''}`}
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
