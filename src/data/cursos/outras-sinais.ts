import type { MiniCourse } from './tipos';

/** ASL: os sinais descritos pelos parâmetros, com os vídeos do Lifeprint e do Spread The Sign para conferir. */
export const CURSO_ASL: MiniCourse = {
  id: 'asl',
  name: 'ASL — Língua de Sinais Americana',
  emoji: '🇺🇸',
  kind: 'sinais',
  summary: 'A língua de sinais mais espalhada do mundo, prima da Libras pela família francesa. Primeiros sinais descritos pelos parâmetros — confira cada um nos vídeos.',
  sources: [
    { label: 'Lifeprint (ASL University, vídeos grátis)', url: 'https://www.lifeprint.com/' },
    { label: 'Spread The Sign — ASL', url: 'https://www.spreadthesign.com/en.us/' },
  ],
  lessons: [
    {
      id: 'cumprimentos',
      title: 'Cumprimentos',
      emoji: '👋',
      intro: [
        'A ASL e a Libras vêm da língua de sinais francesa, e muitos sinais ainda se parecem. Mas são línguas diferentes: um surdo brasileiro e um americano precisam aprender a língua do outro.',
        'As descrições usam os parâmetros: configuração da mão (CM), ponto de articulação (PA), movimento (M) e orientação (O). Confira cada sinal nos vídeos do Lifeprint.',
      ],
      items: [
        { term: 'HELLO', meaning: 'olá', how: 'Mão aberta perto da testa (PA), sai para a frente e para o lado, como uma continência (M).' },
        { term: 'THANK YOU', meaning: 'obrigado', how: 'As pontas dos dedos da mão aberta tocam o queixo (PA) e a mão desce para a frente, na direção da pessoa (M).' },
        { term: 'PLEASE', meaning: 'por favor', how: 'Mão aberta sobre o peito (PA), fazendo círculos (M).' },
        { term: 'SORRY', meaning: 'desculpa', how: 'Mão fechada, com o polegar ao lado (CM “A”), fazendo círculos sobre o peito.' },
        { term: 'YES', meaning: 'sim', how: 'Mão fechada (CM “S”) que dobra o punho para cima e para baixo, como uma cabeça dizendo sim.' },
        { term: 'NO', meaning: 'não', how: 'O indicador e o médio se fecham sobre o polegar, duas vezes, como uma boquinha dizendo “não”.' },
      ],
      quiz: [
        { q: 'Com que língua de sinais a ASL é aparentada?', options: ['Com a britânica', 'Com a francesa, como a Libras', 'Com nenhuma'], answer: 1 },
        { q: 'Em THANK YOU, onde a mão começa?', options: ['No queixo', 'Na testa', 'No peito'], answer: 0 },
        { q: 'PLEASE e SORRY são feitos no peito, com círculos. O que muda entre eles?', options: ['A configuração da mão', 'O lugar', 'Nada'], answer: 0, why: 'PLEASE com a mão aberta, SORRY com a mão fechada: um par mínimo de configuração.' },
      ],
    },
    {
      id: 'apresentacao',
      title: 'Apresentar-se',
      emoji: '🙋',
      intro: [
        'Em ASL, “Qual é o seu nome?” é sinalizado como YOUR NAME WHAT?, com as sobrancelhas franzidas no WHAT — como na Libras.',
        'Dizer se você é surdo ou ouvinte faz parte da apresentação. E o sinal “I LOVE YOU” (eu te amo), com uma mão só, virou símbolo da cultura surda no mundo inteiro.',
      ],
      items: [
        { term: 'MY / MINE', meaning: 'meu, minha', how: 'Mão aberta encostada no peito.' },
        { term: 'YOUR', meaning: 'seu, sua', how: 'Mão aberta com a palma voltada para a pessoa, empurrando de leve na direção dela.' },
        { term: 'NAME', meaning: 'nome', how: 'Indicador e médio esticados e juntos (CM “H”) nas duas mãos; os da mão dominante batem duas vezes, cruzados, sobre os da outra.' },
        { term: 'WHAT', meaning: 'o quê', how: 'As duas mãos abertas, palmas para cima, balançando de leve, com as sobrancelhas franzidas.' },
        { term: 'DEAF', meaning: 'surdo', how: 'O indicador toca perto da orelha e depois perto da boca (ou o contrário).' },
        { term: 'HEARING', meaning: 'ouvinte', how: 'O indicador faz pequenos círculos para a frente, na frente da boca, como palavras saindo.' },
        { term: 'I LOVE YOU', meaning: 'eu te amo', how: 'Polegar, indicador e mínimo esticados, com a palma para a frente: junta as letras I, L e Y.' },
      ],
      quiz: [
        { q: 'Como se pergunta o nome em ASL?', options: ['YOUR NAME WHAT?', 'WHAT IS YOUR NAME? palavra por palavra', 'Soletrando NAME'], answer: 0 },
        { q: 'O sinal I LOVE YOU junta quais letras?', options: ['I, L e Y', 'L, O e V', 'A, S e L'], answer: 0 },
        { q: 'Em NAME, que configuração as duas mãos usam?', options: ['Mão fechada', 'Indicador e médio juntos (H)', 'Mão aberta'], answer: 1 },
      ],
    },
    {
      id: 'familia-e-comida',
      title: 'Família e comida',
      emoji: '🍎',
      intro: [
        'Muitos sinais de família da ASL seguem um padrão: os femininos são feitos na parte de baixo do rosto (queixo) e os masculinos na parte de cima (testa). É um ponto de articulação que carrega significado.',
        'Muitos sinais de comida e bebida são icônicos: lembram o gesto de comer ou de beber. Mas cada língua escolhe um detalhe diferente.',
      ],
      items: [
        { term: 'MOTHER', meaning: 'mãe', how: 'Mão aberta com os dedos separados (CM “5”); o polegar toca o queixo.' },
        { term: 'FATHER', meaning: 'pai', how: 'A mesma mão, mas o polegar toca a testa. Só o lugar muda.' },
        { term: 'EAT', meaning: 'comer', how: 'As pontas dos dedos juntas tocam a boca, como levando comida.' },
        { term: 'DRINK', meaning: 'beber', how: 'A mão em “C”, como segurando um copo, inclina na direção da boca.' },
        { term: 'LOVE', meaning: 'amor', how: 'Braços cruzados sobre o peito, com as mãos fechadas, como num abraço.' },
      ],
      quiz: [
        { q: 'O que diferencia MOTHER de FATHER?', options: ['O ponto de articulação: queixo × testa', 'A configuração da mão', 'O movimento'], answer: 0 },
        { q: 'Em que parte do rosto ficam muitos sinais femininos de família?', options: ['Na testa', 'No queixo', 'Nas orelhas'], answer: 1 },
      ],
    },
    {
      id: 'numeros',
      title: 'Números de 1 a 9',
      emoji: '🔢',
      intro: [
        'Os números da ASL são feitos com a palma virada para quem sinaliza (de 1 a 5, na conversa). De 6 a 9, o polegar encosta num dos outros dedos.',
      ],
      items: [
        { term: '1', meaning: 'um', how: 'Só o indicador esticado.' },
        { term: '2', meaning: 'dois', how: 'Indicador e médio.' },
        { term: '3', meaning: 'três', how: 'Polegar, indicador e médio — o polegar conta!' },
        { term: '4', meaning: 'quatro', how: 'Quatro dedos, com o polegar dobrado.' },
        { term: '5', meaning: 'cinco', how: 'A mão aberta.' },
        { term: '6', meaning: 'seis', how: 'O polegar toca a ponta do mínimo.' },
        { term: '7', meaning: 'sete', how: 'O polegar toca a ponta do anelar.' },
        { term: '8', meaning: 'oito', how: 'O polegar toca a ponta do médio.' },
        { term: '9', meaning: 'nove', how: 'O polegar toca a ponta do indicador.' },
      ],
      quiz: [
        { q: 'Como é o 3 em ASL?', options: ['Indicador, médio e anelar', 'Polegar, indicador e médio', 'Três toques no peito'], answer: 1 },
        { q: 'No 8, o polegar toca qual dedo?', options: ['O mínimo', 'O médio', 'O indicador'], answer: 1 },
        { q: 'E no 6?', options: ['O mínimo', 'O anelar', 'O indicador'], answer: 0 },
      ],
    },
  ],
};

