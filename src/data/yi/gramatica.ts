import type { GrammarTopic } from '../types';

/**
 * Gramática do iídiche — só A1.1 e A1.2 por enquanto (pacote incompleto, ver index.ts).
 *
 * Fontes: Wikipédia em inglês, “Yiddish orthography” (letras de vogal do YIVO:
 * https://en.wikipedia.org/wiki/Yiddish_orthography) e “Yiddish grammar” (os três gêneros, os
 * artigos der/di/dos/dem, a conjugação de זײַן e האָבן, e a ordem V2:
 * https://en.wikipedia.org/wiki/Yiddish_grammar); Wikcionário em inglês para a etimologia de cada
 * palavra citada (ver vocabulario.ts e extras.ts para os links específicos de cada uma).
 *
 * Os três tópicos de nível A2 (yi-g5, yi-g6, yi-g7) vêm de duas fontes, pesquisadas em 09/10/2026:
 * a Wikipédia em inglês, “Yiddish grammar” (https://en.wikipedia.org/wiki/Yiddish_grammar), para o
 * plural dos substantivos e o caso acusativo/dativo (o artigo “דעם”); e o Wikcionário em inglês,
 * página por página (en.wiktionary.org/wiki/<palavra>), para a confirmação de cada forma específica
 * citada (plural de “טאָג”, “נאַכט”, “יאָר”, “פֿיש”, “האַנט”; o próprio artigo “דעם” como acusativo/
 * dativo de “דער”/“דאָס”; e o comparativo/superlativo de “אַלט”, “גרויס” e “קליין” — a Wikipédia não
 * cobre comparativo/superlativo, mas cada uma dessas três palavras lista a sua própria forma no
 * Wikcionário).
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
  {
    id: 'yi-g5',
    level: 'A2.1',
    title: 'O plural dos substantivos: cinco padrões, nenhuma regra única',
    emoji: '👪',
    summary: 'O iídiche não tem um sufixo de plural único como o “-s” do português: cada substantivo tem o seu próprio padrão, e é preciso aprendê-lo junto com a palavra.',
    sections: [
      {
        text:
          'Alguns substantivos não mudam no plural; outros só trocam a vogal; outros acrescentam “ן” (depois de consoante) ou “ס” (depois de vogal); e um grupo irregular acrescenta “ער” junto com a troca de vogal. Substantivos de origem hebraica podem até usar os plurais do próprio hebraico, como “ים”.',
        table: {
          head: ['Padrão', 'Singular', 'Plural'],
          rows: [
            ['sem mudança', 'פֿיש (fish, peixe)', 'פֿיש (fish)'],
            ['só troca a vogal', 'האַנט (hant, mão)', 'הענט (hent)'],
            ['só troca a vogal', 'טאָג (tog, dia)', 'טעג (teg)'],
            ['só troca a vogal', 'נאַכט (nakht, noite)', 'נעכט (nekht)'],
            ['consoante final + “ן”', 'יאָר (yor, ano)', 'יאָרן (yorn)'],
            ['troca de vogal + “ער”', 'קינד (kind, criança)', 'קינדער (kinder)'],
          ],
        },
        examples: [
          ['די קינדער זענען גוט.', 'As crianças são boas.'],
          ['די הענט זענען גרויס.', 'As mãos são grandes.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que existe um sufixo de plural único, como o “-s” do português: o iídiche tem pelo menos cinco padrões diferentes — cada substantivo precisa ser aprendido com o seu próprio plural.',
      'Tentar aplicar o padrão germânico “-ער” (com troca de vogal) em toda palavra: “פֿיש” (peixe), por exemplo, não muda nada no plural.',
    ],
    quiz: [
      { question: 'Qual é o plural de “טאָג” (dia)?', options: ['טעג', 'טאָגן', 'טאָגער'], answer: 'טעג', explanation: '“טאָג” troca só a vogal no plural: טאָג → טעג (tog → teg), sem sufixo nenhum.' },
      { question: 'Qual é o plural de “פֿיש” (peixe)?', options: ['פֿיש', 'פֿישן', 'פֿישער'], answer: 'פֿיש', explanation: 'Alguns substantivos do iídiche não mudam nada no plural, como “פֿיש”.' },
    ],
  },
  {
    id: 'yi-g6',
    level: 'A2.1',
    title: 'O caso acusativo: דעם depois do verbo',
    emoji: '🎯',
    summary: 'Como objeto direto de um verbo, o artigo masculino “דער” troca para “דעם” — o feminino “די” e o neutro “דאָס” não mudam.',
    sections: [
      {
        text:
          'O iídiche tem um resto do sistema de casos do alemão: o artigo definido muda de forma conforme a função na frase. No caso acusativo (o objeto direto do verbo), só o artigo masculino muda, de “דער” para “דעם” — o feminino e o neutro continuam iguais aos do nominativo.',
        table: {
          head: ['Caso', 'Artigo masculino', 'Exemplo'],
          rows: [
            ['nominativo (sujeito)', 'דער', 'דער ווינט איז גרויס. (O vento está forte.)'],
            ['acusativo (objeto direto)', 'דעם', 'איך הער דעם ווינט. (Eu ouço o vento.)'],
          ],
        },
        examples: [
          ['איך זע דעם שניי.', 'Eu vejo a neve.'],
          ['איך הער דעם ווינט.', 'Eu ouço o vento.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “דער” também para o objeto direto: só o sujeito leva “דער” — o objeto direto de um substantivo masculino leva “דעם”.',
      'Achar que “דעם” troca os substantivos femininos ou neutros também: eles continuam com “די” e “דאָס” no acusativo; só o masculino muda de artigo.',
    ],
    quiz: [
      { question: 'Qual artigo completa “איך הער ___ ווינט” (eu ouço o vento)?', options: ['דעם', 'דער', 'די'], answer: 'דעם', explanation: '“ווינט” é masculino, e como objeto direto do verbo “הערן”, leva o artigo acusativo “דעם”.' },
      { question: '“דעם” é a forma acusativa de qual artigo?', options: ['דער (masculino)', 'די (feminino)', 'דאָס (neutro)'], answer: 'דער (masculino)', explanation: '“דעם” substitui “דער” só no caso acusativo (e também no dativo) — o feminino e o neutro não mudam no acusativo.' },
    ],
  },
  {
    id: 'yi-g7',
    level: 'A2.2',
    title: 'Comparativo e superlativo: -ער e -סט',
    emoji: '📐',
    summary: 'Para comparar, o iídiche acrescenta “-ער” ao adjetivo; para o superlativo, “-סט” — quase sempre com uma troca de vogal.',
    sections: [
      {
        text:
          'Como no alemão, o comparativo do iídiche não usa uma palavra separada (como o “mais” do português): o próprio adjetivo ganha o sufixo “-ער”, e o superlativo ganha “-סט”. Nos três adjetivos abaixo, a vogal também muda.',
        table: {
          head: ['Positivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['אַלט (alt, velho)', 'עלטער (elter)', 'עלטסט (eltst)'],
            ['גרויס (groys, grande)', 'גרעסער (greser)', 'גרעסט (grest)'],
            ['קליין (kleyn, pequeno)', 'קלענער (klener)', 'קלענסט (klenst)'],
          ],
        },
        examples: [
          ['דער בוים איז גרעסער ווי דער הונט.', 'A árvore é maior do que o cachorro.'],
          ['דער טאַטע איז עלטער ווי איך.', 'O pai é mais velho do que eu.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o comparativo é só “mais + adjetivo”, como em português: o iídiche muda a própria palavra, com o sufixo “-ער” — e, nestes três exemplos, também a vogal (אַ→ע, וי→ע, יי→ע).',
      'Esquecer “ווי” para dizer “do que”: é “גרעסער ווי” (maior do que), nunca só “גרעסער” sozinho na comparação.',
    ],
    quiz: [
      { question: 'Qual é o comparativo de “אַלט” (velho)?', options: ['עלטער', 'אַלטער', 'עלטסט'], answer: 'עלטער', explanation: '“אַלט” troca a vogal e ganha “-ער” no comparativo: עלטער (elter).' },
      { question: 'O que “ווי” significa numa comparação como “גרעסער ווי”?', options: ['do que', 'e', 'ou'], answer: 'do que', explanation: '“ווי” depois de um comparativo funciona como “do que” em português: “גרעסער ווי” é “maior do que”.' },
    ],
  },
];
