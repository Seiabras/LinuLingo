import type { MiniCourse } from '@/data/cursos/tipos';
import { comOpcoesEmbaralhadas } from '@/data/cursos/embaralhar';

/**
 * A trilha da área Alimentação (pedido do dono, 17/10/2026: “faz o de alimentação e arte também”; o nome
 * Alimentação, com Nutrição e Gastronomia dentro, foi decidido em 15/10/2026). As unidades usam o motor
 * dos minicursos (kind 'alimentacao') e seguem as lentes de `docs/areas-futuras.md`: a nutrição (o que
 * o alimento faz no corpo), a gastronomia (técnica e cultura) e a ciência do alimento (o que acontece na
 * panela). Cada unidade termina numa conta da aba “Na prática” ou num preparo da aba Cozinha.
 *
 * É educação alimentar, não dieta: o app não passa cardápio nem calcula quanto alguém deve comer.
 *
 * Fontes: Ministério da Saúde, “Guia Alimentar para a População Brasileira” (2ª ed., 2014); Anvisa,
 * RDC nº 429/2020 e IN nº 75/2020 (rotulagem nutricional) e RDC nº 216/2004 (boas práticas); as obras
 * citadas em `sources`. Referência geral: H. McGee, “Comida e cozinha: ciência e cultura da culinária”.
 */

const GUIA = {
  label: 'Ministério da Saúde, “Guia Alimentar para a População Brasileira”, 2ª ed. (2014)',
  url: 'https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf',
};
const ROTULO = { label: 'Anvisa, RDC nº 429/2020 e IN nº 75/2020 (rotulagem nutricional)', url: 'https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem' };

export const ALI_NUTRIENTES: MiniCourse = {
  id: 'ali-nutrientes',
  name: 'Os nutrientes',
  emoji: '🥗',
  kind: 'alimentacao',
  summary: 'Carboidratos, proteínas, gorduras, vitaminas e minerais: o que cada um faz e de onde vêm as calorias.',
  sources: [
    GUIA,
    { label: 'W. O. Atwater, “Principles of Nutrition and Nutritive Value of Food”, USDA (1902)', url: 'https://openlibrary.org/search?q=Atwater+Principles+of+Nutrition' },
    { label: 'J. Lind, “A Treatise of the Scurvy” (1753)', url: 'https://openlibrary.org/search?q=Lind+Treatise+of+the+Scurvy' },
  ],
  lessons: [
    {
      id: 'macros',
      title: 'De onde vem a energia',
      emoji: '⚡',
      intro: [
        'Os alimentos têm três grupos de nutrientes que dão energia: os carboidratos (no arroz, no pão, na mandioca, nas frutas), as proteínas (no feijão, no ovo, na carne, no leite) e as gorduras (no azeite, na manteiga, nas castanhas).',
        'No fim do século XIX, o químico americano Wilbur Atwater mediu quanta energia cada um dá: cerca de 4 quilocalorias por grama de carboidrato, 4 por grama de proteína e 9 por grama de gordura. São os números usados até hoje nos rótulos.',
        'Na prática: uma fatia de pão com 15 g de carboidrato, 3 g de proteína e 1 g de gordura tem cerca de 15×4 + 3×4 + 1×9 = 81 kcal. Faça com outros alimentos na aba “Na prática”.',
      ],
      items: [
        { term: 'carboidratos', meaning: 'a energia mais rápida', how: 'Cerca de 4 kcal por grama. Arroz, pão, mandioca, frutas.' },
        { term: 'proteínas', meaning: 'constroem e consertam o corpo', how: 'Cerca de 4 kcal por grama. Feijão, ovo, carne, leite.' },
        { term: 'gorduras', meaning: 'a energia mais concentrada', how: 'Cerca de 9 kcal por grama. Azeite, manteiga, castanhas.' },
        { term: 'caloria (kcal)', meaning: 'a medida da energia dos alimentos', how: 'Os fatores 4, 4 e 9 são de Wilbur Atwater.' },
      ],
      quiz: [
        { q: 'Quantas kcal tem, mais ou menos, 1 grama de gordura?', options: ['9', '4', '1'], answer: 0 },
        { q: '10 g de carboidrato e 10 g de proteína dão, juntos…', options: ['80 kcal', '130 kcal', '20 kcal'], answer: 0 },
        { q: 'Qual destes é rico em proteína?', options: ['Feijão', 'Açúcar', 'Azeite'], answer: 0 },
      ],
    },
    {
      id: 'vitaminas',
      title: 'Vitaminas, minerais e o escorbuto',
      emoji: '🍋',
      intro: [
        'Os marinheiros das grandes navegações morriam de escorbuto: sangravam pela gengiva, perdiam os dentes e não cicatrizavam. Em 1747, o médico escocês James Lind fez um dos primeiros testes controlados da medicina: deu tratamentos diferentes a grupos de marinheiros doentes, e só os que comeram laranjas e limões melhoraram.',
        'A causa só ficou clara no século XX: falta de vitamina C. As vitaminas e os minerais (como o ferro, o cálcio e o iodo) não dão energia, mas o corpo precisa deles em pequenas quantidades para funcionar.',
        'O jeito mais simples de ter todos é comer variado, com muitas cores no prato: frutas, verduras, legumes, feijões e grãos.',
      ],
      items: [
        { term: 'vitamina C', meaning: 'a falta causa o escorbuto', how: 'Nas frutas cítricas, na acerola, na goiaba.' },
        { term: 'ferro', meaning: 'leva o oxigênio no sangue', how: 'No feijão, nas carnes e nas folhas verde-escuras.' },
        { term: 'James Lind', meaning: 'testou os cítricos contra o escorbuto', how: '1747, um dos primeiros testes controlados.' },
      ],
      quiz: [
        { q: 'O que curou os marinheiros de James Lind?', options: ['Laranjas e limões', 'Pão e água', 'Carne salgada'], answer: 0 },
        { q: 'O escorbuto vem da falta de qual vitamina?', options: ['C', 'A', 'D'], answer: 0 },
      ],
    },
  ],
};

