import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { SeletorArea } from '@/components/area/AreaTrilha';
import { Campo, CartaoConta, fmt, lerNumero, Resultado } from '@/components/area/Calculadora';
import { MEDIDAS_CASEIRAS } from '@/data/alimentacao/consulta';

const FUNDO = 'bg-lime-50 dark:bg-lime-950/50';

/** As calorias pelos fatores de Atwater: 4 kcal/g de carboidrato e de proteína, 9 de gordura. */
function Calorias() {
  const [carb, setCarb] = useState('45');
  const [prot, setProt] = useState('12');
  const [gord, setGord] = useState('8');
  const c = lerNumero(carb) * 4;
  const p = lerNumero(prot) * 4;
  const g = lerNumero(gord) * 9;
  const total = c + p + g;
  const pc = (x: number) => (total > 0 ? `${fmt((x / total) * 100, 0)}%` : '—');
  return (
    <CartaoConta
      emoji="⚡"
      titulo="As calorias de um prato"
      sobre="Copie os gramas da tabela nutricional (ou de uma tabela de alimentos) e veja de onde vem a energia."
      licao="Repare como a gordura pesa: com 9 kcal por grama, poucos gramas fazem muita diferença. A tabela do rótulo usa essas mesmas contas."
    >
      <Campo rotulo="Carboidratos" sufixo="g" valor={carb} aoMudar={setCarb} />
      <Campo rotulo="Proteínas" sufixo="g" valor={prot} aoMudar={setProt} />
      <Campo rotulo="Gorduras" sufixo="g" valor={gord} aoMudar={setGord} />
      <Resultado
        fundo={FUNDO}
        titulo="Energia"
        valor={Number.isFinite(total) ? `${fmt(total, 0)} kcal` : '—'}
        conta={Number.isFinite(total) ? `Carboidratos ${pc(c)} · proteínas ${pc(p)} · gorduras ${pc(g)}` : 'Preencha os três campos (zero vale).'}
      />
    </CartaoConta>
  );
}

/** A lupa frontal da Anvisa: os limites por 100 g (sólidos) ou 100 ml (líquidos). */
function Lupa() {
  const [tipo, setTipo] = useState<'solido' | 'liquido'>('solido');
  const [acucar, setAcucar] = useState('20');
  const [gordSat, setGordSat] = useState('4');
  const [sodio, setSodio] = useState('350');
  const lim = tipo === 'solido' ? { acucar: 15, gord: 6, sodio: 600 } : { acucar: 7.5, gord: 3, sodio: 300 };
  const un = tipo === 'solido' ? '100 g' : '100 ml';
  const altos = [
    lerNumero(acucar) >= lim.acucar ? 'AÇÚCAR ADICIONADO' : null,
    lerNumero(gordSat) >= lim.gord ? 'GORDURA SATURADA' : null,
    lerNumero(sodio) >= lim.sodio ? 'SÓDIO' : null,
  ].filter(Boolean) as string[];
  return (
    <CartaoConta
      emoji="🔍"
      titulo="Leva a lupa?"
      sobre={`Pegue uma embalagem de casa e copie os valores por ${un} da tabela nutricional. A conta é a da Anvisa (IN nº 75/2020).`}
      licao={`Os limites para ${tipo === 'solido' ? 'sólidos' : 'líquidos'}: ${fmt(lim.acucar, 1)} g de açúcar adicionado, ${fmt(lim.gord, 1)} g de gordura saturada e ${fmt(lim.sodio, 0)} mg de sódio em ${un}.`}
    >
      <SeletorArea
        area="alimentacao"
        valor={tipo}
        aoEscolher={setTipo}
        opcoes={[
          ['solido', '🍪 Sólido (100 g)'],
          ['liquido', '🥤 Líquido (100 ml)'],
        ]}
      />
      <Campo rotulo="Açúcares adicionados" sufixo="g" valor={acucar} aoMudar={setAcucar} />
      <Campo rotulo="Gorduras saturadas" sufixo="g" valor={gordSat} aoMudar={setGordSat} />
      <Campo rotulo="Sódio" sufixo="mg" valor={sodio} aoMudar={setSodio} />
      {altos.length ? (
        <View accessible accessibilityLiveRegion="polite" className="gap-1 self-start rounded-lg border-2 border-black bg-white p-2">
          <Text className="text-xs font-extrabold text-black">🔍 ALTO EM</Text>
          {altos.map((a) => (
            <Text key={a} className="bg-black px-2 py-0.5 text-xs font-extrabold text-white">
              {a}
            </Text>
          ))}
        </View>
      ) : (
        <Resultado fundo={FUNDO} titulo="Resultado" valor="Sem lupa" conta="Não passa de nenhum limite. Mesmo assim, olhe a lista de ingredientes." />
      )}
    </CartaoConta>
  );
}

