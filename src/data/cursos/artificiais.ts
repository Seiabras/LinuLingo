import type { MiniCourse } from './tipos';

export const CURSO_ESPERANTO: MiniCourse = {
  id: 'esperanto',
  name: 'Esperanto',
  emoji: '💚',
  kind: 'artificial',
  summary: 'A língua auxiliar mais falada do mundo, com uma gramática quase sem exceções: em seis lições você lê frases inteiras.',
  sources: [
    { label: 'Lernu! (curso grátis)', url: 'https://lernu.net/pt' },
    { label: 'Liga Brasileira de Esperanto', url: 'https://esperanto.org.br/' },
  ],
  lessons: [
    {
      id: 'sons',
      title: 'Letras e sons',
      emoji: '🔤',
      intro: [
        'O esperanto se escreve como se fala: cada letra tem um som só, e cada som uma letra. São 28 letras, com seis que levam um chapéu ou um arco.',
        'A sílaba tônica é sempre a penúltima: lingvo (LIN-gvo), Esperanto (es-pe-RAN-to), familio (fa-mi-LI-o).',
      ],
      items: [
        { term: 'c', meaning: 'soa «ts», como em «tsunami»', how: 'centro → «tsentro»' },
        { term: 'ĉ', meaning: 'soa «tch», como em «tchau»', how: 'ĉokolado → chocolate' },
        { term: 'ĝ', meaning: 'soa «dj», como em «Djavan»', how: 'ĝardeno → jardim' },
        { term: 'ĵ', meaning: 'soa como o «j» de «já»', how: 'ĵurnalo → jornal' },
        { term: 'ŝ', meaning: 'soa como o «ch» de «chá»', how: 'ŝipo → navio' },
        { term: 'ĥ', meaning: 'soa como o «r» carioca, raspado na garganta', how: 'ĥoro → coro' },
        { term: 'j', meaning: 'soa «i», como em «pai»', how: 'jes → sim; kaj → e' },
        { term: 'ŭ', meaning: 'soa «u» curtinho, como em «mau»', how: 'aŭto → carro' },
        { term: 'g', meaning: 'sempre forte, como em «gato»', how: 'generalo → «guenerálo»' },
      ],
      quiz: [
        { q: 'Como soa «c» em esperanto?', options: ['«k»', '«ts»', '«s»'], answer: 1 },
        { q: 'Onde cai a sílaba tônica?', options: ['Na última', 'Na penúltima, sempre', 'Depende da palavra'], answer: 1 },
        { q: 'Como se lê «ĉu»?', options: ['«tchu»', '«cu»', '«su»'], answer: 0 },
      ],
    },
    {
      id: 'terminacoes',
      title: 'A classe pela terminação',
      emoji: '🧩',
      intro: [
        'No esperanto, a terminação diz a classe da palavra. Com uma raiz, você forma várias: bel- (belo) → belo (a beleza), bela (belo), bele (belamente).',
        'O plural é -j e o objeto direto ganha -n: «Mi vidas belajn florojn» — eu vejo flores bonitas. Com o -n, a ordem das palavras fica livre.',
      ],
      items: [
        { term: '-o', meaning: 'substantivo', how: 'domo (casa), hundo (cachorro)' },
        { term: '-a', meaning: 'adjetivo', how: 'bona (bom), granda (grande)' },
        { term: '-e', meaning: 'advérbio', how: 'bone (bem), rapide (rápido)' },
        { term: '-j', meaning: 'plural', how: 'domoj (casas), bonaj domoj (casas boas)' },
        { term: '-n', meaning: 'objeto direto (acusativo)', how: 'La hundo vidas la katon — o cachorro vê o gato' },
        { term: 'la', meaning: 'o, a, os, as — o único artigo', how: 'la domo, la domoj' },
      ],
      quiz: [
        { q: '«rapida» é…', options: ['substantivo', 'adjetivo', 'advérbio'], answer: 1 },
        { q: 'Como fica «bona hundo» no plural?', options: ['bona hundoj', 'bonaj hundoj', 'bonas hundos'], answer: 1, why: 'O adjetivo concorda com o substantivo: os dois ganham -j.' },
        { q: 'Em «La katon vidas la hundo», quem vê?', options: ['O gato', 'O cachorro'], answer: 1, why: '«katon» tem o -n: é o objeto. Quem vê é «la hundo».' },
      ],
    },
    {
      id: 'verbos',
      title: 'Os verbos: seis terminações e nenhuma exceção',
      emoji: '⏱️',
      intro: [
        'Todos os verbos seguem as mesmas terminações, e o verbo não muda com a pessoa: mi estas, vi estas, ŝi estas (eu sou, você é, ela é).',
        'Os pronomes: mi (eu), vi (você, vocês), li (ele), ŝi (ela), ĝi (ele/ela para coisas e bichos), ni (nós), ili (eles, elas).',
      ],
      items: [
        { term: '-i', meaning: 'infinitivo', how: 'esti (ser), lerni (aprender)' },
        { term: '-as', meaning: 'presente', how: 'mi lernas — eu aprendo' },
        { term: '-is', meaning: 'passado', how: 'mi lernis — eu aprendi' },
        { term: '-os', meaning: 'futuro', how: 'mi lernos — eu aprenderei' },
        { term: '-us', meaning: 'condicional', how: 'mi lernus — eu aprenderia' },
        { term: '-u', meaning: 'imperativo', how: 'lernu! — aprenda!' },
      ],
      quiz: [
        { q: '«Ŝi parolis» quer dizer…', options: ['Ela fala', 'Ela falou', 'Ela falará'], answer: 1 },
        { q: 'Como se diz «nós seremos»?', options: ['ni estas', 'ni estos', 'ni estus'], answer: 1 },
        { q: 'O verbo muda com a pessoa (eu, você, ela)?', options: ['Sim', 'Não, nunca'], answer: 1 },
      ],
    },
    {
      id: 'afixos',
      title: 'Monte palavras com afixos',
      emoji: '🏗️',
      intro: ['O segredo do vocabulário: com poucos afixos, uma raiz vira dezenas de palavras. Quem sabe «bona» já sabe «malbona» (ruim).'],
      items: [
        { term: 'mal-', meaning: 'o contrário', how: 'bona → malbona (ruim); granda → malgranda (pequeno)' },
        { term: '-in-', meaning: 'feminino', how: 'patro → patrino (mãe); knabo → knabino (menina)' },
        { term: '-et-', meaning: 'diminutivo', how: 'domo → dometo (casinha)' },
        { term: '-eg-', meaning: 'aumentativo', how: 'domo → domego (casarão); varma → varmega (quentíssimo)' },
        { term: '-ej-', meaning: 'lugar', how: 'lerni → lernejo (escola); manĝi → manĝejo (refeitório)' },
        { term: '-ist-', meaning: 'profissão', how: 'dento → dentisto (dentista)' },
        { term: '-ul-', meaning: 'pessoa com a característica', how: 'juna → junulo (um jovem)' },
      ],
      quiz: [
        { q: '«malfacila» quer dizer…', options: ['fácil', 'difícil', 'facílimo'], answer: 1 },
        { q: 'Se «frato» é irmão, irmã é…', options: ['fratino', 'malfrato', 'frateto'], answer: 0 },
        { q: '«kuiri» é cozinhar. O que é «kuirejo»?', options: ['O cozinheiro', 'A cozinha', 'A comida'], answer: 1 },
      ],
    },
    {
      id: 'frases',
      title: 'Frases do dia a dia',
      emoji: '💬',
      intro: ['Com o que você já sabe, dá para montar as frases de um primeiro encontro — num congresso de esperanto, gente de dezenas de países conversa assim.'],
      items: [
        { term: 'Saluton!', meaning: 'Olá!' },
        { term: 'Bonan matenon!', meaning: 'Bom dia! (com o -n: «(desejo) uma boa manhã»)' },
        { term: 'Kiel vi fartas?', meaning: 'Como você vai?' },
        { term: 'Bone, dankon.', meaning: 'Bem, obrigado.' },
        { term: 'Mi nomiĝas Ana.', meaning: 'Eu me chamo Ana.' },
        { term: 'Bonvolu.', meaning: 'Por favor.' },
        { term: 'Pardonu!', meaning: 'Desculpe!' },
        { term: 'Mi ne komprenas.', meaning: 'Eu não entendo.' },
        { term: 'Ĝis revido!', meaning: 'Até mais! (até rever)' },
      ],
      quiz: [
        { q: 'Por que «Bonan matenon» tem -n?', options: ['Porque é objeto de um «desejo» subentendido', 'Porque é plural', 'Por nada'], answer: 0 },
        { q: '«Mi ne komprenas» quer dizer…', options: ['Eu compreendo', 'Eu não entendo', 'Não me compreenda'], answer: 1 },
      ],
    },
    {
      id: 'correlativos',
      title: 'A tabela mágica',
      emoji: '🧮',
      intro: [
        'Os correlativos são as palavras de pergunta e as que respondem a elas, montadas como uma tabela: um começo (ki- pergunta, ti- aponta, ĉi- todos, neni- nenhum, i- algum) mais um final (-o coisa, -u pessoa ou escolha, -a qualidade, -e lugar, -am tempo, -el modo, -al razão, -es posse, -om quantidade).',
        'São 5 começos × 9 finais: quem aprende a tabela aprende 45 palavras de uma vez.',
      ],
      items: [
        { term: 'kio? / tio', meaning: 'o quê? / isso' },
        { term: 'kiu? / tiu / ĉiu / neniu', meaning: 'quem? / aquele / cada um / ninguém' },
        { term: 'kie? / tie / ĉie / nenie', meaning: 'onde? / lá / em todo lugar / em lugar nenhum' },
        { term: 'kiam? / tiam / ĉiam / neniam', meaning: 'quando? / então / sempre / nunca' },
        { term: 'kiel? / tiel', meaning: 'como? / assim' },
        { term: 'kial? / tial', meaning: 'por quê? / por isso' },
      ],
      quiz: [
        { q: 'Se «kiam» é «quando», «neniam» é…', options: ['sempre', 'nunca', 'agora'], answer: 1 },
        { q: 'Como se diz «em todo lugar»?', options: ['ĉie', 'tie', 'kie'], answer: 0 },
        { q: '«Neniu venis» quer dizer…', options: ['Todos vieram', 'Ninguém veio', 'Alguém veio'], answer: 1 },
      ],
    },
  ],
};

