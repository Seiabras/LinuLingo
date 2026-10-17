import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do burushaski, do A1.1 ao A2.2 (o teto do idioma). Fontes do A1: o
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
    summary: 'Além dos pronomes livres (ja, un, in…), o burushaski marca “de quem” um substantivo é com um PREFIXO preso à palavra — e alguns substantivos nunca aparecem sem esse prefixo.',
    sections: [
      {
        text: 'Pronomes como “ja” (eu) e “un” (tu/você) existem como palavras soltas, mas pra dizer “a mãe DELE” ou “a mãe DELA” o burushaski não usa um pronome separado: prende um prefixo de pessoa direto na palavra. A Wikipédia em inglês atesta a família inteira pra “mãe” (=mi, raiz presa): i-mi “a mãe dele”, mu-mi “a mãe dela”, u-mi “a mãe deles”. Esse mesmo conjunto de prefixos (i-, mu-, u-, entre outros) também marca a PESSOA DO OBJETO nos verbos — ver o tópico sobre os verbos, mais abaixo.',
        table: {
          head: ['Prefixo', 'Pessoa', 'Exemplo (com “=mi”, mãe)'],
          rows: [
            ['i-', 'dele (3ª pessoa, masculino)', 'i-mi — “a mãe dele”'],
            ['mu-', 'dela (3ª pessoa, feminino)', 'mu-mi — “a mãe dela”'],
            ['u-', 'deles/delas (3ª pessoa, plural)', 'u-mi — “a mãe deles”'],
          ],
        },
        examples: [
          ['Ja.', 'Eu. (pronome livre)'],
          ['Imi.', 'Mãe (citada já com o prefixo que a fonte atesta; a forma sem prefixo nenhum não aparece nas fontes consultadas).'],
        ],
      },
    ],
    pitfalls: ['Achar que todo substantivo do burushaski pode ficar “sozinho”, sem prefixo: vários termos de parentesco são de posse obrigatória — algo que o português não tem (dizemos só “mãe”, sem precisar encaixar “de quem” na própria palavra).'],
    quiz: [
      { question: 'Como o burushaski diz “a mãe dele”?', options: ['i-mi', 'u-mi', 'mu-mi'], answer: 'i-mi', explanation: 'O prefixo “i-” marca a 3ª pessoa masculina: “i-mi”, a mãe dele.' },
      { question: 'Pronomes como “ja” (eu) e os prefixos de posse (i-, mu-, u-) são a mesma coisa?', options: ['Não, são dois sistemas diferentes', 'Sim, são idênticos', 'Só no plural'], answer: 'Não, são dois sistemas diferentes', explanation: 'Pronomes livres (ja, un, in…) e prefixos presos (i-, mu-, u-…) marcam pessoa de jeitos diferentes, e um substantivo de posse obrigatória só usa o segundo.' },
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
    emoji: '🔢',
    summary: 'De 1 a 10 os números do burushaski são palavras próprias — mas de 20 em diante o sistema é vigesimal (base 20), como o francês “quatre-vingts” (80, “quatro-vintes”).',
    sections: [
      {
        text: 'De 1 a 10 (han, altó, isko, walto, čindó, mishíndo, thaló, altámbo, hunchó, tóorumo), cada número tem uma palavra própria. De 11 a 19, soma-se o número ao “10” (tóorumo-han, 11). Mas 20 vira uma palavra nova, “altár” — e dali em diante o sistema conta em MÚLTIPLOS DE 20: 40 é “alto-altár” (dois-vintes), 60 é “iski-altár” (três-vintes), 80 é “waltó-altár” (quatro-vintes). O francês faz exatamente a mesma coisa com “quatre-vingts” (80, literalmente “quatro-vintes”) — um sistema vigesimal escondido dentro de uma língua que, fora isso, conta em base 10.',
        table: {
          head: ['Número', 'Burushaski', 'Por quê'],
          rows: [
            ['20', 'altár', 'palavra própria, o novo “degrau”'],
            ['40', 'alto-altár', '“dois-vintes” (2 × 20)'],
            ['60', 'iski-altár', '“três-vintes” (3 × 20)'],
          ],
        },
        examples: [
          ['Han, altó, isko, walto.', 'Um, dois, três, quatro.'],
        ],
      },
    ],
    pitfalls: ['Esperar que o sistema de base 10 continue depois do 20: a partir daí, os números se constroem em torno de múltiplos de 20, não de 10.'],
    quiz: [
      { question: 'A partir de que número o burushaski passa a contar em base 20?', options: ['20', '10', '100'], answer: '20', explanation: '“Altár” (20) é o novo “degrau”: 40, 60, 80 se constroem como múltiplos dele.' },
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
          ['Híre iríṅ.', 'A mão do homem. (p. 177: a mão sempre tem dono, por isso leva também o prefixo “i-”)'],
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
];
