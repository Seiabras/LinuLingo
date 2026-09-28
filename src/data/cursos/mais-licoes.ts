import type { MiniLesson } from './tipos';
import { brailleOf } from './tatil';

/** Lições que completam os cursos (ver src/data/cursos/index.ts, que as junta a cada curso). */

export const ASL_MAIS: MiniLesson[] = [
  {
    id: 'cores',
    title: 'Cores',
    emoji: '🎨',
    intro: ['Várias cores da ASL usam a letra inicial do nome em inglês, sacudida no ar: B de «blue», G de «green», Y de «yellow». É um empréstimo da escrita, como a datilologia.'],
    items: [
      { term: 'RED', meaning: 'vermelho', how: 'O indicador passa de cima para baixo sobre os lábios, duas vezes.' },
      { term: 'BLUE', meaning: 'azul', how: 'A mão em «B» (dedos juntos e esticados) sacode de leve, girando o punho.' },
      { term: 'GREEN', meaning: 'verde', how: 'A mão em «G» sacode de leve, girando o punho.' },
      { term: 'YELLOW', meaning: 'amarelo', how: 'A mão em «Y» (polegar e mínimo esticados) sacode de leve.' },
      { term: 'BLACK', meaning: 'preto', how: 'O indicador passa de um lado para o outro na testa.' },
      { term: 'WHITE', meaning: 'branco', how: 'A mão aberta no peito se afasta fechando as pontas dos dedos.' },
    ],
    quiz: [
      { q: 'Por que BLUE, GREEN e YELLOW usam B, G e Y?', options: ['São a letra inicial do nome em inglês', 'Por acaso', 'Porque imitam a cor'], answer: 0 },
      { q: 'Onde é feito RED?', options: ['Nos lábios', 'Na testa', 'No peito'], answer: 0 },
    ],
  },
  {
    id: 'perguntas',
    title: 'Perguntas',
    emoji: '❓',
    intro: ['Como na Libras, as perguntas com WHO, WHAT, WHERE, WHEN e WHY vêm com as sobrancelhas franzidas, e muitas vezes no fim da frase: YOUR NAME WHAT?'],
    items: [
      { term: 'WHERE', meaning: 'onde', how: 'O indicador para cima balança de um lado para o outro.' },
      { term: 'WHEN', meaning: 'quando', how: 'O indicador faz um círculo em volta do indicador da outra mão e pousa na ponta dele.' },
      { term: 'WHY', meaning: 'por quê', how: 'Os dedos tocam a testa e a mão se afasta virando um «Y».' },
      { term: 'HOW', meaning: 'como', how: 'As duas mãos curvadas, juntas pelos nós dos dedos, giram para a frente e se abrem.' },
    ],
    quiz: [
      { q: 'O que acompanha as perguntas com WHERE e WHY?', options: ['As sobrancelhas franzidas', 'As sobrancelhas levantadas', 'Nada'], answer: 0 },
      { q: 'Onde costuma ficar a palavra de pergunta?', options: ['No fim da frase', 'Sempre no começo'], answer: 0 },
    ],
  },
];

export const TATIL_MAIS: MiniLesson[] = [
  {
    id: 'palavras',
    title: 'Ler palavras',
    emoji: '📖',
    intro: [
      'Agora junte as celas. As palavras são escritas letra por letra, com uma cela vazia entre elas; a maiúscula ganha o sinal de maiúscula (pontos 4-6) antes.',
      'Quem lê Braille com fluência passa os dedos das duas mãos pela linha e chega a mais de 100 palavras por minuto.',
    ],
    items: ['casa', 'sol', 'mar', 'café', 'Brasil', 'Linu'].map((w) => ({ term: w, meaning: `a palavra «${w}»`, braille: brailleOf(w), how: `${brailleOf(w).split(' ').length} celas` })),
    quiz: [
      { q: 'Que palavra é esta?', braille: brailleOf('sol'), options: ['sol', 'sal', 'mar'], answer: 0 },
      { q: 'Que palavra é esta?', braille: brailleOf('Brasil'), options: ['Brasil', 'brasa', 'Bahia'], answer: 0 },
      { q: 'Quantas celas tem «Linu» (com maiúscula)?', options: ['4', '5', '6'], answer: 1, why: 'O sinal de maiúscula mais as 4 letras.' },
    ],
  },
  {
    id: 'numeros-grandes',
    title: 'Números inteiros',
    emoji: '🔢',
    intro: ['O sinal de número vale para todos os algarismos seguidos: 2026 é o sinal de número e depois b, j, b, f. Ele só se repete quando o número recomeça depois de um espaço.'],
    items: ['10', '25', '2026'].map((n) => ({ term: n, meaning: `o número ${n}`, braille: brailleOf(n), how: `sinal de número + ${[...n].map((d) => 'jabcdefghi'[Number(d)]).join(', ')}` })),
    quiz: [
      { q: 'Que número é este?', braille: brailleOf('25'), options: ['25', '52', '15'], answer: 0 },
      { q: 'Em 2026, quantas vezes aparece o sinal de número?', options: ['Uma, no começo', 'Quatro, uma por algarismo'], answer: 0 },
    ],
  },
];