export const ALI_GUIA: MiniCourse = {
  id: 'ali-guia',
  name: 'Comer bem, do jeito brasileiro',
  emoji: '🍛',
  kind: 'alimentacao',
  summary: 'O Guia Alimentar brasileiro, os quatro grupos pelo processamento e por que arroz com feijão é uma dupla tão boa.',
  sources: [GUIA, { label: 'C. A. Monteiro et al., “NOVA. The star shines bright”, World Nutrition 7 (2016)', url: 'https://worldnutritionjournal.org/' }],
  lessons: [
    {
      id: 'nova',
      title: 'Do natural ao ultraprocessado',
      emoji: '🥫',
      intro: [
        'Em 2014, o Ministério da Saúde lançou a 2ª edição do “Guia Alimentar para a População Brasileira”, elogiado no mundo todo. Em vez de contar calorias, ele separa os alimentos pelo quanto foram processados (a classificação NOVA, criada por pesquisadores da USP).',
        'São quatro grupos: os in natura ou minimamente processados (frutas, arroz, feijão, ovos, leite), os ingredientes culinários (óleo, sal, açúcar), os processados (pão francês, queijo, conservas) e os ultraprocessados (refrigerante, salgadinho de pacote, biscoito recheado, macarrão instantâneo).',
        'A regra de ouro do Guia: prefira sempre os alimentos in natura ou minimamente processados e as preparações culinárias aos alimentos ultraprocessados.',
      ],
      items: [
        { term: 'in natura', meaning: 'como vem da natureza, ou quase', how: 'Frutas, verduras, ovos, arroz, feijão.' },
        { term: 'processado', meaning: 'alimento com sal, açúcar ou óleo, feito com poucos ingredientes', how: 'Pão francês, queijo, legumes em conserva.' },
        { term: 'ultraprocessado', meaning: 'fórmula industrial com muitos ingredientes de fábrica', how: 'Refrigerante, salgadinho, biscoito recheado.' },
        { term: 'regra de ouro', meaning: 'prefira a comida de verdade aos ultraprocessados', how: 'Guia Alimentar, 2014.' },
      ],
      quiz: [
        { q: 'Em que grupo fica o refrigerante?', options: ['Ultraprocessados', 'In natura', 'Ingredientes culinários'], answer: 0 },
        { q: 'Em que grupo fica o ovo?', options: ['In natura ou minimamente processado', 'Ultraprocessados', 'Processados'], answer: 0 },
        { q: 'O que o Guia usa para separar os alimentos?', options: ['O quanto foram processados', 'As calorias', 'A cor'], answer: 0 },
      ],
    },
    {
      id: 'arroz-feijao',
      title: 'Arroz com feijão',
      emoji: '🍚',
      intro: [
        'As proteínas são feitas de peças menores, os aminoácidos. Alguns o corpo não fabrica e precisa receber da comida: são os essenciais.',
        'O arroz tem pouco de um aminoácido essencial, a lisina, e o feijão tem bastante; o feijão tem pouco de outro, a metionina, e o arroz tem mais. Juntos, um completa o outro.',
        'Por isso o prato de todo dia do Brasil, arroz com feijão, é uma combinação tão boa. O Guia Alimentar o usa como exemplo de refeição de verdade.',
      ],
      items: [
        { term: 'aminoácido essencial', meaning: 'o corpo não fabrica: vem da comida', how: 'São nove nos adultos.' },
        { term: 'proteínas complementares', meaning: 'um alimento completa o que falta no outro', how: 'Arroz (pouca lisina) + feijão (pouca metionina).' },
      ],
      quiz: [
        { q: 'Por que arroz e feijão combinam tão bem?', options: ['Um completa os aminoácidos que faltam no outro', 'Têm a mesma cor', 'Cozinham no mesmo tempo'], answer: 0 },
        { q: 'O que é um aminoácido essencial?', options: ['Um que o corpo não fabrica', 'Um que só existe na carne', 'Uma vitamina'], answer: 0 },
      ],
    },
  ],
};

