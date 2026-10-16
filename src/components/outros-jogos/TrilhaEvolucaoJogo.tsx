import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, LinuPensando, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type NivelLinu } from '@/services/jogos-prefs';
import { primeiroAJogar } from '@/services/quem-comeca';
import { BIOMAS, TEMAS_TCG, bichoDe } from '@/services/tcg/comum';
import {
  BANCO_MAX,
  BARALHOS_T,
  TEXTO_EFEITO,
  aplicarT,
  cartaT,
  ehBasico,
  ehValidaT,
  lancesT,
  novaPartidaT,
  podePagarAtaque,
  pvRestante,
  quemAge,
  type AcaoT,
  type BaralhoT,
  type BichoT,
  type EstadoT,
  type EventoT,
  type Lado,
} from '@/services/tcg/trilha-engine';
import { jogadaDoLinuT } from '@/services/tcg/trilha-ia';
import { CartaTCG, FileiraCartas, Marcador, Selo, VersoCarta } from './tcg/CartaTCG';
import { BotaoTCG, Escolhas, TutorialTCG } from './tcg/ui';

/**
 * Trilha da Evolução: o jogo de cartas do LinuLingo com as regras principais do Pokémon Trading Card
 * Game (motor em `services/tcg/trilha-engine.ts`), contra o Linu. No começo, toque nos bichos
 * básicos da mão: o primeiro vai para a frente, os outros para o banco. No turno, toque numa carta
 * da mão para jogá-la (energia, evolução e algumas cartas de apoio pedem depois um bicho seu) e
 * ataque com os botões do seu bicho ativo.
 */

const NIVEIS: { id: NivelLinu; nome: string }[] = [
  { id: 'facil', nome: 'Fácil' },
  { id: 'medio', nome: 'Médio' },
  { id: 'dificil', nome: 'Difícil' },
];
const BARALHOS = (Object.keys(BARALHOS_T) as BaralhoT[]).map((id) => ({ id, nome: TEMAS_TCG[id].nome }));

const TUTORIAL = [
  { titulo: 'O objetivo', texto: 'Cada lado separa 6 cartas de prêmio. Cada bicho do Linu que você derruba vale 1 prêmio. Pegue os 6, ou deixe o Linu sem bicho no campo.' },
  { titulo: 'O começo', texto: 'Toque nos bichos básicos da sua mão: o primeiro vai para a frente (o ativo), os outros para o banco, até 5. Depois toque em “Pronto”.' },
  { titulo: 'Energia', texto: 'Uma vez por turno, toque numa energia da mão e depois num bicho seu para prendê-la. O ataque custa energia: os pontos coloridos são do bioma do bicho, o número é livre.' },
  { titulo: 'Os estágios', texto: 'O girino vira sapo, o filhote vira adulto: toque na carta do estágio seguinte e depois no bicho certo. Não vale no seu primeiro turno, nem no bicho que acabou de entrar.' },
  { titulo: 'Atacar', texto: 'Os botões embaixo do seu ativo são os ataques dele. Atacar encerra o turno. Fraqueza dobra o dano; resistência tira 30. Sem ataque que preste, toque em “Passar a vez”.' },
  { titulo: 'Recuar', texto: 'Uma vez por turno, troque o ativo por um bicho do banco: descarte do ativo tantas energias quanto o recuo dele. O Assobio troca de graça.' },
];

const nome = (l: Lado) => (l === 0 ? 'Você' : 'O Linu');
const tituloDe = (id: string) => {
  const c = cartaT(id);
  return c.arte ? bichoDe(c.arte).nome : c.nome;
};
const curto = (id: string) => tituloDe(id).split(',')[0]!;