export const ESPERANTO_MAIS: MiniLesson[] = [
  {
    id: 'numeros',
    title: 'Números',
    emoji: '🔢',
    intro: ['Com doze palavras (unu a naŭ, dek, cent e mil) você conta até mil: os números se juntam como no chinês. «dek du» é 12 (dez-dois), «dudek» é 20 (dois-dez). Com -a viram ordinais: unua (primeiro), dua (segundo).'],
    items: [
      { term: 'unu, du, tri', meaning: 'um, dois, três' },
      { term: 'kvar, kvin, ses', meaning: 'quatro, cinco, seis' },
      { term: 'sep, ok, naŭ, dek', meaning: 'sete, oito, nove, dez' },
      { term: 'dek du', meaning: 'doze (dez-dois)' },
      { term: 'dudek', meaning: 'vinte (dois-dez)' },
      { term: 'cent, mil', meaning: 'cem, mil' },
      { term: 'unua', meaning: 'primeiro' },
    ],
    quiz: [
      { q: 'Como se diz 30?', options: ['tridek', 'dektri', 'trient'], answer: 0 },
      { q: '«dek kvin» é…', options: ['15', '50', '45'], answer: 0 },
      { q: 'Como se forma «terceiro»?', options: ['tria', 'trio', 'trie'], answer: 0, why: 'Ordinal é adjetivo: termina em -a.' },
    ],
  },
  {
    id: 'familia',
    title: 'Família',
    emoji: '👨‍👩‍👧',
    intro: ['O prefixo ge- junta os dois sexos: gepatroj são pai e mãe juntos (os pais); gefratoj, irmãos e irmãs.'],
    items: [
      { term: 'patro / patrino', meaning: 'pai / mãe' },
      { term: 'frato / fratino', meaning: 'irmão / irmã' },
      { term: 'filo / filino', meaning: 'filho / filha' },
      { term: 'avo / avino', meaning: 'avô / avó' },
      { term: 'gepatroj', meaning: 'os pais (pai e mãe)' },
      { term: 'familio', meaning: 'família' },
    ],
    quiz: [
      { q: 'O que são «geavoj»?', options: ['Os avós (avô e avó)', 'Só as avós', 'Os bisavós'], answer: 0 },
      { q: 'Como se diz «filha»?', options: ['filino', 'fila', 'malfilo'], answer: 0 },
    ],
  },
  {
    id: 'tempo',
    title: 'Dias e tempo',
    emoji: '📅',
    intro: ['Os dias da semana terminam em -o, como todo substantivo. Com -n (ou com o -e de advérbio) viram «quando»: lundon ou lunde — na segunda-feira.'],
    items: [
      { term: 'lundo, mardo, merkredo', meaning: 'segunda, terça, quarta' },
      { term: 'ĵaŭdo, vendredo', meaning: 'quinta, sexta' },
      { term: 'sabato, dimanĉo', meaning: 'sábado, domingo' },
      { term: 'hodiaŭ / hieraŭ / morgaŭ', meaning: 'hoje / ontem / amanhã' },
      { term: 'tago, semajno, monato, jaro', meaning: 'dia, semana, mês, ano' },
    ],
    quiz: [
      { q: '«Mi venos morgaŭ» quer dizer…', options: ['Eu virei amanhã', 'Eu vim ontem', 'Eu venho hoje'], answer: 0 },
      { q: 'Como se diz «no domingo» com o -n?', options: ['dimanĉon', 'dimanĉa', 'dimanĉoj'], answer: 0, why: 'Também se diz «dimanĉe», com o -e de advérbio.' },
    ],
  },
  {
    id: 'cores',
    title: 'Cores e descrições',
    emoji: '🎨',
    intro: ['Toda cor é adjetivo (-a) e concorda: ruĝa floro, ruĝaj floroj. Com mal-, o oposto: granda → malgranda.'],
    items: [
      { term: 'ruĝa, blua, verda', meaning: 'vermelho, azul, verde' },
      { term: 'flava, nigra, blanka', meaning: 'amarelo, preto, branco' },
      { term: 'granda / malgranda', meaning: 'grande / pequeno' },
      { term: 'bela / malbela', meaning: 'bonito / feio' },
      { term: 'nova / malnova', meaning: 'novo / velho' },
    ],
    quiz: [
      { q: 'Como fica «flores azuis»?', options: ['bluaj floroj', 'blua floroj', 'bluoj floraj'], answer: 0 },
      { q: 'O contrário de «nova» é…', options: ['malnova', 'nenova', 'novega'], answer: 0 },
    ],
  },
  {
    id: 'comida',
    title: 'Comer, beber e morar',
    emoji: '🍽️',
    intro: ['Com o -ej- (lugar) e o -il- (instrumento), o vocabulário da casa sai sozinho: manĝi (comer) → manĝejo (refeitório); tranĉi (cortar) → tranĉilo (faca).'],
    items: [
      { term: 'manĝi / trinki', meaning: 'comer / beber' },
      { term: 'akvo, lakto, kafo', meaning: 'água, leite, café' },
      { term: 'pano, fromaĝo, frukto', meaning: 'pão, queijo, fruta' },
      { term: 'domo, ĉambro, kuirejo', meaning: 'casa, quarto, cozinha' },
      { term: 'tranĉilo', meaning: 'faca (instrumento de cortar)' },
    ],
    quiz: [
      { q: 'O que é «trinkejo»?', options: ['Um bar (lugar de beber)', 'Uma bebida', 'Um copo'], answer: 0 },
      { q: '«Mi manĝas panon» quer dizer…', options: ['Eu como pão', 'O pão me come', 'Eu comi pão'], answer: 0 },
    ],
  },
  {
    id: 'preposicoes',
    title: 'Preposições e direção',
    emoji: '🧭',
    intro: ['Depois de preposição, o substantivo fica sem -n. Mas o -n volta para mostrar direção: «en la domo» (dentro da casa) × «en la domon» (para dentro da casa).'],
    items: [
      { term: 'en, sur, sub', meaning: 'em (dentro), sobre, sob' },
      { term: 'al, de', meaning: 'para, de' },
      { term: 'kun, sen', meaning: 'com, sem' },
      { term: 'en la domo', meaning: 'dentro da casa (onde está)' },
      { term: 'en la domon', meaning: 'para dentro da casa (para onde vai)' },
    ],
    quiz: [
      { q: '«La kato saltas sur la tablon» quer dizer…', options: ['O gato pula para cima da mesa', 'O gato pula em cima da mesa (sem sair dela)'], answer: 0, why: 'O -n depois de «sur» mostra direção.' },
      { q: 'Como se diz «café sem açúcar»?', options: ['kafo sen sukero', 'kafo kun sukero', 'kafo sur sukero'], answer: 0 },
    ],
  },
];