export const ALI_ROTULO: MiniCourse = {
  id: 'ali-rotulo',
  name: 'Lendo o rótulo',
  emoji: '🏷️',
  kind: 'alimentacao',
  summary: 'A lista de ingredientes, a tabela nutricional e a lupa do “alto em”: como ler a embalagem em poucos segundos.',
  sources: [ROTULO, GUIA],
  lessons: [
    {
      id: 'ingredientes',
      title: 'A lista de ingredientes',
      emoji: '📋',
      intro: [
        'A lista de ingredientes vem em ordem: do que tem mais para o que tem menos. Se o açúcar é o primeiro, é o ingrediente principal.',
        'O Guia Alimentar dá uma dica: desconfie de listas longas, com nomes que você não usa na cozinha de casa (xarope de glicose, aromatizante, realçador de sabor). É o sinal de um ultraprocessado.',
        'O açúcar se esconde com vários nomes: xarope de milho, maltodextrina, açúcar invertido, glicose. Somados, podem passar à frente de tudo.',
      ],
      items: [
        { term: 'ordem decrescente', meaning: 'o primeiro ingrediente é o que tem mais', how: 'Regra da rotulagem no Brasil.' },
        { term: 'nomes do açúcar', meaning: 'xarope de glicose, maltodextrina, açúcar invertido', how: 'O mesmo açúcar com outros nomes.' },
      ],
      quiz: [
        { q: 'Num biscoito, o primeiro ingrediente é o açúcar. O que isso quer dizer?', options: ['É o que ele tem mais', 'É o que ele tem menos', 'Nada'], answer: 0 },
        { q: 'Uma lista longa, com nomes de fábrica, indica…', options: ['Um ultraprocessado', 'Um alimento in natura', 'Um tempero caseiro'], answer: 0 },
      ],
    },
    {
      id: 'lupa',
      title: 'A lupa e a tabela',
      emoji: '🔍',
      intro: [
        'Desde outubro de 2022, as embalagens no Brasil trazem na frente uma lupa preta quando o alimento é “alto em” açúcar adicionado, gordura saturada ou sódio (RDC nº 429/2020 da Anvisa).',
        'Nos sólidos, a lupa aparece a partir de 15 g de açúcar adicionado, 6 g de gordura saturada ou 600 mg de sódio em 100 g. Nos líquidos, a partir de 7,5 g, 3 g ou 300 mg em 100 ml.',
        'A tabela nutricional agora mostra sempre os valores em 100 g (ou 100 ml), além da porção: assim dá para comparar dois produtos de tamanhos diferentes. Teste com uma embalagem de casa na aba “Na prática”.',
      ],
      items: [
        { term: 'lupa “alto em”', meaning: 'aviso de muito açúcar adicionado, gordura saturada ou sódio', how: 'Na frente da embalagem, desde 2022.' },
        { term: 'por 100 g', meaning: 'a coluna que deixa comparar produtos', how: 'Obrigatória na nova tabela nutricional.' },
        { term: '%VD', meaning: 'quanto a porção dá do valor diário de referência', how: 'Calculado para uma dieta de 2.000 kcal.' },
      ],
      quiz: [
        { q: 'Um biscoito tem 20 g de açúcar adicionado em 100 g. Ele leva a lupa?', options: ['Sim: passa de 15 g', 'Não', 'Só se for recheado'], answer: 0 },
        { q: 'Para que serve a coluna “por 100 g”?', options: ['Comparar produtos de tamanhos diferentes', 'Mostrar o preço', 'Dizer a validade'], answer: 0 },
      ],
    },
  ],
};

