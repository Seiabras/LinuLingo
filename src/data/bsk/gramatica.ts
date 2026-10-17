import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do burushaski, do A1.1 ao B1.4 (o teto do idioma). Fontes do A1: o
 * dicionário anotado de G. Starostin (cita Berger 1974/1998) e a Wikipédia em inglês ("Burushaski"),
 * reconferidas em 09/10/2026. Os exemplos de prefixo de pessoa (seção G1 e G4) e de classe nominal
 * (G2) vêm literalmente da Wikipédia, que por sua vez cita Berger/Lorimer para cada forma.
 *
 * A2 (G5 a G8, 16/10/2026): Noboru Yoshioka, “A Reference Grammar of Eastern Burushaski” (tese,
 * Tóquio, 2012, acesso aberto: tufs.repo.nii.ac.jp/records/1002), chamada Y12, e Sadaf Munshi e Piar
 * Karim, “A Grammatical Sketch of Hunza Burushaski” (UNT, 2012, archive.org), chamada MK. Tabelas e
 * frases conferidas na imagem de cada página. Letras trocadas para a grafia de Berger pela tabela de
 * notações de Y12 (p. xv): č → ć, čh → ćh, c → ċ, ch → ċh, š → ś, ŋ → ṅ, γ → ġ. As frases ficam como a
 * linha de pronúncia de Y12 (com os acentos e a divisão de palavras dela). Nenhuma frase foi montada.
 */