export const TOKI_PONA_MAIS: MiniLesson[] = [
  {
    id: 'natureza',
    title: 'Bichos e natureza',
    emoji: '🌿',
    intro: ['Os bichos se dividem em poucos grupos: soweli (mamífero terrestre), waso (ave), kala (peixe e bicho da água), pipi (inseto). Um gato é «soweli lili», um bicho pequeno — ou «soweli» mesmo, se o contexto ajudar.'],
    items: [
      { term: 'soweli', meaning: 'mamífero, bicho de terra' },
      { term: 'waso', meaning: 'ave, pássaro' },
      { term: 'kala', meaning: 'peixe, bicho da água' },
      { term: 'pipi', meaning: 'inseto' },
      { term: 'kasi', meaning: 'planta, árvore' },
      { term: 'suno', meaning: 'sol, luz' },
      { term: 'mun', meaning: 'lua, estrela' },
      { term: 'ma', meaning: 'terra, lugar, país' },
    ],
    quiz: [
      { q: 'Como se diz «peixe»?', options: ['kala', 'waso', 'soweli'], answer: 0 },
      { q: 'O que é «kasi suli»?', options: ['Uma árvore (planta grande)', 'Um bicho grande', 'Um país grande'], answer: 0 },
    ],
  },
  {
    id: 'cores',
    title: 'Cinco cores',
    emoji: '🎨',
    intro: ['O toki pona tem cinco palavras de cor, e «laso» cobre o azul e o verde. Para mais precisão, combina-se: «laso kasi» (azul-planta) é verde; «loje jelo», laranja.'],
    items: [
      { term: 'loje', meaning: 'vermelho' },
      { term: 'jelo', meaning: 'amarelo' },
      { term: 'laso', meaning: 'azul, verde' },
      { term: 'walo', meaning: 'branco, claro' },
      { term: 'pimeja', meaning: 'preto, escuro' },
      { term: 'kule', meaning: 'cor' },
    ],
    quiz: [
      { q: 'Quantas palavras de cor o toki pona tem?', options: ['5', '11', '2'], answer: 0 },
      { q: 'Como dizer «laranja»?', options: ['loje jelo', 'laso walo', 'pimeja'], answer: 0 },
    ],
  },
  {
    id: 'corpo',
    title: 'Corpo e pessoas',
    emoji: '🧍',
    intro: ['As partes do corpo também são verbos: «lukin» é olho e ver; «kute», orelha e ouvir.'],
    items: [
      { term: 'lawa', meaning: 'cabeça; chefe, principal' },
      { term: 'luka', meaning: 'mão, braço; cinco' },
      { term: 'noka', meaning: 'perna, pé' },
      { term: 'uta', meaning: 'boca' },
      { term: 'lukin', meaning: 'olho; ver, olhar' },
      { term: 'kute', meaning: 'orelha; ouvir' },
      { term: 'mama', meaning: 'pai ou mãe' },
      { term: 'meli / mije', meaning: 'mulher / homem' },
    ],
    quiz: [
      { q: '«jan lawa» é…', options: ['o chefe (pessoa-cabeça)', 'uma cabeça', 'um médico'], answer: 0 },
      { q: '«mi kute e kalama» quer dizer…', options: ['Eu ouço um som', 'Eu vejo um som', 'Eu faço um som'], answer: 0 },
    ],
  },
  {
    id: 'numeros',
    title: 'Contar com poucas palavras',
    emoji: '🔢',
    intro: ['O jeito mais simples de contar usa só «wan» (1), «tu» (2) e «mute» (muitos). No sistema do livro oficial, somam-se as palavras: «luka» (a mão) vale 5, «mute» vale 20 e «ale» vale 100 — «tu tu» é 4, «luka wan» é 6.'],
    items: [
      { term: 'ala', meaning: 'nenhum, zero' },
      { term: 'wan', meaning: 'um' },
      { term: 'tu', meaning: 'dois' },
      { term: 'luka', meaning: 'cinco (a mão)' },
      { term: 'mute', meaning: 'muitos (ou 20, no sistema com luka)' },
      { term: 'ale', meaning: 'tudo, todos (ou 100, no sistema com luka)' },
    ],
    quiz: [
      { q: 'Quanto é «luka tu»?', options: ['7', '3', '10'], answer: 0 },
      { q: 'Como se diz «três»?', options: ['tu wan', 'wan wan wan wan', 'mute'], answer: 0 },
    ],
  },
  {
    id: 'acoes',
    title: 'Ações e lugares',
    emoji: '🏃',
    intro: ['«lon» é estar em, existir: «mi lon tomo» — estou em casa. A cidade é «ma tomo», o lugar de casas.'],
    items: [
      { term: 'lon', meaning: 'estar em, existir; em' },
      { term: 'kama', meaning: 'vir; tornar-se' },
      { term: 'pali', meaning: 'fazer, trabalhar' },
      { term: 'lape', meaning: 'dormir, descansar' },
      { term: 'musi', meaning: 'brincar, divertir; arte' },
      { term: 'sona', meaning: 'saber, conhecimento' },
      { term: 'wile', meaning: 'querer, precisar' },
      { term: 'ma tomo', meaning: 'cidade' },
    ],
    quiz: [
      { q: '«mi wile lape» quer dizer…', options: ['Eu quero dormir', 'Eu durmo muito', 'Eu sei dormir'], answer: 0 },
      { q: 'O que é «ma tomo»?', options: ['Cidade', 'Casa', 'País'], answer: 0 },
    ],
  },
];