export const ALI_CIENCIA: MiniCourse = {
  id: 'ali-ciencia',
  name: 'A química da panela',
  emoji: '🧪',
  kind: 'alimentacao',
  summary: 'Por que o pão doura, o açúcar vira caramelo, a maionese engrossa e a massa cresce: a ciência de todo dia na cozinha.',
  sources: [
    { label: 'L.-C. Maillard, “Action des acides aminés sur les sucres”, Comptes Rendus 154 (1912)', url: 'https://gallica.bnf.fr/' },
    { label: 'H. McGee, “Comida e cozinha: ciência e cultura da culinária” (WMF Martins Fontes)', url: 'https://openlibrary.org/search?q=On+Food+and+Cooking+McGee' },
  ],
  lessons: [
    {
      id: 'dourar',
      title: 'Dourar e caramelizar',
      emoji: '🍞',
      intro: [
        'Em 1912, o químico francês Louis-Camille Maillard descreveu o que acontece quando os açúcares e as proteínas se encontram no calor: formam centenas de substâncias novas, de cor marrom e cheiro bom. É a reação de Maillard, a da casca do pão, do bife selado e do café torrado.',
        'A caramelização é outra coisa: é o açúcar sozinho que se decompõe com o calor, a partir de uns 160 °C, e vira caramelo.',
        'Na prática: para dourar, a superfície precisa estar seca e a panela quente. Carne molhada ou panela cheia demais soltam água, e a água não passa de 100 °C: em vez de dourar, cozinha.',
      ],
      items: [
        { term: 'reação de Maillard', meaning: 'açúcar + proteína no calor: cor e sabor', how: 'Louis-Camille Maillard, 1912.' },
        { term: 'caramelização', meaning: 'o açúcar sozinho se decompondo no calor', how: 'A partir de uns 160 °C.' },
      ],
      quiz: [
        { q: 'O que doura a casca do pão?', options: ['A reação de Maillard', 'A fermentação', 'O sal'], answer: 0 },
        { q: 'Por que a carne molhada não doura bem?', options: ['A água não passa de 100 °C', 'A carne fica fria para sempre', 'O sal some'], answer: 0 },
      ],
    },
    {
      id: 'emulsao',
      title: 'Maionese e pão',
      emoji: '🥚',
      intro: [
        'Óleo e água não se misturam. Na maionese, a gema do ovo tem a lecitina, uma molécula com um lado que gosta de água e outro que gosta de gordura: ela envolve as gotinhas de óleo e as mantém espalhadas. Isso é uma emulsão.',
        'Se o óleo entra rápido demais, as gotas se juntam e a maionese “desanda”. Por isso se põe o óleo aos poucos, em fio.',
        'Já o pão cresce por causa de um ser vivo: a levedura (o fermento biológico) come os açúcares da massa e solta gás carbônico, que fica preso na rede de glúten. Louis Pasteur mostrou, nos anos 1850 e 1860, que a fermentação é obra de seres vivos.',
      ],
      items: [
        { term: 'emulsão', meaning: 'gotinhas de um líquido espalhadas no outro', how: 'Maionese: óleo na água, com a lecitina da gema.' },
        { term: 'levedura', meaning: 'o fungo do fermento biológico', how: 'Come açúcar e solta gás carbônico.' },
        { term: 'glúten', meaning: 'a rede de proteínas do trigo', how: 'Prende o gás e deixa o pão fofo.' },
      ],
      quiz: [
        { q: 'O que segura o óleo espalhado na maionese?', options: ['A lecitina da gema', 'O sal', 'O vinagre sozinho'], answer: 0 },
        { q: 'O que faz o pão crescer?', options: ['O gás carbônico da levedura', 'O calor do forno sozinho', 'A água fervendo'], answer: 0 },
      ],
    },
  ],
};