export const CURSO_TOKI_PONA: MiniCourse = {
  id: 'toki-pona',
  name: 'Toki Pona',
  emoji: '🙂',
  kind: 'artificial',
  summary: 'A língua minimalista: cerca de 120 palavras e poucas regras. Gramática, vocabulário, a filosofia da simplicidade, a comunidade e a escrita sitelen pona — e você aprende a simplificar o que pensa.',
  sources: [
    { label: 'tokipona.org (site oficial)', url: 'https://tokipona.org/' },
    { label: 'sona.pona.la (wiki da comunidade)', url: 'https://sona.pona.la/' },
  ],
  lessons: [
    {
      id: 'sons',
      title: 'Os sons e as primeiras palavras',
      emoji: '🔤',
      intro: [
        'O toki pona tem só 14 letras: as vogais a, e, i, o, u e as consoantes j, k, l, m, n, p, s, t, w. O «j» soa «i», como em «pai». Não existem maiúsculas nas palavras comuns.',
        'Cada palavra cobre uma ideia ampla. «toki» é falar, língua, conversa e também «olá»; «pona» é bom, simples, consertar. «toki pona» é «a língua boa».',
      ],
      items: [
        { term: 'mi', meaning: 'eu, nós' },
        { term: 'sina', meaning: 'você, vocês' },
        { term: 'ona', meaning: 'ele, ela, eles' },
        { term: 'jan', meaning: 'pessoa, gente' },
        { term: 'toki', meaning: 'falar, língua; olá!' },
        { term: 'pona', meaning: 'bom, simples, consertar' },
        { term: 'ike', meaning: 'ruim, complicado' },
        { term: 'moku', meaning: 'comer, comida' },
        { term: 'telo', meaning: 'água, qualquer líquido' },
      ],
      quiz: [
        { q: 'Quantas letras tem o toki pona?', options: ['14', '26', '42'], answer: 0 },
        { q: '«telo» é…', options: ['só água', 'água e qualquer líquido', 'telefone'], answer: 1 },
        { q: 'Como se diz «olá»?', options: ['toki!', 'pona!', 'mi!'], answer: 0 },
      ],
    },
    {
      id: 'li',
      title: 'Frases com «li»',
      emoji: '➡️',
      intro: [
        'A partícula «li» separa o sujeito do resto: «jan li moku» — a pessoa come. Não há verbo «ser»: «telo li pona» — a água é boa.',
        'Com «mi» e «sina» sozinhos, o «li» cai: «mi moku» (eu como), «sina pona» (você é bom).',
      ],
      items: [
        { term: 'jan li moku.', meaning: 'A pessoa come.' },
        { term: 'mi moku.', meaning: 'Eu como. (sem li depois de mi)' },
        { term: 'telo li pona.', meaning: 'A água é boa.' },
        { term: 'sina suli.', meaning: 'Você é grande.' },
        { term: 'ona li lili.', meaning: 'Ele é pequeno.' },
      ],
      quiz: [
        { q: 'Como se diz «eu sou bom»?', options: ['mi li pona', 'mi pona', 'pona mi'], answer: 1, why: 'Depois de «mi» e «sina» sozinhos, não se usa «li».' },
        { q: '«ona li moku» quer dizer…', options: ['Ele come', 'Eu como', 'Coma!'], answer: 0 },
      ],
    },
    {
      id: 'e-e-modificadores',
      title: 'O objeto (e) e os modificadores',
      emoji: '🧩',
      intro: [
        '«e» marca o objeto: «mi moku e kili» — eu como fruta.',
        'O modificador vem depois da palavra: «jan pona» (pessoa boa) é amigo; «tomo tawa» (estrutura que se move) é carro; «telo nasa» (líquido estranho) é bebida alcoólica.',
      ],
      items: [
        { term: 'mi moku e kili.', meaning: 'Eu como fruta.' },
        { term: 'jan pona', meaning: 'amigo (pessoa boa)' },
        { term: 'tomo tawa', meaning: 'carro (casa que anda)' },
        { term: 'tomo', meaning: 'casa, construção' },
        { term: 'tawa', meaning: 'ir, movimento; para' },
        { term: 'kili', meaning: 'fruta, verdura' },
        { term: 'suli / lili', meaning: 'grande / pequeno' },
      ],
      quiz: [
        { q: 'O que é «jan pona»?', options: ['Amigo', 'Pessoa ruim', 'Comida boa'], answer: 0 },
        { q: 'Onde vem o modificador?', options: ['Antes da palavra', 'Depois da palavra'], answer: 1 },
        { q: '«sina lukin e tomo» quer dizer…', options: ['Você vê a casa', 'A casa vê você', 'Você mora na casa'], answer: 0 },
      ],
    },
    {
      id: 'perguntas',
      title: 'Perguntas e ordens',
      emoji: '❓',
      intro: [
        'Pergunta de sim ou não: repita o verbo com «ala» (não) no meio. «sina pona ala pona?» — você está bem? Responde-se repetindo o verbo: «pona» (sim) ou «pona ala» (não).',
        '«seme» é «o quê / quem», e fica no lugar da resposta: «sina moku e seme?» — o que você come?',
        '«o» faz a ordem: «o moku!» — coma!',
      ],
      items: [
        { term: 'sina pona ala pona?', meaning: 'Você está bem?' },
        { term: 'sina moku e seme?', meaning: 'O que você come?' },
        { term: 'o moku!', meaning: 'Coma!' },
        { term: 'ala', meaning: 'não, nada, zero' },
        { term: 'seme', meaning: 'o quê? quem?' },
      ],
      quiz: [
        { q: 'Como se responde «sim» a «sina moku ala moku?»', options: ['moku', 'ala', 'seme'], answer: 0, why: 'Repete-se o verbo.' },
        { q: '«o tawa!» quer dizer…', options: ['Vá!', 'Ele vai', 'Aonde?'], answer: 0 },
      ],
    },
    {
      id: 'pi-la',
      title: '«pi» e «la»',
      emoji: '🔗',
      intro: [
        '«pi» agrupa modificadores: «tomo pi jan pona» é «a casa do amigo» (casa [de pessoa-boa]), diferente de «tomo jan pona» (casa humana boa).',
        '«la» coloca um contexto antes da frase: «tenpo pini la mi moku» — no passado (tempo que passou), eu comi. O toki pona não conjuga o verbo: o tempo vem assim, quando precisa.',
      ],
      items: [
        { term: 'tomo pi jan pona', meaning: 'a casa do amigo' },
        { term: 'tenpo pini la mi moku.', meaning: 'Eu comi (no passado, eu como).' },
        { term: 'tenpo kama la mi tawa.', meaning: 'Eu vou partir (no tempo que vem, eu vou).' },
        { term: 'tenpo', meaning: 'tempo' },
      ],
      quiz: [
        { q: 'Como o toki pona diz o passado?', options: ['Com a terminação -is', 'Com «tenpo pini la» antes da frase', 'Não dá para dizer'], answer: 1 },
        { q: '«tomo pi jan pona» é…', options: ['a casa do amigo', 'uma pessoa boa em casa', 'a casa é boa'], answer: 0 },
      ],
    },
  ],
};

