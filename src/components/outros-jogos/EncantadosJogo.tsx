import { useEffect, useState } from 'react';
import { Linking, Pressable, Text, View, useWindowDimensions } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { Collapsible } from '@/components/ui';
import { Surge } from '@/components/jogos/anim';
import { Textura } from '@/components/jogos/visual';
import { FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { Linu } from '@/components/Linu';
import { ORIGEM_DAS_CRIATURAS } from '@/data/outros-jogos/encantados';
import {
  META,
  NOME_PILHA,
  ORDEM_TIPOS,
  TIPOS,
  aplicar,
  bonusFaunos,
  ehCancao,
  ehRaca,
  destinosDoMimico,
  destinosDoTroll,
  grupoTravado,
  temBuscaDosElfos,
  temNoJardim,
  jogadaDoLinu,
  nNoJardim,
  novaPartida,
  pontosDaMao,
  pontosDoJardim,
  proximaRodada,
  quemAge,
  tipoDe,
  validar,
  valorNoJardim,
  type Acao,
  type Estado,
  type NoJardim,
  type Pilha,
  type Raca,
  type Tipo,
} from '@/services/encantados-engine';
import { useJogosPrefs, type NivelLinu } from '@/services/jogos-prefs';
import { primeiroAJogar } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';

const VOCE = 0;
const LINU = 1;
const PROPORCAO = 1.4;
const rng = () => Math.random();

/** cor de fundo e desenho de cada tipo de carta (desenhos do app, nada do jogo impresso) */
const COR: Record<Tipo, string> = {
  anoes: '#92400e',
  elfos: '#65a30d',
  fadas: '#db2777',
  faunos: '#2563eb',
  fogos: '#7c3aed',
  gnomos: '#ea580c',
  goblins: '#15803d',
  kobolds: '#dc2626',
  leprechauns: '#059669',
  trolls: '#4c1d95',
  mimicos: '#57534e',
  primavera: '#be185d',
  verao: '#ca8a04',
  outono: '#c2410c',
  inverno: '#0e7490',
};

const BRANCO = '#fff';
const NOME_CURTO_CANCAO: Record<string, string> = { primavera: 'Primavera', verao: 'Verão', outono: 'Outono', inverno: 'Inverno' };
const PEDRA = 'M8 21 C5.5 15 7.5 6 12 3.5 C16.5 6 18.5 15 16 21 Z';

/** o símbolo de cada carta, num quadrado 24×24 */
function Simbolo({ tipo, tamanho }: { tipo: Tipo; tamanho: number }) {
  const traco = { stroke: BRANCO, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  const cheio = { fill: BRANCO };
  const desenho = (() => {
    switch (tipo) {
      case 'anoes': // martelo de ferreiro
        return (
          <>
            <Path d="M5 20 L13.5 11.5" {...traco} strokeWidth={2.4} />
            <Path d="M10 7 L14.5 2.5 L21.5 9.5 L17 14 Z" {...cheio} />
          </>
        );
      case 'elfos': // folha
        return (
          <>
            <Path d="M4 20 C4 10 10 4 20 4 C20 13 14 20 4 20 Z" {...cheio} />
            <Path d="M4 20 L14 10" stroke={COR.elfos} strokeWidth={1.4} strokeLinecap="round" />
          </>
        );
      case 'fadas': // asas
        return (
          <>
            <Path d="M12 10 C7 1 1 6 5 11 C7 13.5 10.5 12.5 12 10 Z M12 10 C17 1 23 6 19 11 C17 13.5 13.5 12.5 12 10 Z" {...cheio} />
            <Path d="M12 11 C9 14 8 18 9.5 20 M12 11 C15 14 16 18 14.5 20" {...traco} />
            <Path d="M12 7 L12 19" {...traco} strokeWidth={2.2} />
          </>
        );
      case 'faunos': // flauta de Pã
        return <Path d="M4 5 h3 v14 h-3 z M8.5 5 h3 v11.5 h-3 z M13 5 h3 v9 h-3 z M17.5 5 h3 v6.5 h-3 z" {...cheio} />;
      case 'fogos': // luzinha com olhos
        return (
          <>
            <Path d="M12 2.5 C15.5 7 18.5 10.5 18.5 14.5 A6.5 6.5 0 0 1 5.5 14.5 C5.5 11 8.5 8 12 2.5 Z" {...cheio} />
            <Circle cx={10} cy={14.5} r={1.2} fill={COR.fogos} />
            <Circle cx={14} cy={14.5} r={1.2} fill={COR.fogos} />
          </>
        );
      case 'gnomos': // gorro pontudo e barba
        return (
          <>
            <Path d="M12 2 L18.5 13 H5.5 Z" {...cheio} />
            <Path d="M7 13 C7 19 10 21.5 12 21.5 C14 21.5 17 19 17 13" {...traco} />
            <Circle cx={12} cy={15} r={1.3} {...cheio} />
          </>
        );
      case 'goblins': // cara de orelhas pontudas
        return (
          <>
            <Path d="M2 8 L8 11 M22 8 L16 11" {...traco} strokeWidth={2.2} />
            <Circle cx={12} cy={13} r={6} {...cheio} />
            <Circle cx={10} cy={12} r={1.2} fill={COR.goblins} />
            <Circle cx={14} cy={12} r={1.2} fill={COR.goblins} />
            <Path d="M9.5 15.5 L11 16.5 L12 15.5 L13 16.5 L14.5 15.5" stroke={COR.goblins} strokeWidth={1} fill="none" />
          </>
        );
      case 'kobolds': // lanterna de mina
        return (
          <>
            <Path d="M12 2.5 v3 M9 5.5 h6 M8 19.5 h8" {...traco} />
            <Path d="M9 7 h6 l1 11 h-8 z" {...traco} />
            <Path d="M12 10 C13.5 12 14 13.5 12 16 C10 13.5 10.5 12 12 10 Z" {...cheio} />
          </>
        );
      case 'leprechauns': // pote de ouro
        return (
          <>
            <Circle cx={9} cy={7} r={2.2} {...cheio} />
            <Circle cx={13.5} cy={5.5} r={2.2} {...cheio} />
            <Circle cx={15.5} cy={9} r={2} {...cheio} />
            <Path d="M4 11 H20 C20 17 17 21 12 21 C7 21 4 17 4 11 Z" {...cheio} />
          </>
        );
      case 'trolls': // porrete
        return (
          <>
            <Path d="M5 21 L12 11" {...traco} strokeWidth={2.6} />
            <Path d="M10 12 C8 7 11 2 16 2.5 C21 3 21.5 9 17.5 12 C15 13.5 11.5 14 10 12 Z" {...cheio} />
          </>
        );
      case 'mimicos': // máscara de duas caras
        return (
          <>
            <Path d="M3 6 C8 4 16 4 21 6 C21 14 17 20 12 20 C7 20 3 14 3 6 Z" {...cheio} />
            <Path d="M7 10.5 C8 9.5 9.5 9.5 10.5 10.5 M13.5 10.5 C14.5 9.5 16 9.5 17 10.5" stroke={COR.mimicos} strokeWidth={1.5} fill="none" strokeLinecap="round" />
            <Path d="M9 15 C10.5 13.5 13.5 13.5 15 15" stroke={COR.mimicos} strokeWidth={1.5} fill="none" strokeLinecap="round" />
          </>
        );
      case 'primavera': // pedra cantante com flor
        return (
          <>
            <Path d={PEDRA} fill="rgba(255,255,255,0.9)" />
            {[0, 72, 144, 216, 288].map((g) => {
              const r = (g * Math.PI) / 180;
              return <Circle key={g} cx={12 + 2.3 * Math.cos(r)} cy={13 + 2.3 * Math.sin(r)} r={1.5} fill={COR.primavera} />;
            })}
            <Circle cx={12} cy={13} r={1.1} fill={BRANCO} />
          </>
        );
      case 'verao': // pedra com sol
        return (
          <>
            <Path d={PEDRA} fill="rgba(255,255,255,0.9)" />
            <Circle cx={12} cy={13} r={2.4} fill={COR.verao} />
            <Path d="M12 8.6 v1.2 M12 16.2 v1.2 M7.6 13 h1.2 M15.2 13 h1.2 M9 10 l.8 .8 M14.2 15.2 l.8 .8 M15 10 l-.8 .8 M9.8 15.2 l-.8 .8" stroke={COR.verao} strokeWidth={1.1} strokeLinecap="round" />
          </>
        );
      case 'outono': // pedra com folha caindo
        return (
          <>
            <Path d={PEDRA} fill="rgba(255,255,255,0.9)" />
            <Path d="M9 16.5 C9 12 11.5 9.5 15 9.5 C15 13.5 12.5 16.5 9 16.5 Z" fill={COR.outono} />
          </>
        );
      case 'inverno': // pedra com floco
        return (
          <>
            <Path d={PEDRA} fill="rgba(255,255,255,0.9)" />
            <Path d="M12 9 v8 M8.5 11 l7 4 M8.5 15 l7 -4" stroke={COR.inverno} strokeWidth={1.3} strokeLinecap="round" />
          </>
        );
    }
  })();
  return (
    <Svg width={tamanho} height={tamanho} viewBox="0 0 24 24">
      {desenho}
    </Svg>
  );
}

const sinal = (v: number) => (v > 0 ? `+${v}` : `${v}`).replace('-', '−');

/** Uma carta de frente. `valor` troca o número impresso (no jardim, com os poderes). */
function Carta({ tipo, largura, valor, selecionada, destaque, apagada, onPress, rotulo }: { tipo: Tipo; largura: number; valor?: number; selecionada?: boolean; destaque?: boolean; apagada?: boolean; onPress?: () => void; rotulo?: string }) {
  const info = TIPOS[tipo];
  const pequeno = largura < 40;
  const v = valor ?? info.valor;
  const corpo = (
    <View
      style={{ width: largura, height: largura * PROPORCAO, backgroundColor: COR[tipo], opacity: apagada ? 0.4 : 1, borderRadius: largura * 0.12 }}
      className={`items-center justify-between overflow-hidden border-2 ${selecionada ? 'border-amber-300' : destaque ? 'border-emerald-300' : 'border-black/25'}`}
    >
      <View className="w-full flex-row justify-between px-0.5 pt-0.5">
        <Text style={{ fontSize: pequeno ? 8 : 10 }} className="font-extrabold text-white">
          {sinal(v)}
        </Text>
        {!pequeno && (
          <Text style={{ fontSize: 10 }} className="font-extrabold text-white">
            {sinal(v)}
          </Text>
        )}
      </View>
      <Simbolo tipo={tipo} tamanho={largura * (pequeno ? 0.68 : 0.62)} />
      <Text numberOfLines={1} style={{ fontSize: pequeno ? 6 : largura < 52 ? 7 : 8 }} className="mb-0.5 px-0.5 font-bold text-white">
        {ehCancao(tipo) ? NOME_CURTO_CANCAO[tipo] : info.nome}
      </Text>
    </View>
  );
  const label = rotulo ?? `${info.nome}, ${sinal(v)} pontos`;
  if (!onPress) return <View accessibilityLabel={label}>{corpo}</View>;
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} accessibilityState={{ selected: !!selecionada }} onPress={onPress} className="active:opacity-70">
      <View style={{ transform: [{ translateY: selecionada ? -8 : 0 }] }}>{corpo}</View>
    </Pressable>
  );
}