export const ALI_TECNICAS: MiniCourse = {
  id: 'ali-tecnicas',
  name: 'Técnicas de cozinha',
  emoji: '🔪',
  kind: 'alimentacao',
  summary: 'Os jeitos de cozinhar, os cortes, os molhos-mãe e a segurança na cozinha (com os detalhes na aba Cozinha).',
  sources: [
    { label: 'A. Escoffier, “Le Guide Culinaire” (1903)', url: 'https://gallica.bnf.fr/' },
    { label: 'Anvisa, RDC nº 216/2004 (boas práticas para serviços de alimentação)', url: 'https://www.gov.br/anvisa/pt-br' },
  ],
  lessons: [
    {
      id: 'calor',
      title: 'Calor seco e calor úmido',
      emoji: '🔥',
      intro: [
        'Os jeitos de cozinhar se dividem em dois. No calor úmido, o alimento cozinha na água ou no vapor: ferver, cozinhar no vapor, escalfar (o ovo pochê), ensopar. Fica macio, mas não doura.',
        'No calor seco, o alimento cozinha no ar quente, na gordura ou na chapa: assar, grelhar, refogar, fritar. Doura, porque passa dos 100 °C.',
        'Muitas receitas usam os dois: o ensopado começa selando a carne (seco, para dourar) e termina cozinhando no caldo (úmido, para amaciar).',
      ],
      items: [
        { term: 'calor úmido', meaning: 'na água ou no vapor', how: 'Ferver, vapor, escalfar, ensopar.' },
        { term: 'calor seco', meaning: 'no ar quente, na gordura ou na chapa', how: 'Assar, grelhar, refogar, fritar.' },
        { term: 'branquear', meaning: 'ferver rápido e passar para a água gelada', how: 'Deixa o legume verdinho e firme.' },
      ],
      quiz: [
        { q: 'Cozinhar no vapor é calor…', options: ['Úmido', 'Seco', 'Nenhum dos dois'], answer: 0 },
        { q: 'Por que o assado doura e o cozido não?', options: ['No seco a temperatura passa dos 100 °C', 'O forno tem sal', 'A água doura'], answer: 0 },
      ],
    },
    {
      id: 'seguranca',
      title: 'Segurança na cozinha',
      emoji: '🧼',
      intro: [
        'As bactérias se multiplicam depressa entre 5 °C e 60 °C, a “zona de perigo”. A Anvisa (RDC nº 216/2004) orienta guardar a comida quente acima de 60 °C e a fria abaixo de 5 °C.',
        'As regras de ouro: lavar as mãos antes de cozinhar, não usar a mesma tábua para a carne crua e para a salada sem lavar no meio, e pôr na geladeira as sobras logo que esfriarem.',
        'E faca afiada é mais segura que faca cega: escorrega menos. Corte sempre com os dedos dobrados, em garra.',
      ],
      items: [
        { term: 'zona de perigo', meaning: 'de 5 °C a 60 °C', how: 'Onde as bactérias crescem mais rápido.' },
        { term: 'contaminação cruzada', meaning: 'levar micróbios do cru para o pronto', how: 'A mesma tábua para a carne e a salada.' },
        { term: 'mão em garra', meaning: 'os dedos dobrados ao cortar', how: 'A faca encosta nos nós dos dedos, não nas pontas.' },
      ],
      quiz: [
        { q: 'Qual é a zona de perigo para as bactérias?', options: ['De 5 °C a 60 °C', 'Abaixo de 0 °C', 'Acima de 100 °C'], answer: 0 },
        { q: 'Cortar a carne crua e depois a salada na mesma tábua, sem lavar, é…', options: ['Contaminação cruzada', 'Uma técnica francesa', 'Seguro'], answer: 0 },
      ],
    },
  ],
};

