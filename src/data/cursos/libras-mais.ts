import type { MiniLesson } from './tipos';

/** Mais lições de Libras: o vocabulário do dia a dia e a gramática do espaço (os sinais, no VLibras). */
export const LIBRAS_MAIS: MiniLesson[] = [
  {
    id: 'cores',
    title: 'Cores',
    emoji: '🎨',
    intro: [
      'Na Libras, a característica costuma vir depois da coisa: CASA AZUL, CARRO VERMELHO — como no português, e ao contrário do inglês.',
      'Quando a cor é importante na conversa, ela pode ser repetida ou reforçada pela expressão do rosto: «bem vermelho».',
    ],
    items: [
      { term: 'VERMELHO', meaning: 'vermelho', vlibras: 'vermelho' },
      { term: 'AZUL', meaning: 'azul', vlibras: 'azul' },
      { term: 'AMARELO', meaning: 'amarelo', vlibras: 'amarelo' },
      { term: 'VERDE', meaning: 'verde', vlibras: 'verde' },
      { term: 'PRETO', meaning: 'preto', vlibras: 'preto' },
      { term: 'BRANCO', meaning: 'branco', vlibras: 'branco' },
      { term: 'ROSA', meaning: 'rosa', vlibras: 'rosa' },
      { term: 'COR', meaning: 'cor', vlibras: 'cor' },
    ],
    quiz: [
      { q: 'Em Libras, onde costuma ficar a cor?', options: ['Depois da coisa: CASA AZUL', 'Antes da coisa: AZUL CASA', 'Em lugar nenhum'], answer: 0 },
      { q: 'Como se reforça que algo é «bem vermelho»?', options: ['Com a expressão do rosto e o movimento', 'Soletrando', 'Não se reforça'], answer: 0 },
    ],
  },
  {
    id: 'comida',
    title: 'Comida e bebida',
    emoji: '🍽️',
    intro: [
      'Muitos sinais de comida e bebida lembram o gesto de comer ou de beber: são icônicos. Mas o detalhe escolhido muda de uma língua de sinais para outra — por isso não dá para adivinhar os da ASL sabendo os da Libras.',
      'Os verbos COMER e BEBER podem mudar o movimento para mostrar como: comer depressa, beber devagar.',
    ],
    items: [
      { term: 'ÁGUA', meaning: 'água', vlibras: 'água' },
      { term: 'CAFÉ', meaning: 'café', vlibras: 'café' },
      { term: 'PÃO', meaning: 'pão', vlibras: 'pão' },
      { term: 'ARROZ', meaning: 'arroz', vlibras: 'arroz' },
      { term: 'FEIJÃO', meaning: 'feijão', vlibras: 'feijão' },
      { term: 'LEITE', meaning: 'leite', vlibras: 'leite' },
      { term: 'COMER', meaning: 'comer', vlibras: 'comer' },
      { term: 'BEBER', meaning: 'beber', vlibras: 'beber' },
    ],
    quiz: [
      { q: 'O que é um sinal icônico?', options: ['Um sinal que lembra o que significa', 'Um sinal que só existe na ASL', 'Um sinal soletrado'], answer: 0 },
      { q: 'Dá para adivinhar os sinais de outra língua de sinais pela iconicidade?', options: ['Sim, sempre', 'Não: cada língua escolhe um detalhe diferente'], answer: 1 },
    ],
  },
  {
    id: 'casa-escola',
    title: 'Casa e escola',
    emoji: '🏫',
    intro: [
      'A Libras tem sinais compostos, como as palavras compostas: ESCOLA junta CASA e ESTUDAR — a casa onde se estuda.',
      'A escola bilíngue para surdos ensina em Libras como primeira língua e o português escrito como segunda. É o modelo que a comunidade surda defende.',
    ],
    items: [
      { term: 'CASA', meaning: 'casa', vlibras: 'casa' },
      { term: 'ESTUDAR', meaning: 'estudar', vlibras: 'estudar' },
      { term: 'ESCOLA', meaning: 'escola (CASA + ESTUDAR)', vlibras: 'escola' },
      { term: 'PROFESSOR', meaning: 'professor, professora', vlibras: 'professor' },
      { term: 'ALUNO', meaning: 'aluno, aluna', vlibras: 'aluno' },
      { term: 'LIVRO', meaning: 'livro', vlibras: 'livro' },
      { term: 'TRABALHAR', meaning: 'trabalhar', vlibras: 'trabalhar' },
    ],
    quiz: [
      { q: 'De que sinais é feito ESCOLA?', options: ['CASA + ESTUDAR', 'LIVRO + LER', 'PROFESSOR + ALUNO'], answer: 0 },
      { q: 'Na escola bilíngue para surdos, qual é a primeira língua?', options: ['O português', 'A Libras'], answer: 1 },
    ],
  },
  {
    id: 'animais',
    title: 'Animais',
    emoji: '🐾',
    intro: [
      'Depois de sinalizar o animal, dá para usar um classificador — uma configuração de mão que representa o bicho — e mostrar o que ele faz: o gato subindo no muro, o pássaro voando para longe.',
    ],
    items: [
      { term: 'CACHORRO', meaning: 'cachorro', vlibras: 'cachorro' },
      { term: 'GATO', meaning: 'gato', vlibras: 'gato' },
      { term: 'CAVALO', meaning: 'cavalo', vlibras: 'cavalo' },
      { term: 'PÁSSARO', meaning: 'pássaro', vlibras: 'pássaro' },
      { term: 'PEIXE', meaning: 'peixe', vlibras: 'peixe' },
      { term: 'BOI', meaning: 'boi', vlibras: 'boi' },
    ],
    quiz: [
      { q: 'Para que serve um classificador?', options: ['Para representar o bicho e mostrar o que ele faz', 'Para soletrar o nome', 'Para fazer perguntas'], answer: 0 },
    ],
  },
  {
    id: 'tempo',
    title: 'Tempo: ontem, hoje, amanhã',
    emoji: '⏳',
    intro: [
      'A Libras usa uma linha do tempo em volta do corpo: o passado fica para trás, o futuro para a frente e o presente junto do corpo. Por isso ONTEM e AMANHÃ se parecem, mas vão em direções opostas.',
      'O verbo não muda com o tempo como no português: diz-se ONTEM EU ESTUDAR, e o sinal de tempo no começo vale para a frase inteira.',
    ],
    items: [
      { term: 'HOJE', meaning: 'hoje', vlibras: 'hoje' },
      { term: 'ONTEM', meaning: 'ontem (para trás)', vlibras: 'ontem' },
      { term: 'AMANHÃ', meaning: 'amanhã (para a frente)', vlibras: 'amanhã' },
      { term: 'AGORA', meaning: 'agora', vlibras: 'agora' },
      { term: 'SEMANA', meaning: 'semana', vlibras: 'semana' },
      { term: 'ANO', meaning: 'ano', vlibras: 'ano' },
    ],
    quiz: [
      { q: 'Para onde vai o futuro na linha do tempo da Libras?', options: ['Para trás', 'Para a frente', 'Para cima'], answer: 1 },
      { q: 'Como se diz «ontem eu estudei»?', options: ['ONTEM EU ESTUDAR: o tempo vai no começo', 'Com uma terminação no verbo', 'Não dá para dizer'], answer: 0 },
    ],
  },
  {
    id: 'verbos-direcao',
    title: 'Verbos com direção',
    emoji: '➡️',
    intro: [
      'Alguns verbos se movem de quem faz para quem recebe. AJUDAR saindo de mim para você é «eu te ajudo»; saindo de você para mim, «você me ajuda». Não é preciso sinalizar EU e VOCÊ: a direção já diz.',
      'Se a Ana foi colocada à esquerda na conversa, AJUDAR indo da esquerda para mim quer dizer «a Ana me ajuda».',
    ],
    items: [
      { term: 'AJUDAR', meaning: 'ajudar', vlibras: 'ajudar' },
      { term: 'DAR', meaning: 'dar', vlibras: 'dar' },
      { term: 'PERGUNTAR', meaning: 'perguntar', vlibras: 'perguntar' },
      { term: 'RESPONDER', meaning: 'responder', vlibras: 'responder' },
      { term: 'AVISAR', meaning: 'avisar', vlibras: 'avisar' },
    ],
    quiz: [
      { q: 'AJUDAR saindo de você e vindo para mim quer dizer…', options: ['Eu te ajudo', 'Você me ajuda', 'Nós ajudamos'], answer: 1 },
      { q: 'Nos verbos com direção, precisa sinalizar EU e VOCÊ?', options: ['Sim, sempre', 'Não: a direção já mostra quem faz e quem recebe'], answer: 1 },
    ],
  },
  {
    id: 'lugares',
    title: 'Lugares',
    emoji: '🏙️',
    intro: [
      'Muitas cidades e estados têm sinal próprio, criado pela comunidade surda de lá; outros se soletram. O sinal de uma cidade pode variar de região para região, como os sotaques.',
    ],
    items: [
      { term: 'BRASIL', meaning: 'Brasil', vlibras: 'Brasil' },
      { term: 'CIDADE', meaning: 'cidade', vlibras: 'cidade' },
      { term: 'SÃO PAULO', meaning: 'São Paulo', vlibras: 'São Paulo' },
      { term: 'RIO DE JANEIRO', meaning: 'Rio de Janeiro', vlibras: 'Rio de Janeiro' },
      { term: 'HOSPITAL', meaning: 'hospital', vlibras: 'hospital' },
      { term: 'BANHEIRO', meaning: 'banheiro', vlibras: 'banheiro' },
    ],
    quiz: [
      { q: 'Os sinais das cidades são iguais no Brasil inteiro?', options: ['Sim', 'Podem variar de região para região'], answer: 1 },
    ],
  },
  {
    id: 'frases',
    title: 'Primeiras frases',
    emoji: '💬',
    intro: [
      'Para escrever Libras com letras do português, usa-se a glosa: cada sinal em MAIÚSCULAS, na ordem da Libras. «Qual é o seu nome?» vira NOME VOCÊ QUAL?',
      'O VLibras traduz do português, então mostra estas frases já na ordem da Libras. Compare a frase em português com o que o avatar faz.',
    ],
    items: [
      { term: 'NOME VOCÊ QUAL?', meaning: 'Qual é o seu nome?', vlibras: 'Qual é o seu nome?' },
      { term: 'PRAZER CONHECER', meaning: 'Prazer em conhecer.', vlibras: 'Prazer em conhecer você.' },
      { term: 'EU OUVINTE, APRENDER LIBRAS', meaning: 'Eu sou ouvinte e estou aprendendo Libras.', vlibras: 'Eu sou ouvinte e estou aprendendo Libras.' },
      { term: 'BANHEIRO ONDE?', meaning: 'Onde fica o banheiro?', vlibras: 'Onde fica o banheiro?' },
      { term: 'DESCULPA, NÃO ENTENDER', meaning: 'Desculpa, não entendi.', vlibras: 'Desculpa, não entendi.' },
    ],
    quiz: [
      { q: 'O que é a glosa?', options: ['Escrever os sinais em maiúsculas, na ordem da Libras', 'Um tipo de sinal', 'A tradução para o inglês'], answer: 0 },
      { q: 'Na glosa NOME VOCÊ QUAL?, onde fica a pergunta?', options: ['No fim', 'No começo'], answer: 0 },
    ],
  },
];