/** O verso: folhas próprias do app num fundo verde-escuro. */
function Verso({ largura }: { largura: number }) {
  return (
    <View style={{ width: largura, height: largura * PROPORCAO, borderRadius: largura * 0.12 }} className="items-center justify-center overflow-hidden border-2 border-emerald-950 bg-emerald-800">
      <Svg width={largura * 0.7} height={largura * 0.7} viewBox="0 0 24 24">
        <Path d="M12 3 C16 7 16 13 12 21 C8 13 8 7 12 3 Z" fill="#a7f3d0" opacity={0.7} />
        <Path d="M3 12 C7 8 13 8 21 12 C13 16 7 16 3 12 Z" fill="#6ee7b7" opacity={0.45} />
      </Svg>
    </View>
  );
}

/** O jardim de alguém, em grupos (uma pilha por raça ou canção). */
function Jardim({ jardim, quem, largura, alvo, onCarta, podeEscolher }: { jardim: NoJardim[]; quem: string; largura: number; alvo?: boolean; onCarta?: (id: number) => void; podeEscolher?: (id: number) => boolean }) {
  const grupos = new Map<string, NoJardim[]>();
  for (const c of jardim) grupos.set(c.grupo, [...(grupos.get(c.grupo) ?? []), c]);
  const ordem = ORDEM_TIPOS.filter((t) => grupos.has(t));
  const bonus = bonusFaunos(jardim);
  return (
    <View className={`gap-1 rounded-xl p-2 ${alvo ? 'border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50' : 'bg-lime-50 dark:bg-slate-800/60'}`}>
      <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
        {quem} · {sinal(pontosDoJardim(jardim))} pts{bonus ? ` (faunos +${bonus})` : ''}
      </Text>
      {jardim.length === 0 ? (
        <Text className="text-[11px] text-slate-500 dark:text-slate-400">Ainda vazio.</Text>
      ) : (
        <View className="flex-row flex-wrap gap-x-2 gap-y-1">
          {ordem.map((g) => (
            <View key={g} className="flex-row items-center">
              {grupos.get(g)!.map((c, k) => {
                const t = tipoDe(c.id);
                const pode = !!onCarta && (podeEscolher ? podeEscolher(c.id) : true);
                return (
                  <View key={c.id} style={{ marginLeft: k === 0 ? 0 : -largura * 0.5 }}>
                    <Surge>
                      <Carta
                        tipo={t}
                        largura={largura}
                        valor={valorNoJardim(jardim, c.id)}
                        destaque={pode}
                        apagada={!!onCarta && !pode}
                        onPress={pode ? () => onCarta!(c.id) : undefined}
                        rotulo={t === 'mimicos' ? `Mímico no grupo dos ${TIPOS[c.grupo as Tipo].nome.toLowerCase()}` : undefined}
                      />
                    </Surge>
                  </View>
                );
              })}
              {grupoTravado(jardim, g as Raca) && <Text accessibilityLabel="Grupo travado: só o mímico, nada mais entra" className="ml-1 text-[9px] font-bold text-slate-500 dark:text-slate-400">travado</Text>}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

function Botao({ texto, onPress, tom = 'azul', desativado }: { texto: string; onPress: () => void; tom?: 'azul' | 'verde' | 'cinza' | 'ambar'; desativado?: boolean }) {
  const cor = { azul: 'bg-conecta dark:bg-blue-500', verde: 'bg-emerald-600', cinza: 'bg-slate-600 dark:bg-slate-500', ambar: 'bg-amber-600' }[tom];
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ disabled: !!desativado }} disabled={desativado} onPress={onPress} className={`rounded-full px-3 py-2 active:opacity-80 ${cor} ${desativado ? 'opacity-40' : ''}`}>
      <Text className="text-center text-xs font-extrabold text-white">{texto}</Text>
    </Pressable>
  );
}

const NIVEIS: { id: NivelLinu; nome: string }[] = [
  { id: 'facil', nome: 'Fácil' },
  { id: 'medio', nome: 'Médio' },
  { id: 'dificil', nome: 'Difícil' },
];

/**
 * Encantados (Fel Barros e Shea Parkes; Ace Studios), contra o Linu. Motor em
 * `services/encantados-engine.ts`; regras e fontes em `data/outros-jogos/encantados.ts`.
 * Cartas desenhadas pelo app.
 */
export default function EncantadosJogo() {
  const { width } = useWindowDimensions();
  const estreito = width < 480;
  const lMao = estreito ? 46 : 58;
  const lMesa = estreito ? 44 : 54;
  const lJardim = estreito ? 30 : 38;

  const [prefs] = useJogosPrefs();
  const [nivel, setNivel] = useState<NivelLinu>(prefs.nivel);
  // quem começa: a escolha comum dos jogos (jogosPrefs.quemComeca), que aparece no cartão do jogo
  const [e, setE] = useState<Estado>(() => novaPartida(rng, 2, primeiroAJogar(prefs.quemComeca, VOCE, LINU)));
  const [passo, setPasso] = useState(0);
  const [sel, setSel] = useState<number[]>([]);
  const [aviso, setAviso] = useState<string | null>(null);
  const [verPilha, setVerPilha] = useState<Pilha | null>(null);
  const [verCartas, setVerCartas] = useState(false);
  const xp = useXpDeVitoria('encantados');

  const age = quemAge(e);
  const jogando = e.fase !== 'fimRodada' && e.fase !== 'fimJogo';
  const vezDoLinu = jogando && age === LINU;
  const minhaVez = jogando && age === VOCE;

  const { dar: darXp } = xp;
  useEffect(() => {
    if (e.fase === 'fimJogo' && e.vencedor === VOCE) darXp();
  }, [e.fase, e.vencedor, darXp]);

  const fazer = (a: Acao) => {
    const erro = validar(e, a);
    if (erro) {
      haptics.error();
      setAviso(erro);
      return false;
    }
    haptics.tapLight();
    setAviso(null);
    setSel([]);
    setVerPilha(null);
    setE(aplicar(e, a));
    setPasso((p) => p + 1);
    return true;
  };

  const jogarLinu = () => {
    if (quemAge(e) !== LINU || !jogando) return;
    setE(aplicar(e, jogadaDoLinu(e, nivel, rng)));
    setPasso((p) => p + 1);
  };
  const pensando = useLinuJoga(vezDoLinu, jogarLinu, 750, passo);

  const novaPartidaJa = () => {
    xp.zerar();
    setSel([]);
    setAviso(null);
    setVerPilha(null);
    setE(novaPartida(rng, 2, primeiroAJogar(prefs.quemComeca, VOCE, LINU)));
    setPasso((p) => p + 1);
  };
  // trocar quem começa vale já, se a partida ainda não começou; senão, na próxima
  const [escolhaVista, setEscolhaVista] = useState(prefs.quemComeca);
  if (escolhaVista !== prefs.quemComeca) {
    setEscolhaVista(prefs.quemComeca);
    if (e.rodada === 1 && e.log.length === 0) setE(novaPartida(rng, 2, primeiroAJogar(prefs.quemComeca, VOCE, LINU)));
  }
  const seguir = () => {
    setSel([]);
    setAviso(null);
    setE(proximaRodada(e, rng));
    setPasso((p) => p + 1);
  };

  const p = e.pendente;
  const minhaMao = [...e.maos[VOCE]!].sort((a, b) => ORDEM_TIPOS.indexOf(tipoDe(a)) - ORDEM_TIPOS.indexOf(tipoDe(b)) || a - b);
  const tocarMao = (id: number) => {
    if (!minhaVez) return;
    if (p && p.t !== 'descartarBusca') return;
    setAviso(null);
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  const comprando = minhaVez && e.fase === 'comprar' && !p;
  const baixando = minhaVez && (e.fase === 'baixar' || e.fase === 'descartar') && !p;
  const anoes = nNoJardim(e.jardins[VOCE]!, 'anoes') >= 2;
  const tocarPilha = (pilha: Pilha) => {
    if (minhaVez && p?.t === 'pilha') return fazer({ t: 'pilha', pilha });
    if (!comprando) return;
    if (anoes && (pilha === 'busca' ? e.descBusca : e.descFim).length > 1) return setVerPilha(pilha);
    fazer({ t: 'comprarDescarte', pilha });
  };

  const tiposSel = sel.map(tipoDe);
  const soCancao = sel.length === 1 && ehCancao(tiposSel[0]!);
  const soMimico = sel.length === 1 && tiposSel[0] === 'mimicos';
  // os grupos onde o mímico escolhido pode entrar (com carta de verdade e ainda sem mímico)
  const gruposDoMimico = (dono: number) =>
    soMimico ? [...new Set(e.jardins[dono]!.map((c) => c.grupo))].filter((g): g is Raca => ehRaca(g as Tipo) && validar(e, { t: 'baixar', cartas: sel, raca: g as Raca, dono }) === null) : [];
  const gruposParaMimico = gruposDoMimico(VOCE);
  const gruposDoLinuParaMimico = gruposDoMimico(LINU);
  // a raça escolhida também está no jardim do Linu? Então dá para expandir lá
  const racaSel = tiposSel.find((t) => t !== 'mimicos');
  const podeNoLinu = !!racaSel && ehRaca(racaSel) && e.jardins[LINU]!.some((c) => c.grupo === racaSel && tipoDe(c.id) !== 'mimicos');
  // o grupo dessa raça no seu jardim virou um mímico sozinho? Então nada entra nele
  const travadoNoMeu = !!racaSel && ehRaca(racaSel) && grupoTravado(e.jardins[VOCE]!, racaSel);

  // o que fazer agora (a linha de instrução)
  const instrucao = (() => {
    if (!minhaVez) return null;
    if (p) {
      switch (p.t) {
        case 'busca':
          return 'Busca: toque na carta que você quer guardar. As outras vão para o descarte de busca.';
        case 'descartarBusca':
          return `Gnomos: as cartas da busca foram para a sua mão. Escolha ${p.quantas} ${p.quantas === 1 ? 'carta' : 'cartas'} para o descarte de busca.`;
        case 'jogador':
          return p.motivo === 'goblins' ? 'Goblins: quem compra 2 cartas do monte?' : p.motivo === 'primavera' ? 'Canção da primavera: quem faz uma busca extra?' : 'Canção do outono: quem pega 4 cartas de uma pilha de descarte?';
        case 'pilha':
          return p.motivo === 'outono' ? 'Outono: toque na pilha de descarte de onde pegar até 4 cartas.' : 'Inverno: toque na pilha de descarte de onde pegar a carta de cima. Depois vem a busca.';
        case 'kobold':
          return 'Kobolds: toque numa carta de qualquer jardim (pode ser um mímico) para mandá-la ao fundo do monte.';
        case 'troll':
          return 'Trolls: toque numa carta de qualquer jardim (pode ser um mímico) para mudá-la de lugar.';
        case 'trollDestino':
          return tipoDe(p.carta) === 'mimicos' ? 'Trolls: o mímico só fica em cima de outra raça. Com qual raça ele vai?' : 'Trolls: para qual jardim vai a carta?';
      }
    }
    if (e.fase === 'comprar') return `Sua vez. Compre: toque no monte para buscar (olhar ${temBuscaDosElfos(e, VOCE) ? 3 : 2} e ficar com 1) ou numa pilha de descarte.`;
    return 'Escolha cartas da mão para baixar (3 iguais para uma raça nova, ou as que quiser de uma raça já em jogo) ou toque uma canção. Para acabar, escolha 1 e descarte.';
  })();

  const ultimo = e.log.at(-1);
  const narracao = ultimo ? `${ultimo.jogador === VOCE ? 'Você' : 'O Linu'} ${ultimo.texto.charAt(0).toLowerCase()}${ultimo.texto.slice(1)}.`.replace('..', '.') : '';

  const r = e.pontosRodada;
  const textoFim =
    e.fase === 'fimJogo'
      ? `${e.vencedor === VOCE ? 'Você venceu' : 'O Linu venceu'} o jogo: ${e.placar[VOCE]} × ${e.placar[LINU]}.`
      : r
        ? `Fim da rodada ${e.rodada}: você ${sinal(r[VOCE]!)}, o Linu ${sinal(r[LINU]!)}.`
        : '';

  const pilhaVisivel = (pilha: Pilha) => {
    const ps = pilha === 'busca' ? e.descBusca : e.descFim;
    const topo = ps.at(-1);
    const ativa = comprando || (minhaVez && p?.t === 'pilha');
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${NOME_PILHA[pilha]}, ${ps.length} cartas${topo !== undefined ? `, em cima ${TIPOS[tipoDe(topo)].nome}` : ''}`}
        disabled={!ativa || ps.length === 0}
        onPress={() => tocarPilha(pilha)}
        className="items-center gap-0.5"
      >
        {topo !== undefined ? (
          <Carta tipo={tipoDe(topo)} largura={lMesa} destaque={ativa} />
        ) : (
          <View style={{ width: lMesa, height: lMesa * PROPORCAO, borderRadius: lMesa * 0.12 }} className="border-2 border-dashed border-emerald-200/60" />
        )}
        <Text className="text-center text-[10px] font-bold text-emerald-50" style={{ width: lMesa + 16 }}>
          {pilha === 'busca' ? 'busca' : 'fim de turno'} {ps.length}
        </Text>
      </Pressable>
    );
  };

  const alvoEmJogo = minhaVez && (p?.t === 'kobold' || p?.t === 'troll');
  // o kobold pega qualquer carta; o troll também, mas o mímico só se tiver uma raça para onde ir
  const podeEscolher = (id: number) => p?.t !== 'troll' || tipoDe(id) !== 'mimicos' || destinosDoMimico(e, id).length > 0;

  return (
    <View className="w-full gap-2">
      <PlacarJogo
        jogadores={[
          { id: VOCE, nome: 'Você', amostra: <Text>🙂</Text>, extra: `${e.placar[VOCE]} pts` },
          { id: LINU, nome: 'Linu', amostra: <Linu mood="feliz" size={18} animate={false} />, extra: `${e.placar[LINU]} pts` },
        ]}
        vez={e.vez}
        terminou={!jogando}
      />
      <Text className="text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
        Rodada {e.rodada} · ganha quem passar de {META} · monte {e.baralho.length}
      </Text>

      {/* a mão do Linu, virada */}
      <View className="flex-row items-center justify-center gap-1">
        {e.maos[LINU]!.slice(0, 12).map((id, k) => (
          <View key={id} style={{ marginLeft: k === 0 ? 0 : -lJardim * 0.55 }}>
            <Verso largura={lJardim * 0.8} />
          </View>
        ))}
        <Text className="ml-2 text-xs font-bold text-slate-600 dark:text-slate-300">{e.maos[LINU]!.length} na mão do Linu</Text>
      </View>
      <Jardim jardim={e.jardins[LINU]!} quem="Jardim do Linu" largura={lJardim} alvo={alvoEmJogo} podeEscolher={podeEscolher} onCarta={alvoEmJogo ? (id) => fazer({ t: 'cartaEmJogo', dono: LINU, carta: id }) : undefined} />

      {/* o monte e as duas pilhas de descarte */}
      <View className="flex-row items-start justify-center gap-3 rounded-2xl bg-emerald-800 p-2 dark:bg-emerald-950">
        {/* o feltro verde da mesa de cartas */}
        <Textura material="tecido" fundo="#065F46" raio={16} />
        {pilhaVisivel('busca')}
        <Pressable accessibilityRole="button" accessibilityLabel={`Monte, ${e.baralho.length} cartas: fazer uma busca`} disabled={!comprando || e.baralho.length === 0} onPress={() => fazer({ t: 'buscar' })} className="items-center gap-0.5">
          {e.baralho.length > 0 ? <Verso largura={lMesa} /> : <View style={{ width: lMesa, height: lMesa * PROPORCAO }} />}
          <Text className="text-[10px] font-bold text-emerald-50">monte {e.baralho.length}</Text>
          {comprando && <Text className="rounded-full bg-emerald-50 px-2 text-[10px] font-extrabold text-emerald-900">buscar</Text>}
        </Pressable>
        {pilhaVisivel('fim')}
      </View>

      {/* a pilha toda, quando os anões deixam escolher */}
      {verPilha && comprando && (
        <View className="gap-1 rounded-2xl border-2 border-amber-400 bg-amber-50 p-2 dark:bg-amber-950/50">
          <Text className="text-xs font-bold text-slate-900 dark:text-white">Anões: escolha qualquer carta do {NOME_PILHA[verPilha]}.</Text>
          <View className="flex-row flex-wrap gap-1">
            {(verPilha === 'busca' ? e.descBusca : e.descFim).map((id) => (
              <Carta key={id} tipo={tipoDe(id)} largura={lJardim + 6} onPress={() => fazer({ t: 'comprarDescarte', pilha: verPilha, carta: id })} />
            ))}
          </View>
          <Botao texto="Fechar" tom="cinza" onPress={() => setVerPilha(null)} />
        </View>
      )}

      {/* escolhas pendentes */}
      {minhaVez && p?.t === 'busca' && (
        <View className="gap-1 rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-2 dark:bg-emerald-950/50">
          <Text className="text-xs font-bold text-slate-900 dark:text-white">A busca revelou:</Text>
          <View className="flex-row flex-wrap justify-center gap-2">
            {p.reveladas.map((id) => (
              <Surge key={id}>
                <Carta tipo={tipoDe(id)} largura={lMao} destaque onPress={() => fazer({ t: 'ficar', carta: id })} />
              </Surge>
            ))}
          </View>
        </View>
      )}
      {minhaVez && p?.t === 'jogador' && (
        <View className="flex-row justify-center gap-2">
          <Botao texto="Eu" tom="verde" onPress={() => fazer({ t: 'jogador', alvo: VOCE })} />
          <Botao texto="O Linu" tom="ambar" onPress={() => fazer({ t: 'jogador', alvo: LINU })} />
        </View>
      )}
      {minhaVez && p?.t === 'trollDestino' && tipoDe(p.carta) !== 'mimicos' && (
        <View className="flex-row justify-center gap-2">
          {destinosDoTroll(e, p.dono, p.carta).map((d) =>
            d.dono === VOCE ? (
              <Botao key="v" texto="Para o meu jardim" tom="verde" onPress={() => fazer({ t: 'jardim', dono: VOCE })} />
            ) : (
              <Botao key="l" texto="Para o jardim do Linu" tom="ambar" onPress={() => fazer({ t: 'jardim', dono: LINU })} />
            ),
          )}
        </View>
      )}
      {minhaVez && p?.t === 'trollDestino' && tipoDe(p.carta) === 'mimicos' && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {destinosDoMimico(e, p.carta).map((d) => (
            <Botao
              key={`${d.dono}-${d.raca}`}
              texto={`Com os ${TIPOS[d.raca].nome.toLowerCase()} ${d.dono === VOCE ? 'do seu jardim' : 'do Linu'}`}
              tom={d.dono === VOCE ? 'verde' : 'ambar'}
              onPress={() => fazer({ t: 'jardim', dono: d.dono, raca: d.raca })}
            />
          ))}
        </View>
      )}

      {pensando ? (
        <LinuPensando visivel />
      ) : !jogando ? (
        <FaixaResultado texto={textoFim} tom={e.fase === 'fimJogo' ? (e.vencedor === VOCE ? 'vitoria' : 'derrota') : 'empate'} />
      ) : instrucao ? (
        <Instrucao>{instrucao}</Instrucao>
      ) : (
        <Instrucao>{narracao || 'Vez do Linu.'}</Instrucao>
      )}
      {!!narracao && jogando && !pensando && instrucao && <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">{narracao}</Text>}
      {!!aviso && <Text className="rounded-xl bg-amber-100 p-2 text-center text-xs font-semibold text-amber-900 dark:bg-amber-900/60 dark:text-amber-100">{aviso}</Text>}

      <Jardim jardim={e.jardins[VOCE]!} quem="Seu jardim" largura={lJardim} alvo={alvoEmJogo} podeEscolher={podeEscolher} onCarta={alvoEmJogo ? (id) => fazer({ t: 'cartaEmJogo', dono: VOCE, carta: id }) : undefined} />

      {/* a sua mão */}
      <View className="flex-row flex-wrap justify-center gap-1.5 pt-2">
        {minhaMao.map((id) => (
          <Surge key={id}>
            <Carta tipo={tipoDe(id)} largura={lMao} selecionada={sel.includes(id)} onPress={minhaVez && (baixando || p?.t === 'descartarBusca') ? () => tocarMao(id) : undefined} />
          </Surge>
        ))}
      </View>
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        Na mão: {minhaMao.length} {minhaMao.length === 1 ? 'carta' : 'cartas'} ({sinal(pontosDaMao(minhaMao))} se a rodada acabar agora)
      </Text>

      {minhaVez && p?.t === 'descartarBusca' && (
        <View className="items-center">
          <Botao texto={`Descartar ${sel.length} de ${p.quantas}`} tom="cinza" desativado={sel.length !== p.quantas} onPress={() => fazer({ t: 'descartarBusca', cartas: sel })} />
        </View>
      )}
      {baixando && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {soCancao && <Botao texto="Tocar a canção" tom="ambar" onPress={() => fazer({ t: 'cancao', carta: sel[0]! })} />}
          {sel.length > 0 && !soCancao && !soMimico && !travadoNoMeu && (
            <Botao
              texto={(() => {
                const r0 = tiposSel.find((t) => t !== 'mimicos');
                return r0 && ehRaca(r0) && !temNoJardim(e, VOCE, r0) ? `Baixar raça nova (${sel.length})` : `Baixar no seu jardim (${sel.length})`;
              })()}
              tom="verde"
              onPress={() => fazer({ t: 'baixar', cartas: sel })}
            />
          )}
          {sel.length > 0 && !soCancao && !soMimico && podeNoLinu && <Botao texto={`No jardim do Linu (${sel.length})`} tom="ambar" onPress={() => fazer({ t: 'baixar', cartas: sel, dono: LINU })} />}
          {soMimico && gruposParaMimico.map((g) => <Botao key={g} texto={`Mímico com os seus ${TIPOS[g].nome.toLowerCase()}`} tom="verde" onPress={() => fazer({ t: 'baixar', cartas: sel, raca: g })} />)}
          {soMimico && gruposDoLinuParaMimico.map((g) => <Botao key={`l${g}`} texto={`Mímico com os ${TIPOS[g].nome.toLowerCase()} do Linu`} tom="ambar" onPress={() => fazer({ t: 'baixar', cartas: sel, raca: g, dono: LINU })} />)}
          {sel.length === 1 && <Botao texto="Descartar e passar a vez" tom="cinza" onPress={() => fazer({ t: 'descartar', carta: sel[0]! })} />}
        </View>
      )}

      <View className="flex-row flex-wrap items-center justify-center gap-2 pt-1">
        {e.fase === 'fimRodada' && <Botao texto="Próxima rodada" onPress={seguir} />}
        <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">Linu:</Text>
        {NIVEIS.map((n) => (
          <Pressable
            key={n.id}
            accessibilityRole="button"
            accessibilityState={{ selected: nivel === n.id }}
            accessibilityLabel={`Linu no nível ${n.nome}`}
            onPress={() => setNivel(n.id)}
            className={`rounded-full px-3 py-1.5 ${nivel === n.id ? 'bg-slate-700 dark:bg-slate-200' : 'bg-slate-100 dark:bg-slate-800'}`}
          >
            <Text className={`text-xs font-bold ${nivel === n.id ? 'text-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-200'}`}>{n.nome}</Text>
          </Pressable>
        ))}
        <Pressable accessibilityRole="button" onPress={() => novaPartidaJa()} className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800">
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">Nova partida</Text>
        </Pressable>
      </View>

      <Collapsible title="As cartas, os poderes e de onde vêm" open={verCartas} onToggle={() => setVerCartas((v) => !v)}>
        <View className="gap-2 pt-1">
          {ORDEM_TIPOS.map((t) => {
            const origem = ORIGEM_DAS_CRIATURAS[t];
            return (
              <View key={t} className="flex-row gap-2">
                <Carta tipo={t} largura={lJardim + 8} />
                <View className="flex-1 gap-0.5">
                  <Text className="text-xs font-extrabold text-slate-900 dark:text-white">
                    {TIPOS[t].nome} · {TIPOS[t].qtd} {TIPOS[t].qtd === 1 ? 'carta' : 'cartas'} · {sinal(TIPOS[t].valor)}
                  </Text>
                  <Text className="text-[11px] text-slate-700 dark:text-slate-300">{TIPOS[t].poder}</Text>
                  {origem && (
                    <Text className="text-[11px] italic text-slate-600 dark:text-slate-400">
                      De onde vem: {origem.texto}{' '}
                      <Text accessibilityRole="link" onPress={() => Linking.openURL(origem.fonte)} className="text-conecta underline dark:text-blue-400">
                        (fonte)
                      </Text>
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
          <Text className="text-[11px] text-slate-500 dark:text-slate-400">
            Jogo de Fel Barros e Shea Parkes, publicado no Brasil pela Ace Studios. As cartas daqui são desenhos do app; os poderes foram reescritos.
          </Text>
        </View>
      </Collapsible>
    </View>
  );
}
