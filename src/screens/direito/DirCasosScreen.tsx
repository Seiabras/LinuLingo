import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { CartaoConta, Resultado } from '@/components/area/Calculadora';
import { AvisoDireito } from '@/components/direito/AvisoDireito';
import { CASOS_DIREITO, type CasoDireito } from '@/data/direito/consulta';
import { embaralharOpcoes } from '@/data/cursos/embaralhar';
import * as haptics from '@/services/haptics';

const DIAS_SEMANA = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

/** Lê “dd/mm/aaaa” (ou “dd/mm/aa”) como data; inválida dá null. */
export function lerData(texto: string): Date | null {
  const m = texto.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
  if (!m) return null;
  const dia = Number(m[1]);
  const mes = Number(m[2]);
  const ano = m[3]!.length === 2 ? 2000 + Number(m[3]) : Number(m[3]);
  const d = new Date(ano, mes - 1, dia, 12);
  return d.getFullYear() === ano && d.getMonth() === mes - 1 && d.getDate() === dia ? d : null;
}

/** Soma dias corridos: o dia do começo não conta, o último conta (a regra do Código Civil, art. 132). */
export function somarDias(d: Date, dias: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + dias);
  return r;
}

const escrever = (d: Date) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}, ${DIAS_SEMANA[d.getDay()]}`;

function hojeTexto() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

/** A calculadora dos prazos do consumidor: arrependimento (7 dias) e defeito aparente (30 e 90 dias). */
function PrazosConsumidor() {
  const [data, setData] = useState(hojeTexto);
  const d = lerData(data);
  const fundo = 'bg-amber-50 dark:bg-amber-950/50';
  return (
    <CartaoConta
      emoji="📅"
      titulo="Até quando posso reclamar?"
      sobre="Ponha a data em que você recebeu o produto (ou em que o serviço terminou). O prazo conta a partir do dia seguinte."
      licao="Se o último dia cair num fim de semana ou feriado, reclame antes, por escrito, e guarde o protocolo. Defeito escondido (que só aparece com o uso) conta do dia em que ele aparece."
    >
      <View className="gap-1">
        <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Data do recebimento</Text>
        <TextInput
          value={data}
          onChangeText={setData}
          placeholder="dd/mm/aaaa"
          placeholderTextColor="#94A3B8"
          keyboardType="numbers-and-punctuation"
          accessibilityLabel="Data do recebimento, no formato dia, mês e ano"
          className="rounded-xl border-2 border-slate-200 bg-white px-3 py-2 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />
      </View>
      {d ? (
        <View className="gap-2">
          <Resultado fundo={fundo} titulo="Desistir da compra pela internet (7 dias)" valor={escrever(somarDias(d, 7))} conta="CDC, art. 49: só nas compras fora da loja física." />
          <Resultado fundo={fundo} titulo="Defeito em não durável (30 dias)" valor={escrever(somarDias(d, 30))} conta="Comida, cosméticos, um serviço de limpeza. CDC, art. 26, I." />
          <Resultado fundo={fundo} titulo="Defeito em durável (90 dias)" valor={escrever(somarDias(d, 90))} conta="Celular, roupa, eletrodoméstico, um conserto. CDC, art. 26, II." />
        </View>
      ) : (
        <Text className="text-sm text-rose-700 dark:text-rose-400">Escreva a data assim: 17/10/2026.</Text>
      )}
    </CartaoConta>
  );
}

function Caso({ c: original }: { c: CasoDireito }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const [c] = useState(() => {
    const { opcoes, certa } = embaralharOpcoes(original.opcoes, original.resposta, original.id);
    return { ...original, opcoes, resposta: certa };
  });
  const acertou = escolha === c.resposta;
  return (
    <Card className="gap-2">
      <View className="flex-row items-start gap-2">
        <Text className="text-2xl">{c.emoji}</Text>
        <Text className="flex-1 text-sm text-slate-800 dark:text-slate-200">{c.situacao}</Text>
      </View>
      <Text className="font-extrabold text-slate-900 dark:text-white">{c.pergunta}</Text>
      {c.opcoes.map((o, i) => {
        const marcada = escolha === i;
        const certa = escolha !== null && i === c.resposta;
        return (
          <Pressable
            key={o}
            accessibilityRole="button"
            accessibilityState={{ selected: marcada, disabled: escolha !== null }}
            disabled={escolha !== null}
            onPress={() => {
              setEscolha(i);
              if (i === c.resposta) haptics.success();
              else haptics.error();
            }}
            className={`rounded-xl border-2 p-2.5 ${certa ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : marcada ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-sm text-slate-800 dark:text-slate-200">{o}</Text>
          </Pressable>
        );
      })}
      {escolha !== null && (
        <View accessibilityLiveRegion="polite" className="gap-0.5 rounded-xl bg-amber-50 p-3 dark:bg-amber-950/50">
          <Text className="font-bold text-slate-900 dark:text-white">{acertou ? '✅ Isso mesmo!' : '❌ Não é bem assim.'}</Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">{c.porque}</Text>
          <Text className="text-xs font-bold text-amber-800 dark:text-amber-300">{c.lei}</Text>
        </View>
      )}
    </Card>
  );
}

/** Os casos do dia a dia, para resolver com a lei, e a calculadora dos prazos do consumidor. */
export default function DirCasosScreen() {
  return (
    <Screen>
      <AreaCabecalho area="direito" titulo="Casos" subtitulo="A lei na prática: situações do dia a dia para resolver, com o artigo que dá a resposta." />
      <AvisoDireito />
      <SectionTitle>Na prática</SectionTitle>
      <View ref={alvoDoTour('dir-casos')}>
        <PrazosConsumidor />
      </View>
      <SectionTitle>O que diz a lei?</SectionTitle>
      <View className="gap-3">
        {CASOS_DIREITO.map((c) => (
          <Caso key={c.id} c={c} />
        ))}
      </View>
    </Screen>
  );
}