export const CURSO_KLINGON: MiniCourse = {
  id: 'klingon',
  name: 'Klingon (tlhIngan Hol)',
  emoji: '🖖',
  kind: 'artificial',
  summary: 'A língua dos guerreiros de Star Trek, criada pelo linguista Marc Okrand para soar diferente de tudo: a ordem é objeto-verbo-sujeito.',
  sources: [{ label: 'Klingon Language Institute', url: 'https://www.kli.org/' }],
  lessons: [
    {
      id: 'sons',
      title: 'Maiúsculas que mudam o som',
      emoji: '🔤',
      intro: [
        'Na escrita latina do klingon, maiúscula e minúscula são letras diferentes: «q» e «Q» são sons diferentes, e o nome da língua é «tlhIngan Hol».',
        'O apóstrofo (’) é uma letra: uma parada na garganta, como no «uh-oh» do inglês.',
      ],
      items: [
        { term: 'q', meaning: 'um «k» lá no fundo da garganta' },
        { term: 'Q', meaning: 'o mesmo «k» do fundo, seguido de um raspado (como «qkh»)' },
        { term: 'H', meaning: 'um «r» raspado, como o carioca' },
        { term: 'gh', meaning: 'o mesmo raspado, com a voz vibrando' },
        { term: 'tlh', meaning: 'um «t» que sai pelos lados da língua' },
        { term: '’', meaning: 'uma parada na garganta' },
      ],
      quiz: [
        { q: '«q» e «Q» são…', options: ['a mesma letra', 'sons diferentes'], answer: 1 },
        { q: 'O apóstrofo em klingon é…', options: ['um enfeite', 'uma letra: uma parada na garganta'], answer: 1 },
      ],
    },
    {
      id: 'frases',
      title: 'Frases de guerreiro',
      emoji: '⚔️',
      intro: [
        'A ordem é objeto-verbo-sujeito, rara nas línguas humanas: «puq legh yaS» — o oficial (yaS) vê (legh) a criança (puq).',
        'O «-be’» no fim do verbo nega: jIyaj (entendo) → jIyajbe’ (não entendo). E klingons não dizem «olá»: perguntam o que você quer.',
      ],
      items: [
        { term: 'nuqneH?', meaning: 'O que você quer? (a saudação klingon)' },
        { term: 'Qapla’!', meaning: 'Sucesso!' },
        { term: 'HIja’ / ghobe’', meaning: 'sim / não' },
        { term: 'jIyajbe’', meaning: 'Não entendo.' },
        { term: 'tlhIngan Hol Dajatlh’a’?', meaning: 'Você fala klingon?' },
        { term: 'puq legh yaS.', meaning: 'O oficial vê a criança. (objeto-verbo-sujeito)' },
        { term: 'Heghlu’meH QaQ jajvam.', meaning: 'Hoje é um bom dia para morrer.' },
      ],
      quiz: [
        { q: 'Em «puq legh yaS», quem vê?', options: ['puq (a criança)', 'yaS (o oficial)'], answer: 1, why: 'Em klingon o sujeito vem no fim.' },
        { q: 'Como se nega um verbo?', options: ['Com «-be’» no fim', 'Com «ne» antes', 'Não se nega'], answer: 0 },
        { q: 'Qual é a saudação klingon?', options: ['Qapla’', 'nuqneH? (o que você quer?)', 'HIja’'], answer: 1 },
      ],
    },
  ],
};
