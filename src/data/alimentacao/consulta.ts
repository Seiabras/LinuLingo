import type { MarcoArea } from '@/components/area/AreaTrilha';

/**
 * As abas de consulta da área Alimentação: a Cozinha (cortes, jeitos de cozinhar, molhos-mãe) e o
 * Brasil (o Guia Alimentar, a comida de cada região e a história, ano a ano). Fontes:
 * - Cortes e molhos-mãe: A. Escoffier, “Le Guide Culinaire” (1903); Le Cordon Bleu, “Técnicas
 *   culinárias”. Medidas caseiras: a xícara de 240 ml e as colheres de 15 ml e 5 ml são as medidas
 *   padronizadas de receita; o copo americano tem 190 ml (fabricante Nadir Figueiredo).
 * - Guia Alimentar para a População Brasileira (Ministério da Saúde, 2014), “Dez passos para uma
 *   alimentação adequada e saudável”.
 * - Pratos de cada região: o próprio Guia Alimentar (exemplos regionais de refeições) e o IPHAN.
 * - Marcos: J. de Castro, “Geografia da Fome” (1946); FNDE, histórico do PNAE (1955; Lei nº
 *   11.947/2009); Lei nº 11.346/2006 (LOSAN); Emenda Constitucional nº 64/2010; FAO, relatórios
 *   “O Estado da Segurança Alimentar e Nutricional no Mundo” (2014 e 2025); Anvisa, RDC nº 429/2020.
 */

export interface FichaCozinha {
  nome: string;
  linha: string;
  sobre: string;
}

export const CORTES: FichaCozinha[] = [
  { nome: 'Brunoise', linha: 'cubinhos de 2 a 3 mm', sobre: 'Para cebola, cenoura e pimentão sumirem no molho ou no refogado.' },
  { nome: 'Julienne', linha: 'palitos finos, de uns 2 mm por 5 cm', sobre: 'Para saladas, legumes salteados e guarnições.' },
  { nome: 'Chiffonade', linha: 'tirinhas de folhas enroladas', sobre: 'Empilhe as folhas (manjericão, couve), enrole como um charuto e corte fino: é o corte da couve mineira.' },
  { nome: 'Rodelas', linha: 'fatias redondas', sobre: 'Para cenoura, abobrinha, banana. A espessura igual faz tudo cozinhar junto.' },
  { nome: 'Picar', linha: 'pedaços pequenos e irregulares', sobre: 'Para alho e ervas, quando o formato não importa.' },
];

export const COCCOES: FichaCozinha[] = [
  { nome: 'Refogar', linha: 'calor seco, pouca gordura, mexendo', sobre: 'O começo do arroz e do feijão brasileiros: alho e cebola no óleo até perfumar.' },
  { nome: 'Assar', linha: 'calor seco, no forno', sobre: 'O ar quente doura por fora (Maillard) e cozinha por dentro.' },
  { nome: 'Grelhar', linha: 'calor seco, chapa ou grelha bem quentes', sobre: 'Rápido e com marcas douradas. Seque bem a carne antes.' },
  { nome: 'Fritar', linha: 'calor seco, na gordura quente', sobre: 'Por imersão (o pastel) ou em pouca gordura (o ovo). Óleo frio demais encharca.' },
  { nome: 'Cozinhar', linha: 'calor úmido, na água fervendo', sobre: 'Macarrão, ovos, legumes. Sal na água tempera por dentro.' },
  { nome: 'No vapor', linha: 'calor úmido, sem encostar na água', sobre: 'Os legumes perdem menos vitaminas para a água.' },
  { nome: 'Ensopar ou brasear', linha: 'seco e depois úmido', sobre: 'Sele a carne e termine cozinhando devagar no caldo: a carne dura amacia.' },
];

export const MOLHOS_MAE: FichaCozinha[] = [
  { nome: 'Bechamel', linha: 'leite + roux (farinha e manteiga)', sobre: 'O molho branco da lasanha e do suflê.' },
  { nome: 'Velouté', linha: 'caldo claro + roux', sobre: 'Caldo de frango ou peixe engrossado: base de sopas cremosas.' },
  { nome: 'Espanhol (espagnole)', linha: 'caldo escuro + roux escuro', sobre: 'Com ossos assados e tomate: a base dos molhos escuros para carne.' },
  { nome: 'Tomate', linha: 'tomate cozido e temperado', sobre: 'O mais conhecido no Brasil, o molho do macarrão.' },
  { nome: 'Holandês', linha: 'gema + manteiga derretida, emulsionadas', sobre: 'Uma emulsão quente, como a maionese é fria: o molho do ovo Benedict.' },
];