function textoDoEvento(ev: EventoT): string | null {
  switch (ev.t) {
    case 'basico':
      return `${nome(ev.lado)} pôs ${curto(ev.carta)} no banco.`;
    case 'evoluiu':
      return `${curto(ev.de)} virou ${curto(ev.carta)}!`;
    case 'energia':
      return `${nome(ev.lado)} prendeu energia em ${curto(ev.em)}.`;
    case 'apoio':
      return `${nome(ev.lado)} usou ${cartaT(ev.carta).nome}.`;
    case 'recuou':
      return `${curto(ev.entra)} foi para a frente.`;
    case 'ataque':
      return `${curto(ev.carta)} usou ${ev.ataque}.`;
    case 'moeda':
      return ev.cara ? 'Moeda: cara!' : 'Moeda: coroa.';
    case 'dano':
      return ev.fraqueza ? `Fraqueza: ${ev.n} de dano!` : ev.resistencia ? `Resistência: só ${ev.n} de dano.` : null;
    case 'caiu':
      return `${curto(ev.carta)} caiu.`;
    case 'premio':
      return `${nome(ev.lado)} pegou um prêmio (faltam ${ev.restam}).`;
    case 'promoveu':
      return `${nome(ev.lado)} pôs ${curto(ev.carta)} na frente.`;
    case 'semCarta':
      return `${nome(ev.lado)} não tinha carta para comprar.`;
    case 'semBicho':
      return `${nome(ev.lado)} ficou sem bicho no campo.`;
    default:
      return null;
  }
}

const linhaDe = (id: string) => {
  const c = cartaT(id);
  if (c.tipo === 'energia') return 'Energia';
  if (c.tipo === 'apoio') return 'Apoio';
  const est = c.estagio === 0 ? 'Básico' : `Estágio ${c.estagio} · de ${curto(c.de!)}`;
  return `${est} · recuo ${c.recuo}`;
};

const custoTexto = (custo: { bioma: number; livre: number }) => ['●'.repeat(custo.bioma), custo.livre ? `+${custo.livre}` : ''].filter(Boolean).join(' ') || '0';

const textoDe = (id: string) => {
  const c = cartaT(id);
  if (c.tipo !== 'bicho') return c.texto;
  const ataques = c.ataques!.map((a) => `${a.nome} (${custoTexto(a.custo)}): ${a.dano}${a.efeito ? `. ${TEXTO_EFEITO[a.efeito](a)}` : ''}`).join(' · ');
  const fr = `Fraqueza: ${BIOMAS[c.fraqueza!].nome.toLowerCase()}${c.resiste ? `. Resiste: ${BIOMAS[c.resiste].nome.toLowerCase()}` : ''}.`;
  return `${ataques}. ${fr}`;
};

/** as energias presas, em bolinhas na cor do bioma */
function Energias({ b }: { b: BichoT }) {
  if (!b.energias.length) return null;
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, maxWidth: 60, justifyContent: 'center' }}>
      {b.energias.map((x, k) => {
        const bio = BIOMAS[cartaT(x).bioma];
        return <View key={k} style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: bio.cor, borderWidth: 1, borderColor: bio.corEscura }} />;
      })}
    </View>
  );
}

