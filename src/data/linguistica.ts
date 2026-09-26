import type { LingArea } from './types';

/** O que cada área da língua estuda, explicado com exemplos do português (vale para todos os idiomas). */
export interface AreaInfo {
  id: LingArea;
  name: string;
  emoji: string;
  /** Pergunta que resume a área */
  question: string;
  /** Definição curta */
  what: string;
  /** Exemplos no português, que o aluno já conhece */
  examplesPt: string[];
  /** Palavras-chave da área, com uma explicação curta */
  keywords: [string, string][];
}

export const AREAS: AreaInfo[] = [
  {
    id: 'fonetica',
    name: 'Fonética',
    emoji: '👄',
    question: 'Como os sons são produzidos e ouvidos?',
    what: 'Estuda os sons da fala como fenômeno físico: como a boca, a língua, os lábios e as cordas vocais produzem cada som, e como descrevê-los com precisão. A ferramenta principal é o Alfabeto Fonético Internacional (IPA), que dá um símbolo único para cada som, em qualquer língua.',
    examplesPt: [
      'O «r» de «rato» no Rio [χ] e o de «caro» [ɾ] são sons diferentes, produzidos em lugares diferentes da boca.',
      'O «t» de «tia» vira [t͡ʃ] em boa parte do Brasil: o som muda antes de [i].',
      '[p] e [b] são feitos do mesmo jeito com os lábios; a diferença é a vibração das cordas vocais.',
    ],
    keywords: [
      ['IPA', 'alfabeto com um símbolo para cada som, escrito entre colchetes: [ˈkaza]'],
      ['ponto de articulação', 'onde a boca se fecha ou se aproxima: lábios, dentes, céu da boca…'],
      ['modo de articulação', 'como o ar passa: bloqueado (p, t), raspando (s, f), pelo nariz (m, n)…'],
      ['vozeamento', 'se as cordas vocais vibram (b, d, g, z) ou não (p, t, k, s)'],
      ['tônica', 'a sílaba mais forte da palavra, marcada no IPA com ˈ'],
    ],
  },
  {
    id: 'fonologia',
    name: 'Fonologia',
    emoji: '🔊',
    question: 'Quais sons mudam o significado, e como eles se combinam?',
    what: 'Estuda os sons como SISTEMA de uma língua: quais diferenças de som distinguem palavras (fonemas), quais são só variações sem importância (alofones), as regras de combinação, a sílaba, o acento e a entonação. Duas línguas podem ter os mesmos sons e sistemas diferentes.',
    examplesPt: [
      '«faca» × «vaca»: trocar [f] por [v] muda a palavra, então /f/ e /v/ são fonemas diferentes em português.',
      'O «t» de «tia» dito [t] ou [t͡ʃ] é a mesma palavra: são alofones do mesmo fonema /t/.',
      '«sábia», «sabia» e «sabiá»: só o lugar da tônica muda o significado.',
    ],
    keywords: [
      ['fonema', 'som que distingue palavras, escrito entre barras: /p/, /b/'],
      ['alofone', 'variante de um fonema que não muda o significado'],
      ['par mínimo', 'duas palavras que só diferem num som: faca/vaca'],
      ['redução vocálica', 'vogal átona que enfraquece: «menino» dito «mininu»'],
      ['entonação', 'a melodia da frase: a pergunta sobe, a afirmação desce'],
    ],
  },
  {
    id: 'morfologia',
    name: 'Morfologia',
    emoji: '🧩',
    question: 'Como as palavras são formadas e como elas mudam?',
    what: 'Estuda a estrutura interna das palavras: raízes, prefixos, sufixos e terminações (morfemas), como se formam palavras novas e como elas se flexionam em gênero, número, pessoa, tempo e caso.',
    examplesPt: [
      '«in-feliz-mente»: um prefixo, uma raiz e um sufixo; cada pedaço traz um sentido.',
      '«cant-á-va-mos»: raiz, vogal temática, tempo (-va-) e pessoa (-mos).',
      '«menin-o / menin-a / menin-os»: a terminação marca gênero e número.',
    ],
    keywords: [
      ['morfema', 'a menor parte da palavra que tem sentido: in-, feliz, -mente'],
      ['flexão', 'mudança de forma pela gramática: gênero, número, tempo, caso'],
      ['derivação', 'palavra nova a partir de outra: pedra → pedreiro'],
      ['caso', 'terminação que mostra a função da palavra na frase (no latim, no russo, no romeno)'],
      ['aspecto', 'se a ação é vista como concluída ou em andamento'],
    ],
  },
  {
    id: 'sintaxe',
    name: 'Sintaxe',
    emoji: '🏗️',
    question: 'Como as palavras se organizam em frases?',
    what: 'Estuda a construção das frases: a ordem das palavras, as funções (sujeito, verbo, objeto, complementos), a concordância e a regência, e como as orações se ligam umas às outras (coordenação e subordinação).',
    examplesPt: [
      '«O cachorro mordeu o carteiro» × «O carteiro mordeu o cachorro»: mesmas palavras, ordem diferente, sentido oposto.',
      '«Os meninos saíram»: o verbo concorda com o sujeito no plural.',
      '«Eu vi o filme que você indicou»: uma oração dentro da outra (subordinada).',
    ],
    keywords: [
      ['sujeito e predicado', 'de quem se fala e o que se diz dele'],
      ['ordem das palavras', 'SVO (sujeito-verbo-objeto) no português; outras línguas variam'],
      ['concordância', 'o verbo e os adjetivos acompanham o número e o gênero'],
      ['regência', 'a preposição que um verbo ou nome exige: «gostar DE»'],
      ['oração subordinada', 'uma frase dentro de outra, ligada por que, quando, se…'],
    ],
  },
  {
    id: 'semantica',
    name: 'Semântica',
    emoji: '💭',
    question: 'O que as palavras e as frases significam?',
    what: 'Estuda o significado: o sentido das palavras e das frases, as relações entre elas (sinônimos, antônimos, palavras com vários sentidos), como os significados mudam com o tempo e por que palavras parecidas em duas línguas podem querer dizer coisas diferentes (falsos amigos).',
    examplesPt: [
      '«Banco» de sentar e «banco» de dinheiro: uma forma, dois sentidos (polissemia/homonímia).',
      '«Rapariga» é neutro em Portugal e ofensivo no Brasil: o sentido muda com o lugar.',
      '«Esquisito» (português) × «exquisito» (espanhol, delicioso): falsos amigos.',
    ],
    keywords: [
      ['sinônimo e antônimo', 'mesmo sentido (começar/iniciar) e sentido oposto (alto/baixo)'],
      ['polissemia', 'uma palavra com vários sentidos ligados: «pé» da mesa, «pé» de alface'],
      ['falso amigo', 'palavra parecida em duas línguas com sentido diferente'],
      ['cognato', 'palavra de mesma origem em duas línguas: noite / noapte / noche'],
      ['campo semântico', 'grupo de palavras do mesmo tema: cozinha, panela, fogão…'],
    ],
  },
  {
    id: 'pragmatica',
    name: 'Pragmática',
    emoji: '🤝',
    question: 'O que queremos dizer, de verdade, numa situação real?',
    what: 'Estuda a língua em uso: como o contexto, a relação entre as pessoas e a intenção mudam o sentido. Inclui a polidez, as formas de tratamento (tu, você, o senhor), os pedidos indiretos, a ironia e o que fica subentendido.',
    examplesPt: [
      '«Você tem horas?» não pergunta se a pessoa possui horas: é um pedido para saber a hora.',
      '«Tu», «você» e «o senhor» dizem a mesma coisa, mas marcam relações diferentes.',
      '«Nossa, que pontual!» para quem chegou uma hora atrasado: ironia.',
    ],
    keywords: [
      ['ato de fala', 'o que fazemos ao falar: pedir, prometer, agradecer, desculpar-se'],
      ['polidez', 'as formas de suavizar um pedido ou uma crítica'],
      ['forma de tratamento', 'tu, você, o senhor: a distância e o respeito entre as pessoas'],
      ['implicatura', 'o que se entende sem ser dito'],
      ['registro', 'o nível de formalidade da situação'],
    ],
  },
  {
    id: 'estilistica',
    name: 'Estilística',
    emoji: '🎨',
    question: 'Como a escolha das palavras cria efeito, beleza e emoção?',
    what: 'Estuda as escolhas expressivas: registros (formal, coloquial, gíria), figuras de linguagem (metáfora, ironia, hipérbole), diminutivos afetivos, ritmo e sonoridade, provérbios e o estilo literário de cada época e autor.',
    examplesPt: [
      '«Cafezinho» não é só um café pequeno: o diminutivo traz carinho e convite.',
      '«Choveu canivete» (hipérbole) e «a vida é uma viagem» (metáfora).',
      '«Quem não tem cão caça com gato»: o provérbio resume uma lição com imagem e ritmo.',
    ],
    keywords: [
      ['registro', 'formal, neutro, coloquial, gíria: cada situação pede um'],
      ['figura de linguagem', 'metáfora, metonímia, ironia, hipérbole…'],
      ['diminutivo afetivo', 'forma pequena que expressa carinho ou ironia'],
      ['provérbio', 'frase popular fixa que resume uma sabedoria'],
      ['estilo literário', 'o jeito de escrever de um autor, uma época ou um gênero'],
    ],
  },
];

/** Aula de linguística geral (vale para todos os idiomas). */
export interface LingLesson {
  id: string;
  group: 'ferramentas' | 'temas';
  title: string;
  emoji: string;
  summary: string;
  /** Seções com texto e tabelas (sem «examples»: aqui os exemplos são de várias línguas e vão em tabelas) */
  sections: import('./types').GrammarSection[];
  /** Curiosidades ou armadilhas comuns */
  pitfalls: string[];
  quiz: import('./types').GrammarQuiz[];
}
