import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do curmanji: A1.1 e A1.2 (pesquisados em 02/10/2026) e A2.1/A2.2 (pesquisados
 * em 09/10/2026, só via Wiktionary em curmanji/kmr e Wikipédia, conferidos palavra por palavra).
 *
 * Fontes do A1: https://en.wikipedia.org/wiki/Kurdish_alphabets (alfabeto Hawar),
 * https://en.wikipedia.org/wiki/Izafet e https://en.wikipedia.org/wiki/Kurdish_grammar (ezafe/caso
 * construto), https://en.wiktionary.org/wiki/ziman e https://en.wiktionary.org/wiki/kitêb (tabelas de
 * declinação confirmando os sufixos -î/-ê/-an e -ê/-a/-ên), https://en.wiktionary.org/wiki/ew (ew / wî /
 * wê / wan), https://en.wikipedia.org/wiki/Subject%E2%80%93object%E2%80%93verb_word_order (ordem SOV,
 * com o exemplo curmanji “Ez xwarin dixwim”).
 *
 * Fontes do A2: https://www.omniglot.com/language/numbers/kurdish.htm (números 11–100, cruzado com
 * https://en.wikivoyage.org/wiki/Kurdish_phrasebook e languagesandnumbers.com/how-to-count-in-northern-
 * kurdish); https://en.wiktionary.org/wiki/çûn e https://en.wiktionary.org/wiki/bûn (tabela completa do
 * passado: çûm/çûyî/çû/çûn/çûn/çûn e bûm/bûyî/bû/bûn/bûn/bûn) e https://en.wikipedia.org/wiki/
 * Kurdish_grammar (passado de «hatin»: hatim, hatî, hat, hatin); https://en.wiktionary.org/wiki/kirin
 * (passado ergativo: min/te/wî/wê/me/we/wan + kir, sem mudar com a pessoa do sujeito);
 * https://en.wiktionary.org/wiki/dê e https://en.wiktionary.org/wiki/bikim («dê» = partícula de futuro,
 * «bikim» rotulado no próprio Wiktionary como “first-person singular future of kirin”, com o exemplo
 * “Li wir bimîne, ez dê werim te bigirim”); https://en.wiktionary.org/wiki/biçûk,
 * https://en.wiktionary.org/wiki/baş, https://en.wiktionary.org/wiki/sor, https://en.wiktionary.org/
 * wiki/xweş, https://en.wiktionary.org/wiki/germ, https://en.wiktionary.org/wiki/sar e
 * https://en.wiktionary.org/wiki/mezin (comparativo/superlativo -tir/-tirîn e herî, com o irregular
 * “meztir” de “mezin” confirmado na nota de uso do próprio Wiktionary).
 */
