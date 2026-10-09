import type { MiniCourse } from './tipos';

/**
 * Láadan — criada em 1982 pela linguista e escritora Suzette Haden Elgin, pra testar se uma língua
 * feita para expressar a experiência das mulheres mudaria alguma coisa (aparece no romance "Native
 * Tongue“, da própria autora). Fonte: Wikipédia em inglês ”Láadan" (conferida de novo nesta sessão).
 * Duas palavras citadas de memória em pesquisas anteriores (“radiidin”, “ramimelh”) NÃO aparecem
 * nem na Wikipédia nem no Wikcionário — ficam de fora deste curso até alguém achar o dicionário
 * original de Elgin (1988) ou outra fonte confiável.
 */
export const CURSO_LAADAN: MiniCourse = {
  id: 'laadan',
  name: 'Láadan',
  emoji: '♀️',
  kind: 'artificial',
  summary: 'Criada em 1982 por uma linguista, pra testar se uma língua pensada pra expressar a experiência das mulheres mudaria alguma coisa: toda frase já diz, em uma partícula só, se é afirmação, pergunta ou promessa — e como se sabe que é verdade.',
  sources: [{ label: 'Wikipédia (inglês): “Láadan”', url: 'https://en.wikipedia.org/wiki/L%C3%A1adan' }],
  lessons: [
    {
      id: 'particulas',
      title: 'Bíi, báa, bóo...',
      emoji: '💬',
      intro: [
        'A linguista Suzette Haden Elgin criou o láadan em 1982 com uma pergunta de cientista: será que uma língua desenhada para dizer coisas que o inglês não tem numa palavra só — sobretudo sobre a experiência das mulheres — mudaria algum jeito de pensar? A língua aparece no romance de ficção científica que ela mesma escreveu, “Native Tongue” (1984).',
        'Toda frase do láadan começa com uma partícula que já diz que TIPO de frase é: “bíi” para uma afirmação (e pode ser omitida), “báa” para uma pergunta, “bóo” para um pedido (a forma comum de imperativo) e “bó” para uma ordem (bem rara, quase só com crianças pequenas).',
      ],
      items: [
        { term: 'bíi', meaning: 'partícula de afirmação (no início da frase; pode ser omitida)' },
        { term: 'báa', meaning: 'partícula de pergunta (no início da frase)' },
        { term: 'bóo', meaning: 'partícula de pedido (o imperativo comum)' },
        { term: 'bé', meaning: 'partícula de promessa' },
        { term: 'áya', meaning: 'ser bonita' },
        { term: 'mahina', meaning: 'flor' },
      ],
      quiz: [
        { q: 'O que a partícula “báa” no início da frase indica?', options: ['Uma pergunta', 'Uma afirmação', 'Um pedido'], answer: 0 },
        { q: 'Como se diz “a flor é bonita” em láadan?', options: ['Bíi ril áya mahina wa.', 'Báa ril áya mahina.', 'Mahina áya bíi.'], answer: 0, why: 'Exemplo atestado: “bíi” (afirmação) + “áya” (ser bonita) + “mahina” (flor) + “wa” (partícula evidencial, no final — ver a próxima lição).' },
      ],
    },
    {
      id: 'evidenciais',
      title: 'Wa, wi, we...',
      emoji: '🔍',
      intro: [
        'No FINAL da frase, uma segunda partícula diz COMO quem fala sabe que aquilo é verdade — algo que nenhuma língua natural marca de forma tão sistemática. “Wa” é pra algo que a própria pessoa percebeu (viu, ouviu, sentiu); “wi” é pra algo evidente por si só; “we” é pra algo sonhado; “wáa” é pra algo que a pessoa assume verdadeiro porque confia na fonte; “waá” é o oposto, assumido falso por desconfiar da fonte; “wo” é imaginado ou hipotético; “wóo” é “sem validade conhecida” — a pessoa não sabe se é verdade ou não.',
      ],
      items: [
        { term: 'wa', meaning: 'evidencial: percebido pela própria pessoa (viu/ouviu/sentiu)' },
        { term: 'wi', meaning: 'evidencial: evidente por si só' },
        { term: 'we', meaning: 'evidencial: sonhado' },
        { term: 'wóo', meaning: 'evidencial: sem validade conhecida' },
        { term: 'ruleth', meaning: 'gato' },
        { term: 'lanemid', meaning: 'cachorro' },
      ],
      quiz: [
        { q: 'O que a partícula evidencial “we” (no final da frase) indica?', options: ['Que foi sonhado', 'Que foi visto de verdade', 'Que é uma ordem'], answer: 0 },
        { q: 'Em que posição da frase vem a partícula evidencial?', options: ['No final', 'No início', 'Logo depois do verbo'], answer: 0, why: 'As partículas de ATO DE FALA (bíi/báa/bóo) vêm no início; as EVIDENCIAIS (wa/wi/we…) vêm no final.' },
      ],
    },
    {
      id: 'familia',
      title: 'Thul, thulid, le',
      emoji: '👪',
      intro: [
        'Os pronomes do láadan se montam em pedaços: “l-” marca a primeira pessoa (eu/nós), “n-” a segunda (você), “b-” a terceira (ele/ela), quase sempre seguidos de “-e”. A vogal “-a” marca alguém amado, e o prefixo “lhe-” marca alguém desprezado — a língua tem um jeito gramatical de marcar afeto que o português não tem.',
        'Os nomes de parentesco também mudam por sufixo: “thul” é mãe/progenitor, e o sufixo “-id” marca o masculino — “thulid” é pai.',
      ],
      items: [
        { term: 'le', meaning: 'eu' },
        { term: 'ne', meaning: 'você' },
        { term: 'thul', meaning: 'mãe/progenitor' },
        { term: 'thulid', meaning: 'pai (thul + -id, sufixo de masculino)' },
        { term: 'ebahid', meaning: 'marido' },
        { term: 'losh', meaning: 'dinheiro' },
      ],
      quiz: [
        { q: 'O que o sufixo “-id” marca em “thulid” (pai)?', options: ['O masculino', 'O plural', 'Uma pergunta'], answer: 0, why: '“Thul” é mãe/progenitor; o sufixo “-id” marca o masculino, formando “thulid” (pai).' },
        { q: 'Como se diz “eu” em láadan?', options: ['le', 'ne', 'thul'], answer: 0 },
      ],
    },
  ],
};
