import { useState } from 'react';
import { Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { Campo, CartaoConta, fmt, lerNumero } from '@/components/area/Calculadora';
import { LUA, PLANETAS, SOL_DIAMETRO_KM, VELOCIDADE_LUZ_KM_S } from '@/data/astronomia/ceu';

const G_TERRA = 9.8;

function Linha({ nome, valor }: { nome: string; valor: string }) {
  return (
    <View className="flex-row items-center justify-between border-b border-slate-100 py-1.5 dark:border-slate-800">
      <Text className="text-sm text-slate-700 dark:text-slate-300">{nome}</Text>
      <Text className="text-sm font-extrabold text-slate-900 dark:text-white">{valor}</Text>
    </View>
  );
}

/** Quanto a balança marcaria em cada mundo: a massa é a mesma, a gravidade muda. */
function PesoNosMundos() {
  const [massa, setMassa] = useState('50');
  const m = lerNumero(massa);
  return (
    <CartaoConta
      emoji="⚖️"
      titulo="A sua balança em outros mundos"
      sobre="A balança do banheiro mede a força com que o planeta puxa você. A sua massa (quanto de matéria você tem) é a mesma em qualquer lugar; o que muda é a gravidade."
      licao="A conta: o que a balança marca aqui × gravidade do lugar ÷ 9,8. Em Júpiter não dá para ficar de pé: ele não tem chão. O número é o que a balança marcaria no topo das nuvens."
    >
      <Campo rotulo="O que a balança marca aqui" sufixo="kg" valor={massa} aoMudar={setMassa} />
      <View>
        {[...PLANETAS.slice(0, 3), LUA, ...PLANETAS.slice(3)].map((p) => (
          <Linha key={p.nome} nome={`${p.emoji} ${p.nome}`} valor={Number.isFinite(m) ? `${fmt((m * p.gravidade) / G_TERRA, 1)} kg` : '—'} />
        ))}
      </View>
    </CartaoConta>
  );
}

function anos(n: number): string {
  const t = fmt(n, n < 1 ? 3 : 1);
  return `${t} ${t === '1' ? 'ano' : 'anos'}`;
}

/** A idade contada em anos de cada planeta: um ano é uma volta em torno do Sol. */
function IdadeNosPlanetas() {
  const [idade, setIdade] = useState('12');
  const i = lerNumero(idade);
  return (
    <CartaoConta
      emoji="🎂"
      titulo="A sua idade em outros planetas"
      sobre="Um ano é o tempo de uma volta em torno do Sol. Quanto mais longe o planeta, maior a volta e mais longo o ano."
      licao="A conta: a sua idade × 365,25 ÷ os dias do ano do planeta. Em Mercúrio, você faria aniversário a cada 88 dias."
    >
      <Campo rotulo="A sua idade" sufixo="anos" valor={idade} aoMudar={setIdade} />
      <View>
        {PLANETAS.map((p) => (
          <Linha key={p.nome} nome={`${p.emoji} ${p.nome}`} valor={Number.isFinite(i) ? anos((i * 365.25) / p.orbitaDias) : '—'} />
        ))}
      </View>
    </CartaoConta>
  );
}

function duracao(segundos: number): string {
  if (segundos < 60) return `${fmt(segundos, 2)} s`;
  if (segundos < 3600) return `${Math.floor(segundos / 60)} min ${Math.round(segundos % 60)} s`;
  const h = Math.floor(segundos / 3600);
  return `${h} h ${Math.round((segundos % 3600) / 60)} min`;
}

/** Quanto a luz do Sol demora para chegar a cada planeta (e mais longe). */
function TempoDaLuz() {
  return (
    <CartaoConta
      emoji="⚡"
      titulo="Quanto a luz demora"
      sobre="A luz anda 299.792 km por segundo. Dividindo a distância pela velocidade, sai o tempo da viagem: é o atraso com que a gente vê cada lugar."
      licao="Por isso um robô em Marte não dá para ser guiado por controle remoto, ao vivo: cada comando leva minutos para chegar."
    >
      <View>
        <Linha nome="🌙 Da Lua até a Terra" valor={duracao((LUA.distanciaMkm * 1e6) / VELOCIDADE_LUZ_KM_S)} />
        {PLANETAS.map((p) => (
          <Linha key={p.nome} nome={`☀️ Do Sol até ${p.nome}`} valor={duracao((p.distanciaMkm * 1e6) / VELOCIDADE_LUZ_KM_S)} />
        ))}
        <Linha nome="⭐ De Proxima Centauri" valor="4,2 anos" />
        <Linha nome="🌌 Do centro da Via Láctea" valor="cerca de 26 mil anos" />
        <Linha nome="🌀 Da galáxia de Andrômeda" valor="cerca de 2,5 milhões de anos" />
      </View>
    </CartaoConta>
  );
}

function tamanho(cm: number): string {
  if (cm < 1) return `${fmt(cm * 10, 1)} mm`;
  if (cm < 100) return `${fmt(cm, 1)} cm`;
  return `${fmt(cm / 100, 2)} m`;
}
function distancia(cm: number): string {
  if (cm < 100) return `${fmt(cm, 0)} cm`;
  if (cm < 100_000) return `${fmt(cm / 100, cm < 1000 ? 1 : 0)} m`;
  return `${fmt(cm / 100_000, 1)} km`;
}

/** O Sistema Solar em miniatura: o Sol do tamanho de uma bola, e o resto na mesma escala. */
function Miniatura() {
  const [sol, setSol] = useState('22');
  const s = lerNumero(sol);
  const escala = s / SOL_DIAMETRO_KM; // cm de maquete por km de verdade
  return (
    <CartaoConta
      emoji="⚽"
      titulo="O Sistema Solar em miniatura"
      sobre="Se o Sol fosse uma bola de futebol (uns 22 cm), qual seria o tamanho de cada planeta e a que distância ele ficaria? Mude o tamanho do Sol."
      licao="O espaço é quase todo vazio: os planetas são grãos espalhados por quilômetros. Os livros nunca desenham nessa escala porque não caberia na página."
    >
      <Campo rotulo="Tamanho do Sol na maquete" sufixo="cm" valor={sol} aoMudar={setSol} />
      <View>
        {PLANETAS.map((p) => (
          <Linha
            key={p.nome}
            nome={`${p.emoji} ${p.nome}: ${Number.isFinite(escala) ? tamanho(p.diametroKm * escala) : '—'}`}
            valor={Number.isFinite(escala) ? `a ${distancia(p.distanciaMkm * 1e6 * escala)}` : '—'}
          />
        ))}
      </View>
      <Text className="text-xs text-slate-600 dark:text-slate-400">Na mesma escala, Proxima Centauri ficaria a uns {Number.isFinite(escala) ? fmt((4.24 * 9.4607e12 * escala) / 100_000, 0) : '—'} km.</Text>
    </CartaoConta>
  );
}

/** “Na prática”: as contas da astronomia com números de verdade (a regra da prática do dono, 17/10/2026). */
export default function AstroPraticaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="astronomia" titulo="Na prática" subtitulo="Contas com os números de verdade do Sistema Solar (NASA). Troque os valores pelos seus." />
      <SectionTitle>Calculadoras</SectionTitle>
      <View ref={alvoDoTour('astro-pratica')} className="gap-3">
        <PesoNosMundos />
        <IdadeNosPlanetas />
        <TempoDaLuz />
        <Miniatura />
      </View>
    </Screen>
  );
}