export const INTERLINGUA_MAIS: MiniLesson[] = [
  {
    id: 'numeros-familia',
    title: 'Números e família',
    emoji: '👨‍👩‍👧',
    intro: ['Quem fala português reconhece quase tudo: os números e a família vêm direto do latim.'],
    items: [
      { term: 'un, duo, tres, quatro, cinque', meaning: 'um, dois, três, quatro, cinco' },
      { term: 'sex, septe, octo, novem, dece', meaning: 'seis, sete, oito, nove, dez' },
      { term: 'patre / matre', meaning: 'pai / mãe' },
      { term: 'fratre / soror', meaning: 'irmão / irmã' },
      { term: 'filio / filia', meaning: 'filho / filha' },
    ],
    quiz: [
      { q: '«soror» quer dizer…', options: ['irmã', 'sogra', 'sorriso'], answer: 0 },
      { q: 'Como se diz «oito»?', options: ['octo', 'otto', 'ocho'], answer: 0 },
    ],
  },
  {
    id: 'perguntas',
    title: 'Perguntas',
    emoji: '❓',
    intro: ['As palavras de pergunta também são quase as do português: «Ubi es le station?» — onde fica a estação?'],
    items: [
      { term: 'que', meaning: 'o que' },
      { term: 'qui', meaning: 'quem' },
      { term: 'ubi', meaning: 'onde' },
      { term: 'quando', meaning: 'quando' },
      { term: 'proque', meaning: 'por que' },
    ],
    quiz: [{ q: '«Qui es illa?» quer dizer…', options: ['Quem é ela?', 'O que é isso?', 'Onde ela está?'], answer: 0 }],
  },
];

