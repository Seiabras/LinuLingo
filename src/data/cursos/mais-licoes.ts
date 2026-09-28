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
  {
    id: 'en-anu',
    title: 'Juntando: en e anu',
    emoji: '🔗',
    intro: [
      '«en» junta vários sujeitos numa frase só: «jan en soweli li moku» — a pessoa e o bicho comem.',
      '«anu» oferece uma alternativa, o «ou»: «sina wile e telo anu kili?» — você quer água ou fruta? (Vale saber: os limites exatos de uso do «anu» são um dos cantos menos consensuais da gramática — até gente da comunidade debate isso.)',
    ],
    items: [
      { term: 'jan en soweli li moku.', meaning: 'A pessoa e o bicho comem.' },
      { term: 'sina wile e telo anu kili?', meaning: 'Você quer água ou fruta?' },
      { term: 'en', meaning: 'e (só para juntar sujeitos)' },
      { term: 'anu', meaning: 'ou' },
    ],
    quiz: [
      { q: 'Qual partícula junta dois sujeitos na mesma frase?', options: ['en', 'anu', 'pi'], answer: 0 },
      { q: '«mi wile e moku anu telo» pergunta sobre…', options: ['comida ou água', 'comida e água', 'se você tem fome'], answer: 0 },
    ],
  },
  {
    id: 'filosofia',
    title: 'A filosofia da simplicidade',
    emoji: '🧘',
    intro: [
      'Sonja Lang criou o toki pona por volta de 2001: queria uma língua que «mapeasse a própria mente no papel» e simplificasse o pensamento. A palavra «pona» já mostra a ideia: quer dizer «bom» e «simples» ao mesmo tempo — no toki pona, simplificar é uma forma de bondade.',
      'A língua reduz o vocabulário ao osso: em vez de uma palavra para cada veículo, «tawa» (ir, mover-se) serve para carro, ônibus e avião — o que muda é o modificador («tomo tawa», casa que anda, é carro).',
      'Por anos, o toki pona foi chamado de «língua taoísta», porque Sonja Lang citou o Tao Te Ching como uma das inspirações no seu livro de 2014. Mas em dezembro de 2024 ela mesma disse que esse rótulo pegou pesado demais: a ligação começou como um comentário solto, não como um projeto de trazer o taoísmo para a língua.',
    ],
    items: [
      { term: 'pona', meaning: 'bom E simples ao mesmo tempo — a mesma palavra' },
      { term: 'tawa', meaning: 'ir, mover-se; para (uma das palavras «coringa» da língua)' },
      { term: '2001', meaning: 'ano em que Sonja Lang começou a criar o toki pona' },
    ],
    quiz: [
      { q: 'Por que «pona» é uma palavra-chave da filosofia do toki pona?', options: ['Porque significa «bom» e «simples» ao mesmo tempo', 'Porque é a primeira palavra do dicionário', 'Porque só ela tem acento'], answer: 0 },
      { q: 'O que Sonja Lang disse em dezembro de 2024 sobre o rótulo «língua taoísta»?', options: ['Que foi exagerado, veio de um comentário solto', 'Que é o objetivo central da língua', 'Que nunca leu o Tao Te Ching'], answer: 0 },
    ],
  },
  {
    id: 'nimi-sin',
    title: 'De pu a nimi sin: o vocabulário muda',
    emoji: '📖',
    intro: [
      'O toki pona tem «camadas» de palavras, conforme a fonte: as do livro oficial de 2014 (chamado «pu»), as do Dicionário Oficial de 2021 («ku», que Sonja Lang escreveu ouvindo a comunidade), e as mais novas ainda, criadas pela comunidade depois disso e chamadas de «nimi sin» (palavras novas).',
      'Isso gera debate de verdade: «tonsi» (para pessoas não-binárias), uma «nimi sin», já teve apoio da maioria numa pesquisa informal da comunidade, mesmo sem ser «oficial». Parte da comunidade acha que cada palavra nova ajuda a língua a crescer; outra parte acha que fugir das ~120 palavras originais trai a ideia de simplicidade do projeto.',
      'Desde o dicionário de 2021, a própria Sonja Lang passou a bola pra frente: disse que os livros dela são só um retrato do jeito que ela fala, e convidou a comunidade a continuar desenvolvendo a língua por conta própria.',
    ],
    items: [
      { term: 'nimi pu', meaning: 'palavras do livro oficial de 2014' },
      { term: 'nimi ku', meaning: 'palavras do Dicionário Oficial de 2021' },
      { term: 'nimi sin', meaning: 'palavras novas, criadas pela comunidade depois disso' },
      { term: 'tonsi', meaning: 'pessoa não-binária (nimi sin, ainda debatida)' },
    ],
    quiz: [
      { q: 'O que são «nimi sin»?', options: ['Palavras novas criadas pela comunidade depois dos livros oficiais', 'Erros de ortografia', 'Palavras do livro de 2014'], answer: 0 },
      { q: 'Por que existe debate sobre aceitar palavras novas no toki pona?', options: ['Porque parte da comunidade acha que foge da ideia original de simplicidade', 'Porque são proibidas por lei', 'Porque Sonja Lang nunca comentou sobre isso'], answer: 0 },
    ],
  },
  {
    id: 'comunidade',
    title: 'Uma comunidade viva',
    emoji: '💬',
    intro: [
      'O toki pona não parou nos livros: cresceu muito depois de 2014, puxado por vídeo-aulas e por comunidades no Discord — a própria Sonja Lang aponta esse período como uma virada importante para a língua.',
      'Hoje o maior servidor de Discord da língua, o «ma pona pi toki pona», passa de 16 mil membros. Em pesquisas recentes com a comunidade, cerca de 80% dizem que sabem toki pona e mais da metade diz ter nível de conversação — números que vêm crescendo ano a ano.',
      'Não é só conversa: a comunidade já traduziu partes da Bíblia para o toki pona e tocou um projeto de tradução do musical Hamilton, com mais de 60 pessoas envolvidas.',
    ],
    items: [
      { term: 'ma pona pi toki pona', meaning: 'o maior servidor de Discord da comunidade (16 mil+ membros)' },
      { term: 'lipu pu', meaning: 'o livro oficial de 2014, «Toki Pona: The Language of Good»' },
      { term: 'lipu ku', meaning: 'o Dicionário Oficial de 2021' },
    ],
    quiz: [
      { q: 'Onde vive hoje boa parte da comunidade do toki pona?', options: ['Em servidores de Discord', 'Só em livros impressos', 'Em programas de TV'], answer: 0 },
      { q: 'Que tipo de projeto coletivo a comunidade já fez em toki pona?', options: ['Tradução de partes da Bíblia e do musical Hamilton', 'Um filme de Hollywood', 'Um tratado internacional'], answer: 0 },
    ],
  },
  {
    id: 'preverbos',
    title: 'Antes do verbo: os pré-verbos',
    emoji: '⏳',
    intro: [
      'O toki pona não conjuga verbo — não tem sufixo de passado, futuro ou «estar fazendo». Em vez disso, usa palavrinhas soltas antes do verbo principal, os pré-verbos, para marcar começo, continuação, capacidade e vontade.',
      '«mi kama sona e toki pona» é «eu estou aprendendo toki pona» (literalmente, «eu venho a saber toki pona») — «kama» marca que a ação está em processo. «mi ken pali» é «eu posso trabalhar» — «ken» marca capacidade ou permissão. Dois pré-verbos podem se juntar: «mi wile lukin e tomo» é «eu quero olhar a casa».',
    ],
    items: [
      { term: 'awen', meaning: 'continuar (fazendo algo); ficar' },
      { term: 'kama', meaning: 'vir a ser, começar a; chegar' },
      { term: 'ken', meaning: 'poder, ser capaz de, ter permissão' },
      { term: 'lukin', meaning: 'tentar (antes de verbo); olhar' },
      { term: 'sona', meaning: 'saber (fazer algo)' },
      { term: 'wile', meaning: 'querer, precisar' },
      { term: 'mi kama sona e toki pona.', meaning: 'Eu estou aprendendo toki pona.' },
      { term: 'mi ken pali.', meaning: 'Eu posso trabalhar.' },
    ],
    quiz: [
      { q: 'Como o toki pona marca que uma ação está «em processo de acontecer»?', options: ['Com o pré-verbo «kama» antes do verbo principal', 'Com um sufixo no verbo', 'Não dá para marcar isso'], answer: 0 },
      { q: '«mi wile lukin e tomo» quer dizer…', options: ['Eu quero olhar a casa', 'Eu odeio a casa', 'Eu moro na casa'], answer: 0, why: '«wile» (querer) + «lukin» (olhar) juntos.' },
    ],
  },
  {
    id: 'mais-palavras',
    title: 'Mais palavras do dia a dia',
    emoji: '🧠',
    intro: ['Com pouco mais de cem palavras oficiais, cada uma puxa bastante peso. Aqui vão mais algumas que aparecem toda hora nas conversas em toki pona.'],
    items: [
      { term: 'ilo', meaning: 'ferramenta, instrumento, aparelho' },
      { term: 'lipu', meaning: 'papel, livro, documento, site' },
      { term: 'nasin', meaning: 'caminho, jeito de fazer, método' },
      { term: 'pilin', meaning: 'sentir, sentimento; corpo (por dentro)' },
      { term: 'olin', meaning: 'amar, amor (de família ou de amizade)' },
      { term: 'wawa', meaning: 'forte, energia, poder' },
      { term: 'sama', meaning: 'igual, mesmo; parecido' },
      { term: 'tan', meaning: 'de, por causa de, origem' },
      { term: 'pakala', meaning: 'erro, acidente, estragar' },
      { term: 'utala', meaning: 'briga, guerra, competição' },
    ],
    quiz: [
      { q: '«ilo» quer dizer…', options: ['Ferramenta, instrumento', 'Amor', 'Erro'], answer: 0 },
      { q: '«mi pilin pona» quer dizer…', options: ['Eu me sinto bem', 'Eu trabalho bem', 'Eu falo bem'], answer: 0 },
      { q: 'O que é «nasin»?', options: ['Caminho, jeito de fazer as coisas', 'Uma ferramenta', 'Um sentimento'], answer: 0 },
    ],
  },
  {
    id: 'debates',
    title: 'Debates dentro da língua',
    emoji: '⚖️',
    intro: [
      'Uma língua com tão poucas palavras tem um preço: no começo, a própria filosofia do toki pona reconhecia que ele não serviria bem para escrita técnica, sem perder um bocado de precisão. Falantes de hoje contestam esse limite e tentam mostrar que dá, sim, para discutir ciência e tecnologia em toki pona — só que de um jeito mais indireto.',
      'A partícula «anu» (ou) também tem um cantinho polêmico: até onde uma alternativa introduzida por ela vale dentro da frase é uma das coisas em que a própria comunidade ainda debate os limites exatos.',
      'E o vocabulário vive uma tensão de três tempos: palavras de antes de 2014 que caíram em desuso (pré-pu), as do livro oficial de 2014 (pu) e as criadas depois pela comunidade (pós-pu, os nimi sin). As três convivem, e falantes diferentes escolhem lados diferentes sobre quanto aceitar do pós-pu.',
    ],
    items: [
      { term: 'pré-pu', meaning: 'palavras de antes de 2014, hoje fora de uso' },
      { term: 'pu', meaning: 'o padrão oficial de 2014' },
      { term: 'pós-pu', meaning: 'palavras novas da comunidade, depois de 2014' },
    ],
    quiz: [
      { q: 'O que a própria filosofia original do toki pona reconhecia como limite da língua?', options: ['Que ela não seria boa para escrita técnica sem perder precisão', 'Que ninguém conseguiria aprender', 'Que só serve para poesia'], answer: 0 },
      { q: 'Por que existe tensão entre pré-pu, pu e pós-pu?', options: ['Porque são três «camadas» de vocabulário de épocas diferentes, e nem todo falante aceita a mais nova', 'Porque são três línguas diferentes', 'Porque «pu» significa «errado»'], answer: 0 },
    ],
  },
  {
    id: 'subcomunidades',
    title: 'Uma comunidade cheia de cantinhos',
    emoji: '🧩',
    intro: [
      'Dentro da comunidade grande, existem grupos menores para interesses específicos: «ma nanpa» reúne quem gosta de ciências e matemática (STEM) falando em toki pona, «ma sewi» junta quem quer discutir religião e espiritualidade na língua, e a zine comunitária «lipu tenpo» tem mais de 400 pessoas no próprio Discord.',
      'A adoção do sitelen pona (a escrita própria) também disparou: pesquisas com a comunidade mostram salto de 61% em 2021 para 85% em 2024 — cada vez mais gente escrevendo com os símbolos, não só com o alfabeto latino.',
    ],
    items: [
      { term: 'ma nanpa', meaning: 'comunidade de ciências e matemática em toki pona' },
      { term: 'ma sewi', meaning: 'comunidade de religião e espiritualidade em toki pona' },
      { term: 'lipu tenpo', meaning: 'zine (revista) feita pela comunidade, 400+ membros' },
    ],
    quiz: [
      { q: 'O que é «ma nanpa»?', options: ['Uma comunidade de ciências e matemática em toki pona', 'Um livro de gramática', 'Uma cidade fictícia'], answer: 0 },
      { q: 'O que aconteceu com o uso do sitelen pona entre 2021 e 2024, segundo pesquisas da comunidade?', options: ['Saltou de 61% para 85% de adoção', 'Caiu pela metade', 'Ficou igual'], answer: 0 },
    ],
  },
  {
    id: 'sitelen-pona',
    title: 'sitelen pona: escrever com desenhos',
    emoji: '🖼️',
    intro: [
      'Além do alfabeto latino, o toki pona tem uma escrita própria: o sitelen pona («desenho simples»), criada pela própria Sonja Lang e publicada em 2014. Cada palavra vira um único símbolo — não letras soltas, e sim um desenho por ideia.',
      'Em dezembro de 2021, Sonja Lang liberou os desenhos originais do sitelen pona em licença CC0: são de domínio público, sem restrição nenhuma de uso — a comunidade já usou isso para criar fontes de computador com eles.',
      'Por enquanto, o sitelen pona ainda não tem um lugar oficial dentro do Unicode (o padrão internacional de caracteres de computador): por isso, cada fonte usa uma área «privada» de códigos, e é preciso instalar a fonte certa para os símbolos aparecerem.',
    ],
    items: [
      { term: 'sitelen pona', meaning: '«desenho simples»: a escrita logográfica do toki pona' },
      { term: 'CC0 (2021)', meaning: 'a licença que Sonja Lang deu aos desenhos originais: domínio público' },
    ],
    quiz: [
      { q: 'Quem criou o sitelen pona, e quando foi publicado?', options: ['Sonja Lang, em 2014, junto com o livro oficial', 'A comunidade do Discord, em 2021', 'Ninguém sabe'], answer: 0 },
      { q: 'Qual é o status de licença dos desenhos originais do sitelen pona?', options: ['CC0, domínio público, desde 2021', 'Direitos autorais fechados, sem uso livre', 'Só pode ser usado dentro do livro oficial'], answer: 0 },
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
  {
    id: 'silabas-repetidas',
    title: 'Sílabas repetidas: números e doenças',
    emoji: '🔢',
    intro: [
      'Repetir uma sílaba muda a palavra para outra categoria inteira. Palavras de três sílabas com uma sílaba repetida são números, dias da semana ou meses; de quatro sílabas com repetição, uma doença.',
      'Isso multiplica muito o vocabulário sem inventar sons novos: basta saber a regra para adivinhar a que grupo uma palavra pertence.',
    ],
    items: [
      { term: 'redodo', meaning: 'um (1)' },
      { term: 'remimi', meaning: 'dois (2)' },
      { term: 'solsolredo', meaning: 'enxaqueca (doença: quatro sílabas com repetição)' },
    ],
    quiz: [
      { q: 'Uma palavra de três sílabas com uma sílaba repetida costuma ser…', options: ['um número, dia da semana ou mês', 'um verbo', 'uma cor'], answer: 0 },
      { q: '«solsolredo» segue o padrão de quatro sílabas repetidas, que indica…', options: ['uma doença', 'uma cor', 'um número'], answer: 0 },
    ],
  },
  {
    id: 'acentos-gramaticais',
    title: 'A gramática mora nos acentos',
    emoji: '✏️',
    intro: [
      'Sudre não quis inventar sufixos: fez os acentos carregarem a gramática. O acento agudo marca o plural, e um sinal embaixo da letra marca o feminino.',
      'Numa palavra de quatro sílabas, o lugar do acento circunflexo diz a classe gramatical. Veja a mesma raiz, «midofa», mudando de infinitivo a substantivo, adjetivo e advérbio só pela posição do acento.',
    ],
    items: [
      { term: 'midofa', meaning: 'preferir (infinitivo, sem circunflexo)' },
      { term: 'mîdofa', meaning: 'preferência (substantivo: circunflexo na 1ª sílaba)' },
      { term: 'midôfa', meaning: 'preferível (adjetivo: circunflexo na penúltima sílaba)' },
      { term: 'midofâ', meaning: 'de preferência (advérbio: circunflexo na última sílaba)' },
    ],
    quiz: [
      { q: 'O que o acento agudo marca no solresol?', options: ['o plural', 'o feminino', 'um advérbio'], answer: 0 },
      { q: 'Em «midofâ», o circunflexo na última sílaba marca…', options: ['um advérbio', 'um substantivo', 'o plural'], answer: 0 },
    ],
  },
  {
    id: 'todos-sentidos',
    title: 'Uma língua para os cinco sentidos',
    emoji: '🖐️',
    intro: [
      'Além de falado, cantado, escrito com notas, números ou cores, o solresol também podia ser mostrado com gestos de mão — um por nota, parecido com os sinais usados para ensinar solfejo — ou marcado com bandeiras, uma cor por nota, como a sinalização naval.',
      'A ideia de Sudre era que qualquer pessoa pudesse se comunicar nele, mesmo sem ouvir, sem ver, ou a uma distância grande demais para a voz chegar.',
    ],
    items: [
      { term: 'gesto de mão', meaning: 'um sinal para cada nota, parecido com os sinais de solfejo' },
      { term: 'bandeira', meaning: 'uma bandeira colorida para cada nota, como a sinalização naval' },
      { term: 'instrumento', meaning: 'qualquer instrumento musical também «fala» solresol, tocando as notas' },
    ],
    quiz: [
      { q: 'Além da voz, de que outro jeito dá para «falar» solresol de longe?', options: ['Com bandeiras, uma cor por nota', 'Não dá', 'Só por escrito'], answer: 0 },
      { q: 'Por que Sudre pensou o solresol em tantos meios (voz, cor, gesto, bandeira)?', options: ['Para qualquer pessoa poder se comunicar, mesmo sem ouvir ou ver', 'Só por estética', 'Para ser mais difícil de aprender'], answer: 0 },
    ],
  },
  {
    id: 'historia-solresol',
    title: 'De um sonho musical ao teclado de hoje',
    emoji: '📜',
    intro: [
      'François Sudre (1787–1862) passou a vida inteira desenvolvendo o solresol a partir de 1827; o livro que fechou a língua, «Langue Musicale Universelle», só saiu em 1866, já depois de sua morte.',
      'A língua fez sucesso no século 19: Victor Hugo, Lamartine, Alexander von Humboldt e o imperador Napoleão III elogiaram o projeto. Em 1902, o polonês Boleslas Gajewski publicou a gramática mais completa; ela só ganhou tradução para o inglês em 1997, feita por Stephen L. Rice.',
      'Hoje o solresol não tem um código oficial da ISO — um pedido foi recusado em 2018 —, mas usa a marca informal «qso» ou «art-x-solresol». O linguista C. George Boeree criou uma variante mais fácil de pronunciar, chamada «Ses».',
    ],
    items: [
      { term: '1827', meaning: 'ano em que Sudre começou a criar o solresol' },
      { term: '1866', meaning: 'ano da publicação de «Langue Musicale Universelle», já depois da morte de Sudre' },
      { term: 'Boleslas Gajewski', meaning: 'autor da gramática de 1902, a mais completa do solresol' },
    ],
    quiz: [
      { q: 'Quem criou o solresol?', options: ['François Sudre', 'Boleslas Gajewski', 'Victor Hugo'], answer: 0 },
      { q: 'A gramática mais completa do solresol, de 1902, é de…', options: ['Boleslas Gajewski', 'Zamenhof', 'C. George Boeree'], answer: 0 },
      { q: 'O solresol tem hoje um código oficial da ISO?', options: ['Não — um pedido foi recusado em 2018', 'Sim, desde 1980', 'Sim, desde 2018'], answer: 0 },
    ],
  },
];