export const GRAMMAR_BSK: GrammarTopic[] = [
  {
    id: 'bsk-g1',
    level: 'A1.1',
    title: 'Pronomes livres × prefixos de posse',
    emoji: '🧩',
    // “je” (eu), “jáa” (meu; ergativo), “úne” (teu): Yoshioka (2012), tabelas 23 e 24, p. 79–80; Munshi e
    // Karim (2012), p. 49. Até 16/10/2026 o tópico ensinava “ja”, a forma de Yasin (Starostin, item 42).
    summary: 'Além dos pronomes livres (je, un, in…), o burushaski marca “de quem” um substantivo é com um PREFIXO preso à palavra — e alguns substantivos nunca aparecem sem esse prefixo.',
    sections: [
      {
        text: 'Pronomes como “je” (eu) e “un” (tu/você) existem como palavras soltas, e têm forma própria para “meu” e “teu”: “jáa” e “úne” (Yoshioka, tabela 24). Mas pra dizer “a mãe DELE” ou “a mãe DELA” o burushaski não usa um pronome separado: prende um prefixo de pessoa direto na palavra. A Wikipédia em inglês atesta a família inteira pra “mãe” (=mi, raiz presa): i-mi “a mãe dele”, mu-mi “a mãe dela”, u-mi “a mãe deles”. Esse mesmo conjunto de prefixos (i-, mu-, u-, entre outros) também marca a PESSOA DO OBJETO nos verbos — ver o tópico sobre os verbos, mais abaixo.',
        table: {
          head: ['Prefixo', 'Pessoa', 'Exemplo (com “=mi”, mãe)'],
          rows: [
            ['i-', 'dele (3ª pessoa, masculino)', 'i-mi — “a mãe dele”'],
            ['mu-', 'dela (3ª pessoa, feminino)', 'mu-mi — “a mãe dela”'],
            ['u-', 'deles/delas (3ª pessoa, plural)', 'u-mi — “a mãe deles”'],
          ],
        },
        examples: [
          ['Je.', 'Eu. (pronome livre)'],
          ['Jáa aek Linu bila.', 'Meu nome é Linu. (“jáa”, meu, é a forma de “je” para o dono)'],
          ['Ími.', 'Mãe (citada já com o prefixo que a fonte atesta; a forma sem prefixo nenhum não aparece nas fontes consultadas).'],
        ],
      },
    ],
    pitfalls: ['Dizer “ja” para “eu”: em Hunza e Nager “eu” é “je”; “jáa” é “meu” (e também “eu” quando é quem faz a ação), e “ja” é a forma do dialeto de Yasin.', 'Achar que todo substantivo do burushaski pode ficar “sozinho”, sem prefixo: vários termos de parentesco são de posse obrigatória — algo que o português não tem (dizemos só “mãe”, sem precisar encaixar “de quem” na própria palavra).'],
    quiz: [
      { question: 'Como o burushaski diz “a mãe dele”?', options: ['i-mi', 'u-mi', 'mu-mi'], answer: 'i-mi', explanation: 'O prefixo “i-” marca a 3ª pessoa masculina: “i-mi”, a mãe dele.' },
      { question: 'Pronomes como “je” (eu) e os prefixos de posse (i-, mu-, u-) são a mesma coisa?', options: ['Não, são dois sistemas diferentes', 'Sim, são idênticos', 'Só no plural'], answer: 'Não, são dois sistemas diferentes', explanation: 'Pronomes livres (je, un, in…) e prefixos presos (i-, mu-, u-…) marcam pessoa de jeitos diferentes, e um substantivo de posse obrigatória só usa o segundo.' },
    ],
  },
  {
    id: 'bsk-g2',
    level: 'A1.1',
    title: 'Classes nominais: mais que “gênero”',
    emoji: '🗂️',
    summary: 'O burushaski divide os substantivos em quatro ou cinco classes gramaticais (hm, hf, x, y, z) — e a MESMA raiz pode mudar de classe conforme o sentido.',
    sections: [
      {
        text: 'Duas classes seguem o gênero natural de pessoas (hm, humano-masculino; hf, humano-feminino). As outras — x, y e z, na tradição de Lorimer e Berger — organizam o resto do vocabulário por critérios que não têm equivalente direto em português: x costuma ser objetos contáveis, y inclui muita coisa em massa (líquidos, grãos) ou em grupo, e z fica com conceitos abstratos. O exemplo clássico, citado pela Wikipédia: a palavra pra “sal” muda de classe conforme a FORMA do sal — sal em pedaços é uma classe, sal em pó é outra, com a mesma raiz.',
        examples: [
          ['Matúm.', 'Preto. (adjetivo; concorda em classe com o substantivo, mas este pacote ainda não cobre a concordância completa)'],
        ],
      },
    ],
    pitfalls: ['Tentar traduzir as classes hm/hf/x/y/z como “um gênero masculino e um feminino”, à moda do português: só duas delas seguem o sexo das pessoas — as outras organizam objetos, massas e abstrações por critérios próprios do burushaski.'],
    quiz: [
      { question: 'As classes x, y e z do burushaski correspondem a quê?', options: ['Objetos, massas/grupos e abstrações — sem equivalente direto no português', 'Masculino, feminino e neutro', 'Passado, presente e futuro'], answer: 'Objetos, massas/grupos e abstrações — sem equivalente direto no português', explanation: 'Só as classes hm e hf seguem o sexo das pessoas; x, y e z organizam o resto do vocabulário por outros critérios.' },
      { question: 'Uma mesma raiz de palavra pode pertencer a mais de uma classe?', options: ['Sim — “sal em pedaços” e “sal em pó” são classes diferentes', 'Não, cada raiz tem uma classe fixa', 'Só nos substantivos de parentesco'], answer: 'Sim — “sal em pedaços” e “sal em pó” são classes diferentes', explanation: 'A Wikipédia cita exatamente esse exemplo: a forma física do sal decide a classe gramatical.' },
    ],
  },
  {
    id: 'bsk-g3',
    level: 'A1.2',
    title: 'Números: base 20 a partir do 20',
    // Formas de Berger conferidas no vocabulário de Yoshioka (2012), Ap. II (16/10/2026): 1 a 10 nos
    // comentários de vocabulario; áltar (20) p. CLXXX, B.16; altó-áltar (40) p. CLXXX, B.16; iskí-áltar
    // (60) p. CCXXXI, B.215; wálti-áltar (80) p. CCLXXXVIII, B.464; turmahík (11) p. CCLXXXI, B.433
    // (turma-hín, -hík). Antes estavam na grafia do Wikivoyage (“altar”, “iski-altar”).
    emoji: '🔢',
    summary: 'De 1 a 10 os números do burushaski são palavras próprias — mas de 20 em diante o sistema é vigesimal (base 20), como o francês “quatre-vingts” (80, “quatro-vintes”).',
    sections: [
      {
        text: 'De 1 a 10 (han, altó, uskó, wálto, ċhundó, miśíndo, thaló, altámbo, hunćó, tóorumo), cada número tem uma palavra própria. De 11 a 19, junta-se “turma-” ao número (turmahík, 11). Mas 20 vira uma palavra nova, “áltar” — e dali em diante o sistema conta em MÚLTIPLOS DE 20: 40 é “altó-áltar” (dois-vintes), 60 é “iskí-áltar” (três-vintes), 80 é “wálti-áltar” (quatro-vintes). O francês faz exatamente a mesma coisa com “quatre-vingts” (80, literalmente “quatro-vintes”) — um sistema vigesimal escondido dentro de uma língua que, fora isso, conta em base 10.',
        table: {
          head: ['Número', 'Burushaski', 'Por quê'],
          rows: [
            ['20', 'áltar', 'palavra própria, o novo “degrau”'],
            ['40', 'altó-áltar', '“dois-vintes” (2 × 20)'],
            ['60', 'iskí-áltar', '“três-vintes” (3 × 20)'],
          ],
        },
        examples: [
          ['Han, altó, uskó, wálto.', 'Um, dois, três, quatro.'],
        ],
      },
    ],
    pitfalls: ['Esperar que o sistema de base 10 continue depois do 20: a partir daí, os números se constroem em torno de múltiplos de 20, não de 10.'],
    quiz: [
      { question: 'A partir de que número o burushaski passa a contar em base 20?', options: ['20', '10', '100'], answer: '20', explanation: '“Áltar” (20) é o novo “degrau”: 40, 60, 80 se constroem como múltiplos dele.' },
      { question: 'Que outra língua europeia tem um resquício do mesmo sistema vigesimal?', options: ['O francês, em “quatre-vingts” (80)', 'O alemão', 'O italiano'], answer: 'O francês, em “quatre-vingts” (80)', explanation: '“Quatre-vingts” é literalmente “quatro-vintes” — o mesmo princípio de contar em múltiplos de 20.' },
    ],
  },
  {
    id: 'bsk-g4',
    level: 'A1.2',
    title: 'O verbo marca a pessoa do OBJETO',
    emoji: '🔗',
    summary: 'Muitos verbos do burushaski levam, presos antes da raiz, um prefixo que marca a pessoa do OBJETO da frase — não (só) a do sujeito, como o português faz com as terminações do verbo.',
    sections: [
      {
        text: 'A Wikipédia em inglês atesta a conjugação do verbo “phus-” (atar) com o mesmo conjunto de prefixos já visto nos substantivos de posse obrigatória (i-, mu-, u-, mi-, gu-): “i-phus-i-m-a” é “eu ato ele”, “mu-phus-i-m-i” é “ele/ela ata ela”. O prefixo muda com quem é AMARRADO (o objeto), não com quem amarra (o sujeito) — um sistema bem diferente do português, que marca pessoa e número do SUJEITO na terminação do verbo (“eu ato”, “ele ata”).',
        table: {
          head: ['Prefixo no verbo', 'Objeto marcado', 'Exemplo'],
          rows: [
            ['i-', 'ele (objeto)', 'i-phus-i-m-a — “eu ato ele”'],
            ['mu-', 'ela (objeto)', 'mu-phus-i-m-i — “ele/ela ata ela”'],
            ['gu-', 'você (objeto)', 'gu-phus-i-m-a — “eu ato você”'],
          ],
        },
        examples: [
          ['Barenas.', 'Ver. (forma citada sem o prefixo de objeto, que varia conforme quem é visto)'],
        ],
      },
    ],
    pitfalls: ['Procurar, no verbo burushaski, uma terminação que marque o SUJEITO (como “-o” em “ato” ou “-a” em “ata”, no português): o prefixo mais importante do verbo marca o OBJETO, não o sujeito.'],
    quiz: [
      { question: 'O prefixo “i-”/“mu-”/“gu-” no verbo “phus-” (atar) marca a pessoa de quem?', options: ['Do objeto (quem é amarrado)', 'Do sujeito (quem amarra)', 'Do tempo verbal'], answer: 'Do objeto (quem é amarrado)', explanation: '“i-phus-i-m-a” (eu ato ELE) muda o prefixo conforme quem é o objeto, não conforme quem é o sujeito.' },
      { question: 'Esse mesmo conjunto de prefixos (i-, mu-, u-…) também aparece em outro lugar da língua. Onde?', options: ['Nos substantivos de posse obrigatória, como “=mi” (mãe)', 'Só nos números', 'Só nas cores'], answer: 'Nos substantivos de posse obrigatória, como “=mi” (mãe)', explanation: 'O mesmo prefixo “i-” que marca “dele” em “i-mi” (a mãe dele) marca o objeto “ele” em “i-phus-i-m-a” (eu ato ele).' },
    ],
  },
  // ── A2.1 ──────────────────────────────────────────────────────────────────────────────────────
  {
    id: 'bsk-g5',
    level: 'A2.1',
    title: 'Os casos: de quem, para quem, de onde',
    emoji: '🧭',
    // Y12, p. 49 (tabela 17), p. 52–53 (ergativo), p. 56 (dativo “-ar” em Hunza, “-ar(e)” em Nager; o
    // nome da classe HF pega “-mu” antes do caso), p. 177 (220a, 220b).
    summary: 'O nome ganha um final conforme o papel na frase: quem faz a ação (-e), de quem é (-e, e -mo para mulher), para quem (-ar), de onde (-ċum).',
    sections: [
      {
        text: 'Yoshioka conta seis casos simples e doze compostos. Os mais usados estão na tabela. O caso absolutivo não tem final: é a forma do dicionário, usada para quem só “é” ou “está” e para o objeto. O ergativo (-e) marca quem faz uma ação sobre outra coisa, como “quem comeu o pão”. Repare em “gus” (mulher): os nomes femininos ganham “-mu” antes do caso, e o genitivo vira “gúsmo”.',
        table: {
          head: ['Caso', 'hir (homem)', 'gus (mulher)', 'huk (cão)', 'dan (pedra)'],
          rows: [
            ['absolutivo (sem final)', 'hir', 'gus', 'huk', 'dan'],
            ['ergativo, quem faz (-e)', 'híe', 'gúse', 'húke', 'dáne'],
            ['genitivo, de quem (-e)', 'híre', 'gúsmo', 'húke', 'dáne'],
            ['dativo, para (-ar)', 'hírar', 'gúsmur', 'húkar', 'dánar'],
            ['junto de, com (-aṭe)', 'híraṭe', 'gúsmuṭe', 'húkaṭe', 'dánaṭe'],
            ['de onde (-ċum)', 'hírċum', 'gúsmuċum', 'húkċum', 'dánċum'],
          ],
        },
        examples: [
          ['Híre ha.', 'A casa do homem. (Yoshioka, p. 177)'],
          ['Híre iríiṅ.', 'A mão do homem. (p. 177: a mão sempre tem dono, por isso leva também o prefixo “i-”)'],
          ['Síndaṭum ćhúmo díusase iné nookáre dipṭí bilúm.', 'O dever do criado era tirar peixe do rio. (conto do peixe, n.º 7)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o final do ergativo (-e) em todo sujeito: ele só aparece em quem faz uma ação sobre outra coisa. Quem só “é” ou “está” fica sem final, como em “Huk khóle bi” (o cão está aqui).',
      'Esquecer o “-mu” dos nomes femininos: “de mulher” é “gúsmo”, não “gúse”.',
    ],
    quiz: [
      { question: 'Como se diz “a casa do homem”?', options: ['Híre ha', 'Hírar ha', 'Hir ha'], answer: 'Híre ha', explanation: 'O genitivo, “de quem”, é “-e”: “híre”, do homem (Yoshioka, p. 177).' },
      { question: 'Qual é o dativo (“para a mulher”) de “gus”?', options: ['gúsmur', 'gúsar', 'gúse'], answer: 'gúsmur', explanation: 'Nomes femininos pegam “-mu” antes do caso: gus → gúsmur (tabela 17 de Yoshioka).' },
      { question: 'O que indica o final “-ċum”, como em “húkċum”?', options: ['De onde (a partir de)', 'Para onde', 'De quem'], answer: 'De onde (a partir de)', explanation: 'É o ablativo composto: “húkċum”, a partir do cão.' },
    ],
  },
  {
    id: 'bsk-g6',
    level: 'A2.1',
    title: 'Ser e estar: a cópula muda com a classe',
    emoji: '🪞',
    // Y12, p. 124 (tabela 46), p. 125 (tabela 47; Hunza “bam”, Nager “bom”), p. 155–156 (tabela 87,
    // negação “a-” e b → p), p. 232 (310), p. 183 (232), p. 56 (74). MK, p. 63 (87e, 87f).
    summary: 'O verbo “ser, estar” tem uma forma para cada pessoa e classe: “bái” (ele), “bo” (ela), “bi” (coisa contável), “bilá” (outras coisas). No passado, “bam”, “bom”, “bim”, “bilúm”.',
    sections: [
      {
        text: 'A cópula vai no fim da frase e concorda com o sujeito. Para pessoas, muda com o gênero: “bái” para ele, “bo” para ela. Para coisas, muda com a classe da palavra: “huk” (cão) é da classe X e pede “bi”; a classe Y pede “bilá”. A forma da 3ª pessoa do plural humana é igual à de “nós”: “báan”.',
        table: {
          head: ['Quem', 'Presente', 'Passado (Hunza)'],
          rows: [
            ['eu', 'báa', 'báyam'],
            ['você', 'báa', 'bam'],
            ['ele', 'bái', 'bam'],
            ['ela', 'bo', 'bom'],
            ['coisa da classe X', 'bi', 'bim'],
            ['coisa da classe Y', 'bilá', 'bilúm'],
            ['nós, vocês, eles (pessoas)', 'báan', 'bam'],
          ],
        },
        examples: [
          ['Huk khóle bi.', 'O cão está aqui. (Yoshioka, p. 232)'],
          ['Hin baadśáan bam.', 'Havia um rei. (p. 183, do conto do peixe)'],
          ['Ín dasín bo.', 'Ela é uma menina. (Munshi e Karim, p. 63, na grafia de Yoshioka)'],
        ],
      },
      {
        text: 'Para negar, a cópula ganha “a-” na frente, e o “b” vira “p”: “apáa” (não sou), “apái” (ele não é), “apí” (não há). No passado: “apám” (não havia, não estava).',
        examples: [
          ['Éle men ke apám.', 'Não havia ninguém lá. (Yoshioka, p. 56)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “bái” para tudo: “bái” é só para homem. Para mulher é “bo”, e para coisas, “bi” ou “bilá”.',
      'Esperar a cópula no meio da frase, como o “é” do português: em burushaski ela vem no fim.',
    ],
    quiz: [
      { question: 'Complete: “Ín dasín ___.” (Ela é uma menina.)', options: ['bo', 'bái', 'bi'], answer: 'bo', explanation: '“Bo” é a cópula para ela (tabela 46 de Yoshioka).' },
      { question: 'Qual cópula vai com “huk” (cão), que é da classe X?', options: ['bi', 'bilá', 'bái'], answer: 'bi', explanation: '“Huk khóle bi”: a classe X pede “bi” (Yoshioka, p. 232).' },
      { question: 'Como a cópula fica na negação?', options: ['Ganha “a-” e o “b” vira “p”', 'Ganha “-na” no fim', 'Não muda'], answer: 'Ganha “a-” e o “b” vira “p”', explanation: '“Bái” → “apái”, “bam” → “apám” (Yoshioka, tabela 87).' },
    ],
  },
  // ── A2.2 ──────────────────────────────────────────────────────────────────────────────────────
  {
    id: 'bsk-g7',
    level: 'A2.2',
    title: 'Passado e futuro',
    emoji: '⏳',
    // Y12, p. 129–130 (passado simples: tabela 54), p. 126–127 (futuro: tabela 51), p. 131 (tabela 56,
    // “vir”, e o exemplo 160), p. 208 (279b).
    summary: 'O passado e o futuro têm finais para cada pessoa. “Girmínam” é “eu escrevi”; “girmíyam”, “vou escrever”. O verbo “vir” é irregular: “dáayam” (vim), “díimi” (ele veio).',
    sections: [
      {
        text: 'O passado simples usa a raiz do verbo e um final que diz quem fez: “-am” (eu), “-uma” (você), “-imi” (ele), “-umo” (ela), “-uman” (nós, vocês, eles). O futuro usa a raiz de ação em curso (girmíy-, em vez de girmín-) e finais parecidos. O passado simples quase não muda entre Hunza e Nager, diz Yoshioka.',
        table: {
          head: ['Quem', 'Passado: escrevi…', 'Futuro: vou escrever…'],
          rows: [
            ['eu', 'girmínam', 'girmíyam'],
            ['você', 'girmínuma', 'girmíima'],
            ['ele', 'girmínimi', 'girmíimi'],
            ['ela', 'girmínumo', 'girmíimo'],
            ['nós', 'girmínuman', 'girmíyan'],
            ['vocês, eles (pessoas)', 'girmínuman', 'girmíiman'],
          ],
        },
        examples: [
          ['Khúulto je ínar qhátan girmíyam.', 'Hoje eu vou escrever uma carta para ele. (Yoshioka, p. 208, a primeira oração do exemplo)'],
        ],
      },
      {
        text: '“Vir” muda de raiz no passado: “dáayam” (eu vim), “dukóoma” (você veio), “díimi” (ele veio), “dumóomo” (ela veio), “dúuman” (eles vieram).',
        examples: [
          ['Isé buś ité saásaṭe díi dáa dubaará díimi.', 'O gato veio de novo naquela tarde. (Yoshioka, p. 131)'],
          ['Qhoś nímaninin ke, ye isé han ćhúmo níyan díimi.', 'Feliz, ele pegou o peixe e veio. (conto do peixe, n.º 13)'],
        ],
      },
    ],
    pitfalls: [
      'Trocar a raiz do passado pela do futuro: “girmín-” no passado (girmínam), “girmíy-” no futuro (girmíyam).',
      'Achar que o final diz o tempo e só: ele diz também quem fez, e muda para homem (-imi) e mulher (-umo).',
    ],
    quiz: [
      { question: 'Como se diz “eu escrevi”?', options: ['girmínam', 'girmíyam', 'girmínimi'], answer: 'girmínam', explanation: 'Passado simples, 1ª pessoa: “girmínam” (tabela 54 de Yoshioka).' },
      { question: '“Girmínumo” quer dizer…', options: ['ela escreveu', 'ele escreveu', 'eu vou escrever'], answer: 'ela escreveu', explanation: '“-umo” é o final do passado para “ela”.' },
      { question: 'Qual forma quer dizer “ele veio”?', options: ['díimi', 'dáayam', 'dukóoma'], answer: 'díimi', explanation: '“Dáayam” é “eu vim” e “dukóoma”, “você veio” (tabela 56).' },
    ],
  },
  {
    id: 'bsk-g8',
    level: 'A2.2',
    title: 'Ordens, “não” e perguntas',
    emoji: '❓',
    // Y12, p. 145–146 (imperativo: tabelas 76 e 77; exemplo 180), p. 24 (12a, 12b), p. 155 e 158–159
    // (negação em Hunza: “a-” na maioria; “oó-” com ní- “ir” e min- “beber”, tabela 90), p. 190 (242:
    // pergunta com “=a”), p. 186 (235). MK, p. 70 (100, 101) e p. 30 (pergunta com a palavra no lugar).
    summary: 'A ordem usa a raiz com “-i” (uma pessoa) ou “-in” (várias). O “não” é um prefixo “a-” no verbo. A pergunta de sim ou não ganha “-a” no fim.',
    sections: [
      {
        text: 'O imperativo tem só duas formas, para uma pessoa e para várias: “girmín” (escreva!) e “girmínin” (escrevam!); “mané” (fique, torne-se!) e “maníin”. No conto do peixe, o criado entrega o peixe ao rei e diz “Ye ga”: “tome, pegue!”.',
        table: {
          head: ['Verbo', 'Para uma pessoa', 'Para várias'],
          rows: [
            ['girmínas (escrever)', 'girmín', 'girmínin'],
            ['manáas (tornar-se, ficar)', 'mané', 'maníin'],
          ],
        },
        examples: [
          ['Máma, un befíkar hurú.', 'Mãe, não se preocupe (fique sem preocupação). (Yoshioka, p. 146)'],
        ],
      },
      {
        text: 'Para negar um verbo, Hunza põe “a-” na frente. Com alguns verbos, como “ir” e “beber”, o prefixo é “oó-” (“oóni-”, “oómin-”). Munshi e Karim dão ordens negativas com “ee-” e “oo-”.',
        examples: [
          ['Khólar isé ġaṣép boómi.', 'A pega pousou aqui. (Yoshioka, p. 24)'],
          ['Khólar isé ġaṣép apáumi.', 'A pega não pousou aqui. (p. 24)'],
          ['Ṣapik eeṣi.', 'Não coma pão. (Munshi e Karim, p. 70, na grafia deles)'],
        ],
      },
      {
        text: 'Na pergunta com “quem, o que, onde”, a palavra de pergunta fica no lugar da resposta, sem mudar a ordem. Na pergunta de sim ou não, a frase ganha “-a” no fim.',
        examples: [
          ['Khóle bésan bi?', 'O que há aqui? (Yoshioka, p. 233)'],
          ['Un jaapaaníia?', 'Você é japonês? (p. 190: “jaapaaníi” + “-a”)'],
          ['Be gumáibáa?', 'Como vai você? (p. 186, a saudação de praxe)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr um “não” separado, como em português: em burushaski o “não” é um prefixo colado no verbo (“apáumi”, não pousou).',
      'Mudar a ordem da frase para perguntar: a palavra de pergunta fica onde estaria a resposta.',
    ],
    quiz: [
      { question: 'Como se diz “escrevam!” (para várias pessoas)?', options: ['girmínin', 'girmín', 'girmínam'], answer: 'girmínin', explanation: 'O imperativo plural ganha “-in” (tabela 76 de Yoshioka).' },
      { question: '“Apáumi” é o contrário de “boómi”. O que o “a-” faz?', options: ['Nega o verbo', 'Põe no futuro', 'Faz uma pergunta'], answer: 'Nega o verbo', explanation: '“Boómi” é “pousou”; “apáumi”, “não pousou” (Yoshioka, p. 24).' },
      { question: 'Como se faz uma pergunta de sim ou não?', options: ['Com “-a” no fim da frase', 'Trocando a ordem das palavras', 'Com “bésan” no começo'], answer: 'Com “-a” no fim da frase', explanation: '“Un jaapaaníia?”, você é japonês? (Yoshioka, p. 190).' },
    ],
  },
  // ── B1 (16/10/2026) ───────────────────────────────────────────────────────────────────────────
  // Fontes: Y12 (gramática e contos do Apêndice I, com o número da frase) e o texto “Šíri Badát” de
  // Willson (1999/2002), citado por Y12 na grafia de Willson e trocado para Berger pela tabela de Y12,
  // p. xv (ts → ċ, ch → ć, chh → ćh, sh → ś, ṣh → ṣ, gh → ġ). Mesma troca de letras do A2 para as frases
  // de Y12. Tabelas copiadas das tabelas de Y12, só com as letras trocadas. Nenhuma frase foi montada.
  // ── B1.1 ──
  {
    id: 'bsk-g9',
    level: 'B1.1',
    title: 'Estar fazendo e costumar fazer',
    emoji: '🔁',
    // Y12, p. 137–138 (presente: tabela 65), p. 139–141 (passado contínuo: tabela 68; usos, (173), (174)).
    summary: 'O verbo na forma contínua mais a cópula diz o que está acontecendo: “girmíibái”, ele está escrevendo. Com a cópula do passado, diz o que acontecia ou o que se costumava fazer: “girmíibám”.',
    sections: [
      {
        text: 'O presente junta a raiz contínua do verbo (girmíy-, girmíi-) e a cópula do presente (báa, bái, bo, bí, bilá). Serve para o que acontece sempre, para o que está acontecendo agora e para verdades que não mudam. Trocando pela cópula do passado (bam, bom, bim, bilúm), sai o passado contínuo: o que estava acontecendo ou o que se fazia sempre.',
        table: {
          head: ['Quem', 'Presente: estou escrevendo…', 'Passado contínuo: escrevia…'],
          rows: [
            ['eu', 'girmíyabáa', 'girmíyabáyam'],
            ['você', 'girmíibáa', 'girmíibám'],
            ['ele', 'girmíibái', 'girmíibám'],
            ['ela', 'girmíibó', 'girmíibóm'],
            ['coisa da classe X', 'girmíibí', 'girmíibím'],
            ['coisa da classe Y', 'girmíibilá', 'girmíibilúm'],
            ['nós', 'girmíyabáan', 'girmíyabám'],
            ['vocês, eles (pessoas)', 'girmíibáan', 'girmíibám'],
          ],
        },
        examples: [
          // conto do peixe, n.º 85 (Ap. I, p. XLI), trecho
          ['Bésanar baréibáa?', 'Para o que você está olhando? (conto do peixe, n.º 85)'],
          // Y12, p. 138 (170), a última oração
          ['Bes hurúśu báa?', 'Por que você fica (lá)? (Yoshioka, p. 138)'],
          // conto do peixe, n.º 63 (p. XXXI), trecho
          ['Bée ya, nuśén baríćabáan.', 'Não, debulhamos depois de comer. (n.º 63)'],
        ],
      },
      {
        text: 'No passado, a mesma forma conta um costume. O rei do conto “andava sempre” com o falcão no ombro: “níćóm”, de “ní-” (ir). Em Hunza, a raiz e a cópula muitas vezes se fundem numa palavra só, diz Yoshioka.',
        examples: [
          // conto do peixe, n.º 216 (p. XCV)
          ['Isé báaz iphóiṅaṭe níya ćakárar níćóm.', 'Ele passeava levando o falcão no ombro. (n.º 216)'],
          // Willson, “Šíri Badát” n.º 46, citado em Y12, p. 141 (174)
          ['Duúsas khéene, éle ité wáqći hin mapéerane hárki éćam.', 'Na hora de sair, havia ali um velho trabalhando na roça. (Willson, “Šíri Badát”, n.º 46)'],
        ],
      },
    ],
    pitfalls: [
      'Usar o passado simples para uma ação que durava ou se repetia: “girmínimi” é “ele escreveu”; “girmíibám”, “ele escrevia”.',
      'Esquecer a cópula: sem ela, “girmíi-” é só a raiz contínua, não uma frase.',
    ],
    quiz: [
      { question: 'Como se diz “ela está escrevendo”?', options: ['girmíibó', 'girmíibái', 'girmínumo'], answer: 'girmíibó', explanation: '“Bo” é a cópula de “ela”; “girmínumo” é “ela escreveu” (tabela 65 de Yoshioka).' },
      { question: '“Níćóm”, em “ćakárar níćóm”, quer dizer…', options: ['ele costumava ir', 'ele vai amanhã', 'ele foi uma vez'], answer: 'ele costumava ir', explanation: 'É o passado contínuo de “ir”: o rei passeava sempre com o falcão (conto do peixe, n.º 216).' },
      { question: 'O que muda entre “girmíibáa” e “girmíibám”?', options: ['A cópula: presente e passado', 'O sujeito: eu e ele', 'Nada'], answer: 'A cópula: presente e passado', explanation: '“-báa” é a cópula do presente; “-bám”, a do passado (tabelas 65 e 68).' },
    ],
  },
  {
    id: 'bsk-g10',
    level: 'B1.1',
    title: 'Ligando ações: n-…-n e -asar',
    emoji: '🔗',
    // Y12, p. 204–207 (converbos; o particípio conjuntivo n-V, mesmo sujeito, ação anterior), p. 209
    // (V-as-ar). Formas dos contos: n.º 33, 35, 48, 50, 64, 85 (Ap. I).
    summary: 'Quando o mesmo sujeito faz duas coisas seguidas, a primeira ganha “n-” na frente e “-n” no fim: “níṣinin … sénimi”, depois de comer, ele disse. Com o infinitivo e “-ar”, a primeira ação marca o momento: “guċhárasar”, andando.',
    sections: [
      {
        text: 'Yoshioka chama essa forma de particípio conjuntivo. O “n-” vai antes da raiz (e dos prefixos de pessoa) e o “-n” no fim, muitas vezes repetido na fala: “nuúruṭinininin”, depois de sentar. Com os verbos que já começam com “d-”, o “n” entra no meio: “duúsin”, depois de sair. Só o último verbo da frase leva tempo e pessoa.',
        table: {
          head: ['Verbo', 'Forma ligada', 'Sentido'],
          rows: [
            ['ṣí- (comer)', 'níṣinin', 'depois de comer isso (n.º 50)'],
            ['barén- (olhar)', 'nupáraninin', 'depois de olhar (n.º 85)'],
            ['d-gús- (sair)', 'duúsin', 'depois de sair (n.º 33)'],
            ['sén- (dizer)', 'nusén, nusé', 'dizendo (n.º 64, 48)'],
            ['-gán- (pegar)', 'níya', 'pegando, levando (n.º 33)'],
          ],
        },
        examples: [
          // conto do peixe, n.º 85 (p. XLI), a primeira oração
          ['Háa ṣínc̣har nupáraninin éimur sénimi.', 'Depois de olhar a viga da casa, ele disse à filha. (n.º 85, trecho)'],
          // conto do peixe, n.º 48 (p. XXIV; Y12, p. 129)
          ['“Isé ṣíc̣an ye qha hurú” nusé hitháane yálanulo ámulo qha nuúruṭinininin.', '“Vamos comer isto, sente-se”, ele disse, e eles se sentaram ali, à sombra. (n.º 48)'],
        ],
      },
      {
        text: 'O infinitivo com “-ar” (para) também liga orações, e aí o sujeito pode mudar: “guċhárasar”, andando, “níasar”, indo.',
        examples: [
          // conto do peixe, n.º 35 (p. XVII)
          ['Ye guċhárasar matháan díśanar níasar hin ée káa rafíiqan káa imánimi.', 'Andando, quando ele chegou a um lugar longe, um homem virou seu companheiro. (n.º 35)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr tempo e pessoa em todos os verbos, como em “comeu e disse”: em burushaski só o último verbo leva o final; os de antes ficam na forma com “n-…-n”.',
      'Esquecer o “n-” do começo: “-in” sozinho no fim é a ordem para várias pessoas (“girmínin”, escrevam!), não a forma ligada.',
    ],
    quiz: [
      { question: 'Em “Níṣinin … sénimi”, quem comeu?', options: ['O mesmo que disse', 'Outra pessoa', 'Ninguém'], answer: 'O mesmo que disse', explanation: 'A forma “n-…-n” liga ações do mesmo sujeito (Yoshioka, p. 207).' },
      { question: 'Qual destas é a forma ligada de “sén-” (dizer)?', options: ['nusén', 'sénimi', 'sénas'], answer: 'nusén', explanation: '“Nusén” é “dizendo”; “sénimi”, “ele disse”; “sénas”, o infinitivo.' },
      { question: 'Por que “duúsin” não começa com “n-”?', options: ['Porque o verbo começa com “d-” e o “n” entra no meio', 'Porque é o futuro', 'Porque é uma ordem'], answer: 'Porque o verbo começa com “d-” e o “n” entra no meio', explanation: 'É “d-gús-n” na análise de Yoshioka: o “n” vem depois do “d-” (conto do peixe, n.º 33).' },
    ],
  },
  // ── B1.2 ──
  {
    id: 'bsk-g11',
    level: 'B1.2',
    title: 'O perfeito: aconteceu e ainda vale',
    emoji: '✅',
    // Y12, p. 141–145 (perfeito presente: tabelas 70 e 72; perfeito passado: tabela 74; usos, (175)–(176)).
    summary: 'A forma perfectiva do verbo mais a cópula diz que algo aconteceu e o resultado continua: “girmínabáa”, escrevi (e está escrito). Com a cópula do passado, sai o mais-que-perfeito: “girmínám”, tinha escrito.',
    sections: [
      {
        text: 'O perfeito presente usa a raiz do passado (girmín-) e a cópula do presente. Por isso quem chega responde “dáayabáa”, cheguei: a pessoa está ali. O perfeito passado troca a cópula pela do passado e fala de algo que já tinha acontecido num momento do passado.',
        table: {
          head: ['Quem', 'Perfeito: escrevi', 'Mais-que-perfeito: tinha escrito'],
          rows: [
            ['eu', 'girmínabáa', 'girmínabáyam'],
            ['você', 'girmínáa, girmínubáa', 'girmínám, girmínubóm'],
            ['ele', 'girmínái, girmínubái', 'girmínám, girmínubóm'],
            ['ela', 'girmínubó', 'girmínubóm'],
            ['coisa da classe X', 'girmínibí', 'girmínibím'],
            ['coisa da classe Y', 'girmínilá', 'girmínilúm'],
            ['nós, vocês, eles (pessoas)', 'girmínáan, girmínubáan', 'girmínám, girmínubóm'],
          ],
        },
        examples: [
          // Y12, p. 143 (175)
          ['Dukóoma. — Dáayabáa.', 'Bem-vindo! (lit. você veio) — Cheguei. (Yoshioka, p. 143)'],
          // Y12, p. 143 (176) = conto do peixe, n.º 24
          ['Khos, je ayákal bes déeġasibí?', 'Por que este peixe riu de mim? (conto do peixe, n.º 24)'],
        ],
      },
      {
        text: '“Vir” muda de raiz também no perfeito: “dáayabáa” (cheguei), “dukóobáa” (você chegou), “díibái” (ele chegou), “dumóobó” (ela chegou), “dúubáan” (eles chegaram).',
      },
    ],
    pitfalls: [
      'Confundir “girmínam” (escrevi, passado simples) com “girmínabáa” (escrevi e está escrito, perfeito): o perfeito tem a cópula no fim.',
      'Usar a raiz contínua (girmíy-) no perfeito: o perfeito usa a raiz do passado (girmín-).',
    ],
    quiz: [
      { question: 'Alguém diz “Dukóoma!”. O que você responde?', options: ['Dáayabáa.', 'Dukóobáa.', 'Díimi.'], answer: 'Dáayabáa.', explanation: '“Dáayabáa”, cheguei, é o perfeito de “vir” para “eu” (Yoshioka, p. 143).' },
      { question: '“Girmínubó” quer dizer…', options: ['ela escreveu (e está escrito)', 'ela está escrevendo', 'ela escreveria'], answer: 'ela escreveu (e está escrito)', explanation: 'Raiz do passado e cópula “bo”: perfeito de “ela” (tabela 70).' },
      { question: 'Qual é o “tinha escrito” de “eu”?', options: ['girmínabáyam', 'girmíyabáyam', 'girmínam'], answer: 'girmínabáyam', explanation: '“Girmíyabáyam” é “eu escrevia”, e “girmínam”, “eu escrevi” (tabelas 74, 68 e 54).' },
    ],
  },
  {
    id: 'bsk-g12',
    level: 'B1.2',
    title: 'Fazer fazer, dar e comer',
    emoji: '🍞',
    // Y12, p. 113–114 (causativo s-: (146)), p. 115 (tabela 41), p. 52–53 (ergativo); conto do peixe,
    // n.º 49 (p. XXV) e 139 (p. LXI); Shon Gukur, n.º 12 (Y12, p. 202, (270)); Willson, “Šíri Badát”
    // n.º 4–5 (Y12, p. 231).
    summary: 'O prefixo “s-” faz alguém fazer a ação: “bápaỵimi”, fermentou; “éspapaỵam”, eu fiz fermentar. E “comer” e “dar” mudam de raiz conforme a classe da coisa comida ou dada.',
    sections: [
      {
        text: 'Muitos verbos ganham o causativo com “s-” logo antes da raiz, depois do prefixo de pessoa. O “s-” deixa a consoante seguinte surda: “bápaỵ-” vira “-spapaỵ-”. Quem faz fazer leva o ergativo, “-e”, como todo sujeito de verbo com objeto: “jáa”, eu.',
        examples: [
          // Y12, p. 114 (146a, 146b)
          ['Ité mamú bápaỵimi.', 'Aquele leite fermentou. (Yoshioka, p. 114)'],
          ['Jáa ité mamú éspapaỵam.', 'Eu fiz aquele leite fermentar. (p. 114)'],
          // conto do peixe, n.º 139 (p. LXI), a última oração
          ['Ćhap táaq nétan déċiruman.', 'Cortaram a carne e a cozinharam (lit. fizeram amadurecer). (conto do peixe, n.º 139)'],
          // Shon Gukur, n.º 12 (Y12, p. 202, (270)), a última oração
          ['Óor isk désmanimi.', 'E nasceu um bezerro (lit. fez-se tornar). (conto de Shon Gukur, n.º 12)'],
        ],
      },
      {
        text: '“Comer” e “dar” têm raízes diferentes conforme a classe e o número do objeto. Um pão (classe X) se come com “ṣí-”; a carne (classe Y), com “śé-”.',
        table: {
          head: ['Verbo', 'Pessoa ou coisa X, uma', 'Pessoas ou coisas X, várias', 'Coisa Y, uma', 'Coisas Y, várias'],
          rows: [
            ['dar', '-ú-', '-ú-', '-ćhí-', '-ġún-'],
            ['comer', 'ṣí-', 'ṣú-', 'śé-', 'śé-'],
          ],
        },
        examples: [
          // conto do peixe, n.º 49 (p. XXV)
          ['Isé phíṭi lap traṅ nétaninin, iné rafíiqar yuúmi, isé lap phíṭi baadśáa nookáre ṣími.', 'O criado do rei partiu a phiti ao meio, deu metade ao companheiro e comeu a outra metade. (n.º 49)'],
          // Willson, “Šíri Badát” n.º 4, citado em Y12, p. 231 (309), a primeira oração
          ['Híkulto han mamúśiane ámit ćhápan íne śémi.', 'Um dia ele comeu carne de um cordeiro. (Willson, “Šíri Badát”, n.º 4, trecho)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “ṣí-” para tudo: carne, arroz e outras coisas da classe Y se comem com “śé-”.',
      'Esquecer o ergativo de quem faz fazer: “jáa” (eu, quem faz), não “je”.',
    ],
    quiz: [
      { question: 'Qual verbo vai em “Jáa ité mamú ___” (eu fiz o leite fermentar)?', options: ['éspapaỵam', 'bápaỵimi', 'ṣíam'], answer: 'éspapaỵam', explanation: 'O “s-” do causativo: “éspapaỵam” (Yoshioka, p. 114).' },
      { question: 'Com que raiz se come a phiti, um pão da classe X?', options: ['ṣí-', 'śé-', '-ćhí-'], answer: 'ṣí-', explanation: '“Baadśáa nookáre ṣími”, o criado comeu (a phiti): conto do peixe, n.º 49.' },
      { question: 'Em “baadśáa nookáre ṣími”, por que “nookáre” termina em “-e”?', options: ['É o ergativo de quem come', 'É o plural', 'É uma pergunta'], answer: 'É o ergativo de quem come', explanation: 'Quem faz uma ação sobre outra coisa leva o ergativo “-e”.' },
    ],
  },
  // ── B1.3 ──
  {
    id: 'bsk-g13',
    level: 'B1.3',
    title: 'Se: o condicional e “ágar … ke”',
    emoji: '🔀',
    // Y12, p. 152–155 (condicional: tabelas 85 e 86, (190), (193)), p. 202 (ágar … ke, (271)); Kulio
    // Laskir, n.º 23 (Ap. I, p. CLXXV).
    summary: 'O verbo com “-mċe” diz o que aconteceria, mas não aconteceu: “girmíyamċe”, eu escreveria. Para uma condição real, a oração começa com “ágar” (se) e fecha com “ke”.',
    sections: [
      {
        text: 'O condicional do verbo junta a raiz contínua, o “-m” do passado e o final “-ċe” (ou “-ċeq”). Só “eu” e “nós” têm forma própria; você, ele, ela e eles usam a mesma. Na oração principal, ele sempre fala do que não é verdade, como o nosso futuro do pretérito.',
        table: {
          head: ['Quem', 'Escreveria'],
          rows: [
            ['eu', 'girmíyamċe'],
            ['nós', 'girmíyanċe'],
            ['você, ele, ela, eles', 'girmíimċe'],
          ],
        },
        examples: [
          // Y12, p. 153 (190), de Tikkanen 1991
          ['Áỵa máma apáma, je khóle hurúśamċe.', 'Se eu não tivesse pai e mãe, ficaria aqui. (Yoshioka, p. 153)'],
        ],
      },
      {
        text: 'Para uma condição de verdade, usa-se “ágar”, palavra que veio do persa e do urdu, no começo da oração, e “ke” no fim. A cópula também tem uma forma de condição: “báćamċe” (se eu estou), “bóćanċe” (já que ela está).',
        examples: [
          // conto do peixe, n.º 237 (p. CIV; Y12, p. 202)
          ['Et zéhere ċhil bilúm, iné baadśáa iírćóm ágar ité minúwám ke, ćhémiliṅe ċhil bilúm.', 'Era uma água tão venenosa que, se o rei a bebesse, morreria. (conto do peixe, n.º 237)'],
          // Kulio Laskir, n.º 23 (p. CLXXV)
          ['Agár jáa ité qhanjár yáṭe akhílaṭe dáal diém bilá ke, jáa śat étabáa.', 'Se a minha adaga estiver assim, de pé, fui eu que venci. (conto de Kulio Laskir, n.º 23)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “-mċe” para uma condição real: no verbo ele quer dizer “aconteceria”, e não “se acontece”.',
      'Esquecer o “ke” no fim da oração com “ágar”.',
    ],
    quiz: [
      { question: '“Girmíyamċe” quer dizer…', options: ['eu escreveria', 'eu escrevi', 'se eu escrever'], answer: 'eu escreveria', explanation: 'O final “-mċe” do verbo é o do que não aconteceu (tabela 85 de Yoshioka).' },
      { question: 'Com que palavra termina a oração que começa com “ágar”?', options: ['ke', 'bi', 'nusén'], answer: 'ke', explanation: '“Ágar … ke”: “ágar ité minúwám ke”, se ele a bebesse (conto do peixe, n.º 237).' },
      { question: 'De onde veio a palavra “ágar”?', options: ['Do persa e do urdu', 'Do inglês', 'Do xina'], answer: 'Do persa e do urdu', explanation: 'Yoshioka dá a origem: persa e urdu “agar”, se (p. 202).' },
    ],
  },
  {
    id: 'bsk-g14',
    level: 'B1.3',
    title: 'Ter de: obrigação e necessidade',
    emoji: '❗',
    // Y12, p. 190–193 (infinitivo + cópula, (245), (246); awaáji, (248), (249), (249)′; optativo, (250)).
    summary: 'Para dizer que algo tem de acontecer, junta-se o infinitivo e a cópula: “un ṣías bilúm”, você tinha de comer. Ou usa-se “awaáji”, necessário, palavra que veio do xina.',
    sections: [
      {
        text: 'O infinitivo em “-as” mais a cópula da classe Y (bilá, bilúm, dilá) diz que algo tem de acontecer, por dever ou por lógica. Quem faz a ação fica no mesmo caso de sempre: ergativo com objeto, sem final quando não há objeto.',
        examples: [
          // Y12, p. 191 (245) = conto do peixe, n.º 178
          ['Iné yáarum díwasum isé inée níṣin, díwasum isé un ṣías bilúm.', 'Depois que ele comeu o que tinha sobrado diante dele, você tinha de comer o que sobrou. (conto do peixe, n.º 178)'],
          // Y12, p. 191 (246) = conto de Hopar, n.º 17 (c → ċ)
          ['To khúule qhudáaye taráfċum ġazáb óor j̣úas dilá.', 'Assim, sobre eles, a desgraça tem de vir de Deus. (conto de Hopar, n.º 17)'],
        ],
      },
      {
        text: 'Com “awaáji” (necessário), a cópula do presente pode sumir, mas a do passado e a negativa ficam. O optativo também pede: “j̣úṣ”, que venha.',
        table: {
          head: ['Frase', 'Sentido'],
          rows: [
            ['Míi gáran étas awaáji.', 'Nós precisamos nos casar.'],
            ['Míi gáran étas awaáji bilúm.', 'Nós precisávamos nos casar.'],
            ['In khólar j̣úṣ.', 'Ele deve vir para cá.'],
          ],
        },
        examples: [
          // Y12, p. 192 (248), de Berger 1998b (Hunza)
          ['Khué ar oómanum béske éćáan ke, khué ar umánas awaáji bilá.', 'Quando eles fazem alguma coisa sem medo, deviam ficar com medo. (Yoshioka, p. 192, de Berger)'],
        ],
      },
    ],
    pitfalls: [
      'Tirar a cópula do passado com “awaáji”: “Míi gáran étas awaáji bilúm” precisa do “bilúm” para ficar no passado.',
      'Pôr o infinitivo sem cópula e esperar o sentido de “ter de”: é o par infinitivo + cópula que dá a obrigação.',
    ],
    quiz: [
      { question: 'Como se diz “nós precisávamos nos casar”?', options: ['Míi gáran étas awaáji bilúm.', 'Míi gáran étas awaáji.', 'Míi gáran étas.'], answer: 'Míi gáran étas awaáji bilúm.', explanation: 'No passado a cópula “bilúm” não pode sumir (Yoshioka, p. 193).' },
      { question: 'De que língua veio “awaáji”?', options: ['Do xina', 'Do urdu', 'Do inglês'], answer: 'Do xina', explanation: 'Do xina “awaájei”, “será preciso” (Yoshioka, p. 191).' },
      { question: '“Un ṣías bilúm” quer dizer…', options: ['você tinha de comer', 'você comeu', 'você vai comer'], answer: 'você tinha de comer', explanation: 'Infinitivo “ṣías” + cópula “bilúm”: obrigação no passado (conto do peixe, n.º 178).' },
    ],
  },
  // ── B1.4 ──
  {
    id: 'bsk-g15',
    level: 'B1.4',
    title: 'O que, onde, quando: as orações relativas',
    emoji: '🪢',
    // Y12, p. 198–200 (oração relativa = palavra de pergunta + “ke” + demonstrativo distante: (264),
    // (265), (266)); Willson, “Šíri Badát” n.º 45 e 49 (Y12, p. 199–200 e 233).
    summary: 'O burushaski não tem “que” relativo. A oração usa a própria palavra de pergunta e, na principal, “ité” ou “ú” (aquilo, aqueles): “bésan sénuma ke, ité sahíi maními”, o que ele disse, aquilo se mostrou certo.',
    sections: [
      {
        text: 'A oração relativa vem quase sempre antes, com a palavra de pergunta no lugar em que estaria a coisa, e muitas vezes com “ke” no fim. Depois, a oração principal retoma a coisa com um demonstrativo distante: “ité” para coisas, “ú” para pessoas. Yoshioka diz que as duas orações ficam como um par.',
        table: {
          head: ['Palavra de pergunta', 'Na oração relativa', 'Retomada'],
          rows: [
            ['bésan (o que)', 'o que ele disse…', 'ité (aquilo)'],
            ['ámit (qual, coisa)', 'no lugar onde…', 'ité díśulo (naquele lugar)'],
            ['ámin (qual, pessoa)', 'os que saíram…', 'ú (aqueles)'],
            ['béśal (quando)', 'quando o jogaram…', '(sem retomada)'],
          ],
        },
        examples: [
          // Shon Gukur, n.º 14 (Y12, p. 199, (264))
          ['Śon gukúr biṭáne bésan sénuma ke, ité sahíi maními.', 'O que o bitan Shon Gukur disse se mostrou certo. (Yoshioka, p. 199)'],
          // Willson, “Šíri Badát” n.º 49 (Y12, p. 233, (312))
          ['In to ité díśulo ii iíram, ámit díśulo qam diu, leél ayéetum úlo wáśibam ke.', 'Ele tinha de morrer ali: no lugar onde o buraco foi cavado, sem ele saber, jogaram-no dentro. (Willson, “Šíri Badát”, n.º 49)'],
        ],
      },
      {
        text: 'Com “béśal” (quando), a oração relativa pode ficar sem retomada.',
        examples: [
          // Willson, “Šíri Badát” n.º 45 (Y12, p. 199–200, (265))
          ['Leekín síse zéhenulo ité árkuṣ darúm bilúm ke béśal qámar qhaṭ wáśiman ke, “Zamíine hóle teí úlo Puyáaỵar duúsai” nusé.', 'Mas na mente do povo ainda havia medo: quando o jogaram no buraco, disseram “Como em cima da terra, por baixo dela ele vai sair em Punial”. (Willson, “Šíri Badát”, n.º 45)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra só para “que” relativo: o burushaski usa a palavra de pergunta (bésan, ámit, ámin, béśal).',
      'Esquecer a retomada na oração principal: “ité” (aquilo) para coisas, “ú” (aqueles) para pessoas.',
    ],
    quiz: [
      { question: 'Complete: “Śon gukúr biṭáne bésan sénuma ke, ___ sahíi maními.”', options: ['ité', 'ú', 'ágar'], answer: 'ité', explanation: '“Ité”, aquilo, retoma “bésan”, o que ele disse (Yoshioka, p. 199).' },
      { question: 'Em “ámit díśulo qam diu”, o que faz “ámit”?', options: ['Diz “onde” (em qual lugar) na oração relativa', 'Faz uma pergunta', 'Nega o verbo'], answer: 'Diz “onde” (em qual lugar) na oração relativa', explanation: '“Ámit díśulo”, no lugar em que (Willson, “Šíri Badát”, n.º 49).' },
      { question: 'Para pessoas, a retomada costuma ser…', options: ['ú', 'ité', 'bi'], answer: 'ú', explanation: '“Ú ámin … ke”, aqueles que…: Yoshioka, p. 200, (266).' },
    ],
  },
  {
    id: 'bsk-g16',
    level: 'B1.4',
    title: 'Contar o que alguém disse',
    emoji: '🗨️',
    // Y12, p. 196–197 (oração completiva; sén- e -s- com sujeito no ergativo; “ke” opcional: (259), (260));
    // conto do peixe, n.º 48, 63, 64, 85; Willson, “Šíri Badát” n.º 39 (Y12, p. 187).
    summary: 'A fala vem inteira, com as palavras de quem falou. O verbo é “sén-” (dizer) ou “-s-” (contar a alguém), e quem fala leva o ergativo. A fala costuma fechar com “nusén” ou “nusé”, dizendo.',
    sections: [
      {
        text: 'Yoshioka mostra que “sén-” e “-s-” têm a fala como objeto; por isso quem fala leva o “-e” do ergativo: “Śon gukúre … ésimi”, Shon Gukur contou. O “ke” antes da fala pode vir ou não, sem mudar o sentido. Nos contos, a fala vem muitas vezes antes, e “nusén” ou “sénuman” fecha.',
        table: {
          head: ['Forma', 'Sentido', 'Onde aparece'],
          rows: [
            ['sénimi', 'ele disse', 'conto do peixe, n.º 50'],
            ['sénumo', 'ela disse', 'n.º 85'],
            ['sénuman', 'eles disseram', 'n.º 63'],
            ['ésimi', 'ele contou a ele', 'Shon Gukur, n.º 5 e 6'],
            ['nusén, nusé', 'dizendo', 'n.º 64, 48'],
          ],
        },
        examples: [
          // Shon Gukur, n.º 6 (Y12, p. 197, (260)), a primeira oração e o começo da fala
          ['Śon gukúre húke mamúar ésimi, ískan bi.', 'Shon Gukur disse a Huke Mamo: “Está prenhe.” (n.º 6, trecho)'],
          // Willson, “Šíri Badát” n.º 39 (Y12, p. 187, (237))
          ['To ċhórdimo ḍámaṭe duúsin, hóle barénasar, in śékar wálimi, “Muú bésan meími, bésan oómaimi?” nusén.', 'De manhã ele saiu, olhou lá fora e ficou desconfiado: “E agora, o que vai acontecer, e o que não vai?” (Willson, “Šíri Badát”, n.º 39)'],
        ],
      },
    ],
    pitfalls: [
      'Mudar a fala para o discurso indireto, como em “ele disse que estava cansado”: o burushaski repete as palavras como foram ditas.',
      'Deixar quem fala sem o ergativo: com “sén-” e “-s-”, é “Śon gukúre”, com “-e”.',
    ],
    quiz: [
      { question: 'Por que é “Śon gukúre ésimi” e não “Śon gukúr ésimi”?', options: ['Quem fala leva o ergativo “-e”', 'Porque é plural', 'Porque é uma pergunta'], answer: 'Quem fala leva o ergativo “-e”', explanation: 'A fala é o objeto de “-s-” (contar), então quem fala vai no ergativo (Yoshioka, p. 197).' },
      { question: 'O que “nusén” faz no fim de uma fala?', options: ['Fecha a fala: “dizendo”', 'Nega a fala', 'Põe no futuro'], answer: 'Fecha a fala: “dizendo”', explanation: '“Nusén” é a forma ligada de “sén-” (conto do peixe, n.º 64).' },
      { question: 'Como se diz “eles disseram”?', options: ['sénuman', 'sénumo', 'sénimi'], answer: 'sénuman', explanation: '“Sénumo” é “ela disse”; “sénimi”, “ele disse” (conto do peixe, n.º 63 e 85).' },
    ],
  },
];