export const LOJBAN_MAIS: MiniLesson[] = [
  {
    id: 'perguntas',
    title: 'Perguntas: xu e ma',
    emoji: '❓',
    intro: ['«xu» no começo transforma a frase em pergunta de sim ou não: «xu do klama?» — você vai? «ma» fica no lugar do que se pergunta: «do klama ma?» — você vai aonde?'],
    items: [
      { term: 'xu do klama?', meaning: 'Você vai?' },
      { term: 'do klama ma?', meaning: 'Você vai aonde? (ma no lugar do destino)' },
      { term: 'go’i', meaning: 'sim (repete a frase anterior)' },
      { term: 'na go’i', meaning: 'não' },
    ],
    quiz: [
      { q: 'Onde fica «ma» na pergunta?', options: ['No lugar da resposta', 'Sempre no começo', 'No fim'], answer: 0 },
      { q: 'Como se responde «sim»?', options: ['go’i', 'coi', '.ui'], answer: 0 },
    ],
  },
  {
    id: 'tempo-numeros',
    title: 'Tempo e números',
    emoji: '⏱️',
    intro: ['O tempo é opcional, com partículas: «pu» (antes), «ca» (agora), «ba» (depois). «mi pu klama» — eu fui. Os algarismos têm uma sílaba cada: «pa re ci» é 123.'],
    items: [
      { term: 'pu / ca / ba', meaning: 'passado / presente / futuro' },
      { term: 'mi ba klama', meaning: 'eu vou (depois)' },
      { term: 'no, pa, re, ci, vo', meaning: '0, 1, 2, 3, 4' },
      { term: 'mu, xa, ze, bi, so', meaning: '5, 6, 7, 8, 9' },
    ],
    quiz: [
      { q: '«mi pu citka» (citka = comer) quer dizer…', options: ['Eu comi', 'Eu vou comer', 'Eu como agora'], answer: 0 },
      { q: 'Quanto é «re no»?', options: ['20', '2', '12'], answer: 0 },
    ],
  },
];

