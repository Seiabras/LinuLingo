import { useState } from 'react';
import { View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { Campo, CartaoConta, fmt, lerNumero, reais, Resultado } from '@/components/area/Calculadora';

const FUNDO = 'bg-pink-50 dark:bg-pink-950/50';

/** Preço pela margem: a margem é sobre o preço de venda; o markup, sobre o custo. */
function PrecoMargem() {
  const [custo, setCusto] = useState('40');
  const [margem, setMargem] = useState('30');
  const c = lerNumero(custo);
  const m = lerNumero(margem) / 100;
  const preco = m < 1 ? c / (1 - m) : NaN;
  const markup = (preco - c) / c;
  return (
    <CartaoConta
      emoji="🏷️"
      titulo="O preço pela margem"
      sobre="Quanto cobrar para sobrar a margem que você quer? A margem é a parte do preço que fica com você; o markup é quanto se soma ao custo."
      licao="Repare: 30% de margem não é somar 30% ao custo. Com custo R$ 40, somar 30% dá R$ 52, e a margem fica em só 23%."
    >
      <Campo rotulo="Custo de cada unidade" sufixo="R$" valor={custo} aoMudar={setCusto} />
      <Campo rotulo="Margem que você quer" sufixo="%" valor={margem} aoMudar={setMargem} />
      <Resultado
        fundo={FUNDO}
        titulo="Preço de venda"
        valor={reais(preco)}
        conta={Number.isFinite(preco) ? `${reais(c)} ÷ (1 − ${fmt(m * 100)}%) · o markup é de ${fmt(markup * 100, 1)}% sobre o custo` : 'A margem tem de ser menor que 100%.'}
      />
    </CartaoConta>
  );
}

/** Ponto de equilíbrio: quantas unidades pagam os custos fixos. */
function PontoEquilibrio() {
  const [fixos, setFixos] = useState('3.000');
  const [preco, setPreco] = useState('25');
  const [variavel, setVariavel] = useState('10');
  const f = lerNumero(fixos);
  const p = lerNumero(preco);
  const v = lerNumero(variavel);
  const sobra = p - v;
  const q = sobra > 0 ? Math.ceil(f / sobra) : NaN;
  return (
    <CartaoConta
      emoji="⚖️"
      titulo="O ponto de equilíbrio"
      sobre="Quantas unidades vender por mês para pagar o aluguel, as contas e os salários (os custos fixos)? Cada venda deixa o preço menos o custo variável."
      licao="Baixar o preço parece vender mais, mas aumenta o ponto de equilíbrio: cada venda passa a pagar menos dos custos fixos."
    >
      <Campo rotulo="Custos fixos do mês" sufixo="R$" valor={fixos} aoMudar={setFixos} />
      <Campo rotulo="Preço de venda" sufixo="R$" valor={preco} aoMudar={setPreco} />
      <Campo rotulo="Custo variável de cada unidade" sufixo="R$" valor={variavel} aoMudar={setVariavel} />
      <Resultado
        fundo={FUNDO}
        titulo="Unidades por mês"
        valor={Number.isFinite(q) ? `${fmt(q, 0)} unidades` : '—'}
        conta={Number.isFinite(q) ? `${reais(f)} ÷ (${reais(p)} − ${reais(v)}) · por dia (30 dias): ${fmt(Math.ceil(q / 30), 0)}` : 'O preço tem de ser maior que o custo variável.'}
      />
    </CartaoConta>
  );
}

/** CAC × LTV: quanto custa conseguir um cliente e quanto ele deixa enquanto fica. */
function CacLtv() {
  const [gasto, setGasto] = useState('5.000');
  const [novos, setNovos] = useState('100');
  const [margemMes, setMargemMes] = useState('20');
  const [meses, setMeses] = useState('10');
  const cac = lerNumero(gasto) / lerNumero(novos);
  const ltv = lerNumero(margemMes) * lerNumero(meses);
  const razao = ltv / cac;
  const veredito = !Number.isFinite(razao) ? '' : razao < 1 ? 'Cada cliente custa mais do que deixa: quanto mais vender, mais perde.' : razao < 3 ? 'Paga a conta, mas sobra pouco para crescer.' : 'Saudável: muitas empresas buscam pelo menos 3 para 1.';
  return (
    <CartaoConta
      emoji="🧲"
      titulo="Quanto custa e quanto vale um cliente"
      sobre="CAC: o que se gastou em marketing e vendas ÷ os clientes novos. LTV: a margem que o cliente deixa por mês × os meses que ele fica."
    >
      <Campo rotulo="Gasto em marketing e vendas" sufixo="R$" valor={gasto} aoMudar={setGasto} />
      <Campo rotulo="Clientes novos no período" valor={novos} aoMudar={setNovos} />
      <Campo rotulo="Margem por cliente por mês" sufixo="R$" valor={margemMes} aoMudar={setMargemMes} />
      <Campo rotulo="Meses que o cliente fica" valor={meses} aoMudar={setMeses} />
      <View className="flex-row gap-2">
        <View className="flex-1">
          <Resultado fundo={FUNDO} titulo="CAC" valor={reais(cac)} />
        </View>
        <View className="flex-1">
          <Resultado fundo={FUNDO} titulo="LTV" valor={reais(ltv)} />
        </View>
      </View>
      <Resultado fundo={FUNDO} titulo="LTV ÷ CAC" valor={Number.isFinite(razao) ? `${fmt(razao, 1)} para 1` : '—'} conta={veredito} />
    </CartaoConta>
  );
}

/** O funil: conversão de visitas em compras e o retorno do anúncio. */
function Funil() {
  const [vistos, setVistos] = useState('10.000');
  const [visitas, setVisitas] = useState('400');
  const [compras, setCompras] = useState('20');
  const [ticket, setTicket] = useState('80');
  const [anuncio, setAnuncio] = useState('600');
  const vi = lerNumero(vistos);
  const vs = lerNumero(visitas);
  const co = lerNumero(compras);
  const receita = co * lerNumero(ticket);
  const gasto = lerNumero(anuncio);
  return (
    <CartaoConta
      emoji="🔻"
      titulo="O funil e o retorno do anúncio"
      sobre="Quantos viram o anúncio, quantos clicaram, quantos compraram. Cada passo tem a sua taxa de conversão."
      licao="Repare em que passo o funil perde mais gente: é ali que vale mexer primeiro (o anúncio, a página ou o preço)."
    >
      <Campo rotulo="Pessoas que viram o anúncio" valor={vistos} aoMudar={setVistos} />
      <Campo rotulo="Visitas ao site" valor={visitas} aoMudar={setVisitas} />
      <Campo rotulo="Compras" valor={compras} aoMudar={setCompras} />
      <Campo rotulo="Valor médio de cada compra" sufixo="R$" valor={ticket} aoMudar={setTicket} />
      <Campo rotulo="Gasto com o anúncio" sufixo="R$" valor={anuncio} aoMudar={setAnuncio} />
      <View className="flex-row gap-2">
        <View className="flex-1">
          <Resultado fundo={FUNDO} titulo="Clicaram" valor={`${fmt((vs / vi) * 100, 1)}%`} />
        </View>
        <View className="flex-1">
          <Resultado fundo={FUNDO} titulo="Compraram" valor={`${fmt((co / vs) * 100, 1)}%`} />
        </View>
      </View>
      <Resultado
        fundo={FUNDO}
        titulo="Receita ÷ gasto com o anúncio"
        valor={Number.isFinite(receita / gasto) ? `${fmt(receita / gasto, 2)} × (${reais(receita)})` : '—'}
        conta="Cada real no anúncio voltou como essa quantia em vendas. Lembre que a venda ainda tem o custo do produto: o lucro é menor que a receita."
      />
    </CartaoConta>
  );
}

/** “Na prática”: as contas do marketing com os seus números (a regra da prática do dono, 17/10/2026). */
export default function MktPraticaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="marketing" titulo="Na prática" subtitulo="As contas que toda loja, todo app e todo pequeno negócio faz. Troque os números pelos seus." />
      <SectionTitle>Calculadoras</SectionTitle>
      <View ref={alvoDoTour('mkt-pratica')} className="gap-3">
        <PrecoMargem />
        <PontoEquilibrio />
        <CacLtv />
        <Funil />
      </View>
    </Screen>
  );
}