export const GRAMMAR_KMR: GrammarTopic[] = [
  {
    id: 'kmr-g1',
    level: 'A1.1',
    title: 'O alfabeto Hawar: ê, î, û, ç, ş',
    emoji: '🔤',
    summary: 'O curmanji se escreve com o alfabeto latino Hawar, criado em 1932, com cinco letras extras para sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'O intelectual curdo Celadet Alî Bedirxan lançou esse alfabeto em 1932: 26 letras do latino comum mais ê, î, û, ç e ş. Três consoantes do alfabeto — q, w e x — nem faziam parte do alfabeto turco oficial: usá-las chegou a dar processo na Turquia em 2000 e 2003, até o governo turco reconhecê-las, em 2013.',
        table: {
          head: ['Letra', 'Som', 'Palavra'],
          rows: [
            ['ê', 'vogal longa, um “ê” bem fechado', 'navê (nome de, com o sufixo -ê)'],
            ['î', 'vogal longa, um “i” esticado', 'masî (peixe), xanî (casa)'],
            ['û', 'vogal longa, um “u” esticado', 'kûçik (cachorro), biçûk (pequeno)'],
            ['ç', 'sempre “tch”, como em “tchau”', 'kûçik (cachorro), biçûk (pequeno)'],
            ['ş', 'sempre “x” de “xícara”, nunca “s”', 'baş (bom), rojbaş (bom dia)'],
          ],
        },
        examples: [
          ['Silav! Tu çawa yî?', 'Oi! Como você está?'],
          ['Rojbaş!', 'Bom dia!'],
        ],
      },
    ],
    pitfalls: [
      'Ler “ş” como “s”: muda o sentido da palavra — “baş” (bom) não é “bas”.',
      'Esquecer que q, w e x existem no alfabeto Hawar, mesmo tendo sido proibidas por décadas na Turquia.',
    ],
    quiz: [
      { question: 'Como soa a letra “ş” no curmanji?', options: ['Como “x” de xícara', 'Como “s” de sapo', 'Como “ch” alemão'], answer: 'Como “x” de xícara', explanation: 'O “ş” do alfabeto Hawar sempre soa como o “x” português, nunca como “s”.' },
      { question: 'Quem criou o alfabeto Hawar, e quando?', options: ['Celadet Bedirxan, em 1932', 'Atatürk, em 1928', 'A ONU, em 1991'], answer: 'Celadet Bedirxan, em 1932', explanation: 'O intelectual curdo Celadet Alî Bedirxan lançou o alfabeto latino Hawar em 1932.' },
    ],
  },
  {
    id: 'kmr-g2',
    level: 'A1.2',
    title: 'Navê min, dayika min: o ezafe',
    emoji: '🔗',
    summary: 'Para ligar um substantivo a “meu” ou a um adjetivo, o curmanji gruda um sufixo que muda com o gênero: essa construção se chama ezafe, ou caso construto.',
    sections: [
      {
        text: 'O nome vem do persa “ezafe” (acréscimo), mas no curmanji o sufixo muda conforme o gênero e o número — diferente do persa moderno, onde é quase sempre “-e”/“-ye” para tudo. Substantivos masculinos levam -ê, femininos levam -a, e o plural leva -ên.',
        table: {
          head: ['Gênero', 'Sufixo', 'Exemplo'],
          rows: [
            ['masculino', '-ê', 'nav (nome) → navê min, “meu nome”'],
            ['masculino', '-ê', 'bav (pai) → bavê min, “meu pai”'],
            ['feminino', '-a', 'dayik (mãe) → dayika min, “minha mãe”'],
          ],
        },
        examples: [
          ['Navê min Linu e.', 'O meu nome é Linu.'],
          ['Dayika min baş e.', 'A minha mãe está bem.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o mesmo sufixo para os dois gêneros: “dayikê” soa errado — o certo é “dayika”, com -a, porque “dayik” é feminino.',
      'Confundir com o ezafe do persa: no persa moderno o sufixo não muda; no curmanji ele concorda com o gênero e o número da palavra.',
    ],
    quiz: [
      { question: 'Como se diz “meu pai”, a partir de “bav” (pai, masculino)?', options: ['Bavê min', 'Bava min', 'Bavan min'], answer: 'Bavê min', explanation: 'Substantivos masculinos levam o sufixo -ê antes do possessivo: bav → bavê.' },
      { question: 'Como se diz “minha mãe”, a partir de “dayik” (mãe, feminino)?', options: ['Dayika min', 'Dayikê min', 'Dayikan min'], answer: 'Dayika min', explanation: 'Substantivos femininos levam o sufixo -a: dayik → dayika.' },
    ],
  },
  {
    id: 'kmr-g3',
    level: 'A1.2',
    title: 'Masculino, feminino e o caso oblíquo',
    emoji: '🧩',
    summary: 'O curmanji distingue substantivos masculinos e femininos e muda a forma de pronomes e substantivos conforme a função na frase — uma marca que o sorani (curdo central) quase perdeu.',
    sections: [
      {
        text: 'Além do caso direto (usado no sujeito), o curmanji tem um caso oblíquo (usado no objeto e depois de preposições), com sufixos diferentes para masculino, feminino e plural. As tabelas de declinação de “ziman” (língua, masculino) e “kitêb” (livro, feminino) no Wiktionary mostram o padrão:',
        table: {
          head: ['Caso', 'Masc. sg. (ziman)', 'Fem. sg. (kitêb)', 'Plural'],
          rows: [
            ['Direto (sujeito)', 'ziman', 'kitêb', 'ziman / kitêb'],
            ['Oblíquo (objeto)', 'zimanî', 'kitêbê', 'zimanan / kitêban'],
            ['Construto (ezafe)', 'zimanê', 'kitêba', 'zimanên / kitêbên'],
          ],
        },
        examples: [
          ['Ew baş e.', 'Ele/ela está bem. (caso direto)'],
          ['Navê min Linu e.', 'O meu nome é Linu. (construto, -ê)'],
        ],
      },
      {
        heading: 'O pronome “ew” também muda de forma',
        text: 'O pronome de 3ª pessoa “ew” (ele/ela/eles/elas) é igual no caso direto, mas no caso oblíquo vira “wî” (masculino singular), “wê” (feminino singular) ou “wan” (plural).',
        table: {
          head: ['Caso', 'Masculino', 'Feminino', 'Plural'],
          rows: [
            ['Direto', 'ew', 'ew', 'ew'],
            ['Oblíquo', 'wî', 'wê', 'wan'],
          ],
        },
      },
    ],
    pitfalls: [
      'Achar que “ew” só serve para “ele”: a mesma palavra cobre “ela” e, no plural, “eles/elas” — só o caso oblíquo diferencia, com “wî”, “wê” e “wan”.',
      'Esquecer que o sorani perdeu quase toda essa distinção de gênero e caso: é uma das diferenças mais citadas entre as duas variedades do curdo.',
    ],
    quiz: [
      { question: 'Qual é o plural de “ew” (ele/ela) no caso direto?', options: ['A mesma palavra, “ew”', '“Ewan”, sempre', '“Wan”'], answer: 'A mesma palavra, “ew”', explanation: '“Ew” cobre o singular (ele/ela) e o plural (eles/elas) no caso direto; só no caso oblíquo ele vira “wî”, “wê” ou “wan”.' },
      { question: 'O que o sorani (curdo central) fez com o gênero gramatical que o curmanji mantém?', options: ['Perdeu quase todo', 'Manteve igual', 'Criou um terceiro gênero'], answer: 'Perdeu quase todo', explanation: 'O sorani perdeu quase toda a distinção de gênero gramatical que o curmanji conserva — uma das diferenças mais citadas entre as duas variedades.' },
    ],
  },
  {
    id: 'kmr-g4',
    level: 'A1.2',
    title: 'O verbo no final: a ordem SOV',
    emoji: '➡️',
    summary: 'Como a maioria das línguas iranianas, o curmanji põe o verbo no fim da frase: sujeito, depois objeto, depois verbo (SOV).',
    sections: [
      {
        text: 'Em “Ez xwarin dixwim” (eu como comida), o sujeito “ez” vem primeiro, o objeto “xwarin” (comida) vem no meio, e o verbo “dixwim” fecha a frase — diferente do português, que fala “eu como comida” com o verbo no meio (SVO). A mesma ordem aparece em frases simples como “Ez nan dixwim” (eu como pão) e em perguntas como “Tu çi dixwazî?” (o quê você quer?), onde o verbo “dixwazî” também fica por último.',
        table: {
          head: ['Sujeito', 'Objeto', 'Verbo'],
          rows: [
            ['Ez (eu)', 'nan (pão)', 'dixwim (como)'],
            ['Ez (eu)', 'av (água)', 'vedixwim (bebo)'],
            ['Tu (tu)', 'çi (o quê)', 'dixwazî (queres)'],
          ],
        },
        examples: [
          ['Ez nan dixwim.', 'Eu como pão.'],
          ['Tu çi dixwazî?', 'O que você quer?'],
        ],
      },
    ],
    pitfalls: [
      'Tentar traduzir palavra por palavra na ordem do português: em curmanji o verbo quase sempre fica por último.',
      'Esquecer que isso vale também nas perguntas: “Tu çi dixwazî?” não é “tu quer o quê”, mas sim “tu o-quê queres”.',
    ],
    quiz: [
      { question: 'Qual é a ordem básica das frases em curmanji?', options: ['Sujeito – Objeto – Verbo', 'Sujeito – Verbo – Objeto', 'Verbo – Sujeito – Objeto'], answer: 'Sujeito – Objeto – Verbo', explanation: 'Como a maioria das línguas iranianas, o curmanji é uma língua SOV: o verbo fica no final da frase.' },
      { question: 'Em “Tu çi dixwazî?”, onde fica o verbo “dixwazî”?', options: ['No final da frase', 'No início', 'Não há verbo'], answer: 'No final da frase', explanation: '“Dixwazî” (queres) fecha a pergunta, depois do sujeito “tu” e do objeto “çi”.' },
    ],
  },
  {
    id: 'kmr-g5',
    level: 'A2.1',
    title: 'Os números de 11 a 100',
    emoji: '🔢',
    summary: 'De 11 a 19 o número gruda no “deh” (dez); de 20 a 90 as dezenas têm nome próprio; 100 é “sed”.',
    sections: [
      {
        text: 'De 11 a 19, o curmanji gruda a unidade (já conhecida: yek, du, sê, çar, pênc…) direto antes de “deh” (dez), sem espaço: yanzdeh (11) não é “yek-deh” exatamente, mas segue a mesma ideia de “unidade + deh” que aparece clara em sêzdeh (13, sê+zdeh) e çardeh (14, çar+deh). Da dezena 20 em diante, cada dezena tem uma palavra própria (bîst, sî, çil…), diferente do padrão de 11–19.',
        table: {
          head: ['Número', 'Curmanji'],
          rows: [
            ['11', 'yanzdeh'],
            ['12', 'diwanzdeh'],
            ['13', 'sêzdeh'],
            ['20', 'bîst'],
            ['30', 'sî'],
            ['100', 'sed'],
          ],
        },
        examples: [
          ['Yanzdeh kitêb.', 'Onze livros.'],
          ['Sed stêr.', 'Cem estrelas.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar formar as dezenas (20, 30, 40…) colando “deh” como nos números de 11 a 19: elas têm palavras próprias (bîst, sî, çil…), não “duwîdeh” ou parecido.',
      'Misturar a grafia: fontes diferentes escrevem “yanzdeh”/“yazdeh”, “diwanzdeh”/“dwanzdeh”; a diferença é só de transliteração, o som é o mesmo.',
    ],
    quiz: [
      { question: 'Como se diz “onze” em curmanji?', options: ['Yanzdeh', 'Yekdeh', 'Dehyek'], answer: 'Yanzdeh', explanation: '“Yanzdeh” (11) gruda a unidade antes de “deh” (dez).' },
      { question: 'Qual é a palavra para “cem”?', options: ['Sed', 'Dehdeh', 'Sedeh'], answer: 'Sed', explanation: '“Sed” (100) é uma palavra própria, como as dezenas a partir de 20.' },
    ],
  },
  {
    id: 'kmr-g6',
    level: 'A2.1',
    title: 'O passado dos verbos intransitivos: çûm, bûm',
    emoji: '⏪',
    summary: 'Nos verbos sem objeto (ir, ser/estar, vir), o sujeito fica no caso direto (ez, tu, ew…) e o verbo muda de forma para cada pessoa, como no presente.',
    sections: [
      {
        text: 'O passado de “çûn” (ir) e de “bûn” (ser/estar) segue exatamente o mesmo padrão, porque as duas raízes terminam em “û”: tira-se o “-n” do infinitivo e grudam-se as terminações de pessoa. “Hatin” (vir) termina em consoante e usa “-im/-î/-∅/-in/-in/-in” sobre a raiz “hat-”.',
        table: {
          head: ['Pessoa', 'çûn (ir)', 'bûn (ser/estar)', 'hatin (vir)'],
          rows: [
            ['ez', 'çûm', 'bûm', 'hatim'],
            ['tu', 'çûyî', 'bûyî', 'hatî'],
            ['ew', 'çû', 'bû', 'hat'],
            ['em / hûn / ew (pl.)', 'çûn', 'bûn', 'hatin'],
          ],
        },
        examples: [
          ['Ez çûm.', 'Eu fui / eu me fui.'],
          ['Duh baran bû.', 'Ontem choveu (lit. “ontem chuva foi”).'],
        ],
      },
    ],
    pitfalls: [
      'Usar o “di-” do presente no passado: “diçûm” está errado — no passado não tem esse prefixo, é só “çûm”.',
      'Esquecer que “çûn” e “bûn” compartilham a mesma terminação por terminarem na mesma vogal “û” — quem decora uma decora as duas.',
    ],
    quiz: [
      { question: 'Como se diz “eu fui” em curmanji?', options: ['Ez çûm', 'Ez diçim', 'Ez çû'], answer: 'Ez çûm', explanation: '“Çûm” é a forma de 1ª pessoa do passado de “çûn” — sem o prefixo “di-” do presente.' },
      { question: 'Qual é o passado de “bûn” (ser/estar) na 3ª pessoa (ew)?', options: ['Bû', 'Bûm', 'Bûn'], answer: 'Bû', explanation: '“Ew bû” (ele/ela foi/esteve) — “bûn” segue o mesmo padrão de “çûn”, por terminar também em “û”.' },
    ],
  },
  {
    id: 'kmr-g7',
    level: 'A2.2',
    title: 'O passado ergativo: min kir',
    emoji: '🔄',
    summary: 'Nos verbos COM objeto (fazer, comprar, ver…), o passado muda de construção: o sujeito vai para o caso oblíquo (min, te, wî/wê, me, we, wan) e o verbo deixa de mudar por pessoa.',
    sections: [
      {
        text: 'É a construção chamada “ergativa”: diferente do passado de “çûn”/“bûn” (seção anterior), aqui quem faz a ação não fica no caso direto (ez, tu, ew), e sim no caso oblíquo (min, te, wî/wê, me, we, wan) — o mesmo caso já usado em “navê min” (meu nome) e “dayika te” (sua mãe). O verbo (“kir”, de “kirin”, fazer) fica igual para todo mundo.',
        table: {
          head: ['Sujeito (oblíquo)', 'kirin (fazer)'],
          rows: [
            ['min (eu)', 'kir'],
            ['te (tu)', 'kir'],
            ['wî / wê (ele/ela)', 'kir'],
            ['me (nós)', 'kir'],
            ['we (vocês)', 'kir'],
            ['wan (eles/elas)', 'kir'],
          ],
        },
        examples: [
          ['Min xebat kir.', 'Eu trabalhei (lit. “eu[obl.] trabalho fiz”).'],
          ['Te duh çi kir?', 'O que você fez ontem?'],
        ],
      },
    ],
    pitfalls: [
      'Começar a frase com “ez” em vez de “min”: no passado de um verbo com objeto o sujeito tem que ir para o caso oblíquo — “ez kir” está errado, o certo é “min kir”.',
      'Esperar que o verbo mude de forma por pessoa, como em “çûm/çûyî/çû”: no passado ergativo o verbo (“kir”) fica igual para qualquer sujeito.',
    ],
    quiz: [
      { question: 'Como se diz “eu fiz” (com objeto), em vez de “ez kir”?', options: ['Min kir', 'Ez kirim', 'Min kirim'], answer: 'Min kir', explanation: 'No passado ergativo o sujeito vai para o caso oblíquo (“min”), e o verbo (“kir”) não muda por pessoa.' },
      { question: 'No passado ergativo, como fica o verbo “kirin” para “tu” (te)?', options: ['Kir', 'Kirî', 'Dikî'], answer: 'Kir', explanation: '“Te kir” (tu fizeste) — a forma “kir” não muda, seja “min”, “te”, “wî/wê”, “me”, “we” ou “wan”.' },
    ],
  },
  {
    id: 'kmr-g8',
    level: 'A2.2',
    title: 'O futuro com “dê”: ez dê bikim',
    emoji: '⏩',
    summary: 'O futuro se forma com a partícula “dê” (ou “wê”, mais ao norte) antes do verbo, que troca o prefixo do presente “di-” por “bi-”.',
    sections: [
      {
        text: 'O Wiktionary rotula “bikim” diretamente como “first-person singular future of kirin” — a mesma troca de “di-” por “bi-” também aparece em “dibînim” (vejo) → “bibînim” (verei), de “dîtin”. “Dê” é a partícula que marca esse futuro; em registro informal costuma encurtar para só “-ê-” grudado no pronome (“ezê” = “ez” + “dê”).',
        table: {
          head: ['Presente (di-)', 'Futuro (dê + bi-)'],
          rows: [
            ['ez dikim (eu faço)', 'ez dê bikim (eu farei)'],
            ['ez dibînim (eu vejo)', 'ez dê bibînim (eu verei)'],
          ],
        },
        examples: [
          ['Li wir bimîne, ez dê werim te bigirim.', 'Espera lá, eu vou te buscar.'],
          ['Ez dê kitêbek bikirim.', 'Eu vou comprar um livro.'],
        ],
      },
    ],
    pitfalls: [
      'Deixar o prefixo “di-” do presente no verbo depois de “dê”: o futuro troca “di-” por “bi-” (“ez dê dikim” está errado, o certo é “ez dê bikim”).',
      'Estranhar a forma encurtada “ezê”: é só “ez” + “dê” grudados, comum na fala informal — a forma separada (“ez dê …”) está sempre certa.',
    ],
    quiz: [
      { question: 'Qual prefixo o verbo usa depois de “dê” (futuro)?', options: ['bi-', 'di-', 'ne-'], answer: 'bi-', explanation: 'O futuro troca o “di-” do presente por “bi-”: “dikim” (faço) → “dê bikim” (farei).' },
      { question: 'Como se diz “eu verei”, a partir de “dibînim” (eu vejo)?', options: ['Ez dê bibînim', 'Ez dê dibînim', 'Ez bibînim dê'], answer: 'Ez dê bibînim', explanation: '“Dê” vem antes do verbo, e o verbo troca “di-” por “bi-”: dibînim → dê bibînim.' },
    ],
  },
  {
    id: 'kmr-g9',
    level: 'A2.2',
    title: 'Comparativo e superlativo: -tir, -tirîn, herî',
    emoji: '📐',
    summary: 'A maioria dos adjetivos forma o comparativo com “-tir” e o superlativo com “-tirîn” ou com “herî” antes do adjetivo — mas “mezin” (grande) é irregular.',
    sections: [
      {
        text: 'O padrão regular (confirmado em vários adjetivos no Wiktionary) é grudar “-tir” para o comparativo e “-tirîn” para o superlativo, ou então usar “herî” (“o mais”) antes do adjetivo sem sufixo nenhum — as duas formas de superlativo convivem. “Mezin” (grande) é a excepção mais conhecida: o comparativo é “meztir”, nunca “mezintir”.',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['biçûk (pequeno)', 'biçûktir', 'biçûktirîn'],
            ['baş (bom)', 'baştir', 'herî baş'],
            ['sor (vermelho)', 'sortir', 'herî sor'],
            ['germ (quente)', 'germtir', 'germtirîn'],
            ['sar (frio)', 'sartir', 'sartirîn'],
            ['mezin (grande)', 'meztir (irregular!)', '—'],
          ],
        },
        examples: [
          ['Îro germtir e.', 'Hoje está mais quente.'],
          ['Ev kitêb herî baş e.', 'Este livro é o melhor.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “mezintir” em vez de “meztir”: o próprio Wiktionary avisa que “mezintir” aparece às vezes na mídia, mas quem fala curmanji como língua materna usa “meztir”.',
      'Esquecer que existem duas formas de superlativo (“-tirîn” e “herî” + adjetivo) — as duas estão certas, não é preciso escolher uma única.',
    ],
    quiz: [
      { question: 'Qual é o comparativo de “biçûk” (pequeno)?', options: ['Biçûktir', 'Biçûkê', 'Herî biçûk'], answer: 'Biçûktir', explanation: 'O sufixo regular de comparativo é “-tir”: biçûk → biçûktir.' },
      { question: 'Como é o comparativo de “mezin” (grande), de forma irregular?', options: ['Meztir', 'Mezintir', 'Mezintirîn'], answer: 'Meztir', explanation: '“Mezin” é irregular: o comparativo é “meztir”, não “mezintir” (que só aparece ocasionalmente na mídia, sem uso real entre falantes nativos).' },
    ],
  },
];