export const KLINGON_MAIS: MiniLesson[] = [
  {
    id: 'numeros',
    title: 'Contar como um klingon',
    emoji: '🔢',
    intro: ['Os números vão de wa’ a Hut, e as dezenas se formam com «maH»: wa’maH é 10, cha’maH é 20.'],
    items: [
      { term: 'wa’, cha’, wej', meaning: 'um, dois, três' },
      { term: 'loS, vagh, jav', meaning: 'quatro, cinco, seis' },
      { term: 'Soch, chorgh, Hut', meaning: 'sete, oito, nove' },
      { term: 'wa’maH', meaning: 'dez' },
    ],
    quiz: [
      { q: 'Como se diz «três»?', options: ['wej', 'loS', 'cha’'], answer: 0 },
      { q: '«cha’maH» é…', options: ['20', '12', '2'], answer: 0 },
    ],
  },
];

export const NAVI_MAIS: MiniLesson[] = [
  {
    id: 'numeros',
    title: 'Contar de oito em oito',
    emoji: '🖐️',
    intro: ['Os na’vi têm quatro dedos em cada mão, e por isso contam de oito em oito (base octal): «vol» é 8, o número de dedos das duas mãos.'],
    items: [
      { term: '’aw, mune, pxey', meaning: 'um, dois, três' },
      { term: 'tsìng, mrr', meaning: 'quatro, cinco' },
      { term: 'pukap, kinä', meaning: 'seis, sete' },
      { term: 'vol', meaning: 'oito (as duas mãos)' },
    ],
    quiz: [
      { q: 'Por que os na’vi contam de oito em oito?', options: ['Têm quatro dedos em cada mão', 'Por causa das luas de Pandora', 'Por acaso'], answer: 0 },
      { q: 'Como se diz «três»?', options: ['pxey', 'mune', 'vol'], answer: 0 },
    ],
  },
];

export const VALIRIANO_MAIS: MiniLesson[] = [
  {
    id: 'palavras',
    title: 'Palavras de Valíria',
    emoji: '👑',
    intro: ['O plural de «vala» (homem) é «valar», o mesmo de «Valar morghulis». O alto valiriano é, em Westeros, o que o latim foi na Europa: a língua dos livros e dos nobres.'],
    items: [
      { term: 'vala / valar', meaning: 'homem / homens' },
      { term: 'ābra', meaning: 'mulher' },
      { term: 'dārys', meaning: 'rei' },
      { term: 'zaldrīzes', meaning: 'dragão' },
    ],
    quiz: [
      { q: 'Em «Valar morghulis», «valar» é…', options: ['homens (plural de vala)', 'dragões', 'reis'], answer: 0 },
      { q: 'O alto valiriano é para Westeros o que…', options: ['o latim foi para a Europa', 'o inglês é hoje'], answer: 0 },
    ],
  },
];

export const SOLRESOL_MAIS: MiniLesson[] = [
  {
    id: 'cores-numeros',
    title: 'Escrever com cores e números',
    emoji: '🌈',
    intro: ['Cada nota tem um número e uma cor do arco-íris, na ordem: por isso uma frase pode ser pintada numa parede ou mostrada com bandeiras de navio.'],
    items: [
      { term: 'do = 1', meaning: 'vermelho' },
      { term: 're = 2', meaning: 'laranja' },
      { term: 'mi = 3', meaning: 'amarelo' },
      { term: 'fa = 4', meaning: 'verde' },
      { term: 'sol = 5', meaning: 'azul' },
      { term: 'la = 6', meaning: 'anil' },
      { term: 'si = 7', meaning: 'violeta' },
    ],
    quiz: [
      { q: '«si» (sim) se escreve com a cor…', options: ['violeta', 'vermelha', 'verde'], answer: 0 },
      { q: 'Como se escreve «solresol» com números?', options: ['5-2-5', '1-2-3', '7-7-7'], answer: 0 },
    ],
  },
];