/** A receita para mais (ou menos) gente: tudo multiplicado pelo mesmo fator. */
function Receita() {
  const [de, setDe] = useState('4');
  const [para, setPara] = useState('10');
  const [itens, setItens] = useState([
    { nome: 'arroz (xícaras)', qtd: '2' },
    { nome: 'água (xícaras)', qtd: '4' },
    { nome: 'sal (colheres de chá)', qtd: '1' },
  ]);
  const fator = lerNumero(para) / lerNumero(de);
  return (
    <CartaoConta
      emoji="🍲"
      titulo="A receita para mais gente"
      sobre="Quantas pessoas a receita serve e para quantas você quer fazer: cada ingrediente é multiplicado pelo mesmo número."
      licao="A proporção é o que importa. Só o tempo de forno e o sal pedem cuidado: prove antes de pôr tudo, e panela maior pode demorar mais."
    >
      <View className="flex-row gap-2">
        <View className="flex-1">
          <Campo rotulo="Serve (pessoas)" valor={de} aoMudar={setDe} />
        </View>
        <View className="flex-1">
          <Campo rotulo="Quero para (pessoas)" valor={para} aoMudar={setPara} />
        </View>
      </View>
      {itens.map((it, i) => (
        <View key={i} className="flex-row items-center gap-2">
          {/* o nome, a quantidade da receita e a quantidade nova */}
          <TextInput
            value={it.nome}
            onChangeText={(v) => setItens(itens.map((x, j) => (j === i ? { ...x, nome: v } : x)))}
            accessibilityLabel={`Ingrediente ${i + 1}`}
            className="flex-1 rounded-xl border-2 border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
          <TextInput
            value={it.qtd}
            onChangeText={(v) => setItens(itens.map((x, j) => (j === i ? { ...x, qtd: v } : x)))}
            keyboardType="decimal-pad"
            accessibilityLabel={`Quantidade do ingrediente ${i + 1}`}
            className="w-14 rounded-xl border-2 border-slate-200 bg-white px-2 py-2 text-center text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
          <Text className="w-14 text-right text-sm font-extrabold text-slate-900 dark:text-white">{Number.isFinite(lerNumero(it.qtd) * fator) ? fmt(lerNumero(it.qtd) * fator, 2) : '—'}</Text>
        </View>
      ))}
      <Resultado fundo={FUNDO} titulo="Multiplique tudo por" valor={Number.isFinite(fator) ? `${fmt(fator, 2)} ×` : '—'} />
    </CartaoConta>
  );
}

/** As medidas caseiras em mililitros. */
function Medidas() {
  const [qtd, setQtd] = useState('2');
  const [medida, setMedida] = useState(0);
  const m = MEDIDAS_CASEIRAS[medida]!;
  const ml = lerNumero(qtd) * m.ml;
  return (
    <CartaoConta emoji="🥄" titulo="Medidas caseiras" sobre="A receita pede xícaras e você só tem o copo medidor (ou o contrário)? As medidas padronizadas de receita em mililitros.">
      <Campo rotulo="Quantidade" valor={qtd} aoMudar={setQtd} />
      <View className="flex-row flex-wrap gap-1.5">
        {MEDIDAS_CASEIRAS.map((x, i) => (
          <Pressable
            key={x.nome}
            accessibilityRole="button"
            accessibilityState={{ selected: i === medida }}
            onPress={() => setMedida(i)}
            className={`rounded-full border px-3 py-1 ${i === medida ? 'border-lime-500 bg-lime-50 dark:bg-lime-950' : 'border-slate-300 dark:border-slate-700'}`}
          >
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {x.nome} ({x.ml} ml)
            </Text>
          </Pressable>
        ))}
      </View>
      <Resultado
        fundo={FUNDO}
        titulo="Em mililitros"
        valor={Number.isFinite(ml) ? `${fmt(ml, 0)} ml` : '—'}
        conta={Number.isFinite(ml) ? `= ${fmt(ml / 240, 2)} xícara(s) · ${fmt(ml / 15, 1)} colher(es) de sopa` : undefined}
      />
    </CartaoConta>
  );
}

/** “Na prática”: as contas da cozinha e do rótulo (a regra da prática do dono, 17/10/2026). */
export default function AliPraticaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="alimentacao" titulo="Na prática" subtitulo="As contas do rótulo e da receita, com os seus números." />
      <SectionTitle>Calculadoras</SectionTitle>
      <View ref={alvoDoTour('ali-pratica')} className="gap-3">
        <Calorias />
        <Lupa />
        <Receita />
        <Medidas />
      </View>
    </Screen>
  );
}
