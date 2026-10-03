/**
 * Palavras do português que se confundem (parônimos e homófonos): parecidas na escrita ou no som,
 * com sentidos diferentes. É o bloco em português da tela «Não confunda», sempre separado do bloco
 * do idioma estudado, para não misturar as duas línguas no mesmo exercício.
 *
 * Os pares e os sentidos são os das listas clássicas de parônimos e homônimos das gramáticas
 * escolares (Bechara, Moderna gramática portuguesa; Cegalla, Novíssima gramática da língua
 * portuguesa) e do VOLP/Aulete; os exemplos foram escritos para o app.
 */

export interface PalavraConfusa {
  palavra: string;
  sentido: string;
  /** frase de exemplo com a palavra exatamente como está em `palavra` */
  exemplo: string;
}

export interface GrupoConfuso {
  id: string;
  palavras: PalavraConfusa[];
  /** um jeito de lembrar */
  dica?: string;
}

export const CONFUSAVEIS_PT: GrupoConfuso[] = [
  {
    id: 'mae-manha',
    palavras: [
      { palavra: 'mãe', sentido: 'a mulher que tem ou cria um filho', exemplo: 'A minha mãe faz aniversário amanhã.' },
      { palavra: 'manhã', sentido: 'a parte do dia que vai do nascer do sol ao meio-dia', exemplo: 'Eu estudo de manhã, antes do trabalho.' },
      { palavra: 'manha', sentido: 'choro ou birra para conseguir alguma coisa', exemplo: 'O bebê fez manha para não dormir.' },
    ],
    dica: 'O til faz a diferença: manhã (com til) é a parte do dia; manha (sem til) é a birra.',
  },
  {
    id: 'comprimento-cumprimento',
    palavras: [
      { palavra: 'comprimento', sentido: 'o tamanho de uma ponta à outra', exemplo: 'O comprimento da mesa é de dois metros.' },
      { palavra: 'cumprimento', sentido: 'a saudação; também o ato de cumprir', exemplo: 'Ele fez um cumprimento com a cabeça.' },
    ],
    dica: 'cOmprimento é do que é cOmprido; cUmprimento vem de cUmprimentar.',
  },
  {
    id: 'descricao-discricao',
    palavras: [
      { palavra: 'descrição', sentido: 'o ato de descrever', exemplo: 'A descrição do quarto no anúncio era perfeita.' },
      { palavra: 'discrição', sentido: 'a qualidade de quem é discreto', exemplo: 'Ela contou o segredo com toda a discrição.' },
    ],
    dica: 'descrição ← descrever; discrição ← discreto.',
  },
  {
    id: 'eminente-iminente',
    palavras: [
      { palavra: 'eminente', sentido: 'importante, que se destaca', exemplo: 'Um eminente cientista veio dar a palestra.' },
      { palavra: 'iminente', sentido: 'que está para acontecer', exemplo: 'Com aquelas nuvens, a chuva era iminente.' },
    ],
    dica: 'Iminente, com i, é o que está Indo acontecer.',
  },
  {
    id: 'emigrar-imigrar',
    palavras: [
      { palavra: 'emigrar', sentido: 'sair do próprio país para viver em outro', exemplo: 'Meu bisavô decidiu emigrar da Itália.' },
      { palavra: 'imigrar', sentido: 'entrar num país para viver nele', exemplo: 'O Canadá recebe muita gente que quer imigrar e trabalhar lá.' },
    ],
    dica: 'emigrar começa como “evadir” e “expulsar” (para fora); imigrar, como “introduzir” (para dentro).',
  },
  {
    id: 'ratificar-retificar',
    palavras: [
      { palavra: 'ratificar', sentido: 'confirmar', exemplo: 'O diretor quis ratificar o acordo por escrito.' },
      { palavra: 'retificar', sentido: 'corrigir, tornar reto', exemplo: 'Preciso retificar o meu endereço no cadastro.' },
    ],
    dica: 'rEtificar é deixar REto, certo.',
  },
  {
    id: 'trafego-trafico',
    palavras: [
      { palavra: 'tráfego', sentido: 'o movimento de veículos ou de dados', exemplo: 'O tráfego na avenida está lento hoje.' },
      { palavra: 'tráfico', sentido: 'o comércio ilegal', exemplo: 'A polícia combate o tráfico de animais silvestres.' },
    ],
  },
  {
    id: 'sessao-secao-cessao',
    palavras: [
      { palavra: 'sessão', sentido: 'o tempo que dura uma reunião, um filme ou uma consulta', exemplo: 'Compramos ingresso para a sessão das oito.' },
      { palavra: 'seção', sentido: 'uma parte, uma divisão', exemplo: 'Os livros de viagem ficam na seção do fundo.' },
      { palavra: 'cessão', sentido: 'o ato de ceder', exemplo: 'A cessão do terreno para a escola foi aprovada.' },
    ],
    dica: 'cessão ← ceder; seção ← seccionar, dividir.',
  },
  {
    id: 'mau-mal',
    palavras: [
      { palavra: 'mau', sentido: 'o contrário de bom', exemplo: 'Hoje acordei de mau humor.' },
      { palavra: 'mal', sentido: 'o contrário de bem', exemplo: 'Dormi mal por causa do barulho.' },
    ],
    dica: 'Troque por “bom” ou “bem”: mau humor → bom humor; dormi mal → dormi bem.',
  },
  {
    id: 'mas-mais',
    palavras: [
      { palavra: 'mas', sentido: 'porém, contudo', exemplo: 'Eu queria ir, mas estava chovendo.' },
      { palavra: 'mais', sentido: 'o contrário de menos', exemplo: 'Quero mais café, por favor.' },
    ],
    dica: 'Troque por “porém” ou “menos”: se “porém” cabe, é mas.',
  },
  {
    id: 'conserto-concerto',
    palavras: [
      { palavra: 'conserto', sentido: 'o reparo de algo quebrado', exemplo: 'Levei o celular para o conserto.' },
      { palavra: 'concerto', sentido: 'uma apresentação de música', exemplo: 'Fomos ao concerto da orquestra no domingo.' },
    ],
    dica: 'concerto é de música, como “concertista”; conserto é de consertar.',
  },
  {
    id: 'censo-senso',
    palavras: [
      { palavra: 'censo', sentido: 'a contagem da população', exemplo: 'O censo conta quantas pessoas moram em cada cidade.' },
      { palavra: 'senso', sentido: 'o juízo, a capacidade de julgar', exemplo: 'Tenha bom senso e leve um casaco.' },
    ],
  },
  {
    id: 'despensa-dispensa',
    palavras: [
      { palavra: 'despensa', sentido: 'o lugar da casa onde se guardam os alimentos', exemplo: 'O arroz está na despensa, ao lado da cozinha.' },
      { palavra: 'dispensa', sentido: 'a licença, o ato de dispensar', exemplo: 'Ele pediu dispensa do trabalho para ir ao médico.' },
    ],
    dica: 'dispensa ← dispensar.',
  },
  {
    id: 'flagrante-fragrante',
    palavras: [
      { palavra: 'flagrante', sentido: 'evidente; pego no ato', exemplo: 'O ladrão foi pego em flagrante.' },
      { palavra: 'fragrante', sentido: 'perfumado', exemplo: 'O jardim ficava fragrante depois da chuva.' },
    ],
    dica: 'fRagrante tem o R da fRagrância.',
  },
  {
    id: 'infringir-infligir',
    palavras: [
      { palavra: 'infringir', sentido: 'desrespeitar uma lei ou uma regra', exemplo: 'Quem estaciona ali vai infringir a lei.' },
      { palavra: 'infligir', sentido: 'aplicar um castigo ou uma pena', exemplo: 'O juiz pode infligir uma multa alta.' },
    ],
  },
  {
    id: 'deferir-diferir',
    palavras: [
      { palavra: 'deferir', sentido: 'atender a um pedido', exemplo: 'A escola vai deferir o seu pedido de matrícula.' },
      { palavra: 'diferir', sentido: 'ser diferente; adiar', exemplo: 'As duas versões da história parecem diferir em tudo.' },
    ],
    dica: 'diferir ← diferente.',
  },
  {
    id: 'acender-ascender',
    palavras: [
      { palavra: 'acender', sentido: 'pôr fogo; ligar a luz', exemplo: 'Pode acender a luz da sala?' },
      { palavra: 'ascender', sentido: 'subir', exemplo: 'O balão começou a ascender devagar.' },
    ],
    dica: 'ascender é da família de “ascensão” e “ascensorista”: o que sobe.',
  },
  {
    id: 'cela-sela',
    palavras: [
      { palavra: 'cela', sentido: 'o quarto de uma prisão ou de um convento', exemplo: 'O preso passou a noite na cela.' },
      { palavra: 'sela', sentido: 'o assento de quem anda a cavalo', exemplo: 'Ajustei a sela antes de montar no cavalo.' },
    ],
  },
  {
    id: 'cheque-xeque',
    palavras: [
      { palavra: 'cheque', sentido: 'uma ordem de pagamento do banco', exemplo: 'Ele pagou o aluguel com um cheque.' },
      { palavra: 'xeque', sentido: 'o lance do xadrez que ameaça o rei; um perigo', exemplo: 'A notícia pôs em xeque a confiança no time.' },
    ],
  },
  {
    id: 'senao-se-nao',
    palavras: [
      { palavra: 'senão', sentido: 'caso contrário; a não ser', exemplo: 'Corra, senão você perde o ônibus.' },
      { palavra: 'se não', sentido: '“se” (condição) + “não”', exemplo: 'Se não chover, vamos à praia.' },
    ],
    dica: 'Se dá para trocar por “caso não”, é separado: se não.',
  },
  {
    id: 'a-fim-afim',
    palavras: [
      { palavra: 'a fim', sentido: 'com a intenção de (a fim de)', exemplo: 'Estudou a fim de passar na prova.' },
      { palavra: 'afim', sentido: 'parecido, aparentado', exemplo: 'O espanhol é uma língua afim do português.' },
    ],
  },
  {
    id: 'ha-a',
    palavras: [
      { palavra: 'há', sentido: 'tempo que já passou (do verbo haver)', exemplo: 'Moro aqui há dois anos.' },
      { palavra: 'a', sentido: 'tempo que ainda vai chegar, ou distância', exemplo: 'Volto daqui a três dias.' },
    ],
    dica: 'Se dá para trocar por “faz”, é há: faz dois anos → há dois anos.',
  },
  {
    id: 'onde-aonde',
    palavras: [
      { palavra: 'onde', sentido: 'o lugar em que alguém ou algo está', exemplo: 'Onde você mora?' },
      { palavra: 'aonde', sentido: 'o lugar para onde alguém vai', exemplo: 'Aonde você vai com tanta pressa?' },
    ],
    dica: 'aonde = a + onde: quem vai, vai A algum lugar.',
  },
  {
    id: 'avo-avo',
    palavras: [
      { palavra: 'avô', sentido: 'o pai do pai ou da mãe', exemplo: 'O meu avô conta histórias de pescaria.' },
      { palavra: 'avó', sentido: 'a mãe do pai ou da mãe', exemplo: 'A minha avó faz o melhor bolo de fubá.' },
    ],
    dica: 'O acento muda o som e o sentido: avô (fechado), avó (aberto).',
  },
  {
    id: 'sexta-cesta-sesta',
    palavras: [
      { palavra: 'sexta', sentido: 'a sexta-feira; o que vem depois do quinto', exemplo: 'Na sexta a gente sai mais cedo.' },
      { palavra: 'cesta', sentido: 'um recipiente trançado', exemplo: 'Pus as frutas na cesta.' },
      { palavra: 'sesta', sentido: 'o cochilo depois do almoço', exemplo: 'O vovô sempre tira uma sesta depois do almoço.' },
    ],
  },
  {
    id: 'absorver-absolver',
    palavras: [
      { palavra: 'absorver', sentido: 'sugar, embeber; assimilar', exemplo: 'A toalha vai absorver a água derramada.' },
      { palavra: 'absolver', sentido: 'inocentar, perdoar', exemplo: 'O júri decidiu absolver o réu.' },
    ],
  },
  {
    id: 'cavaleiro-cavalheiro',
    palavras: [
      { palavra: 'cavaleiro', sentido: 'quem anda a cavalo', exemplo: 'O cavaleiro atravessou o rio montado.' },
      { palavra: 'cavalheiro', sentido: 'homem educado e gentil', exemplo: 'Ele foi um cavalheiro e abriu a porta.' },
    ],
  },
  {
    id: 'soar-suar',
    palavras: [
      { palavra: 'soar', sentido: 'produzir som', exemplo: 'O sinal vai soar às dez horas.' },
      { palavra: 'suar', sentido: 'transpirar', exemplo: 'Correr no calor faz a gente suar muito.' },
    ],
    dica: 'suar ← suor.',
  },
  {
    id: 'delatar-dilatar',
    palavras: [
      { palavra: 'delatar', sentido: 'denunciar', exemplo: 'A testemunha resolveu delatar o esquema.' },
      { palavra: 'dilatar', sentido: 'alargar, aumentar de tamanho', exemplo: 'O calor faz o metal dilatar.' },
    ],
  },
  {
    id: 'vultoso-vultuoso',
    palavras: [
      { palavra: 'vultoso', sentido: 'muito grande, volumoso (uma quantia vultosa)', exemplo: 'A empresa fez um investimento vultoso.' },
      { palavra: 'vultuoso', sentido: 'com o rosto inchado e vermelho', exemplo: 'Depois da alergia, ficou com o rosto vultuoso.' },
    ],
  },
];