export default function TrilhaEvolucaoJogo() {
  const [prefs] = useJogosPrefs();
  const [meu, setMeu] = useState<BaralhoT>('gelo');
  const [dele, setDele] = useState<BaralhoT>('mata');
  const [nivel, setNivel] = useState<NivelLinu>(prefs.nivel);
  const [e, setE] = useState<EstadoT>(() => novaPartidaT('gelo', 'mata', Math.random, primeiroAJogar<Lado>(prefs.quemComeca, 0, 1)));
  const [passo, setPasso] = useState(0);
  // a carta da mão esperando um bicho (energia, evolução, fruta, assobio), ou o recuo
  const [mira, setMira] = useState<number | 'recuar' | null>(null);
  // no preparo: o ativo e o banco escolhidos
  const [prep, setPrep] = useState<number[]>([]);
  const [aviso, setAviso] = useState('');
  const [novos, setNovos] = useState<Set<number>>(new Set());
  const xp = useXpDeVitoria('trilha-da-evolucao');

  const quem = quemAge(e);
  const fim = e.vencedor !== null;
  const minha = !fim && quem === 0;
  const eu = e.lados[0];
  const linu = e.lados[1];
  const lances = useMemo(() => (minha ? lancesT(e) : []), [e, minha]);

  const fazer = (a: AcaoT) => {
    if (!ehValidaT(e, a)) return;
    const n = aplicarT(e, a);
    const antes = new Set(e.lados.flatMap((L) => [L.ativo, ...L.banco].filter(Boolean).map((b) => `${b!.uid}:${b!.carta}`)));
    setNovos(new Set(n.lados.flatMap((L) => [L.ativo, ...L.banco].filter((b): b is BichoT => !!b && !antes.has(`${b.uid}:${b.carta}`)).map((b) => b.uid))));
    haptics.tapLight();
    setE(n);
    setPasso((p) => p + 1);
    setMira(null);
    setPrep([]);
    const frases = n.eventos.map(textoDoEvento).filter(Boolean);
    if (frases.length) setAviso(frases.slice(0, 3).join(' '));
    if (n.vencedor === 0) xp.dar();
  };

  const pensando = useLinuJoga(!fim && quem === 1, () => fazer(jogadaDoLinuT(e, nivel, Math.random)), 700, passo);

  const novaPartida = (b0 = meu, b1 = dele) => {
    setNovos(new Set());
    // quem começa: a escolha comum dos jogos (jogosPrefs.quemComeca), que aparece no cartão do jogo
    setE(novaPartidaT(b0, b1, Math.random, primeiroAJogar<Lado>(prefs.quemComeca, 0, 1)));
    setPasso((p) => p + 1);
    setAviso('');
    setMira(null);
    setPrep([]);
    xp.zerar();
  };

  // ── toques ──
  const tocarNaMao = (uid: number) => {
    if (!minha) return;
    const m = eu.mao.find((x) => x.uid === uid)!;
    if (e.fase === 'preparo') {
      if (!ehBasico(m.carta)) return;
      setPrep((ps) => (ps.includes(uid) ? ps.filter((x) => x !== uid) : ps.length <= BANCO_MAX ? [...ps, uid] : ps));
      return;
    }
    if (e.fase !== 'principal') return;
    const meus = lances.filter((a) => 'uid' in a && a.uid === uid);
    if (!meus.length) return;
    // as jogadas sem alvo vão direto; as com alvo esperam o toque no bicho
    if (meus.length === 1 && !('alvo' in meus[0]!)) return fazer(meus[0]!);
    if (meus.length === 1 && meus[0]!.t === 'apoio' && meus[0]!.alvo === undefined) return fazer(meus[0]!);
    setMira(mira === uid ? null : uid);
  };

  const acaoNoBicho = (b: BichoT): AcaoT | null => {
    if (e.fase === 'promover') return { t: 'promover', uid: b.uid };
    if (mira === 'recuar') return { t: 'recuar', para: b.uid };
    if (mira === null) return null;
    return lances.find((a) => 'uid' in a && a.uid === mira && 'alvo' in a && a.alvo === b.uid) ?? null;
  };

  const tocarNoBicho = (lado: Lado, b: BichoT) => {
    if (!minha || lado !== 0) return;
    const a = acaoNoBicho(b);
    if (a && ehValidaT(e, a)) fazer(a);
  };

  // ── o que mostrar ──
  const danoNoBicho = new Map<number, number>();
  for (const ev of e.eventos) if (ev.t === 'dano') danoNoBicho.set(ev.uid, (danoNoBicho.get(ev.uid) ?? 0) + ev.n);
  const escondido = e.fase === 'preparo';

  const bichoNaMesa = (lado: Lado, b: BichoT, grande: boolean) => {
    const c = cartaT(b.carta);
    const a = minha && lado === 0 ? acaoNoBicho(b) : null;
    const ehAlvo = !!a && ehValidaT(e, a);
    const w = grande ? 84 : 58;
    const carta = escondido ? (
      <VersoCarta largura={w} altura={Math.round(w * 1.4)} />
    ) : (
      <View style={{ alignItems: 'center', gap: 2 }}>
        <CartaTCG
          largura={w}
          titulo={curto(b.carta)}
          bioma={c.bioma}
          arte={c.arte}
          canto={<Selo texto={pvRestante(b)} tamanho={grande ? 18 : 15} fundo={b.dano > 0 ? '#FEE2E2' : '#FFFFFF'} cor={b.dano > 0 ? '#B91C1C' : '#1C1917'} />}
          linha={grande ? (c.estagio ? `Estágio ${c.estagio}` : 'Básico') : undefined}
          destaque={ehAlvo ? 'alvo' : null}
          onPress={() => tocarNoBicho(lado, b)}
          rotulo={`${tituloDe(b.carta)}, ${pvRestante(b)} de ${c.pv} PV, ${b.energias.length} ${b.energias.length === 1 ? 'energia' : 'energias'}${ehAlvo ? ', toque para escolher' : ''}`}
        />
        <Energias b={b} />
        {danoNoBicho.has(b.uid) && (
          <Surge key={`d${passo}`} style={{ position: 'absolute', top: 6 }}>
            <Selo texto={`−${danoNoBicho.get(b.uid)}`} cor="#FFFFFF" fundo="#DC2626" tamanho={22} />
          </Surge>
        )}
      </View>
    );
    return <View key={b.uid}>{novos.has(b.uid) ? <Surge key={`n${b.uid}:${b.carta}`}>{carta}</Surge> : carta}</View>;
  };

  const instrucao = (() => {
    if (fim) return '';
    if (!minha) return pensando ? '' : 'Vez do Linu.';
    if (e.fase === 'preparo') return prep.length === 0 ? 'Toque num bicho básico da mão para ser o seu ativo, na frente.' : 'Toque em mais básicos para o banco (até 5), ou em “Pronto”.';
    if (e.fase === 'promover') return 'Seu ativo caiu. Toque num bicho do banco para ir à frente.';
    if (mira === 'recuar') return 'Toque no bicho do banco que vai para a frente.';
    if (mira !== null) return 'Agora toque no bicho seu marcado de vermelho.';
    if (e.turno === 1) return 'Primeiro turno: monte o banco e prenda energia. Quem começa não ataca agora.';
    return eu.energiaPosta ? 'Jogue cartas da mão, ataque ou passe a vez.' : 'Prenda 1 energia, jogue cartas da mão e ataque.';
  })();

  const resultado = fim ? (e.vencedor === 0 ? { texto: 'Você venceu o Linu na Trilha da Evolução!', tom: 'vitoria' as const } : { texto: 'O Linu venceu desta vez.', tom: 'derrota' as const }) : null;
  const ativo = eu.ativo;
  const podeRecuar = lances.some((a) => a.t === 'recuar');

  return (
    <View className="w-full gap-3">
      <TutorialTCG jogo="trilha-da-evolucao" passos={TUTORIAL} />

      {/* o lado do Linu */}
      <View className="gap-1 rounded-2xl bg-slate-100 p-2 dark:bg-slate-800/70">
        <View className="flex-row flex-wrap items-center gap-2">
          <Marcador rotulo="Prêmios do Linu" valor={linu.premios.length} cor="#F59E0B" destaque={quem === 1 && !fim} />
          <View className="flex-row items-center gap-1">
            <VersoCarta largura={12} altura={17} />
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{linu.mao.length} na mão</Text>
          </View>
          <Text className="text-xs text-slate-500 dark:text-slate-400">baralho {linu.baralho.length}</Text>
        </View>
        <FileiraCartas rotulo="Banco do Linu">{linu.banco.length ? linu.banco.map((b) => bichoNaMesa(1, b, false)) : <Text className="py-3 text-xs text-slate-500 dark:text-slate-400">Banco do Linu vazio.</Text>}</FileiraCartas>
        <View className="items-center">{linu.ativo ? bichoNaMesa(1, linu.ativo, true) : <Text className="py-6 text-xs text-slate-500 dark:text-slate-400">Sem ativo.</Text>}</View>
      </View>

      {/* o meio: a fase, o aviso e os botões */}
      <View className="items-center gap-2">
        <Text className="text-xs font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">{e.fase === 'preparo' ? 'Preparo' : `Turno ${e.turno} · ${nome(e.vez)}`}</Text>
        {!!aviso && <Text className="text-center text-xs font-semibold text-slate-700 dark:text-slate-200">{aviso}</Text>}
        {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}
        {minha && e.fase === 'preparo' && prep.length > 0 && <BotaoTCG texto="Pronto" cor="verde" onPress={() => fazer({ t: 'preparar', ativo: prep[0]!, banco: prep.slice(1) })} />}
        {minha && e.fase === 'principal' && (
          <View className="flex-row flex-wrap justify-center gap-2">
            {mira !== null && <BotaoTCG texto="Cancelar" onPress={() => setMira(null)} />}
            {podeRecuar && mira === null && <BotaoTCG texto={`Recuar (${cartaT(ativo!.carta).recuo})`} cor="azul" onPress={() => setMira('recuar')} />}
            <BotaoTCG texto="Passar a vez" cor="verde" onPress={() => fazer({ t: 'passar' })} />
          </View>
        )}
      </View>

      {/* o seu lado */}
      <View className="gap-1 rounded-2xl bg-emerald-50 p-2 dark:bg-emerald-950/40">
        <View className="items-center gap-1.5">
          {ativo ? bichoNaMesa(0, ativo, true) : <Text className="py-6 text-xs text-slate-500 dark:text-slate-400">{e.fase === 'preparo' ? 'Escolha o seu ativo na mão.' : 'Sem ativo.'}</Text>}
          {ativo && e.fase === 'principal' && (
            <View className="flex-row flex-wrap justify-center gap-2">
              {cartaT(ativo.carta).ataques!.map((a, i) => {
                const pode = minha && lances.some((x) => x.t === 'atacar' && x.i === i);
                return <BotaoTCG key={a.nome} texto={`${a.nome} · ${custoTexto(a.custo)} · ${a.dano}${a.efeito === 'moeda' ? '+' : ''}`} cor="laranja" desligado={!pode || !podePagarAtaque(ativo, a)} onPress={() => fazer({ t: 'atacar', i })} />;
              })}
            </View>
          )}
        </View>
        <FileiraCartas rotulo="Seu banco">{eu.banco.length ? eu.banco.map((b) => bichoNaMesa(0, b, false)) : <Text className="py-3 text-xs text-slate-500 dark:text-slate-400">Banco vazio (cabem 5).</Text>}</FileiraCartas>
        <View className="flex-row flex-wrap items-center gap-2">
          <Marcador rotulo="Seus prêmios" valor={eu.premios.length} cor="#F59E0B" destaque={quem === 0 && !fim} />
          <Text className="text-xs text-slate-500 dark:text-slate-400">baralho {eu.baralho.length}</Text>
          {e.fase === 'principal' && <Text className="text-xs text-slate-500 dark:text-slate-400">{eu.energiaPosta ? 'energia do turno: já foi' : 'energia do turno: falta'}</Text>}
        </View>
        <FileiraCartas rotulo="Sua mão">
          {eu.mao.map((m) => {
            const c = cartaT(m.carta);
            const pode = e.fase === 'preparo' ? ehBasico(m.carta) : lances.some((a) => 'uid' in a && a.uid === m.uid);
            const ordem = prep.indexOf(m.uid);
            return (
              <View key={m.uid} style={{ alignItems: 'center' }}>
                <CartaTCG
                  largura={96}
                  titulo={curto(m.carta)}
                  bioma={c.bioma}
                  arte={c.arte}
                  simbolo={c.tipo === 'energia' ? 'energia' : c.tipo === 'apoio' ? 'apoio' : undefined}
                  canto={c.tipo === 'bicho' ? <Selo texto={c.pv!} tamanho={16} /> : undefined}
                  linha={linhaDe(m.carta)}
                  texto={textoDe(m.carta)}
                  destaque={mira === m.uid || ordem >= 0 ? 'selecionada' : pode ? 'pode' : null}
                  apagada={minha && !pode}
                  onPress={() => tocarNaMao(m.uid)}
                  rotulo={`${tituloDe(m.carta)}, ${linhaDe(m.carta)}: ${textoDe(m.carta)}${pode ? ', pode jogar' : ''}`}
                />
                {ordem >= 0 && <Text className="text-[10px] font-extrabold text-conecta-700 dark:text-conecta-300">{ordem === 0 ? 'ativo' : 'banco'}</Text>}
              </View>
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
