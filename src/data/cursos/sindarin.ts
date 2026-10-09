import type { MiniCourse } from './tipos';

/**
 * Sindarin, a língua dos elfos cinzentos da Terra-média (J. R. R. Tolkien) — fonte: o curso
 * acadêmico de Helge Fauskanger no Ardalambion, “Sindarin — the Noble Tongue”, conferido de novo
 * nesta sessão via Wayback Machine (o domínio original, folk.uib.no, e ardalambion.net estão fora
 * do ar/com SSL quebrado). Tudo nele é rastreável a uma fonte primária de Tolkien (O Senhor dos
 * Anéis, Letters, The Etymologies, War of the Jewels etc., com a referência exata em cada citação).
 */
export const CURSO_SINDARIN: MiniCourse = {
  id: 'sindarin',
  name: 'Sindarin',
  emoji: '🌿',
  kind: 'artificial',
  summary: 'A língua do dia a dia dos elfos na Terra-média, com a sonoridade do galês: “mellon” (amigo) era a senha da Porta de Moria, e as consoantes do começo da palavra mudam de som depois de certas outras palavras.',
  sources: [{ label: 'Ardalambion — Helge Fauskanger, “Sindarin: the Noble Tongue”', url: 'https://web.archive.org/web/2022id_/http://folk.uib.no/hnohf/sindarin.htm' }],
  lessons: [
    {
      id: 'saudacoes',
      title: 'Mae govannen!',
      emoji: '👋',
      intro: [
        'O sindarin é a língua que os elfos cinzentos (os Sindar) falavam no dia a dia na Terra-média — diferente do quenya, cerimonial, usado só em canções e ocasiões solenes. Tolkien deu ao sindarin o som do galês, inclusive a mutação das consoantes do começo da palavra (ver a próxima lição).',
        '“Mae govannen” (bem encontrado/olá) é a saudação de Glorfindel a Aragorn em O Senhor dos Anéis — confirmada nas próprias cartas de Tolkien (Letters:308). “Mellon” (amigo) é a palavra mais famosa da língua: a senha gravada na Porta de Moria.',
      ],
      items: [
        { term: 'Mae govannen!', meaning: 'bem encontrado/olá' },
        { term: 'mellon', meaning: 'amigo' },
        { term: 'loth', meaning: 'flor' },
        { term: 'galadh', meaning: 'árvore' },
      ],
      quiz: [
        { q: 'O que “mae govannen” significa?', options: ['Bem encontrado/olá', 'Adeus', 'Obrigado'], answer: 0, why: 'É a saudação de Glorfindel a Aragorn em O Senhor dos Anéis, confirmada nas cartas de Tolkien.' },
        { q: 'Qual é a palavra mais famosa do sindarin, a senha da Porta de Moria?', options: ['mellon', 'loth', 'galadh'], answer: 0 },
      ],
    },
    {
      id: 'mutacao',
      title: 'I dâl, i vess',
      emoji: '🔤',
      intro: [
        'A marca mais forte do sindarin é a mutação consonantal inicial (lenição): quando certas palavras — como o artigo “i” (“o/a”) — vêm logo antes de um substantivo, a primeira consoante dele muda de som, “amolecendo”. É a mesma mutação que o galês tem de verdade.',
        'Exemplos atestados por Tolkien (The Etymologies, War of the Jewels): “tâl” (pé) vira “i dâl” (o pé) — o “t” amolece pra “d”. “bess” (mulher) vira “i vess” (a mulher) — o “b” amolece pra “v”. “galadh” (árvore) vira “i \'aladh” (a árvore) — o “g” desaparece, deixando só o apóstrofo.',
      ],
      items: [
        { term: 'tâl', meaning: 'pé' },
        { term: 'i dâl', meaning: 'o pé (depois da lenição: t → d)' },
        { term: 'bess', meaning: 'mulher' },
        { term: 'i vess', meaning: 'a mulher (depois da lenição: b → v)' },
      ],
      quiz: [
        { q: 'O que acontece com “tâl” (pé) depois do artigo “i”?', options: ['Vira “i dâl” (t → d)', 'Fica igual: “i tâl”', 'Vira “i thâl”'], answer: 0, why: 'A lenição amolece o “t” inicial para “d” depois de palavras como o artigo “i” — exemplo atestado por Tolkien.' },
        { q: 'Como fica “árvore” (galadh) depois do artigo “i”?', options: ['i \'aladh (o g desaparece)', 'i galadh (sem mudar)', 'i dalad'], answer: 0 },
      ],
    },
    {
      id: 'frases',
      title: 'Pedo mellon a minno',
      emoji: '📖',
      intro: [
        'A inscrição na Porta de Moria (O Senhor dos Anéis) é a frase mais famosa em sindarin: “Pedo mellon a minno” — “fale, amigo, e entre”. “A Elbereth Gilthoniel” é a primeira linha de uma canção élfica que aparece mais de uma vez no livro, uma invocação à estrela Elbereth.',
        'As letras “dh” e “th” do sindarin soam como o inglês “th” de “this” (dh, sonoro) e de “thin” (th, surdo) — sons que o português não tem; “ch” soa como o alemão/galês “ch” de “Bach” (não como o “tch” português).',
      ],
      items: [
        { term: 'Pedo mellon a minno.', meaning: 'Fale, amigo, e entre. (inscrição da Porta de Moria)' },
        { term: 'A Elbereth Gilthoniel', meaning: 'Ó Elbereth, acendedora de estrelas (início de uma canção élfica)' },
        { term: 'dh', meaning: 'soa como o “th” sonoro do inglês “this”' },
        { term: 'th', meaning: 'soa como o “th” surdo do inglês “thin”' },
      ],
      quiz: [
        { q: 'Onde aparece a frase “Pedo mellon a minno”?', options: ['Na Porta de Moria', 'Na Porta de Valfenda', 'Numa canção de Galadriel'], answer: 0, why: '“Fale, amigo, e entre” é a inscrição que Narvi gravou na Porta de Moria, segundo o próprio Senhor dos Anéis.' },
        { q: 'Como soa o “th” do sindarin?', options: ['Como o “th” surdo do inglês “thin”', 'Como o “tch” português', 'Como o “f” português'], answer: 0 },
      ],
    },
  ],
};