export const ALI_CULTURA: MiniCourse = {
  id: 'ali-cultura',
  name: 'Comida e cultura',
  emoji: '🌽',
  kind: 'alimentacao',
  summary: 'A mandioca dos povos indígenas, a verdadeira história da feijoada e as comidas que viraram patrimônio do Brasil.',
  sources: [
    { label: 'L. da Câmara Cascudo, “História da Alimentação no Brasil” (1967)', url: 'https://openlibrary.org/search?q=Historia+da+Alimentacao+no+Brasil+Cascudo' },
    { label: 'IPHAN, “Ofício das Baianas de Acarajé” (registro de 2005)', url: 'http://portal.iphan.gov.br/' },
    { label: 'K. Olsen e B. Schaal, “Evidence on the origin of cassava”, PNAS 96 (1999)', url: 'https://doi.org/10.1073/pnas.96.10.5586' },
  ],
  lessons: [
    {
      id: 'mandioca',
      title: 'A mandioca',
      emoji: '🌿',
      intro: [
        'A mandioca foi domesticada pelos povos indígenas no sudoeste da Amazônia, há milhares de anos. Dela vêm a farinha, a tapioca, o polvilho, o tucupi e o beiju.',
        'A mandioca-brava tem uma substância que solta cianeto, um veneno. Os povos indígenas criaram o jeito de tirar: ralar, espremer no tipiti (um cesto de palha trançada) e cozinhar. Do caldo espremido e cozido por muito tempo sai o tucupi.',
        'Na prática: a mandioca de mesa (aipim, macaxeira) tem pouco dessa substância e se come cozida. A brava nunca se come crua.',
      ],
      items: [
        { term: 'mandioca', meaning: 'raiz domesticada na Amazônia', how: 'Também chamada aipim ou macaxeira (a de mesa).' },
        { term: 'tipiti', meaning: 'cesto trançado para espremer a massa', how: 'Invenção indígena.' },
        { term: 'tucupi', meaning: 'o caldo amarelo da mandioca-brava, cozido', how: 'No pato no tucupi e no tacacá.' },
      ],
      quiz: [
        { q: 'Onde a mandioca foi domesticada?', options: ['Na Amazônia', 'Na Europa', 'Na China'], answer: 0 },
        { q: 'Para que serve o tipiti?', options: ['Espremer a massa da mandioca', 'Assar o pão', 'Guardar água'], answer: 0 },
      ],
    },
    {
      id: 'patrimonio',
      title: 'Feijoada, acarajé e patrimônio',
      emoji: '🫘',
      intro: [
        'Conta-se que a feijoada nasceu nas senzalas, com as sobras do porco. Historiadores como Luís da Câmara Cascudo, na “História da Alimentação no Brasil” (1967), não acharam documentos disso e a ligam aos cozidos de carnes e feijão da tradição portuguesa.',
        'Algumas comidas viraram patrimônio cultural do Brasil, registradas pelo IPHAN: o ofício das baianas de acarajé (2005), o modo de fazer o queijo artesanal de Minas (2008) e a cajuína do Piauí (2014).',
        'Patrimônio não é só a receita: é o saber de quem faz, o tabuleiro da baiana, o jeito de curar o queijo.',
      ],
      items: [
        { term: 'acarajé', meaning: 'bolinho de feijão-fradinho frito no dendê', how: 'O ofício das baianas é patrimônio desde 2005.' },
        { term: 'queijo minas artesanal', meaning: 'feito com leite cru e curado', how: 'Patrimônio desde 2008.' },
        { term: 'cajuína', meaning: 'bebida de caju clarificada', how: 'Piauí, patrimônio desde 2014.' },
      ],
      quiz: [
        { q: 'Que comida baiana tem o ofício registrado como patrimônio?', options: ['O acarajé', 'A pizza', 'O sushi'], answer: 0 },
        { q: 'A história da feijoada nascida nas senzalas…', options: ['Não tem documento que a sustente', 'Está provada', 'É lei'], answer: 0 },
      ],
    },
  ],
};

export const UNIDADES_ALI: MiniCourse[] = [ALI_NUTRIENTES, ALI_GUIA, ALI_ROTULO, ALI_CIENCIA, ALI_TECNICAS, ALI_CULTURA].map(comOpcoesEmbaralhadas);

/** Os ramos que ainda vão chegar (a lista do dono em `docs/areas-futuras.md`). */
export const PROXIMAS_UNIDADES_ALI = [
  { emoji: '🍰', nome: 'Panificação e confeitaria', sobre: 'O pão de fermentação natural, o ponto do açúcar, as massas e os cremes.' },
  { emoji: '🌍', nome: 'Cozinhas do mundo', sobre: 'O que se come em cada país, ligado aos idiomas do app.' },
  { emoji: '🏃', nome: 'Nutrição e esporte', sobre: 'A água, a energia e a recuperação de quem treina.' },
  { emoji: '🌱', nome: 'Comida e planeta', sobre: 'O desperdício, a comida da estação e a agricultura familiar.' },
  { emoji: '👅', nome: 'Os sentidos', sobre: 'Os cinco gostos (com o umami), o cheiro e a análise sensorial.' },
];
