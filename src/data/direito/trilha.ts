import type { MiniCourse } from '@/data/cursos/tipos';
import { comOpcoesEmbaralhadas } from '@/data/cursos/embaralhar';

/**
 * A trilha da área Direito (pedido do dono, 17/10/2026). As unidades usam o motor dos minicursos (kind
 * 'direito') e seguem a taxonomia de `docs/areas-futuras.md` (ramos, público × privado, filosofia,
 * sistemas, carreiras), começando pelo que serve no dia a dia de quem mora no Brasil: a Constituição,
 * o consumidor, o trabalho, o crime e a cidadania. Cada unidade se aplica nos casos da aba Casos.
 * Aqui se aprende como a lei funciona; não é consultoria jurídica (o app diz isso na tela).
 *
 * Fontes: o texto das leis no site do Planalto (planalto.gov.br), citadas artigo por artigo, e o
 * Supremo Tribunal Federal (portal.stf.jus.br) para a composição e o papel do tribunal.
 */

const CF = { label: 'Constituição da República Federativa do Brasil de 1988', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' };
const CDC = { label: 'Código de Defesa do Consumidor, Lei nº 8.078/1990', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm' };

export const DIR_INICIO: MiniCourse = {
  id: 'dir-inicio',
  name: 'O que é o direito',
  emoji: '⚖️',
  kind: 'direito',
  summary: 'As regras que o Estado faz valer, de onde elas vêm e como a humanidade foi escrevendo as leis, de Hamurábi à Declaração dos Direitos Humanos.',
  sources: [
    CF,
    { label: 'ONU, Declaração Universal dos Direitos Humanos (1948)', url: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights' },
    { label: 'H. Kelsen, “Teoria pura do direito” (1934)', url: 'https://openlibrary.org/search?q=Reine+Rechtslehre+Kelsen' },
  ],
  lessons: [
    {
      id: 'normas',
      title: 'Regras com força',
      emoji: '📜',
      intro: [
        'Toda convivência tem regras: as de etiqueta, as da religião, as da moral. O direito é o conjunto de regras que o Estado faz valer: se alguém descumpre, pode haver uma consequência imposta pela Justiça, como uma multa, uma indenização ou uma pena.',
        'As regras vêm de várias fontes: a lei (escrita pelo Poder Legislativo), os costumes, a jurisprudência (como os tribunais vêm decidindo) e a doutrina (o que os estudiosos escrevem).',
        'As leis têm hierarquia. O jurista austríaco Hans Kelsen, na “Teoria pura do direito” (1934), descreveu o ordenamento em degraus, que se costuma desenhar como uma pirâmide: no topo, a Constituição; abaixo, as leis; abaixo delas, os decretos e as normas mais específicas. Uma lei que contraria a Constituição não vale.',
      ],
      items: [
        { term: 'norma jurídica', meaning: 'regra que o Estado faz valer', how: 'Descumprir pode ter uma consequência imposta pela Justiça.' },
        { term: 'jurisprudência', meaning: 'como os tribunais vêm decidindo', how: 'Decisões repetidas sobre o mesmo assunto.' },
        { term: 'pirâmide de Kelsen', meaning: 'a Constituição no topo, as leis abaixo dela', how: 'Hans Kelsen, 1934.' },
      ],
      quiz: [
        { q: 'O que fica no topo da pirâmide das normas?', options: ['A Constituição', 'Os decretos', 'Os contratos'], answer: 0 },
        { q: 'O que é jurisprudência?', options: ['Como os tribunais vêm decidindo', 'Uma lei nova', 'Um tipo de advogado'], answer: 0 },
        { q: 'O que diferencia o direito das regras de etiqueta?', options: ['O Estado faz valer as regras do direito', 'As regras do direito são mais antigas', 'Só a etiqueta é escrita'], answer: 0 },
      ],
    },
    {
      id: 'historia',
      title: 'As leis escritas',
      emoji: '🏛️',
      intro: [
        'Um dos códigos mais antigos que se conhecem é o de Hamurábi, rei da Babilônia, gravado numa pedra de basalto por volta de 1750 a.C. É o da regra “olho por olho, dente por dente”.',
        'Em Roma, a Lei das Doze Tábuas (por volta de 450 a.C.) pôs as regras por escrito, à vista de todos. Séculos depois, o imperador Justiniano mandou reunir o direito romano no “Corpus Juris Civilis” (529–534), que é a base do direito do Brasil e da Europa continental.',
        'A Magna Carta, de 1215, limitou o poder do rei da Inglaterra. O Código Civil de Napoleão (1804) inspirou os códigos de meio mundo. E em 10 de dezembro de 1948, a ONU aprovou a Declaração Universal dos Direitos Humanos.',
      ],
      items: [
        { term: 'Código de Hamurábi', meaning: 'um dos códigos mais antigos', how: 'Babilônia, por volta de 1750 a.C.' },
        { term: 'Corpus Juris Civilis', meaning: 'o direito romano reunido por Justiniano', how: '529–534: a raiz do direito brasileiro.' },
        { term: 'Declaração Universal dos Direitos Humanos', meaning: 'os direitos de todas as pessoas', how: 'ONU, 10 de dezembro de 1948.' },
      ],
      quiz: [
        { q: 'De onde vem a regra “olho por olho, dente por dente”?', options: ['Do Código de Hamurábi', 'Da Constituição de 1988', 'Do Código de Napoleão'], answer: 0 },
        { q: 'Em que ano a ONU aprovou a Declaração Universal dos Direitos Humanos?', options: ['1948', '1215', '1804'], answer: 0 },
      ],
    },
  ],
};

export const DIR_CONSTITUICAO: MiniCourse = {
  id: 'dir-constituicao',
  name: 'A Constituição',
  emoji: '📘',
  kind: 'direito',
  summary: 'A Constituição de 1988: os fundamentos do país, os direitos de todos, os três Poderes e o que nem uma emenda pode tirar.',
  sources: [CF, { label: 'Supremo Tribunal Federal, “Institucional”', url: 'https://portal.stf.jus.br/' }],
  lessons: [
    {
      id: 'cf88',
      title: 'A Constituição Cidadã',
      emoji: '📘',
      intro: [
        'A Constituição atual do Brasil foi promulgada em 5 de outubro de 1988, depois de 21 anos de ditadura militar. Ulysses Guimarães, que presidiu a Assembleia Constituinte, a chamou de “Constituição Cidadã”.',
        'O artigo 1º diz que o Brasil é uma república federativa e um Estado democrático de direito, com cinco fundamentos: a soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa e o pluralismo político. E diz que todo o poder emana do povo.',
        'O artigo 2º separa o poder em três: Legislativo, Executivo e Judiciário, “independentes e harmônicos entre si”.',
      ],
      items: [
        { term: '5 de outubro de 1988', meaning: 'a data da Constituição atual', how: 'Promulgada pela Assembleia Constituinte.' },
        { term: 'dignidade da pessoa humana', meaning: 'um dos fundamentos do Brasil', how: 'Art. 1º, III.' },
        { term: 'Estado democrático de direito', meaning: 'o governo também tem de obedecer à lei', how: 'Art. 1º, caput.' },
      ],
      quiz: [
        { q: 'Quando foi promulgada a Constituição atual?', options: ['5 de outubro de 1988', '15 de novembro de 1889', '7 de setembro de 1822'], answer: 0 },
        { q: 'De quem emana o poder, segundo o artigo 1º?', options: ['Do povo', 'Do presidente', 'Dos juízes'], answer: 0 },
      ],
    },
    {
      id: 'direitos',
      title: 'Os direitos de todos',
      emoji: '🗽',
      intro: [
        'O artigo 5º começa assim: “Todos são iguais perante a lei, sem distinção de qualquer natureza”. Ele tem 79 incisos com direitos e garantias, como a liberdade de expressão, a liberdade de crença, a casa como “asilo inviolável” e o habeas corpus contra a prisão ilegal.',
        'O artigo 6º lista os direitos sociais: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados.',
        'Direito vem junto com dever: a liberdade de expressão, por exemplo, não protege o crime, como a calúnia ou o racismo (que o próprio artigo 5º diz ser inafiançável e imprescritível).',
      ],
      items: [
        { term: 'artigo 5º', meaning: 'os direitos e as garantias individuais', how: '“Todos são iguais perante a lei…”' },
        { term: 'habeas corpus', meaning: 'protege contra a prisão ilegal', how: 'Art. 5º, LXVIII.' },
        { term: 'direitos sociais', meaning: 'educação, saúde, moradia, trabalho…', how: 'Art. 6º.' },
      ],
      quiz: [
        { q: 'Qual artigo começa com “Todos são iguais perante a lei”?', options: ['O artigo 5º', 'O artigo 1º', 'O artigo 228'], answer: 0 },
        { q: 'Para que serve o habeas corpus?', options: ['Proteger contra a prisão ilegal', 'Registrar um imóvel', 'Votar'], answer: 0 },
        { q: 'O racismo, segundo a Constituição, é crime…', options: ['Inafiançável e imprescritível', 'Que prescreve em um ano', 'Só punido com multa'], answer: 0 },
      ],
    },
    {
      id: 'poderes',
      title: 'Os três Poderes',
      emoji: '🏛️',
      intro: [
        'O Legislativo faz as leis: no plano federal, o Congresso Nacional, com a Câmara dos Deputados e o Senado. O Executivo governa e executa as leis: o presidente, os governadores e os prefeitos. O Judiciário julga os conflitos com base nas leis.',
        'No topo do Judiciário está o Supremo Tribunal Federal, com 11 ministros, que tem a função de guardar a Constituição.',
        'Algumas partes da Constituição não podem ser abolidas nem por emenda: as “cláusulas pétreas” do artigo 60, § 4º. São a forma federativa, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais.',
      ],
      items: [
        { term: 'Legislativo', meaning: 'faz as leis', how: 'Câmara dos Deputados e Senado, no plano federal.' },
        { term: 'Executivo', meaning: 'governa e executa as leis', how: 'Presidente, governadores e prefeitos.' },
        { term: 'Judiciário', meaning: 'julga os conflitos', how: 'No topo, o STF, com 11 ministros.' },
        { term: 'cláusulas pétreas', meaning: 'o que nem emenda pode abolir', how: 'Art. 60, § 4º.' },
      ],
      quiz: [
        { q: 'Quem faz as leis federais?', options: ['O Congresso Nacional', 'O Supremo Tribunal Federal', 'O presidente sozinho'], answer: 0 },
        { q: 'Quantos ministros tem o STF?', options: ['11', '9', '27'], answer: 0 },
        { q: 'O voto secreto pode ser abolido por emenda?', options: ['Não: é cláusula pétrea', 'Sim, com maioria simples', 'Sim, por decreto'], answer: 0 },
      ],
    },
  ],
};

export const DIR_CONSUMIDOR: MiniCourse = {
  id: 'dir-consumidor',
  name: 'O consumidor',
  emoji: '🛍️',
  kind: 'direito',
  summary: 'O direito de se arrepender, os prazos para reclamar de defeito e as práticas abusivas: o Código de Defesa do Consumidor no dia a dia.',
  sources: [CDC, { label: 'consumidor.gov.br, plataforma oficial de reclamações', url: 'https://www.consumidor.gov.br/' }],
  lessons: [
    {
      id: 'arrependimento',
      title: 'O direito de se arrepender',
      emoji: '↩️',
      intro: [
        'O Código de Defesa do Consumidor (Lei nº 8.078, de 1990) protege quem compra. Uma das regras mais usadas é a do artigo 49: quem compra fora da loja física (pela internet, pelo telefone, em casa) pode desistir em até 7 dias, contados da assinatura ou do recebimento do produto.',
        'Não precisa dar motivo, e o dinheiro volta inteiro, inclusive o frete. A ideia é que, sem ver o produto de perto, a pessoa pode se enganar.',
        'Na loja física, a troca por não ter gostado não é obrigação da lei: só vale se a loja prometeu. Calcule os seus prazos na aba Casos.',
      ],
      items: [
        { term: 'direito de arrependimento', meaning: 'desistir da compra feita fora da loja', how: 'CDC, art. 49: em até 7 dias, sem dar motivo.' },
        { term: 'devolução integral', meaning: 'o dinheiro volta inteiro, com o frete', how: 'CDC, art. 49, parágrafo único.' },
      ],
      quiz: [
        { q: 'Comprei um tênis pela internet e não gostei. Quantos dias tenho para desistir?', options: ['7 dias', '30 dias', 'Nenhum'], answer: 0 },
        { q: 'Na loja física, trocar só porque não gostou é…', options: ['Um favor da loja, se ela prometeu', 'Obrigação da lei', 'Proibido'], answer: 0 },
      ],
    },
    {
      id: 'defeito',
      title: 'Quando vem com defeito',
      emoji: '🔧',
      intro: [
        'Para reclamar de um defeito fácil de ver, o artigo 26 dá 30 dias para os produtos e serviços não duráveis (comida, um corte de cabelo) e 90 dias para os duráveis (um celular, uma geladeira), contados da entrega.',
        'Pelo artigo 18, o fornecedor tem até 30 dias para consertar. Se não consertar, você escolhe: trocar por outro, receber o dinheiro de volta ou pedir um desconto. A loja que vendeu também responde, não só o fabricante.',
        'Guarde a nota fiscal e registre a reclamação por escrito (e-mail, protocolo): é a sua prova.',
      ],
      items: [
        { term: '30 e 90 dias', meaning: 'prazos para reclamar de defeito aparente', how: 'CDC, art. 26: não duráveis e duráveis.' },
        { term: 'troca, dinheiro de volta ou desconto', meaning: 'o que escolher se não consertarem em 30 dias', how: 'CDC, art. 18, § 1º.' },
      ],
      quiz: [
        { q: 'A geladeira veio riscada. Quanto tempo tenho para reclamar?', options: ['90 dias', '7 dias', '1 ano'], answer: 0 },
        { q: 'Se o conserto não sair em 30 dias, quem escolhe a solução?', options: ['O consumidor', 'A loja', 'O fabricante'], answer: 0 },
      ],
    },
    {
      id: 'abusos',
      title: 'Práticas abusivas',
      emoji: '🚫',
      intro: [
        'O artigo 39 proíbe práticas abusivas. A mais conhecida é a venda casada: condicionar uma compra a outra, como só vender o celular junto com um seguro.',
        'Produto ou serviço mandado sem você pedir vale como amostra grátis: você não precisa pagar (art. 39, parágrafo único).',
        'Na cobrança, o artigo 42 proíbe expor o consumidor ao ridículo ou ameaçá-lo. E quem paga uma cobrança indevida tem direito a receber de volta o dobro do que pagou a mais, com correção, salvo engano justificável.',
      ],
      items: [
        { term: 'venda casada', meaning: 'só vender um produto junto com outro', how: 'Proibida: CDC, art. 39, I.' },
        { term: 'amostra grátis', meaning: 'o que mandaram sem você pedir', how: 'CDC, art. 39, parágrafo único.' },
        { term: 'devolução em dobro', meaning: 'quem pagou cobrança indevida recebe o dobro', how: 'CDC, art. 42, parágrafo único.' },
      ],
      quiz: [
        { q: 'O banco só libera o empréstimo se você fizer um seguro. Isso é…', options: ['Venda casada', 'Direito de arrependimento', 'Amostra grátis'], answer: 0 },
        { q: 'Chegou um cartão de crédito que você não pediu, com anuidade. Precisa pagar?', options: ['Não: vale como amostra grátis', 'Sim, sempre', 'Só a metade'], answer: 0 },
      ],
    },
  ],
};

export const DIR_TRABALHO: MiniCourse = {
  id: 'dir-trabalho',
  name: 'O trabalho',
  emoji: '👷',
  kind: 'direito',
  summary: 'A CLT, a carteira assinada, o 13º, as férias e as regras para quem trabalha antes dos 18 anos.',
  sources: [
    CF,
    { label: 'Consolidação das Leis do Trabalho, Decreto-Lei nº 5.452/1943', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
    { label: 'Lei da Aprendizagem, Lei nº 10.097/2000', url: 'https://www.planalto.gov.br/ccivil_03/leis/l10097.htm' },
  ],
  lessons: [
    {
      id: 'clt',
      title: 'Carteira assinada',
      emoji: '📗',
      intro: [
        'A Consolidação das Leis do Trabalho (CLT) foi assinada em 1º de maio de 1943 por Getúlio Vargas, reunindo as leis trabalhistas da época. Com mudanças, ela vale até hoje.',
        'A Constituição, no artigo 7º, garante a quem trabalha com carteira assinada: salário mínimo, 13º salário, férias anuais com um terço a mais, FGTS, jornada de até 8 horas por dia e 44 por semana, e hora extra paga com pelo menos 50% a mais.',
        'Na prática: quem ganha R$ 2.000 e tira férias recebe R$ 2.000 + R$ 666,67 (o terço). Um mês de trabalho dá direito a 1/12 do 13º.',
      ],
      items: [
        { term: 'CLT', meaning: 'Consolidação das Leis do Trabalho', how: '1º de maio de 1943.' },
        { term: '13º salário', meaning: 'um salário a mais no fim do ano', how: 'CF, art. 7º, VIII.' },
        { term: 'terço de férias', meaning: 'as férias são pagas com 1/3 a mais', how: 'CF, art. 7º, XVII.' },
        { term: 'jornada', meaning: 'até 8 horas por dia e 44 por semana', how: 'CF, art. 7º, XIII.' },
      ],
      quiz: [
        { q: 'Quem ganha R$ 3.000, quanto recebe nas férias com o terço?', options: ['R$ 4.000', 'R$ 3.000', 'R$ 6.000'], answer: 0 },
        { q: 'Qual a jornada máxima semanal, pela Constituição?', options: ['44 horas', '60 horas', '30 horas'], answer: 0 },
        { q: 'A hora extra vale pelo menos…', options: ['50% a mais', 'O mesmo que a hora normal', '10% a mais'], answer: 0 },
      ],
    },
    {
      id: 'jovem',
      title: 'Trabalhar antes dos 18',
      emoji: '🎒',
      intro: [
        'A Constituição (art. 7º, XXXIII) proíbe qualquer trabalho a menores de 16 anos, salvo como aprendiz, a partir dos 14.',
        'De 16 a 18 anos, pode trabalhar, mas nunca à noite, nem em lugar perigoso ou insalubre (que faz mal à saúde).',
        'O aprendiz (Lei nº 10.097, de 2000) tem contrato especial, com carteira assinada e curso de formação, e o trabalho não pode atrapalhar a escola.',
      ],
      items: [
        { term: 'aprendiz', meaning: 'contrato de trabalho com formação, a partir dos 14', how: 'Lei nº 10.097/2000.' },
        { term: 'trabalho insalubre', meaning: 'que faz mal à saúde', how: 'Proibido a menores de 18.' },
      ],
      quiz: [
        { q: 'Com que idade se pode ser aprendiz?', options: ['A partir dos 14 anos', 'A partir dos 10 anos', 'Só depois dos 18'], answer: 0 },
        { q: 'Um jovem de 17 anos pode trabalhar à noite?', options: ['Não', 'Sim, sem limite', 'Só nos fins de semana'], answer: 0 },
      ],
    },
  ],
};

export const DIR_PENAL: MiniCourse = {
  id: 'dir-penal',
  name: 'Crime e justiça',
  emoji: '🔒',
  kind: 'direito',
  summary: 'Não há crime sem lei, todos são inocentes até a decisão final, e o que muda para quem tem menos de 18 anos.',
  sources: [
    CF,
    { label: 'Código Penal, Decreto-Lei nº 2.848/1940', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm' },
    { label: 'Estatuto da Criança e do Adolescente, Lei nº 8.069/1990', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8069.htm' },
  ],
  lessons: [
    {
      id: 'legalidade',
      title: 'Não há crime sem lei',
      emoji: '📕',
      intro: [
        'O artigo 1º do Código Penal (1940) e o artigo 5º, XXXIX, da Constituição dizem a mesma coisa: “não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal”. Ninguém pode ser punido por algo que não era crime quando aconteceu.',
        'A Constituição também garante a presunção de inocência: ninguém será considerado culpado até o fim do processo, quando não cabe mais recurso (o “trânsito em julgado”).',
        'E todo acusado tem direito ao contraditório e à ampla defesa: saber do que é acusado, responder e ter advogado. Quem não pode pagar tem a Defensoria Pública.',
      ],
      items: [
        { term: 'princípio da legalidade', meaning: 'não há crime sem lei anterior', how: 'CP, art. 1º; CF, art. 5º, XXXIX.' },
        { term: 'presunção de inocência', meaning: 'inocente até a decisão final', how: 'CF, art. 5º, LVII.' },
        { term: 'ampla defesa', meaning: 'direito de responder à acusação, com advogado', how: 'CF, art. 5º, LV.' },
      ],
      quiz: [
        { q: 'Uma lei nova torna crime algo que você fez no ano passado. Você pode ser punido?', options: ['Não: não há crime sem lei anterior', 'Sim, a lei vale para trás', 'Só com multa'], answer: 0 },
        { q: 'Até quando a pessoa é considerada inocente?', options: ['Até a decisão final, sem recurso', 'Até ser presa', 'Até ser acusada'], answer: 0 },
      ],
    },
    {
      id: 'idade',
      title: 'Menores de 18 anos',
      emoji: '🧒',
      intro: [
        'A Constituição (art. 228) diz que os menores de 18 anos são penalmente inimputáveis: não respondem pelo Código Penal, e sim pelo Estatuto da Criança e do Adolescente (ECA, Lei nº 8.069, de 1990).',
        'Para o ECA, criança é quem tem até 12 anos incompletos, e adolescente, de 12 a 18. O ato de um adolescente que seria crime para um adulto se chama ato infracional.',
        'O adolescente pode receber medidas socioeducativas, como advertência, prestação de serviços à comunidade, liberdade assistida e, nos casos graves, internação por até 3 anos. A ideia é educar e proteger, sem deixar de responsabilizar.',
      ],
      items: [
        { term: 'inimputável', meaning: 'não responde pelo Código Penal', how: 'Menores de 18 anos: CF, art. 228.' },
        { term: 'ato infracional', meaning: 'o “crime” cometido por adolescente', how: 'ECA, art. 103.' },
        { term: 'medida socioeducativa', meaning: 'a resposta do ECA ao ato infracional', how: 'Da advertência à internação, por até 3 anos.' },
      ],
      quiz: [
        { q: 'Até que idade alguém é criança, para o ECA?', options: ['Até 12 anos incompletos', 'Até 18 anos', 'Até 7 anos'], answer: 0 },
        { q: 'Por qual lei responde um adolescente de 15 anos?', options: ['O ECA', 'O Código Penal', 'A CLT'], answer: 0 },
      ],
    },
  ],
};

export const DIR_CIDADANIA: MiniCourse = {
  id: 'dir-cidadania',
  name: 'Cidadania e onde buscar ajuda',
  emoji: '🗳️',
  kind: 'direito',
  summary: 'O voto, a Defensoria Pública, o Juizado Especial e os canais de denúncia: como usar os direitos na vida real.',
  sources: [
    CF,
    { label: 'Lei dos Juizados Especiais, Lei nº 9.099/1995', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9099.htm' },
    { label: 'Ministério dos Direitos Humanos, Disque 100', url: 'https://www.gov.br/mdh/pt-br/disque100' },
  ],
  lessons: [
    {
      id: 'voto',
      title: 'O voto',
      emoji: '🗳️',
      intro: [
        'Pela Constituição (art. 14), o voto é obrigatório dos 18 aos 70 anos e facultativo (a pessoa escolhe) para quem tem 16 ou 17 anos, mais de 70 anos ou não sabe ler e escrever.',
        'O voto é direto, secreto, universal e periódico, e isso é cláusula pétrea: nenhuma emenda pode acabar com ele.',
        'Na prática: com 15 anos você já pode tirar o título de eleitor, desde que complete 16 até o dia da eleição.',
      ],
      items: [
        { term: 'voto obrigatório', meaning: 'dos 18 aos 70 anos', how: 'CF, art. 14, § 1º, I.' },
        { term: 'voto facultativo', meaning: '16 e 17 anos, mais de 70 e analfabetos', how: 'CF, art. 14, § 1º, II.' },
      ],
      quiz: [
        { q: 'Com 16 anos, o voto é…', options: ['Facultativo', 'Obrigatório', 'Proibido'], answer: 0 },
        { q: 'Com 40 anos, o voto é…', options: ['Obrigatório', 'Facultativo', 'Proibido'], answer: 0 },
      ],
    },
    {
      id: 'ajuda',
      title: 'Onde buscar ajuda',
      emoji: '🤝',
      intro: [
        'Quem não pode pagar advogado tem a Defensoria Pública (art. 134 da Constituição), que dá orientação e defende de graça.',
        'Para causas de até 40 salários mínimos, existe o Juizado Especial Cível (Lei nº 9.099, de 1995), mais simples e mais rápido. Até 20 salários mínimos, dá para entrar sem advogado.',
        'Para problemas de consumo, o Procon da sua cidade e o site consumidor.gov.br. Para violações de direitos humanos, o Disque 100; para violência contra a mulher, o Ligue 180. Em emergência, a polícia, no 190.',
      ],
      items: [
        { term: 'Defensoria Pública', meaning: 'advogados públicos, de graça, para quem não pode pagar', how: 'CF, art. 134.' },
        { term: 'Juizado Especial Cível', meaning: 'causas de até 40 salários mínimos', how: 'Até 20, sem advogado: Lei nº 9.099/1995, art. 9º.' },
        { term: 'Disque 100', meaning: 'denúncias de violações de direitos humanos', how: 'De graça, 24 horas.' },
        { term: 'Ligue 180', meaning: 'atendimento à mulher em situação de violência', how: 'De graça, 24 horas.' },
      ],
      quiz: [
        { q: 'Quem defende de graça quem não pode pagar advogado?', options: ['A Defensoria Pública', 'O Procon', 'O STF'], answer: 0 },
        { q: 'No Juizado Especial Cível, até quanto dá para entrar sem advogado?', options: ['20 salários mínimos', '100 salários mínimos', 'Qualquer valor'], answer: 0 },
      ],
    },
  ],
};

export const UNIDADES_DIR: MiniCourse[] = [DIR_INICIO, DIR_CONSTITUICAO, DIR_CONSUMIDOR, DIR_TRABALHO, DIR_PENAL, DIR_CIDADANIA].map(comOpcoesEmbaralhadas);

/** Os ramos que ainda vão chegar (a lista do dono em `docs/areas-futuras.md`). */
export const PROXIMAS_UNIDADES_DIR = [
  { emoji: '🏠', nome: 'Direito civil', sobre: 'Contratos, aluguel, família, herança e responsabilidade por danos.' },
  { emoji: '🌳', nome: 'Direito ambiental', sobre: 'A proteção do meio ambiente na Constituição e nas leis.' },
  { emoji: '💻', nome: 'Direito digital', sobre: 'A LGPD, o Marco Civil da Internet e os crimes na rede.' },
  { emoji: '💰', nome: 'Direito tributário', sobre: 'Os impostos: quem cobra, quem paga e para onde vai.' },
  { emoji: '🧑‍⚖️', nome: 'Carreiras do direito', sobre: 'Advocacia, magistratura, Ministério Público e Defensoria, e o Exame da OAB.' },
];