/** Outras línguas de sinais: o que as diferencia, com o alfabeto de duas mãos da BSL. */
export const CURSO_MAIS_SINAIS: MiniCourse = {
  id: 'mais-sinais',
  name: 'Mais línguas de sinais: BSL, LSF, LGP e o Sinal Internacional',
  emoji: '🌍',
  kind: 'sinais',
  summary: 'O que muda de uma língua de sinais para outra: o alfabeto de duas mãos da britânica, a francesa (a mãe da Libras), a portuguesa (filha da sueca) e o Sinal Internacional dos congressos.',
  sources: [
    { label: 'SignBSL (dicionário de BSL em vídeo)', url: 'https://www.signbsl.com/' },
    { label: 'Elix (dicionário de LSF em vídeo)', url: 'https://dico.elix-lsf.fr/' },
    { label: 'Spread The Sign (LGP e muitas outras)', url: 'https://www.spreadthesign.com/pt.pt/' },
  ],
  lessons: [
    {
      id: 'bsl',
      title: 'BSL: o alfabeto de duas mãos',
      emoji: '🇬🇧',
      intro: [
        'A língua de sinais britânica é de outra família (BANZSL), e até o alfabeto é diferente: usa as duas mãos. A mão que não domina funciona como uma “tábua”, e a outra aponta ou encosta nela.',
        'As vogais são as mais fáceis: a mão dominante toca a ponta de um dedo da outra mão, do polegar ao mínimo — A, E, I, O, U.',
      ],
      items: [
        { term: 'A', meaning: 'vogal A', how: 'O indicador da mão dominante toca a ponta do polegar da outra mão.' },
        { term: 'E', meaning: 'vogal E', how: 'Toca a ponta do indicador.' },
        { term: 'I', meaning: 'vogal I', how: 'Toca a ponta do médio.' },
        { term: 'O', meaning: 'vogal O', how: 'Toca a ponta do anelar.' },
        { term: 'U', meaning: 'vogal U', how: 'Toca a ponta do mínimo.' },
      ],
      quiz: [
        { q: 'Quantas mãos o alfabeto da BSL usa?', options: ['Uma', 'Duas'], answer: 1 },
        { q: 'Na BSL, tocar a ponta do anelar da outra mão é a letra...', options: ['I', 'O', 'U'], answer: 1 },
        { q: 'A BSL e a ASL são da mesma família?', options: ['Sim, as duas vêm do inglês', 'Não: a BSL é da BANZSL e a ASL, da francesa'], answer: 1 },
      ],
    },
    {
      id: 'lsf',
      title: 'LSF: a mãe da Libras',
      emoji: '🇫🇷',
      intro: [
        'A língua de sinais francesa se formou na escola do abade de l’Épée, em Paris, a partir de 1760, com os sinais que os alunos surdos já usavam. Professores formados ali levaram a língua para o Brasil, os EUA, o México e boa parte da Europa.',
        'Depois do Congresso de Milão, em 1880, a LSF foi proibida nas escolas francesas por quase um século. O “Réveil sourd” (despertar surdo), nos anos 1970, trouxe a língua de volta, e ela foi reconhecida por lei em 2005.',
      ],
      items: [
        { term: 'Institut National de Jeunes Sourds', meaning: 'a escola de Paris, herdeira da escola de l’Épée' },
        { term: 'Réveil sourd', meaning: 'o movimento que, nos anos 1970, lutou pela volta da LSF' },
        { term: 'loi du 11 février 2005', meaning: 'a lei que reconheceu a LSF como língua' },
      ],
      quiz: [
        { q: 'Em que cidade a LSF se formou como língua de escola?', options: ['Paris', 'Lyon', 'Genebra'], answer: 0 },
        { q: 'Por que a Libras é parente da LSF?', options: ['Porque o Brasil foi colônia francesa', 'Porque o fundador do INES era um professor surdo francês', 'Porque é tudo a mesma língua'], answer: 1 },
      ],
    },
    {
      id: 'lgp',
      title: 'LGP: a portuguesa, filha da sueca',
      emoji: '🇵🇹',
      intro: [
        'Em Portugal a língua se chama Língua Gestual Portuguesa, e não “de sinais”: “gesto” é a palavra usada lá. Ela é da família sueca, porque a primeira escola de surdos de Lisboa foi fundada em 1823 pelo sueco Pär Aron Borg.',
        'Por isso um surdo brasileiro e um português, embora os dois países falem português, não se entendem de imediato: a Libras e a LGP são de famílias diferentes. A LGP está na Constituição portuguesa desde 1997.',
      ],
      items: [
        { term: 'Língua Gestual Portuguesa', meaning: 'o nome em Portugal (“gestual”)' },
        { term: 'Pär Aron Borg', meaning: 'o professor sueco que fundou a escola de Lisboa em 1823' },
      ],
      quiz: [
        { q: 'A LGP é da mesma família da Libras?', options: ['Sim, porque os países falam português', 'Não: a LGP é da família sueca, a Libras da francesa'], answer: 1 },
        { q: 'Desde quando a LGP está na Constituição portuguesa?', options: ['1823', '1997', '2002'], answer: 1 },
      ],
    },
    {
      id: 'internacional',
      title: 'O Sinal Internacional',
      emoji: '🌐',
      intro: [
        'Nos congressos da Federação Mundial dos Surdos e nas Surdolimpíadas, surdos de países diferentes usam o Sinal Internacional: sinais bem icônicos, muito uso do espaço e das expressões do rosto, e a gramática que as línguas de sinais têm em comum.',
        'Não é uma língua completa, e funciona melhor entre quem já é fluente numa língua de sinais. Ele veio do Gestuno, um vocabulário de cerca de 1.500 sinais publicado em 1975.',
      ],
      items: [
        { term: 'Sinal Internacional', meaning: 'o jeito de sinalizar dos encontros internacionais' },
        { term: 'Gestuno', meaning: 'o vocabulário de 1975 que o antecedeu' },
        { term: 'Surdolimpíadas', meaning: 'os jogos olímpicos dos surdos, desde 1924 — mais antigos que as Paralimpíadas' },
      ],
      quiz: [
        { q: 'O Sinal Internacional é uma língua completa?', options: ['Sim', 'Não: funciona melhor entre quem já sinaliza'], answer: 1 },
        { q: 'O que veio antes das Paralimpíadas?', options: ['As Surdolimpíadas, de 1924', 'Nada'], answer: 0 },
      ],
    },
  ],
};
