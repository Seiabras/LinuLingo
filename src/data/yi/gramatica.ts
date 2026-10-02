import type { GrammarTopic } from '../types';

/**
 * Gramática do iídiche — só A1.1 e A1.2 por enquanto (pacote incompleto, ver index.ts).
 *
 * Fontes: Wikipédia em inglês, “Yiddish orthography” (letras de vogal do YIVO:
 * https://en.wikipedia.org/wiki/Yiddish_orthography) e “Yiddish grammar” (os três gêneros, os
 * artigos der/di/dos/dem, a conjugação de זײַן e האָבן, e a ordem V2:
 * https://en.wikipedia.org/wiki/Yiddish_grammar); Wikcionário em inglês para a etimologia de cada
 * palavra citada (ver vocabulario.ts e extras.ts para os links específicos de cada uma).
 */
export const GRAMMAR_YI: GrammarTopic[] = [
  {
    id: 'yi-g1',
    level: 'A1.1',
    title: 'A escrita: um alfabeto hebraico que escreve as vogais',
    emoji: '🔤',
    summary: 'O hebraico normalmente só escreve consoantes; o iídiche, no padrão do YIVO, criou letras próprias para escrever as vogais também.',
    sections: [
      {
        text:
          'O hebraico é um “abjad”: na escrita do dia a dia, as vogais quase não aparecem (quem lê precisa já saber a palavra). O iídiche usa o mesmo alfabeto, mas resolveu o problema de um jeito diferente: pegou letras que no hebraico são consoantes fracas ou mudas e passou a usá-las só para marcar vogais, com pontinhos (diacríticos) que distinguem cada som. O resultado é uma escrita bem mais fonética do que a do hebraico.',
        table: {
          head: ['Letra', 'Nome', 'Som'],
          rows: [
            ['אַ', 'pasekh-alef', 'som do “a” em “pá”'],
            ['אָ', 'komets-alef', 'som do “o” aberto'],
            ['יי', 'tsvey-yudn', 'som “êi”'],
            ['ײַ', 'pasekh-tsvey-yudn', 'som “ai”'],
            ['וו', 'tsvey-vovn', 'som do “v”'],
            ['וי', 'vov-yud', 'som “ói”'],
          ],
        },
        examples: [
          ['מאַמע', 'mãe (mame) — o אַ marca o som “a”'],
          ['וואָס', 'o quê (vos) — o אָ marca o som “o”'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o iídiche se lê como o hebraico moderno (quase sem vogais escritas): a ortografia do YIVO é bem mais fonética — cada vogal tem a sua própria letra.',
      'Confundir אַ (pasekh-alef, som “a”) com אָ (komets-alef, som “o”): só o pontinho embaixo muda, mas o som é bem diferente.',
    ],
    quiz: [
      { question: 'O hebraico escreve as vogais do mesmo jeito que o iídiche?', options: ['Não: o hebraico quase não escreve vogais; o iídiche escreve todas', 'Sim, são idênticos', 'O iídiche escreve menos vogais que o hebraico'], answer: 'Não: o hebraico quase não escreve vogais; o iídiche escreve todas', explanation: 'O hebraico é um “abjad” (quase só consoantes); a ortografia do YIVO para o iídiche criou letras próprias para cada vogal.' },
      { question: 'Qual letra faz o som “a” em “מאַמע” (mame, mãe)?', options: ['אַ (pasekh-alef)', 'אָ (komets-alef)', 'ע'], answer: 'אַ (pasekh-alef)', explanation: '“אַ”, com o pontinho embaixo, é o pasekh-alef — a letra que o YIVO usa para o som “a”.' },
    ],
  },
  {
    id: 'yi-g2',
    level: 'A1.1',
    title: 'Os três gêneros: der, di, dos',
    emoji: '🚪',
    summary: 'Como no alemão, todo substantivo do iídiche é masculino, feminino ou neutro, com um artigo diferente para cada um.',
    sections: [
      {
        text: 'O artigo definido (“o”, “a”) muda de forma de acordo com o gênero do substantivo: “דער” no masculino, “די” no feminino, “דאָס” no neutro. No plural, os três viram “די”. Há também uma forma para o caso acusativo/dativo (“דעם”), usada com os masculinos e os neutros depois de certas preposições.',
        table: {
          head: ['Gênero', 'Artigo (nominativo)', 'Exemplo'],
          rows: [
            ['masculino', 'דער', 'דער בוים (a árvore)'],
            ['feminino', 'די', 'די טיר (a porta)'],
            ['neutro', 'דאָס', 'דאָס קינד (a criança)'],
            ['plural', 'די', 'די קינדער (as crianças)'],
          ],
        },
        examples: [
          ['דער בוים איז גרויס.', 'A árvore é grande.'],
          ['די טיר איז גרויס.', 'A porta é grande.'],
          ['דאָס קינד איז קליין.', 'A criança é pequena.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar adivinhar o gênero pelo significado: “הויז” (casa) é neutro, como o alemão “das Haus” — não dá pra prever, é preciso aprender junto com a palavra.',
      'Usar “דאָס” (neutro) para tudo, como quem usa “the” em inglês: o iídiche exige o artigo certo para cada gênero.',
    ],
    quiz: [
      { question: 'Qual é o artigo de “טיר” (porta), um substantivo feminino?', options: ['די', 'דער', 'דאָס'], answer: 'די', explanation: 'Substantivos femininos levam “די” no nominativo.' },
      { question: 'De que gênero é “הויז” (casa)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: '“הויז” é neutro, como o alemão “das Haus” — os dois vêm da mesma raiz germânica.' },
    ],
  },
  {
    id: 'yi-g3',
    level: 'A1.2',
    title: 'A ordem V2: o verbo sempre em segundo lugar',
    emoji: '📐',
    summary: 'Como no alemão e no neerlandês, o verbo conjugado do iídiche vem sempre na segunda posição da frase — não importa o que vem antes dele.',
    sections: [
      {
        text:
          'Nas línguas germânicas com ordem V2 (“verbo em segundo lugar”), não é o sujeito que precisa vir antes do verbo: pode vir qualquer elemento (o sujeito, um objeto, um advérbio…), mas o verbo conjugado sempre ocupa a segunda posição da frase. Se outra coisa que não o sujeito vem primeiro, o sujeito passa para depois do verbo.',
        examples: [
          ['איך וויל קאַווע.', 'Eu quero café. (sujeito “איך” em 1º lugar, verbo “וויל” em 2º)'],
          ['קאַווע וויל איך.', 'Café, eu quero. (objeto “קאַווע” em 1º lugar, verbo “וויל” continua em 2º, o sujeito “איך” vai para depois)'],
        ],
      },
    ],
    pitfalls: [
      'Copiar a ordem do português, em que o sujeito quase sempre vem primeiro: no iídiche (como no alemão), ao colocar outra palavra no início da frase, é o verbo que fica em segundo lugar — o sujeito se move para depois dele.',
    ],
    quiz: [
      { question: 'Em “קאַווע וויל איך” (Café, eu quero), em que posição está o verbo “וויל”?', options: ['Na 2ª posição da frase', 'No final da frase', 'Na 1ª posição da frase'], answer: 'Na 2ª posição da frase', explanation: 'A ordem V2 exige o verbo conjugado sempre em segundo lugar, mesmo quando o objeto (“קאַווע”) vem antes do sujeito.' },
      { question: 'O que muda quando um objeto, e não o sujeito, vem no início da frase?', options: ['O sujeito passa para depois do verbo', 'O verbo vai para o final', 'Nada muda na ordem'], answer: 'O sujeito passa para depois do verbo', explanation: 'O verbo precisa continuar em segundo lugar, então o sujeito é “empurrado” para depois dele.' },
    ],
  },
  {
    id: 'yi-g4',
    level: 'A1.2',
    title: 'As três camadas do vocabulário',
    emoji: '🧩',
    summary: 'O iídiche combina uma base gramatical germânica com duas camadas de vocabulário: o hebraico-aramaico (religião e cultura) e o eslavo (da vida no Leste Europeu).',
    sections: [
      {
        text:
          'A maior parte das palavras do dia a dia — e toda a gramática (artigos, conjugações, a ordem das palavras) — vem do alemão antigo. Por cima dessa base germânica, o iídiche tem uma camada de palavras do hebraico e do aramaico (o “loshn-koydesh”, a língua sagrada), usada sobretudo para religião, família e cultura, e uma camada de palavras eslavas, incorporadas quando as comunidades se mudaram para a Polônia, a Lituânia, a Ucrânia e a Rússia.',
        table: {
          head: ['Camada', 'Exemplo', 'Vem de'],
          rows: [
            ['germânica', 'הויז (hoyz, casa)', 'alto-alemão médio “hūs” (como o alemão “Haus”)'],
            ['germânica', 'גרויס (groys, grande)', 'alto-alemão médio “grōz” (como o inglês “great”)'],
            ['hebraico-aramaica', 'משפּחה (mishpokhe, família)', 'hebraico “מִשְׁפָּחָה” (mishpakhá)'],
            ['hebraico-aramaica', 'לבֿנה (levone, lua)', 'hebraico “לְבָנָה” (levaná)'],
            ['eslava', 'קאַווע (kave, café)', 'polonês “kawa” (que vem do turco otomano e, lá atrás, do árabe)'],
          ],
        },
        examples: [
          ['מײַן משפּחה איז גרויס.', 'A minha família é grande. (“משפּחה” hebraico-aramaico + “גרויס” germânico, na mesma frase)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que, por estar em letras hebraicas, toda palavra do iídiche vem do hebraico: a maior parte do vocabulário básico (casa, grande, água, comer) é germânica — só uma parte, sobretudo ligada à religião e à família, vem do hebraico e do aramaico.',
      'Achar que “קאַווע” (café) é uma palavra germânica só porque soa parecida com outras línguas europeias: ela entrou no iídiche pelo polonês, não pelo alemão.',
    ],
    quiz: [
      { question: 'De onde vem a palavra “משפּחה” (mishpokhe, família)?', options: ['Do hebraico', 'Do alemão', 'Do polonês'], answer: 'Do hebraico', explanation: '“משפּחה” vem do hebraico “מִשְׁפָּחָה” (mishpakhá) — a camada hebraico-aramaica do vocabulário.' },
      { question: 'Por qual língua a palavra “קאַווע” (café) chegou ao iídiche?', options: ['Pelo polonês (camada eslava)', 'Diretamente do árabe', 'Pelo alemão'], answer: 'Pelo polonês (camada eslava)', explanation: 'Embora a palavra tenha origem árabe/turca, ela entrou no iídiche através do polonês “kawa” — por isso conta como empréstimo eslavo.' },
    ],
  },
];