export interface MedidaCaseira {
  nome: string;
  ml: number;
}

export const MEDIDAS_CASEIRAS: MedidaCaseira[] = [
  { nome: 'xícara (chá)', ml: 240 },
  { nome: 'copo americano', ml: 190 },
  { nome: 'colher de sopa', ml: 15 },
  { nome: 'colher de chá', ml: 5 },
];

/** Os dez passos do Guia Alimentar (2014), resumidos. */
export const DEZ_PASSOS: string[] = [
  'Fazer de alimentos in natura ou minimamente processados a base da alimentação.',
  'Usar óleos, gorduras, sal e açúcar em pequenas quantidades ao temperar e cozinhar.',
  'Limitar o consumo de alimentos processados.',
  'Evitar o consumo de alimentos ultraprocessados.',
  'Comer com regularidade e atenção, em ambientes apropriados e, sempre que possível, com companhia.',
  'Fazer compras em locais que ofertem variedade de alimentos in natura ou minimamente processados.',
  'Desenvolver, exercitar e partilhar habilidades culinárias.',
  'Planejar o uso do tempo para dar à alimentação o espaço que ela merece.',
  'Dar preferência, quando fora de casa, a locais que servem refeições feitas na hora.',
  'Ser crítico quanto a informações, orientações e mensagens sobre alimentação veiculadas em propagandas comerciais.',
];

export const REGIOES: FichaCozinha[] = [
  { nome: 'Norte', linha: 'mandioca, peixes de rio e frutas da floresta', sobre: 'Tacacá, pato no tucupi, maniçoba, açaí com peixe e farinha, castanha-do-pará, cupuaçu.' },
  { nome: 'Nordeste', linha: 'feijão-de-corda, coco, dendê e carne de sol', sobre: 'Acarajé, moqueca baiana, baião de dois, cuscuz, tapioca, buchada, cajuína.' },
  { nome: 'Centro-Oeste', linha: 'Cerrado, Pantanal e a herança do Paraguai', sobre: 'Arroz com pequi, pamonha goiana, sopa paraguaia, chipa, peixes do Pantanal.' },
  { nome: 'Sudeste', linha: 'milho, porco, leite e as heranças imigrantes', sobre: 'Feijão tropeiro, pão de queijo, tutu, moqueca capixaba, virado à paulista.' },
  { nome: 'Sul', linha: 'churrasco, erva-mate e as cozinhas alemã, italiana e polonesa', sobre: 'Churrasco, chimarrão, barreado, cuca, arroz carreteiro.' },
];

export const MARCOS_ALI_BRASIL: MarcoArea[] = [
  {
    ano: 'há milhares de anos',
    titulo: 'A mandioca e o milho',
    sobre: 'Os povos indígenas domesticam a mandioca na Amazônia e criam a farinha, o beiju e o tucupi, a base da cozinha brasileira.',
  },
  { ano: '1946', titulo: 'A Geografia da Fome', sobre: 'O médico pernambucano Josué de Castro mostra que a fome no Brasil é um problema social, não da natureza.' },
  { ano: '1955', titulo: 'A merenda escolar', sobre: 'Começa a Campanha de Merenda Escolar, que virou o Programa Nacional de Alimentação Escolar (PNAE).' },
  { ano: '2006', titulo: 'A lei da segurança alimentar', sobre: 'A Lei nº 11.346 cria o sistema nacional de segurança alimentar e nutricional.' },
  { ano: '2009', titulo: 'Agricultura familiar na escola', sobre: 'A Lei nº 11.947 manda que pelo menos 30% do dinheiro da merenda compre da agricultura familiar.' },
  { ano: '2010', titulo: 'Alimentação na Constituição', sobre: 'A Emenda nº 64 põe a alimentação entre os direitos sociais do artigo 6º.' },
  { ano: '2014', titulo: 'O Guia Alimentar e o Mapa da Fome', sobre: 'Sai a 2ª edição do Guia Alimentar, e a FAO tira o Brasil do Mapa da Fome.' },
  { ano: '2022', titulo: 'A lupa nas embalagens', sobre: 'Entra em vigor a nova rotulagem da Anvisa, com a lupa do “alto em” na frente das embalagens.' },
  { ano: '2025', titulo: 'Fora do Mapa da Fome de novo', sobre: 'Depois de voltar ao mapa nos anos anteriores, o Brasil sai outra vez, segundo o relatório da FAO.' },
];
