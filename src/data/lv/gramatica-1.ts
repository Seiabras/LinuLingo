import type { GrammarTopic } from '../types';

/** Tópicos da aba Gramática do letão, do A1.1 ao B1.1 (lv-g1 … lv-g13). */
export const GRAMMAR: GrammarTopic[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'lv-g1',
    level: 'A1.1',
    title: 'Pronúncia: os mácrons, as palatais ģ ķ ļ ņ, o e aberto e a tônica na 1ª sílaba',
    emoji: '🔤',
    summary: 'O letão se lê quase como se escreve, e isso é ótimo para o brasileiro. Três coisas pedem atenção: o mácron (ā ē ī ū) marca vogal longa e muda o sentido (sāls é sal, sals é geada); as letras com vírgula embaixo (ģ ķ ļ ņ) são sons “molhados”, e ļ e ņ são o nosso lh e nh; e a tônica cai quase sempre na primeira sílaba.',
    sections: [
      {
        text: 'O alfabeto letão tem 33 letras: a ā b c č d e ē f g ģ h i ī j k ķ l ļ m n ņ o p r s š t u ū v z ž. Não há q, w, x nem y. As letras com sinal são letras próprias, não enfeites: ā vem depois de a no dicionário, š depois de s. O letão é uma língua báltica, prima do lituano (lv diena, lt diena: dia; lv saule, lt saulė: sol), mas as duas não se entendem sem estudo. Séculos de convivência deixaram palavras do alemão (stunda: hora; ķēķis: cozinha), do russo antigo (grāmata: livro; baznīca: igreja) e do livônio, uma língua fínica da costa (māja: casa; laiva: barco). O app usa o letão padrão, o “latviešu literārā valoda”.',
      },
      {
        heading: 'A tônica na primeira sílaba',
        text: 'Em quase todas as palavras, a sílaba forte é a primeira: RĪ-ga, LAT-vi-ja, GRĀ-ma-ta. Isso vale também para palavras compridas e, na fala comum, para muitas palavras estrangeiras. E atenção: tônica não é o mesmo que vogal longa. Uma vogal com mácron continua longa mesmo fora da sílaba tônica: em “grāmata” o ā é longo e forte; em “kafejnīca” (café, o lugar) a tônica está no KA, mas o ī também se alonga.',
        table: {
          head: ['Palavra', 'IPA', 'Português'],
          rows: [
            ['Rīga', '[ˈriːɡa]', 'Riga'],
            ['Latvija', '[ˈlatvija]', 'Letônia'],
            ['grāmata', '[ˈɡraːmata]', 'livro'],
            ['kafejnīca', '[ˈkafejniːtsa]', 'café (o lugar)'],
            ['paldies', '[ˈpaldies]', 'obrigado'],
          ],
        },
        examples: [
          ['Rīga ir Latvijas galvaspilsēta.', '[ˈriːɡa ir ˈlatvijas ˈɡalvaspilsæːta] Riga é a capital da Letônia.'],
          ['Paldies par grāmatu!', 'Obrigado pelo livro!'],
        ],
      },
      {
        heading: 'Os mácrons: vogal curta × vogal longa',
        text: 'O traço em cima (ā, ē, ī, ū) quer dizer que a vogal dura mais ou menos o dobro. Não é acento de tônica: é duração, e ela muda o sentido da palavra. Para o brasileiro, que não distingue vogais pela duração, o segredo é exagerar no começo: “saaals”. O o não leva mácron, e as vogais curtas são sempre bem nítidas, nunca reduzidas como o nosso “e” final de “leite”.',
        table: {
          head: ['Curta', 'Sentido', 'Longa', 'Sentido'],
          rows: [
            ['sals [ˈsals]', 'geada', 'sāls [ˈsaːls]', 'sal'],
            ['kazas [ˈkazas]', 'cabras', 'kāzas [ˈkaːzas]', 'casamento (a festa)'],
            ['pile [ˈpile]', 'gota', 'pīle [ˈpiːle]', 'pato'],
            ['lapa [ˈlapa]', 'folha', 'lāpa [ˈlaːpa]', 'tocha'],
          ],
        },
        examples: [
          ['Lūdzu, sāli!', '[ˈluːdzu ˈsaːli] O sal, por favor!'],
          ['Upē peld pīle.', 'Um pato nada no rio.'],
          ['Kāzas būs vasarā.', 'O casamento vai ser no verão.'],
        ],
      },
      {
        heading: 'As palatais ģ ķ ļ ņ',
        text: 'A virgulinha embaixo (ou em cima, no ģ) indica um som “molhado”, feito com o meio da língua colado no céu da boca. Duas são fáceis para nós: ļ é o nosso lh de “filho” e ņ é o nosso nh de “ninho”. As outras duas pedem treino: ķ [c] soa entre “qui” e “tchi”, e ģ [ɟ] soa entre “gui” e “dji”, mas sem chiar. A diferença muda o sentido: “gala” é “do fim”, “gaļa” é “carne”.',
        table: {
          head: ['Letra', 'Som', 'Exemplo', 'IPA', 'Português'],
          rows: [
            ['ļ', '[ʎ] como o lh de “filho”', 'gaļa, ļoti', '[ˈɡaʎa], [ˈʎuoti]', 'carne, muito'],
            ['ņ', '[ɲ] como o nh de “ninho”', 'suņi', '[ˈsuɲi]', 'cachorros'],
            ['ķ', '[c] entre “qui” e “tchi”', 'ķirsis', '[ˈcirsis]', 'cereja'],
            ['ģ', '[ɟ] entre “gui” e “dji”', 'ģimene', '[ˈɟimene]', 'família'],
          ],
        },
        examples: [
          ['Mana ģimene ir ļoti liela.', '[ˈmana ˈɟimene ir ˈʎuoti ˈliela] Minha família é muito grande.'],
          ['Es neēdu gaļu.', 'Eu não como carne.'],
        ],
      },
      {
        heading: 'O e aberto e o e fechado',
        text: 'A letra e (e também ē) tem dois sons, e a escrita não mostra qual: o fechado [e], como em “vê”, e o aberto [æ], ainda mais aberto que o nosso “é” de “pé”. A regra geral olha para a sílaba seguinte: se nela vem a, ā, u, ū ou o, o e é aberto; se vem i, ī, e, ē, ie ou uma palatal, o e é fechado. Por isso a mesma palavra muda de som ao mudar a terminação. Há exceções, e em alguns casos o som distingue palavras: aprenda junto com a palavra.',
        table: {
          head: ['Palavra', 'IPA', 'Por quê', 'Português'],
          rows: [
            ['meža', '[ˈmæʒa]', 'depois vem a: aberto', 'da floresta'],
            ['meži', '[ˈmeʒi]', 'depois vem i: fechado', 'florestas'],
            ['zeme', '[ˈzeme]', 'depois vem e: fechado', 'terra'],
            ['vēl', '[ˈveːl]', 'palavra própria', 'ainda, mais'],
            ['vēl', '[ˈvæːl]', 'palavra própria', 'deseja'],
          ],
        },
        examples: [
          ['Latvijā ir daudz mežu.', 'Na Letônia há muitas florestas.'],
          ['Vai vēl kafiju?', 'Mais café?'],
        ],
      },
      {
        heading: 'O “o”, os ditongos ie e uo e as outras consoantes',
        text: 'Em palavras nativas, a letra o não é um “ô”: é o ditongo [uo], quase “uô”. Em palavras estrangeiras, o o é um “ó” simples (kino, foto). O ditongo ie soa “iê”: diena, piens. Das consoantes: c é sempre [ts] (cik soa “tsik”), č é “tch”, š é “ch” de “chave”, ž é o “j” de “já”, dz e dž são “dz” e “dj”. O j é o nosso “i” de “iate”. O r é vibrado com a ponta da língua, como em “caro”. O v depois de vogal, no fim da sílaba, soa quase “u”: tēvs [ˈteːu̯s]. E as consoantes se assimilam à seguinte: labs (bom) soa [ˈlaps].',
        table: {
          head: ['Escrita', 'Som', 'Exemplo', 'IPA', 'Português'],
          rows: [
            ['o (nativo)', '[uo] “uô”', 'roka, logs', '[ˈruoka], [ˈluoɡs]', 'mão, janela'],
            ['o (estrangeiro)', '[ɔ] “ó”', 'kino', '[ˈkinɔ]', 'cinema'],
            ['ie', '[ie] “iê”', 'diena, piens', '[ˈdiena], [ˈpiens]', 'dia, leite'],
            ['c', '[ts]', 'cik', '[ˈtsik]', 'quanto'],
            ['č / š / ž', '[tʃ] / [ʃ] / [ʒ]', 'čau, šodien, žurnāls', '[ˈtʃau], [ˈʃuodien], [ˈʒurnaːls]', 'tchau, hoje, revista'],
            ['ai, au, ei, ui', 'ditongos', 'laiks, saule, puika', '[ˈlaiks], [ˈsaule], [ˈpuika]', 'tempo, sol, menino'],
          ],
        },
        examples: [
          ['Šodien ir silta diena.', '[ˈʃuodien ir ˈsilta ˈdiena] Hoje é um dia quente.'],
          ['Cik maksā piens?', 'Quanto custa o leite?'],
          ['Puika atver logu.', 'O menino abre a janela.'],
        ],
      },
      {
        heading: 'Os tons: só para reconhecer',
        text: 'O letão tem também entoações de sílaba: a sílaba longa pode ser prolongada por igual, cair, ou ser “quebrada” por um aperto da garganta. No letão central há três, mas muitos falantes, sobretudo em Riga, distinguem só duas, e a escrita padrão não as marca. Poucas palavras dependem só do tom, e o contexto resolve. No começo, concentre-se na duração (os mácrons), nas palatais e na tônica: com isso você já é bem entendido.',
      },
    ],
    pitfalls: [
      'Ignorar o mácron: “sals” é geada, “sāls” é sal; “kazas” são cabras, “kāzas” é um casamento. A vogal longa dura o dobro, mesmo fora da tônica.',
      'Pôr a tônica no fim, como em português: é LAT-vi-ja, RĪ-ga, PAL-dies, e não “Latví-ja”.',
      'Ler o o de palavras letãs como “ô”: roka soa “ruôka”, ļoti soa “lhuôti”.',
      'Ler o c como “k” ou “s”: em letão o c é sempre [ts]: cik soa “tsik”, cukurs (açúcar) soa “tsukurs”.',
      'Trocar as letras com vírgula pelas do lituano (ą, ę, ė, į, ų): em letão só existem ā ē ī ū para as vogais longas e ģ ķ ļ ņ para as palatais.',
    ],
    quiz: [
      {
        question: 'O que significa “sāls”, com ā longo?',
        options: ['sal', 'geada', 'sala'],
        answer: 'sal',
        explanation: 'sāls [ˈsaːls] é sal; sals [ˈsals], com a curta, é geada. O mácron marca a vogal longa e muda o sentido.',
      },
      {
        question: 'Em que sílaba cai a tônica de quase todas as palavras letãs?',
        options: ['na primeira', 'na penúltima', 'na última'],
        answer: 'na primeira',
        explanation: 'A tônica letã fica na primeira sílaba: RĪ-ga, GRĀ-ma-ta, LAT-vi-ja.',
      },
      {
        question: 'Como soa o o de “roka” (mão)?',
        options: ['[uo]', '[ɔ]', '[oː]'],
        answer: '[uo]',
        explanation: 'Em palavras nativas, o o é o ditongo [uo]: roka [ˈruoka]. O [ɔ] aparece em palavras estrangeiras, como kino (cinema).',
      },
      {
        question: 'Qual letra letã soa como o nosso lh de “filho”?',
        options: ['ļ', 'l', 'ķ'],
        answer: 'ļ',
        explanation: 'ļ é [ʎ], o lh português: gaļa (carne), ļoti (muito). E ņ é o nosso nh.',
      },
      {
        question: 'Em “meži” (florestas), o e é aberto ou fechado?',
        options: ['fechado, porque depois vem i', 'aberto, porque depois vem i', 'mudo'],
        answer: 'fechado, porque depois vem i',
        explanation: 'Antes de sílaba com i, ī, e, ē o e é fechado: meži [ˈmeʒi]. Antes de a, u, o é aberto: meža [ˈmæʒa].',
      },
    ],
  },
  {
    id: 'lv-g2',
    level: 'A1.1',
    title: 'Saudações, pronomes pessoais e o verbo būt (esmu, esi, ir)',
    emoji: '👋',
    summary: '“Labdien” é o bom-dia de toda hora, “sveiki” é o oi, “paldies” é obrigado e “uz redzēšanos” é até logo. Os pronomes separam ele (viņš) e ela (viņa), e “jūs” é tanto “vocês” quanto o “o senhor, a senhora”. O verbo būt (ser, estar) é irregular: es esmu, tu esi, viņš ir; e a negação de “ir” é “nav”.',
    sections: [
      {
        heading: 'Cumprimentar, agradecer e se despedir',
        text: 'Os letões são educados e um pouco reservados com quem não conhecem: na loja, no ônibus ou no escritório, “labdien” é a escolha segura. “Sveiki” é mais leve e serve para uma ou várias pessoas; entre amigos, diz-se “sveiks” a um homem e “sveika” a uma mulher, e muita gente usa “čau”. “Lūdzu” é uma palavra-coringa: quer dizer “por favor”, “aqui está” e “de nada”. Repare que labdien, labrīt e labvakar se escrevem numa palavra só.',
        table: {
          head: ['Letão', 'Quando', 'Português'],
          rows: [
            ['Labrīt!', 'de manhã', 'Bom dia!'],
            ['Labdien!', 'durante o dia, sempre educado', 'Bom dia! Boa tarde!'],
            ['Labvakar!', 'à noite, ao chegar', 'Boa noite!'],
            ['Ar labu nakti!', 'na hora de dormir', 'Boa noite! (despedida)'],
            ['Sveiki! / Sveiks! / Sveika!', 'informal', 'Oi! Olá!'],
            ['Čau!', 'entre amigos, ao chegar e ao sair', 'Oi! Tchau!'],
            ['Uz redzēšanos!', 'ao sair', 'Até logo! Adeus!'],
            ['Atā!', 'ao sair, informal', 'Tchau!'],
            ['Paldies! / Liels paldies!', 'agradecer', 'Obrigado! / Muito obrigado!'],
            ['Lūdzu!', 'pedir, entregar, responder a “paldies”', 'Por favor! Aqui está! De nada!'],
            ['Atvainojiet!', 'pedir licença ou desculpas', 'Com licença! Desculpe!'],
          ],
        },
        examples: [
          ['Labdien! Kā jūs sauc?', 'Bom dia! Como o senhor se chama?'],
          ['Mani sauc Ana. Es esmu no Brazīlijas.', 'Eu me chamo Ana. Eu sou do Brasil.'],
          ['Kā tev iet? — Labi, paldies! Un tev?', 'Como vai? — Bem, obrigada! E você?'],
          ['Priecājos iepazīties!', 'Prazer em conhecer!'],
          ['Liels paldies! — Lūdzu!', 'Muito obrigado! — De nada!'],
        ],
      },
      {
        heading: 'Os pronomes pessoais',
        text: 'O letão tem ele (viņš) e ela (viņa), e no plural também separa eles (viņi) e elas (viņas). Não existe “isso” neutro para coisas: uma mesa (galds) é “viņš” ou “tas”, uma casa (māja) é “viņa” ou “tā”, conforme o gênero da palavra. O sujeito pode sumir quando o verbo já mostra a pessoa, mas no começo é mais seguro dizê-lo.',
        table: {
          head: ['Pessoa', 'Letão', 'Português'],
          rows: [
            ['1ª sing.', 'es', 'eu'],
            ['2ª sing.', 'tu', 'você, tu (íntimo)'],
            ['3ª sing.', 'viņš / viņa', 'ele / ela'],
            ['1ª pl.', 'mēs', 'nós, a gente'],
            ['2ª pl.', 'jūs', 'vocês; o senhor, a senhora'],
            ['3ª pl.', 'viņi / viņas', 'eles / elas'],
          ],
        },
        examples: [
          ['Viņš ir Jānis, un viņa ir Līga.', 'Ele é o Jānis, e ela é a Līga.'],
          ['Mēs esam draugi.', 'Nós somos amigos.'],
          ['Viņas ir no Liepājas.', 'Elas são de Liepāja.'],
        ],
      },
      {
        heading: 'Tu ou jūs?',
        text: 'O “tu” é para amigos, família, crianças e colegas mais próximos. Com desconhecidos adultos, no comércio, com o médico ou com o chefe, usa-se “jūs”, o mesmo pronome do plural, com o verbo no plural: “Kā jūs sauc?”, “Vai jūs esat no Rīgas?”. Em cartas e e-mails, o “Jūs” de cortesia se escreve com maiúscula. Na dúvida, comece com “jūs”: se a pessoa quiser, ela mesma propõe o “tu”.',
        examples: [
          ['Vai jūs runājat angliski?', 'O senhor fala inglês?'],
          ['Tu esi mans draugs.', 'Você é meu amigo.'],
          ['Atvainojiet, vai jūs esat skolotāja?', 'Com licença, a senhora é professora?'],
        ],
      },
      {
        heading: 'O verbo būt: ser e estar',
        text: 'Como no inglês, um verbo só faz o papel de “ser” e de “estar”: būt. No presente ele é irregular e muda a cada pessoa, mas a 3ª pessoa é a mesma no singular e no plural (ir), como acontece com todos os verbos letões. Para negar, gruda-se “ne” no verbo (neesmu, neesi), e a 3ª pessoa tem forma própria: “nav”, nunca “neir”.',
        table: {
          head: ['Pessoa', 'Afirmativo', 'Negativo', 'Português'],
          rows: [
            ['es', 'esmu', 'neesmu', 'eu sou, estou / não sou'],
            ['tu', 'esi', 'neesi', 'você é, está / não é'],
            ['viņš, viņa', 'ir', 'nav', 'ele, ela é / não é'],
            ['mēs', 'esam', 'neesam', 'nós somos / não somos'],
            ['jūs', 'esat', 'neesat', 'vocês são / não são'],
            ['viņi, viņas', 'ir', 'nav', 'eles, elas são / não são'],
          ],
        },
        examples: [
          ['Es esmu brazīlietis, un viņa ir brazīliete.', 'Eu sou brasileiro, e ela é brasileira.'],
          ['Tu esi students?', 'Você é estudante?'],
          ['Viņš nav mājās.', 'Ele não está em casa.'],
          ['Mēs neesam no Rīgas.', 'Nós não somos de Riga.'],
          ['Kur jūs esat? — Mēs esam Jūrmalā.', 'Onde vocês estão? — Estamos em Jūrmala.'],
        ],
      },
      {
        heading: 'Dizer o nome e de onde se é',
        text: 'Para dizer o nome, o letão usa “mani sauc”, literalmente “me chamam”: Mani sauc Pedro. A pergunta é “Kā tevi sauc?” (íntimo) ou “Kā jūs sauc?” (educado). Para a origem: “Es esmu no…”, e o país vai para o genitivo, com terminação própria: Brazīlija → no Brazīlijas, Latvija → no Latvijas, Rīga → no Rīgas. Nacionalidade tem masculino e feminino: brazīlietis, brazīliete; latvietis, latviete.',
        examples: [
          ['Kā tevi sauc? — Mani sauc Pedro.', 'Como você se chama? — Eu me chamo Pedro.'],
          ['No kurienes jūs esat? — Es esmu no Brazīlijas, no Sanpaulu.', 'De onde o senhor é? — Sou do Brasil, de São Paulo.'],
          ['Viņš ir latvietis, no Cēsīm.', 'Ele é letão, de Cēsis.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “neir” para negar “ir”: a forma certa é “nav”. Viņš nav mājās (ele não está em casa).',
      'Tratar desconhecidos por “tu”: com adultos que você não conhece, use “jūs” e o verbo no plural (jūs esat, jūs runājat).',
      'Separar o “ne” do verbo: a negação vem grudada, numa palavra só: neesmu, nerunāju.',
      'Escrever “lab dien” ou “lab rīt” separado: labdien, labrīt e labvakar são uma palavra só.',
      'Traduzir “meu nome é” ao pé da letra: o natural é “Mani sauc…”.',
    ],
    quiz: [
      {
        question: 'Como se diz “ele não está em casa”?',
        options: ['Viņš nav mājās.', 'Viņš neir mājās.', 'Viņš ne ir mājās.'],
        answer: 'Viņš nav mājās.',
        explanation: 'A negação de “ir” é “nav”, uma forma própria. As outras pessoas só recebem ne-: neesmu, neesi, neesam.',
      },
      {
        question: 'Complete: Mēs ___ no Brazīlijas.',
        options: ['esam', 'esat', 'esmu'],
        answer: 'esam',
        explanation: 'mēs esam (nós somos). esat é de jūs; esmu é de es.',
      },
      {
        question: 'Qual cumprimento é o mais seguro para entrar numa loja?',
        options: ['Labdien!', 'Čau!', 'Atā!'],
        answer: 'Labdien!',
        explanation: '“Labdien” é educado e serve o dia inteiro. “Čau” é para amigos, e “atā” é despedida.',
      },
      {
        question: 'Como você pergunta o nome de um senhor desconhecido?',
        options: ['Kā jūs sauc?', 'Kā tevi sauc?', 'Kā tu esi?'],
        answer: 'Kā jūs sauc?',
        explanation: 'Com desconhecidos se usa jūs: “Kā jūs sauc?”. “Kā tevi sauc?” é a forma íntima.',
      },
      {
        question: 'O que “lūdzu” NÃO quer dizer?',
        options: ['obrigado', 'por favor', 'de nada'],
        answer: 'obrigado',
        explanation: 'Obrigado é “paldies”. “Lūdzu” é por favor, aqui está e de nada.',
      },
    ],
  },
  {
    id: 'lv-g3',
    level: 'A1.1',
    title: 'Os números de 0 a 20: idade, preço e hora',
    emoji: '🔢',
    summary: 'De 1 a 9, os números letões têm masculino e feminino (divi brāļi, divas māsas); trīs não muda. De 11 a 19, junta-se “-padsmit” (vienpadsmit, divpadsmit), e as dezenas levam “-desmit” (divdesmit). Com eles você já diz a idade (Man ir divdesmit gadu), pergunta o preço (Cik tas maksā?) e marca a hora (pulksten septiņos).',
    sections: [
      {
        heading: 'De 0 a 10',
        text: 'Os números de 1 a 9 funcionam como adjetivos: concordam em gênero com a palavra que vem depois. O masculino termina em -s ou -i (viens, divi, četri), o feminino em -a ou -as (viena, divas, četras). O 3, trīs, é igual nos dois gêneros. O 10, desmit, nunca muda. Para contar sem nada depois (numa lista, num telefone), usa-se o masculino.',
        table: {
          head: ['Número', 'Masculino', 'Feminino'],
          rows: [
            ['0', 'nulle', 'nulle'],
            ['1', 'viens', 'viena'],
            ['2', 'divi', 'divas'],
            ['3', 'trīs', 'trīs'],
            ['4', 'četri', 'četras'],
            ['5', 'pieci', 'piecas'],
            ['6', 'seši', 'sešas'],
            ['7', 'septiņi', 'septiņas'],
            ['8', 'astoņi', 'astoņas'],
            ['9', 'deviņi', 'deviņas'],
            ['10', 'desmit', 'desmit'],
          ],
        },
        examples: [
          ['Man ir divi brāļi un viena māsa.', 'Eu tenho dois irmãos e uma irmã.'],
          ['Divas kafijas, lūdzu!', 'Dois cafés, por favor!'],
          ['Klasē ir trīs meitenes un četri puiši.', 'Na turma há três meninas e quatro meninos.'],
        ],
      },
      {
        heading: 'De 11 a 20',
        text: 'De 11 a 19, o número da unidade se junta a “-padsmit” (de “pa desmit”, “sobre o dez”), numa palavra só: vienpadsmit, divpadsmit. As dezenas juntam o número a “-desmit”: divdesmit é “dois dez”, o 20; trīsdesmit é o 30. Repare que viens, divi, četri perdem a terminação na junção: vien-, div-, četr-. Nenhum número de 10 a 20 muda com o gênero.',
        table: {
          head: ['Número', 'Letão', 'Número', 'Letão'],
          rows: [
            ['11', 'vienpadsmit', '16', 'sešpadsmit'],
            ['12', 'divpadsmit', '17', 'septiņpadsmit'],
            ['13', 'trīspadsmit', '18', 'astoņpadsmit'],
            ['14', 'četrpadsmit', '19', 'deviņpadsmit'],
            ['15', 'piecpadsmit', '20', 'divdesmit'],
          ],
        },
        examples: [
          ['Mājas numurs ir četrpadsmit.', 'O número da casa é catorze.'],
          ['Autobuss nāk pēc piecpadsmit minūtēm.', 'O ônibus vem daqui a quinze minutos.'],
        ],
      },
      {
        heading: 'A idade: “man ir … gadi”',
        text: 'Em letão, a idade se “tem”: “Man ir …”, literalmente “a mim há …”. A pergunta é “Cik tev ir gadu?” (íntimo) ou “Cik jums ir gadu?” (educado). A palavra “ano” muda conforme o número: com 1, “viens gads”; de 2 a 9, “gadi” (astoņi gadi); com 10, com 11 a 19 e com as dezenas, o costume é “gadu” (divdesmit gadu).',
        examples: [
          ['Cik tev ir gadu? — Man ir divdesmit gadu.', 'Quantos anos você tem? — Tenho vinte anos.'],
          ['Viņam ir septiņi gadi.', 'Ele tem sete anos.'],
          ['Manai māsai ir vienpadsmit gadu.', 'Minha irmã tem onze anos.'],
        ],
      },
      {
        heading: 'O preço e a hora',
        text: 'Para o preço: “Cik tas maksā?” (Quanto custa isso?) ou só “Cik maksā?”. A palavra “eiro” não muda: viens eiro, divi eiro. Para a hora: “Cik ir pulkstenis?” (Que horas são?), e a resposta é “Pulkstenis ir trīs” ou só “Ir trīs”. Para dizer “às sete”, usa-se “pulksten” e o número numa forma de lugar, terminada em -os: pulksten septiņos, pulksten astoņos, pulksten divos; o 3 vira “trijos”.',
        table: {
          head: ['Hora', 'Letão'],
          rows: [
            ['à uma', 'pulksten vienos'],
            ['às duas', 'pulksten divos'],
            ['às três', 'pulksten trijos'],
            ['às sete', 'pulksten septiņos'],
            ['às dez', 'pulksten desmitos'],
          ],
        },
        examples: [
          ['Cik maksā kafija? — Trīs eiro.', 'Quanto custa o café? — Três euros.'],
          ['Cik ir pulkstenis? — Pulkstenis ir desmit.', 'Que horas são? — São dez horas.'],
          ['Vilciens uz Siguldu atiet pulksten astoņos.', 'O trem para Sigulda sai às oito.'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre a forma masculina: com palavra feminina, o número também é feminino: divas māsas, četras kafijas, e não “divi māsas”.',
      'Mudar o trīs ou o desmit: trīs e desmit, e todos de 10 a 20, são iguais nos dois gêneros.',
      'Escrever os números de 11 a 19 separados: é vienpadsmit, divpadsmit, numa palavra só.',
      'Dizer “es esmu divdesmit gadi”: a idade se tem, no dativo: “Man ir divdesmit gadu”.',
      'Dizer “pulksten septiņi” para marcar um horário: “às sete” é “pulksten septiņos”.',
    ],
    quiz: [
      {
        question: 'Como se diz 12?',
        options: ['divpadsmit', 'divdesmit', 'divi desmit'],
        answer: 'divpadsmit',
        explanation: 'De 11 a 19 se usa -padsmit: divpadsmit (12). divdesmit é 20.',
      },
      {
        question: 'Complete: Man ir ___ māsas.',
        options: ['divas', 'divi', 'div'],
        answer: 'divas',
        explanation: 'māsa é feminina, então o número vai para o feminino: divas māsas.',
      },
      {
        question: 'Qual destes números é igual no masculino e no feminino?',
        options: ['trīs', 'četri', 'pieci'],
        answer: 'trīs',
        explanation: 'trīs não muda: trīs brāļi, trīs māsas. četri e pieci têm feminino (četras, piecas).',
      },
      {
        question: 'O que quer dizer “pulksten astoņos”?',
        options: ['às oito', 'oito horas de viagem', 'faltam oito minutos'],
        answer: 'às oito',
        explanation: '“pulksten” + número terminado em -os marca a hora de algo: pulksten astoņos, às oito.',
      },
      {
        question: 'Como você pergunta a idade de um desconhecido, com educação?',
        options: ['Cik jums ir gadu?', 'Cik tev ir gadu?', 'Cik jūs esat gadi?'],
        answer: 'Cik jums ir gadu?',
        explanation: 'A idade se “tem” (Man ir…), e com desconhecidos se usa jūs, no dativo jums.',
      },
    ],
  },
  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'lv-g4',
    level: 'A1.2',
    title: 'O presente das três conjugações, a negação ne- e “man patīk”',
    emoji: '🏃',
    summary: 'Os verbos letões se dividem em três conjugações, e o presente muda conforme a pessoa: es runāju, tu runā, mēs runājam. A boa notícia: a 3ª pessoa é igual no singular e no plural (viņš runā, viņi runā). Para negar, gruda-se ne- no verbo (nerunāju), e a negação dupla é obrigatória: “Es neko nezinu”. Para “gostar”, diz-se “man patīk”.',
    sections: [
      {
        heading: 'As três conjugações',
        text: 'O infinitivo termina sempre em -t (ou -ties, nos reflexivos, que virão depois). A 1ª conjugação reúne verbos curtos, de uma sílaba (iet, ēst, dzert, nākt), com formas que precisam ser decoradas. A 2ª reúne verbos em -ot, -āt, -ēt que ganham um -j- no presente (runāt → runāju, dzīvot → dzīvoju): é a mais regular. A 3ª reúne verbos em -īt, -ināt e alguns em -ēt e -āt (lasīt → lasu, gribēt → gribu, zināt → zinu). Em todas, o “es” termina em -u, e o “viņš” e o “viņi” são iguais.',
        table: {
          head: ['Pessoa', 'runāt (falar), 2ª', 'lasīt (ler), 3ª', 'gribēt (querer), 3ª', 'dzert (beber), 1ª'],
          rows: [
            ['es', 'runāju', 'lasu', 'gribu', 'dzeru'],
            ['tu', 'runā', 'lasi', 'gribi', 'dzer'],
            ['viņš, viņa', 'runā', 'lasa', 'grib', 'dzer'],
            ['mēs', 'runājam', 'lasām', 'gribam', 'dzeram'],
            ['jūs', 'runājat', 'lasāt', 'gribat', 'dzerat'],
            ['viņi, viņas', 'runā', 'lasa', 'grib', 'dzer'],
          ],
        },
        examples: [
          ['Es runāju portugāliski un mazliet latviski.', 'Eu falo português e um pouco de letão.'],
          ['Viņa lasa grāmatu.', 'Ela lê um livro.'],
          ['Mēs dzīvojam Rīgā.', 'Nós moramos em Riga.'],
          ['Ko tu gribi? — Es gribu tēju.', 'O que você quer? — Eu quero chá.'],
        ],
      },
      {
        heading: 'Os verbos curtos da 1ª conjugação',
        text: 'Os verbos da 1ª conjugação são poucos, mas estão entre os mais usados, e cada um tem suas manias: a raiz pode mudar (iet → eju), e a consoante final pode trocar no “tu” (nākt → tu nāc) ou em todo o presente (braukt → braucu). Vale decorar o “es”, o “tu” e o “viņš” de cada um: o resto segue o padrão -am, -at.',
        table: {
          head: ['Infinitivo', 'es', 'tu', 'viņš, viņi', 'mēs', 'Português'],
          rows: [
            ['iet', 'eju', 'ej', 'iet', 'ejam', 'ir (a pé)'],
            ['ēst', 'ēdu', 'ēd', 'ēd', 'ēdam', 'comer'],
            ['nākt', 'nāku', 'nāc', 'nāk', 'nākam', 'vir'],
            ['braukt', 'braucu', 'brauc', 'brauc', 'braucam', 'ir (de carro, ônibus…)'],
            ['ņemt', 'ņemu', 'ņem', 'ņem', 'ņemam', 'pegar'],
          ],
        },
        examples: [
          ['Es eju uz darbu.', 'Eu vou para o trabalho (a pé).'],
          ['Vai tu nāc? — Jā, es nāku!', 'Você vem? — Sim, estou indo!'],
          ['Viņi brauc uz Jūrmalu.', 'Eles vão para Jūrmala.'],
        ],
      },
      {
        heading: 'Um presente só',
        text: 'O letão não tem o “estou fazendo”: o presente simples cobre o hábito e o que está acontecendo agora. Para marcar o “agora”, basta um advérbio: tagad (agora), šobrīd (neste momento). E, como em português, o presente pode falar de um futuro próximo e combinado.',
        examples: [
          ['Ko tu dari? — Es tagad lasu.', 'O que você está fazendo? — Estou lendo agora.'],
          ['Katru rītu es dzeru kafiju.', 'Toda manhã eu tomo café.'],
          ['Rīt mēs braucam uz Cēsīm.', 'Amanhã a gente vai para Cēsis.'],
        ],
      },
      {
        heading: 'A negação: ne- grudado e a negação dupla',
        text: 'Para negar, o letão gruda “ne” no começo do verbo, numa palavra só: nerunāju, nezinu, nedzer. E, como no português popular, a negação é dupla: palavras como neko (nada), neviens (ninguém), nekad (nunca) e nekur (em lugar nenhum) exigem o verbo também negado. “Es neko nezinu” é o certo; “es neko zinu” está errado.',
        table: {
          head: ['Palavra negativa', 'Exemplo', 'Português'],
          rows: [
            ['neko', 'Es neko nezinu.', 'Eu não sei nada.'],
            ['neviens', 'Neviens nenāk.', 'Ninguém vem.'],
            ['nekad', 'Viņš nekad neēd gaļu.', 'Ele nunca come carne.'],
            ['nekur', 'Mēs nekur neejam.', 'A gente não vai a lugar nenhum.'],
          ],
        },
        examples: [
          ['Es nerunāju krieviski.', 'Eu não falo russo.'],
          ['Viņa nedzer kafiju.', 'Ela não toma café.'],
          ['Es nekad neēdu zivis.', 'Eu nunca como peixe.'],
        ],
      },
      {
        heading: '“Man patīk”: gostar',
        text: '“Gostar” em letão funciona como o “agradar” do português: a coisa de que se gosta é o sujeito, e quem gosta vai para o dativo: “Man patīk kafija”, literalmente “A mim agrada o café”. As formas de dativo dos pronomes são man, tev, viņam, viņai, mums, jums, viņiem, viņām. O verbo “patīk” não muda: man patīk suņi, tev patīk Rīga. A negação é “nepatīk”.',
        examples: [
          ['Man patīk Rīga.', 'Eu gosto de Riga.'],
          ['Vai tev patīk kafija?', 'Você gosta de café?'],
          ['Viņam nepatīk lietus.', 'Ele não gosta de chuva.'],
          ['Mums patīk dziedāt.', 'A gente gosta de cantar.'],
        ],
      },
    ],
    pitfalls: [
      'Separar o ne- do verbo: é “nerunāju”, uma palavra só, e não “ne runāju”.',
      'Esquecer a negação dupla: “Es neko nezinu” (não sei nada), e não “Es neko zinu”.',
      'Pôr “viņi” com terminação de plural: a 3ª pessoa é igual no singular e no plural: viņš runā, viņi runā.',
      'Dizer “es patīk kafija”: quem gosta vai para o dativo: “Man patīk kafija”.',
      'Confundir iet e braukt: iet é ir a pé; para ir de carro, ônibus ou trem usa-se braukt.',
    ],
    quiz: [
      {
        question: 'Complete: Es ___ latviski. (runāt)',
        options: ['runāju', 'runā', 'runājam'],
        answer: 'runāju',
        explanation: 'Com es, a terminação é -u, e os verbos da 2ª conjugação ganham -j-: es runāju.',
      },
      {
        question: 'Como se diz “eu não sei nada”?',
        options: ['Es neko nezinu.', 'Es neko zinu.', 'Es ne zinu neko.'],
        answer: 'Es neko nezinu.',
        explanation: 'A negação é dupla e o ne- vem grudado: neko + nezinu.',
      },
      {
        question: 'Complete: Viņi ___ grāmatu. (lasīt)',
        options: ['lasa', 'lasām', 'lasu'],
        answer: 'lasa',
        explanation: 'A 3ª pessoa é igual no singular e no plural: viņš lasa, viņi lasa.',
      },
      {
        question: 'Como se diz “eu gosto de café”?',
        options: ['Man patīk kafija.', 'Es patīk kafija.', 'Es patīku kafiju.'],
        answer: 'Man patīk kafija.',
        explanation: 'Quem gosta vai para o dativo (man), e a coisa de que se gosta fica no nominativo (kafija).',
      },
      {
        question: 'Qual é o “tu” de nākt (vir)?',
        options: ['tu nāc', 'tu nāk', 'tu nāku'],
        answer: 'tu nāc',
        explanation: 'Na 1ª conjugação, o k de nākt vira c no “tu”: tu nāc. O viņš é nāk.',
      },
    ],
  },
  {
    id: 'lv-g5',
    level: 'A1.2',
    title: 'Masculino e feminino, as seis declinações e o acusativo',
    emoji: '⚖️',
    summary: 'O letão tem dois gêneros, e a terminação quase sempre entrega qual é: -s, -š, -is e -us são masculinos (galds, ceļš, brālis, tirgus); -a e -e são femininos (māja, upe), e alguns -s também (sirds, pils). Não há artigos. O objeto direto vai para o acusativo, que no singular termina em -u ou -i: Es lasu grāmatu. Es ēdu maizi.',
    sections: [
      {
        heading: 'Dois gêneros e nenhum artigo',
        text: 'Não existe “o”, “a”, “um” nem “uma” em letão: “māja” é casa, a casa ou uma casa, e o contexto decide. Também não há neutro: toda palavra é masculina ou feminina, e o gênero nem sempre bate com o do português (saule, o sol, é feminino; ūdens, a água, é masculino). Os substantivos se agrupam em seis declinações, conforme a terminação do nominativo, a forma do dicionário e do sujeito.',
        table: {
          head: ['Declinação', 'Terminação', 'Gênero', 'Exemplos'],
          rows: [
            ['1ª', '-s, -š', 'masculino', 'galds (mesa), draugs (amigo), ceļš (caminho)'],
            ['2ª', '-is (e alguns -s)', 'masculino', 'brālis (irmão), skapis (armário), suns (cachorro), ūdens (água)'],
            ['3ª', '-us', 'masculino', 'tirgus (mercado), alus (cerveja), medus (mel)'],
            ['4ª', '-a', 'feminino (poucos masculinos)', 'māja (casa), grāmata (livro); puika (menino) é masculino'],
            ['5ª', '-e', 'feminino', 'upe (rio), māte (mãe), zeme (terra)'],
            ['6ª', '-s', 'feminino', 'sirds (coração), pils (castelo), nakts (noite), zivs (peixe)'],
          ],
        },
        examples: [
          ['Galds ir liels, bet māja ir maza.', 'A mesa é grande, mas a casa é pequena.'],
          ['Saule spīd.', 'O sol brilha.'],
          ['Rundāles pils ir skaista.', 'O palácio de Rundāle é bonito.'],
        ],
      },
      {
        heading: 'O -s que engana',
        text: 'A terminação -s aparece em três grupos: na 1ª declinação (galds, masculino), em alguns nomes da 2ª (suns, ūdens, mēness: a lua, também masculinos) e na 6ª (sirds, nakts, pils: femininos). Não há como adivinhar pelo som: aprenda cada palavra com o gênero, olhando uma forma que o mostre, como o adjetivo ao lado (liels galds, liela pils). Por sorte, a 6ª declinação é pequena.',
        examples: [
          ['Nakts ir tumša.', 'A noite é escura.'],
          ['Ūdens ir auksts.', 'A água está fria.'],
        ],
      },
      {
        heading: 'O acusativo: o objeto direto',
        text: 'O letão tem casos: a terminação da palavra muda conforme a função na frase. O nominativo é o sujeito e a forma do dicionário. O acusativo é o objeto direto: aquilo que se come, se lê, se vê, se compra. No singular, a regra é curta: as declinações 1ª, 3ª e 4ª terminam em -u; as 2ª, 5ª e 6ª terminam em -i. Como a terminação mostra quem faz o quê, a ordem das palavras é mais livre que em português.',
        table: {
          head: ['Declinação', 'Nominativo', 'Acusativo', 'Português'],
          rows: [
            ['1ª', 'galds / ceļš', 'galdu / ceļu', 'mesa / caminho'],
            ['2ª', 'brālis / suns', 'brāli / suni', 'irmão / cachorro'],
            ['3ª', 'tirgus', 'tirgu', 'mercado'],
            ['4ª', 'māja', 'māju', 'casa'],
            ['5ª', 'upe', 'upi', 'rio'],
            ['6ª', 'sirds / pils', 'sirdi / pili', 'coração / castelo'],
          ],
        },
        examples: [
          ['Es lasu grāmatu.', 'Eu leio um livro.'],
          ['Viņš ēd maizi un sieru.', 'Ele come pão e queijo.'],
          ['Mēs redzam upi.', 'Nós vemos o rio.'],
          ['Tēvs dzer alu, māte dzer ūdeni.', 'O pai toma cerveja, a mãe toma água.'],
          ['Tūristi apmeklē Rundāles pili.', 'Os turistas visitam o palácio de Rundāle.'],
        ],
      },
      {
        heading: 'Os pronomes no acusativo',
        text: 'Os pronomes pessoais também têm acusativo: mani (me), tevi (te), viņu (o, a), mūs (nos), jūs (vos, os senhores), viņus (os), viņas (as). É daí que vem o “Mani sauc…”: “me chamam…”.',
        examples: [
          ['Es tevi mīlu.', 'Eu te amo.'],
          ['Vai jūs mani redzat?', 'Vocês me veem?'],
          ['Mēs viņu labi pazīstam.', 'A gente o conhece bem.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um artigo: “a casa” e “uma casa” são só “māja”.',
      'Achar que toda palavra em -s é masculina: sirds, nakts e pils são femininas (6ª declinação).',
      'Transpor o gênero do português: saule (o sol) é feminino, ūdens (a água) é masculino.',
      'Deixar o objeto no nominativo: “Es lasu grāmata” está errado; o certo é “Es lasu grāmatu”.',
      'Usar -u em todo acusativo: na 2ª, 5ª e 6ª declinações é -i: brāli, upi, sirdi.',
    ],
    quiz: [
      {
        question: 'Qual destas palavras é feminina?',
        options: ['sirds', 'galds', 'tirgus'],
        answer: 'sirds',
        explanation: 'sirds (coração) é da 6ª declinação, feminina, apesar do -s. galds e tirgus são masculinos.',
      },
      {
        question: 'Complete: Es pērku ___. (maize, pão)',
        options: ['maizi', 'maizu', 'maize'],
        answer: 'maizi',
        explanation: 'maize é da 5ª declinação (-e), e o acusativo termina em -i: maizi.',
      },
      {
        question: 'Complete: Viņa lasa ___. (grāmata)',
        options: ['grāmatu', 'grāmati', 'grāmata'],
        answer: 'grāmatu',
        explanation: 'Palavras em -a (4ª declinação) fazem o acusativo em -u: grāmatu.',
      },
      {
        question: 'Qual é o gênero de “ūdens” (água)?',
        options: ['masculino', 'feminino', 'neutro'],
        answer: 'masculino',
        explanation: 'ūdens é masculino, da 2ª declinação: auksts ūdens. O letão não tem neutro.',
      },
    ],
  },
  {
    id: 'lv-g6',
    level: 'A1.2',
    title: '“Man ir” (ter), “man nav” e o genitivo',
    emoji: '🎒',
    summary: 'O letão não tem um verbo “ter”: diz “a mim há”, com quem tem no dativo: Man ir suns (eu tenho um cachorro). Na negação, o que falta vai para o genitivo: Man nav laika (não tenho tempo). O genitivo também marca o dono e vem antes: Annas māja (a casa da Anna), Rīgas centrs (o centro de Riga).',
    sections: [
      {
        heading: '“Man ir”: eu tenho',
        text: 'Para dizer que alguém tem algo, o letão usa o verbo būt na forma “ir” e põe o dono no dativo: “Man ir brālis”, literalmente “A mim há um irmão”. A coisa possuída fica no nominativo, como sujeito. O verbo não muda: é sempre “ir”, no presente, qualquer que seja o dono ou a coisa.',
        table: {
          head: ['Pronome', 'Dativo', 'Exemplo', 'Português'],
          rows: [
            ['es', 'man', 'Man ir suns.', 'Eu tenho um cachorro.'],
            ['tu', 'tev', 'Tev ir laiks?', 'Você tem tempo?'],
            ['viņš', 'viņam', 'Viņam ir mašīna.', 'Ele tem carro.'],
            ['viņa', 'viņai', 'Viņai ir kaķis.', 'Ela tem um gato.'],
            ['mēs', 'mums', 'Mums ir māja Siguldā.', 'Nós temos uma casa em Sigulda.'],
            ['jūs', 'jums', 'Vai jums ir karte?', 'O senhor tem cartão?'],
            ['viņi / viņas', 'viņiem / viņām', 'Viņiem ir dārzs.', 'Eles têm um jardim.'],
          ],
        },
        examples: [
          ['Man ir brālis un māsa.', 'Eu tenho um irmão e uma irmã.'],
          ['Vai tev ir jautājums?', 'Você tem uma pergunta?'],
          ['Annai ir jauns dators.', 'A Anna tem um computador novo.'],
        ],
      },
      {
        heading: '“Man nav”: o que falta vai para o genitivo',
        text: 'Na negação, “ir” vira “nav”, e a coisa que não se tem passa do nominativo para o genitivo: “Man ir laiks” (tenho tempo), mas “Man nav laika” (não tenho tempo). O mesmo vale para dizer que algo não existe ou não está num lugar: “Ledusskapī nav piena” (não tem leite na geladeira).',
        examples: [
          ['Man nav laika.', 'Eu não tenho tempo.'],
          ['Viņam nav mašīnas.', 'Ele não tem carro.'],
          ['Mums nav maizes.', 'A gente não tem pão.'],
          ['Ledusskapī nav piena.', 'Não tem leite na geladeira.'],
        ],
      },
      {
        heading: 'O genitivo singular',
        text: 'O genitivo é o caso do “de”. No singular, as femininas acrescentam -s (māja → mājas, upe → upes), e a 6ª declinação fica igual (sirds → sirds). As masculinas da 1ª e da 2ª trocam a terminação por -a (galds → galda, laiks → laika, brālis → brāļa), e a 3ª fica igual (tirgus → tirgus). Na 2ª declinação a consoante antes do -a costuma mudar (brālis → brāļa, suns → suņa): é a alternância consonantal, que veremos com calma mais adiante.',
        table: {
          head: ['Declinação', 'Nominativo', 'Genitivo', 'Português'],
          rows: [
            ['1ª', 'galds / laiks', 'galda / laika', 'mesa / tempo'],
            ['2ª', 'brālis / suns', 'brāļa / suņa', 'irmão / cachorro'],
            ['3ª', 'tirgus', 'tirgus', 'mercado'],
            ['4ª', 'māja / nauda', 'mājas / naudas', 'casa / dinheiro'],
            ['5ª', 'upe / maize', 'upes / maizes', 'rio / pão'],
            ['6ª', 'sirds / pils', 'sirds / pils', 'coração / castelo'],
          ],
        },
        examples: [
          ['Man nav naudas.', 'Eu não tenho dinheiro.'],
          ['Viņai nav suņa.', 'Ela não tem cachorro.'],
        ],
      },
      {
        heading: 'O dono vem antes: Annas māja',
        text: 'O genitivo também marca o dono, e ao contrário do português ele vem antes da coisa: “Annas māja” é “a casa da Anna”, “tēva draugs” é “o amigo do pai”, “Rīgas centrs” é “o centro de Riga”. Também é o genitivo que dá o “de” de quantidade (tase kafijas, uma xícara de café) e o “de” de origem, depois de “no”: no Rīgas, no Brazīlijas.',
        examples: [
          ['Tā ir Annas māja.', 'Essa é a casa da Anna.'],
          ['Pētera brālis dzīvo Liepājā.', 'O irmão do Pēteris mora em Liepāja.'],
          ['Tase kafijas, lūdzu!', 'Uma xícara de café, por favor!'],
          ['Vecrīga ir Rīgas centrā.', 'A Cidade Velha fica no centro de Riga.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ter”: o letão diz “Man ir…”, com o dono no dativo, e não “Es ir…”.',
      'Deixar a coisa no nominativo na negação: “Man nav laiks” está errado; o certo é “Man nav laika”.',
      'Pôr o dono depois, como em português: “a casa da Anna” é “Annas māja”, com o genitivo antes.',
      'Dizer “neir” em vez de “nav”: a negação de “ir” é sempre “nav”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu não tenho tempo”?',
        options: ['Man nav laika.', 'Man nav laiks.', 'Es neesmu laiks.'],
        answer: 'Man nav laika.',
        explanation: 'Com “nav”, o que falta vai para o genitivo: laiks → laika.',
      },
      {
        question: 'Complete: ___ ir kaķis. (ela tem um gato)',
        options: ['Viņai', 'Viņa', 'Viņam'],
        answer: 'Viņai',
        explanation: 'O dono vai para o dativo: viņa (ela) → viņai. viņam é o dativo de viņš (ele).',
      },
      {
        question: 'Como se diz “a casa da Anna”?',
        options: ['Annas māja', 'māja Annas', 'māja no Anna'],
        answer: 'Annas māja',
        explanation: 'O genitivo do dono vem antes: Annas māja.',
      },
      {
        question: 'Qual é o genitivo de “nauda” (dinheiro)?',
        options: ['naudas', 'naudu', 'nauda'],
        answer: 'naudas',
        explanation: 'As palavras em -a fazem o genitivo em -as: nauda → naudas. naudu é o acusativo.',
      },
    ],
  },
  // ───────────────────────────── A2.1 ─────────────────────────────
  {
    id: 'lv-g7',
    level: 'A2.1',
    title: 'O locativo (Rīgā, mājās) e as preposições',
    emoji: '📍',
    summary: 'Para dizer “em”, o letão não usa preposição: muda a terminação. Rīga → Rīgā (em Riga), skapis → skapī (no armário), upe → upē (no rio). As preposições pedem casos: no, pie, bez, zem pedem o genitivo (no Rīgas, zem galda); ar, par, pa e o uz de direção pedem o acusativo (ar pienu, uz Rīgu). E “uz galda” (em cima da mesa) não é “galdā” (dentro da mesa).',
    sections: [
      {
        heading: 'O locativo: “em” sem preposição',
        text: 'O locativo responde a “kur?” (onde?). No singular, cada declinação tem sua vogal longa: -ā para as 1ª e 4ª (galdā, Rīgā), -ī para a 2ª e a 6ª (skapī, pilī), -ū para a 3ª (tirgū) e -ē para a 5ª (upē). É o caso das cidades e dos países: Latvijā, Brazīlijā, Jūrmalā, Ventspilī. Algumas cidades têm nome no plural e fazem o locativo em -os ou -ās, -īs: Cēsis → Cēsīs. E “em casa” é sempre “mājās”, no plural.',
        table: {
          head: ['Declinação', 'Nominativo', 'Locativo', 'Português'],
          rows: [
            ['1ª', 'galds / mežs', 'galdā / mežā', 'na mesa (dentro) / na floresta'],
            ['2ª', 'skapis', 'skapī', 'no armário'],
            ['3ª', 'tirgus', 'tirgū', 'no mercado'],
            ['4ª', 'Rīga / skola', 'Rīgā / skolā', 'em Riga / na escola'],
            ['5ª', 'upe / Ogre', 'upē / Ogrē', 'no rio / em Ogre'],
            ['6ª', 'pils / Daugavpils', 'pilī / Daugavpilī', 'no castelo / em Daugavpils'],
          ],
        },
        examples: [
          ['Es dzīvoju Rīgā, bet strādāju Jūrmalā.', 'Eu moro em Riga, mas trabalho em Jūrmala.'],
          ['Vasarā mēs esam Kuldīgā.', 'No verão a gente fica em Kuldīga.'],
          ['Centrāltirgū var nopirkt gandrīz visu.', 'No Mercado Central dá para comprar quase tudo.'],
          ['Vai tu esi mājās?', 'Você está em casa?'],
        ],
      },
      {
        heading: 'Preposições com genitivo',
        text: 'No singular, a maioria das preposições de lugar e de tempo pede o genitivo: a palavra ganha a terminação do “de” (galds → galda, māja → mājas). A mais importante é “no” (de, desde): no Rīgas, no Brazīlijas. “Pie” é “junto de”, “na casa de” ou “no (médico, dentista)”.',
        table: {
          head: ['Preposição', 'Sentido', 'Exemplo', 'Português'],
          rows: [
            ['no', 'de, desde', 'no Rīgas', 'de Riga'],
            ['pie', 'junto de, na casa de', 'pie drauga, pie jūras', 'na casa do amigo, à beira-mar'],
            ['uz (lugar)', 'em cima de', 'uz galda', 'em cima da mesa'],
            ['zem', 'debaixo de', 'zem galda', 'debaixo da mesa'],
            ['aiz', 'atrás de', 'aiz mājas', 'atrás da casa'],
            ['bez', 'sem', 'bez cukura', 'sem açúcar'],
            ['pēc', 'depois de', 'pēc darba', 'depois do trabalho'],
            ['pirms', 'antes de', 'pirms koncerta', 'antes do show'],
          ],
        },
        examples: [
          ['Grāmata ir uz galda.', 'O livro está em cima da mesa.'],
          ['Kaķis guļ zem galda.', 'O gato dorme debaixo da mesa.'],
          ['Pēc darba es eju pie drauga.', 'Depois do trabalho eu vou à casa de um amigo.'],
          ['Kafiju bez cukura, lūdzu.', 'Um café sem açúcar, por favor.'],
        ],
      },
      {
        heading: 'Preposições com acusativo e com dativo',
        text: 'Outro grupo pede o acusativo, a forma do objeto (-u, -i): ar (com), par (sobre, a respeito de; por), pa (por, ao longo de), caur (através de), pret (contra). E o “uz” tem dois usos: com genitivo é “em cima de” (uz galda); com acusativo é “para”, a direção (uz Rīgu, uz darbu). “Līdz” (até) pede o dativo: līdz Siguldai.',
        table: {
          head: ['Preposição', 'Caso', 'Exemplo', 'Português'],
          rows: [
            ['uz (direção)', 'acusativo', 'uz Rīgu, uz veikalu', 'para Riga, para a loja'],
            ['ar', 'acusativo', 'ar draugu, ar pienu', 'com um amigo, com leite'],
            ['par', 'acusativo', 'par Latviju', 'sobre a Letônia'],
            ['pa', 'acusativo', 'pa ielu', 'pela rua'],
            ['caur', 'acusativo', 'caur mežu', 'através da floresta'],
            ['līdz', 'dativo', 'līdz Siguldai', 'até Sigulda'],
          ],
        },
        examples: [
          ['Rīt es braucu uz Kuldīgu.', 'Amanhã eu vou para Kuldīga.'],
          ['Tēju ar citronu, lūdzu.', 'Um chá com limão, por favor.'],
          ['Mēs ejam pa Brīvības ielu.', 'A gente anda pela rua Brīvības.'],
          ['No Rīgas līdz Siguldai ir apmēram piecdesmit kilometru.', 'De Riga até Sigulda são uns cinquenta quilômetros.'],
        ],
      },
      {
        heading: 'Onde, para onde e de onde',
        text: 'Três perguntas, três formas: “kur?” (onde?) pede o locativo, sem preposição (Rīgā); “uz kurieni?” (para onde?) pede “uz” com acusativo (uz Rīgu); “no kurienes?” (de onde?) pede “no” com genitivo (no Rīgas). Quando o destino é uma pessoa (o médico, um amigo), usa-se “pie” com genitivo, tanto para estar quanto para ir: “Es esmu pie ārsta” (estou no médico), “Es eju pie ārsta” (vou ao médico).',
        table: {
          head: ['Pergunta', 'Forma', 'Exemplo'],
          rows: [
            ['Kur? (onde?)', 'locativo', 'Es esmu Rīgā.'],
            ['Uz kurieni? (para onde?)', 'uz + acusativo', 'Es braucu uz Rīgu.'],
            ['No kurienes? (de onde?)', 'no + genitivo', 'Es braucu no Rīgas.'],
          ],
        },
        examples: [
          ['Kur tu esi? — Es esmu tirgū.', 'Onde você está? — Estou no mercado.'],
          ['Uz kurieni tu ej? — Uz skolu.', 'Para onde você vai? — Para a escola.'],
          ['Rīt es eju pie ārsta.', 'Amanhã eu vou ao médico.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr preposição antes do lugar: “em Riga” é só “Rīgā”, e não “uz Rīgā”.',
      'Confundir “uz galda” (em cima da mesa, genitivo) com “uz galdu” (para a mesa, acusativo) e com “galdā” (dentro da mesa, na gaveta).',
      'Esquecer o caso depois da preposição: é “bez cukura” (genitivo) e “ar pienu” (acusativo), e não “bez cukurs”, “ar piens”.',
      'Dizer “es esmu mājā” para “estou em casa”: a expressão fixa é “mājās”, no plural.',
      'Usar o locativo para a direção: “vou para Riga” é “braucu uz Rīgu”, e não “braucu Rīgā”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu moro em Riga”?',
        options: ['Es dzīvoju Rīgā.', 'Es dzīvoju uz Rīgu.', 'Es dzīvoju Rīga.'],
        answer: 'Es dzīvoju Rīgā.',
        explanation: 'O “em” de lugar é o locativo, sem preposição: Rīga → Rīgā.',
      },
      {
        question: 'Como se diz “em cima da mesa”?',
        options: ['uz galda', 'galdā', 'uz galdu'],
        answer: 'uz galda',
        explanation: '“uz” com genitivo é “em cima de”: uz galda. galdā é dentro da mesa; uz galdu é a direção.',
      },
      {
        question: 'Complete: Rīt es braucu ___. (para Sigulda)',
        options: ['uz Siguldu', 'Siguldā', 'uz Siguldas'],
        answer: 'uz Siguldu',
        explanation: 'A direção é “uz” com acusativo: uz Siguldu.',
      },
      {
        question: 'Qual é o locativo de “pils” (castelo)?',
        options: ['pilī', 'pilā', 'pilē'],
        answer: 'pilī',
        explanation: 'A 6ª declinação faz o locativo em -ī: pils → pilī, Daugavpils → Daugavpilī.',
      },
      {
        question: 'Como se pede um café “sem açúcar”?',
        options: ['bez cukura', 'bez cukuru', 'bez cukurs'],
        answer: 'bez cukura',
        explanation: '“bez” pede o genitivo: cukurs → cukura.',
      },
    ],
  },
  {
    id: 'lv-g8',
    level: 'A2.1',
    title: 'Perguntas com “vai” e as palavras interrogativas; adjetivos e concordância',
    emoji: '❓',
    summary: 'Para perguntar “sim ou não”, basta pôr “vai” no começo: Vai tu runā latviski? As palavras interrogativas vêm no começo também: kur, kad, kāpēc, kā, cik, kas. Os adjetivos concordam com o substantivo em gênero, número e caso: liels galds, liela māja, lielā mājā (numa casa grande). E de quase todo adjetivo sai um advérbio em -i: labs → labi.',
    sections: [
      {
        heading: 'Perguntas de sim ou não: “vai”',
        text: 'O letão marca a pergunta com a palavra “vai” no começo da frase, sem mudar a ordem: “Tu runā latviski” (você fala letão) → “Vai tu runā latviski?” (você fala letão?). Na fala, às vezes o “vai” cai e só a entonação sobe, como em português. Para responder, “jā” (sim) ou “nē” (não), e é comum repetir o verbo: “Vai tu nāc? — Nāku.” Cuidado: no meio da frase, “vai” também quer dizer “ou”: tēju vai kafiju?',
        examples: [
          ['Vai tu runā latviski? — Jā, mazliet.', 'Você fala letão? — Sim, um pouco.'],
          ['Vai jūs esat no Rīgas? — Nē, es esmu no Cēsīm.', 'O senhor é de Riga? — Não, sou de Cēsis.'],
          ['Vai tev ir laiks? — Ir.', 'Você tem tempo? — Tenho.'],
          ['Tēju vai kafiju?', 'Chá ou café?'],
        ],
      },
      {
        heading: 'As palavras interrogativas',
        text: 'As palavras interrogativas abrem a pergunta, e o resto segue a ordem normal. “Kas” é quem e o quê; no acusativo vira “ko” (o que você faz? Ko tu dari?). “Kurš” e “kāds” são adjetivos e concordam: kurš autobuss? kura iela? kāds laiks? kāda pilsēta?',
        table: {
          head: ['Letão', 'Português', 'Exemplo'],
          rows: [
            ['kas / ko', 'quem, o quê', 'Kas tas ir? Ko tu dari?'],
            ['kur', 'onde', 'Kur ir stacija?'],
            ['uz kurieni / no kurienes', 'para onde / de onde', 'No kurienes tu esi?'],
            ['kad', 'quando', 'Kad sākas koncerts?'],
            ['kāpēc', 'por quê', 'Kāpēc tu nenāc?'],
            ['kā', 'como', 'Kā tev iet?'],
            ['cik', 'quanto, quantos', 'Cik tas maksā?'],
            ['kurš / kura', 'qual (de vários)', 'Kurš autobuss iet uz centru?'],
            ['kāds / kāda', 'que tipo de, como é', 'Kāds šodien ir laiks?'],
          ],
        },
        examples: [
          ['Kur ir stacija? — Tur, aiz tirgus.', 'Onde fica a estação? — Ali, atrás do mercado.'],
          ['Kad tu brauc uz Liepāju?', 'Quando você vai para Liepāja?'],
          ['Kurš autobuss iet uz centru?', 'Qual ônibus vai para o centro?'],
          ['Kāds šodien ir laiks? — Silts un saulains.', 'Como está o tempo hoje? — Quente e ensolarado.'],
        ],
      },
      {
        heading: 'Os adjetivos concordam',
        text: 'O adjetivo vem antes do substantivo e copia o gênero, o número e o caso dele. No masculino, termina em -s (liels, mazs, jauns) ou -š (zaļš); no feminino, em -a (liela, maza, jauna, zaļa). Nos outros casos, as terminações lembram as dos substantivos da 1ª declinação (masculino) e da 4ª (feminino). Depois de “ir”, o adjetivo também concorda com o sujeito: galds ir liels, māja ir liela.',
        table: {
          head: ['Caso', 'Masculino', 'Feminino', 'Português'],
          rows: [
            ['nominativo', 'liels galds', 'liela māja', 'uma mesa grande / uma casa grande'],
            ['genitivo', 'liela galda', 'lielas mājas', 'de uma mesa grande / de uma casa grande'],
            ['dativo', 'lielam galdam', 'lielai mājai', 'para uma mesa grande / para uma casa grande'],
            ['acusativo', 'lielu galdu', 'lielu māju', '(vejo) uma mesa grande / uma casa grande'],
            ['locativo', 'lielā galdā', 'lielā mājā', 'numa mesa grande / numa casa grande'],
          ],
        },
        examples: [
          ['Rīga ir skaista pilsēta.', 'Riga é uma cidade bonita.'],
          ['Man ir jauns dators.', 'Eu tenho um computador novo.'],
          ['Viņi dzīvo lielā mājā pie jūras.', 'Eles moram numa casa grande à beira-mar.'],
          ['Es lasu interesantu grāmatu.', 'Estou lendo um livro interessante.'],
          ['Latvijas karogs ir sarkanbaltsarkans.', 'A bandeira da Letônia é vermelho-branco-vermelho.'],
        ],
      },
      {
        heading: 'Do adjetivo ao advérbio: -i',
        text: 'Para dizer “como” se faz algo, troca-se a terminação do adjetivo por -i: labs (bom) → labi (bem), ātrs (rápido) → ātri (rapidamente), lēns (lento) → lēni (devagar). É daí que vêm os advérbios das línguas: latviski, portugāliski, angliski, krieviski.',
        examples: [
          ['Tu runā ļoti labi!', 'Você fala muito bem!'],
          ['Viņš brauc pārāk ātri.', 'Ele dirige rápido demais.'],
          ['Vai jūs runājat portugāliski?', 'O senhor fala português?'],
        ],
      },
    ],
    pitfalls: [
      'Inverter o sujeito e o verbo para perguntar, como no inglês: basta “vai” no começo: “Vai tu nāc?”, com a ordem normal.',
      'Esquecer que “vai” no meio da frase é “ou”: “tēju vai kafiju?” é “chá ou café?”.',
      'Deixar o adjetivo no masculino: “liels māja” está errado; o certo é “liela māja”.',
      'Esquecer que o adjetivo também muda de caso: “numa casa grande” é “lielā mājā”, e não “liela mājā”.',
      'Usar o adjetivo como advérbio: “você fala bem” é “tu runā labi”, e não “tu runā labs”.',
    ],
    quiz: [
      {
        question: 'Como se pergunta “você fala letão?”',
        options: ['Vai tu runā latviski?', 'Runā tu latviski vai?', 'Kas tu runā latviski?'],
        answer: 'Vai tu runā latviski?',
        explanation: 'A pergunta de sim ou não começa com “vai”, e a ordem das palavras não muda.',
      },
      {
        question: 'Complete: Māja ir ___. (grande)',
        options: ['liela', 'liels', 'lielu'],
        answer: 'liela',
        explanation: 'māja é feminina, e o adjetivo concorda: liela.',
      },
      {
        question: 'Complete: Es lasu ___ grāmatu. (interessante)',
        options: ['interesantu', 'interesanta', 'interesants'],
        answer: 'interesantu',
        explanation: 'grāmatu está no acusativo, e o adjetivo também: interesantu.',
      },
      {
        question: 'O que quer dizer “kāpēc”?',
        options: ['por quê', 'quando', 'quanto'],
        answer: 'por quê',
        explanation: 'kāpēc é por quê; kad é quando; cik é quanto.',
      },
      {
        question: 'Como se diz “numa casa grande”?',
        options: ['lielā mājā', 'liela mājā', 'lielu mājā'],
        answer: 'lielā mājā',
        explanation: 'No locativo, o adjetivo também ganha -ā: lielā mājā.',
      },
    ],
  },
  // ───────────────────────────── A2.2 ─────────────────────────────
  {
    id: 'lv-g9',
    level: 'A2.2',
    title: 'O passado: es runāju, es biju, es gāju e o “esmu bijis”',
    emoji: '⏪',
    summary: 'O passado letão tem terminações bem regulares: -u, -i, -a, -ām, -āt, -a (es lasīju, tu lasīji, viņš lasīja). O que muda é a base, e alguns verbos curtos têm base própria: būt → biju, iet → gāju. Para “já estive, já vi”, usa-se būt + particípio: Es esmu bijis Rīgā.',
    sections: [
      {
        heading: 'As terminações do passado',
        text: 'O passado simples conta o que aconteceu e terminou (ontem, no ano passado) e também o que acontecia (o nosso imperfeito): o letão não separa “falei” de “falava”. As terminações são as mesmas para todos os verbos. Nos verbos da 2ª e da 3ª conjugação, a base é o infinitivo sem o -t, com -j- no fim: runā-j-u, lasī-j-u, gribē-j-u. E, de novo, a 3ª pessoa é igual no singular e no plural.',
        table: {
          head: ['Pessoa', 'runāt (falar)', 'lasīt (ler)', 'būt (ser, estar)', 'iet (ir)'],
          rows: [
            ['es', 'runāju', 'lasīju', 'biju', 'gāju'],
            ['tu', 'runāji', 'lasīji', 'biji', 'gāji'],
            ['viņš, viņa', 'runāja', 'lasīja', 'bija', 'gāja'],
            ['mēs', 'runājām', 'lasījām', 'bijām', 'gājām'],
            ['jūs', 'runājāt', 'lasījāt', 'bijāt', 'gājāt'],
            ['viņi, viņas', 'runāja', 'lasīja', 'bija', 'gāja'],
          ],
        },
        examples: [
          ['Vakar es biju Jūrmalā.', 'Ontem eu estive em Jūrmala.'],
          ['Ko tu vakar darīji? — Es lasīju grāmatu.', 'O que você fez ontem? — Li um livro.'],
          ['Pagājušajā vasarā mēs bijām Kuldīgā.', 'No verão passado a gente esteve em Kuldīga.'],
          ['Mēs gājām pa Vecrīgu un runājām latviski.', 'A gente andou pela Cidade Velha e falou letão.'],
        ],
      },
      {
        heading: 'Os verbos curtos: base própria',
        text: 'Os verbos da 1ª conjugação têm uma base de passado que precisa ser decorada: às vezes a vogal se alonga (ņemt → ņēmu, dzert → dzēru), às vezes a consoante muda (nākt → nācu), às vezes a raiz é outra (iet → gāju). Um caso curioso: pirkt (comprar) tem “pērku” no presente e “pirku” no passado.',
        table: {
          head: ['Infinitivo', 'Presente (es)', 'Passado (es)', 'Passado (viņš)', 'Português'],
          rows: [
            ['ēst', 'ēdu', 'ēdu', 'ēda', 'comer'],
            ['dzert', 'dzeru', 'dzēru', 'dzēra', 'beber'],
            ['nākt', 'nāku', 'nācu', 'nāca', 'vir'],
            ['braukt', 'braucu', 'braucu', 'brauca', 'ir (de veículo)'],
            ['ņemt', 'ņemu', 'ņēmu', 'ņēma', 'pegar'],
            ['pirkt', 'pērku', 'pirku', 'pirka', 'comprar'],
            ['dot', 'dodu', 'devu', 'deva', 'dar'],
            ['teikt', 'saku', 'teicu', 'teica', 'dizer'],
          ],
        },
        examples: [
          ['Brokastīs es ēdu putru.', 'No café da manhã eu comi mingau.'],
          ['Viņa nopirka maizi tirgū.', 'Ela comprou pão no mercado.'],
          ['Vakar mēs braucām uz Siguldu.', 'Ontem a gente foi para Sigulda.'],
          ['Ko viņš teica?', 'O que ele disse?'],
        ],
      },
      {
        heading: 'Presente ou passado? O contexto decide',
        text: 'Em muitos verbos, a forma do “es” é igual no presente e no passado: “es runāju” é “eu falo” e “eu falei”; “es ēdu” é “eu como” e “eu comi”; “es braucu” é “eu vou” e “eu fui”. As outras pessoas desfazem a dúvida (tu runā × tu runāji), e na frase quase sempre há uma pista: vakar (ontem), šorīt (hoje de manhã), aizvakar (anteontem), pirms gada (há um ano), toreiz (naquela época).',
        examples: [
          ['Pirms gada es dzīvoju Brazīlijā, tagad dzīvoju Rīgā.', 'Há um ano eu morava no Brasil; agora moro em Riga.'],
          ['Šorīt es dzēru kafiju, nevis tēju.', 'Hoje de manhã eu tomei café, e não chá.'],
          ['Vakar es nebiju darbā.', 'Ontem eu não fui trabalhar.'],
        ],
      },
      {
        heading: '“Esmu bijis”: a experiência',
        text: 'Para falar de experiências (já estive, nunca vi), o letão usa o presente de būt mais um particípio que concorda com o sujeito: masculino -is (bijis, redzējis, lasījis), feminino -usi (bijusi, redzējusi, lasījusi). No plural: -uši, -ušas. Os particípios têm muito mais usos, que ficam para o nível B1.',
        table: {
          head: ['Verbo', 'Masculino', 'Feminino', 'Exemplo'],
          rows: [
            ['būt', 'bijis', 'bijusi', 'Es esmu bijis Rīgā.'],
            ['redzēt', 'redzējis', 'redzējusi', 'Vai tu esi redzējusi jūru?'],
            ['ēst', 'ēdis', 'ēdusi', 'Viņš nav ēdis.'],
            ['iet', 'gājis', 'gājusi', 'Viņa ir gājusi mājās.'],
          ],
        },
        examples: [
          ['Vai tu esi bijis Latvijā? — Nē, vēl neesmu.', 'Você já esteve na Letônia? — Não, ainda não.'],
          ['Es esmu bijusi Rundāles pilī divas reizes.', 'Eu já estive duas vezes no palácio de Rundāle.'],
          ['Mēs vēl neesam redzējuši Kolkasragu.', 'A gente ainda não viu o cabo Kolka.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar separar “falei” e “falava”: em letão o passado simples cobre os dois.',
      'Conjugar iet e būt de forma regular: o passado é gāju e biju, e não “iēju” ou “būju”.',
      'Estranhar que “es runāju” e “es ēdu” sirvam para presente e passado: é normal; o contexto e as outras pessoas desfazem a dúvida.',
      'Esquecer a concordância do particípio: uma mulher diz “es esmu bijusi”, e não “bijis”.',
      'Confundir pērku (compro) e pirku (comprei): a vogal da raiz muda do presente para o passado.',
    ],
    quiz: [
      {
        question: 'Complete: Vakar tu ___ mājās? (būt)',
        options: ['biji', 'esi', 'bija'],
        answer: 'biji',
        explanation: 'O passado de būt é biju, biji, bija… Com tu: biji.',
      },
      {
        question: 'Qual é o passado de “es eju” (eu vou a pé)?',
        options: ['es gāju', 'es ieju', 'es ēju'],
        answer: 'es gāju',
        explanation: 'iet tem outra raiz no passado: gāju, gāji, gāja.',
      },
      {
        question: 'Complete: Vakar mēs ___ uz Siguldu. (braukt)',
        options: ['braucām', 'braucam', 'brauca'],
        answer: 'braucām',
        explanation: 'O passado de mēs termina em -ām, com ā longo: braucām. braucam (a curto) é o presente.',
      },
      {
        question: 'Como uma mulher diz “eu já estive em Riga”?',
        options: ['Es esmu bijusi Rīgā.', 'Es esmu bijis Rīgā.', 'Es biju bijusi Rīgā.'],
        answer: 'Es esmu bijusi Rīgā.',
        explanation: 'O particípio concorda com o sujeito: feminino bijusi, masculino bijis.',
      },
    ],
  },
  {
    id: 'lv-g10',
    level: 'A2.2',
    title: 'O plural e o dativo',
    emoji: '👥',
    summary: 'No plural, os masculinos terminam em -i (draugi, brāļi) e os femininos em -as, -es, -is (mājas, upes, sirdis). O dativo é o caso do “para quem”: Es rakstu vēstuli mātei (escrevo uma carta para a mãe). E uma regra que simplifica a vida: no plural, toda preposição pede o dativo: ar draugiem, no mājām, uz Cēsīm.',
    sections: [
      {
        heading: 'O plural no nominativo',
        text: 'O plural se reconhece pela terminação. Todos os masculinos fazem -i, e na 2ª declinação a consoante antes dele costuma mudar (brālis → brāļi, lācis → lāči). Os femininos mantêm a vogal da declinação e acrescentam -s: māja → mājas, upe → upes; a 6ª faz -is: sirds → sirdis. Há palavras que só existem no plural, mesmo quando falam de uma coisa só: durvis (porta), bikses (calça), brilles (óculos), kāzas (casamento), brokastis (café da manhã), e cidades como Cēsis.',
        table: {
          head: ['Declinação', 'Singular', 'Plural', 'Português'],
          rows: [
            ['1ª', 'draugs / galds', 'draugi / galdi', 'amigos / mesas'],
            ['2ª', 'brālis / lācis', 'brāļi / lāči', 'irmãos / ursos'],
            ['3ª', 'tirgus', 'tirgi', 'mercados'],
            ['4ª', 'māja / māsa', 'mājas / māsas', 'casas / irmãs'],
            ['5ª', 'upe / meitene', 'upes / meitenes', 'rios / meninas'],
            ['6ª', 'sirds / zivs', 'sirdis / zivis', 'corações / peixes'],
          ],
        },
        examples: [
          ['Man ir divi brāļi un trīs māsas.', 'Eu tenho dois irmãos e três irmãs.'],
          ['Uz galda ir divas grāmatas.', 'Há dois livros em cima da mesa.'],
          ['Kuldīgas ielas ir šauras un skaistas.', 'As ruas de Kuldīga são estreitas e bonitas.'],
          ['Durvis ir vaļā.', 'A porta está aberta.'],
        ],
      },
      {
        heading: 'Os casos no plural',
        text: 'No plural, as terminações são bem regulares. Os masculinos seguem todos o mesmo modelo: -i, -u, -iem, -us, -os. Os femininos trocam só a vogal conforme a declinação: -as, -u, -ām, -as, -ās (4ª); -es, -u, -ēm, -es, -ēs (5ª); -is, -u, -īm, -is, -īs (6ª). O genitivo plural é o “de” de quantidade: daudz kafejnīcu (muitos cafés), kilograms ābolu (um quilo de maçãs). Na 5ª e na 6ª, o genitivo plural muda a consoante: upe → upju, māte → māšu, sirds → siržu.',
        table: {
          head: ['Caso', 'Masculino (draugs)', 'Feminino (māja)', 'Feminino (upe)'],
          rows: [
            ['nominativo', 'draugi', 'mājas', 'upes'],
            ['genitivo', 'draugu', 'māju', 'upju'],
            ['dativo', 'draugiem', 'mājām', 'upēm'],
            ['acusativo', 'draugus', 'mājas', 'upes'],
            ['locativo', 'draugos', 'mājās', 'upēs'],
          ],
        },
        examples: [
          ['Vecrīgā ir daudz kafejnīcu.', 'Na Cidade Velha há muitos cafés.'],
          ['Es satieku draugus parkā.', 'Eu encontro os amigos no parque.'],
          ['Latvijas upēs ir daudz zivju.', 'Nos rios da Letônia há muitos peixes.'],
        ],
      },
      {
        heading: 'O dativo: para quem',
        text: 'O dativo marca a pessoa que recebe, a quem se dá, se escreve, se liga ou se ajuda: dot, rakstīt, sūtīt, zvanīt, palīdzēt. Você já viu o dativo em “Man ir…” e “Man patīk…”. No singular: -am (1ª: draugam), -im (2ª: brālim), -um (3ª: tirgum), -ai (4ª: māsai), -ei (5ª: mātei), -ij (6ª: sirdij).',
        table: {
          head: ['Declinação', 'Nominativo', 'Dativo', 'Português'],
          rows: [
            ['1ª', 'draugs', 'draugam', 'para o amigo'],
            ['2ª', 'brālis', 'brālim', 'para o irmão'],
            ['3ª', 'tirgus', 'tirgum', 'para o mercado'],
            ['4ª', 'māsa', 'māsai', 'para a irmã'],
            ['5ª', 'māte', 'mātei', 'para a mãe'],
            ['6ª', 'sirds', 'sirdij', 'para o coração'],
          ],
        },
        examples: [
          ['Es rakstu vēstuli mātei.', 'Eu escrevo uma carta para a mãe.'],
          ['Anna zvana brālim katru vakaru.', 'A Anna liga para o irmão toda noite.'],
          ['Viņš palīdz draugam.', 'Ele ajuda o amigo.'],
          ['Mēs dāvinām ziedus skolotājai.', 'A gente dá flores para a professora.'],
        ],
      },
      {
        heading: 'No plural, toda preposição pede o dativo',
        text: 'No singular, cada preposição tem seu caso (no + genitivo, ar + acusativo…). No plural, não: todas pedem o dativo. “Com um amigo” é “ar draugu”, mas “com amigos” é “ar draugiem”; “de uma casa” é “no mājas”, mas “das casas” é “no mājām”. É por isso que se diz “no Cēsīm” e “uz Cēsīm”: Cēsis é plural.',
        examples: [
          ['Es dzīvoju kopā ar draugiem.', 'Eu moro junto com amigos.'],
          ['Viņš ir no Cēsīm.', 'Ele é de Cēsis.'],
          ['Pēc stundām mēs ejam uz parku.', 'Depois das aulas a gente vai ao parque.'],
          ['Tēja bez cukura un bez citroniem.', 'Chá sem açúcar e sem limões.'],
        ],
      },
    ],
    pitfalls: [
      'Fazer o plural masculino em -s, como em português: é draugi, galdi, e não “draugs” ou “draugas”.',
      'Usar o genitivo ou o acusativo depois de preposição no plural: é “ar draugiem” e “no mājām”, sempre dativo.',
      'Esquecer que durvis, bikses, brilles e brokastis são plurais: “Durvis ir vaļā” (a porta está aberta), com adjetivo e verbo de plural.',
      'Deixar a pessoa que recebe sem dativo: “escrevo para a mãe” é “rakstu mātei”, e não “rakstu māte”.',
    ],
    quiz: [
      {
        question: 'Qual é o plural de “galds” (mesa)?',
        options: ['galdi', 'galdas', 'galdes'],
        answer: 'galdi',
        explanation: 'Todo masculino faz o plural em -i: galds → galdi.',
      },
      {
        question: 'Complete: Es dodu grāmatu ___. (para o amigo)',
        options: ['draugam', 'draugu', 'drauga'],
        answer: 'draugam',
        explanation: 'Quem recebe vai para o dativo: draugs → draugam.',
      },
      {
        question: 'Como se diz “com amigos”?',
        options: ['ar draugiem', 'ar draugus', 'ar draugi'],
        answer: 'ar draugiem',
        explanation: 'No plural, toda preposição pede o dativo: ar draugiem.',
      },
      {
        question: 'Complete: Vecrīgā ir daudz ___. (cafés)',
        options: ['kafejnīcu', 'kafejnīcas', 'kafejnīcām'],
        answer: 'kafejnīcu',
        explanation: '“daudz” (muito) pede o genitivo plural: kafejnīca → kafejnīcu.',
      },
      {
        question: 'O que quer dizer “durvis”?',
        options: ['porta (a palavra existe no plural)', 'portas, sempre mais de uma', 'janela'],
        answer: 'porta (a palavra existe no plural)',
        explanation: 'durvis só existe no plural, mas pode ser uma porta só: “Durvis ir vaļā”.',
      },
    ],
  },
  {
    id: 'lv-g11',
    level: 'A2.2',
    title: 'A alternância consonantal (lācis → lāča) e os possessivos (mans, tavs, savs)',
    emoji: '🔁',
    summary: 'Em certas formas, a consoante do fim da raiz “amolece”: lācis → lāča (do urso), brālis → brāļi (irmãos), upe → upju (dos rios). É a alternância consonantal, e ela segue regras fixas. Os possessivos mans (meu) e tavs (teu) concordam como adjetivos; viņa, viņas, mūsu, jūsu, viņu nunca mudam; e savs (o próprio) aparece quando o dono é o sujeito: Anna zvana savai mātei.',
    sections: [
      {
        heading: 'Onde a consoante muda',
        text: 'A alternância aparece em lugares previsíveis. Na 2ª declinação (-is), no genitivo singular e em todo o plural: lācis, lāča, lāči. Na 5ª (-e) e na 6ª (-s femininos), só no genitivo plural: upe → upju, sirds → siržu. Também aparece em verbos: sēdēt → es sēžu (estou sentado), gulēt → es guļu (estou deitado, durmo). Há exceções, sobretudo nomes de pessoas e palavras de família: tētis → tēta (do pai), viesis → viesa (do hóspede).',
        table: {
          head: ['Troca', 'Exemplo', 'Forma alternada', 'Português'],
          rows: [
            ['c → č', 'lācis', 'lāča, lāči', 'urso'],
            ['d → ž', 'briedis', 'brieža, brieži', 'cervo'],
            ['t → š', 'zutis / māte', 'zuša / māšu', 'enguia / mãe (gen. pl.)'],
            ['s → š', 'lasis', 'laša, laši', 'salmão'],
            ['z → ž', 'vēzis', 'vēža, vēži', 'lagostim'],
            ['l → ļ', 'brālis', 'brāļa, brāļi', 'irmão'],
            ['n → ņ', 'Jānis / zirnis', 'Jāņa / zirņi', 'João / ervilha'],
            ['b, p, m, v → + j', 'gulbis / upe / zeme / zivs', 'gulbja / upju / zemju / zivju', 'cisne / rio / terra / peixe'],
          ],
        },
        examples: [
          ['Mežā dzīvo lāči un brieži.', 'Na floresta vivem ursos e cervos.'],
          ['Man ir divi brāļi.', 'Eu tenho dois irmãos.'],
          ['Tas ir Jāņa suns.', 'Esse é o cachorro do Jānis.'],
          ['Es sēžu pie loga.', 'Estou sentado perto da janela.'],
        ],
      },
      {
        heading: 'Jāņi: uma festa que é um plural',
        text: 'A maior festa popular da Letônia, a do solstício de verão (23 e 24 de junho), se chama Jāņi: é o plural de Jānis, o nome João, com a alternância n → ņ. Na noite de Jāņi, a Jāņu nakts, as pessoas cantam canções de “līgo”, acendem fogueiras, usam coroas de flores e folhas de carvalho e comem o queijo com cominho, o Jāņu siers. Todos os Jānis do país comemoram o dia do nome.',
        examples: [
          ['Kur tu svini Jāņus?', 'Onde você comemora o Jāņi?'],
          ['Jāņu naktī neviens neguļ.', 'Na noite de Jāņi ninguém dorme.'],
        ],
      },
      {
        heading: 'Os possessivos',
        text: 'Mans (meu) e tavs (teu, seu, do íntimo) se comportam como adjetivos: concordam com a coisa possuída em gênero, número e caso (mans draugs, mana māja, manā mājā). Já os da 3ª pessoa e do plural são genitivos dos pronomes e nunca mudam: viņa (dele), viņas (dela), mūsu (nosso), jūsu (de vocês, do senhor), viņu (deles, delas). Repare: “viņa” é “ela” e também “dele”; o contexto separa.',
        table: {
          head: ['Pessoa', 'Possessivo', 'Muda?', 'Exemplo'],
          rows: [
            ['es', 'mans / mana', 'sim, como adjetivo', 'mans brālis, mana māsa, manā mājā'],
            ['tu', 'tavs / tava', 'sim, como adjetivo', 'tavs suns, tava grāmata'],
            ['viņš', 'viņa', 'não', 'viņa māte (a mãe dele)'],
            ['viņa', 'viņas', 'não', 'viņas tēvs (o pai dela)'],
            ['mēs', 'mūsu', 'não', 'mūsu draugi'],
            ['jūs', 'jūsu', 'não', 'jūsu pase'],
            ['viņi, viņas', 'viņu', 'não', 'viņu māja'],
          ],
        },
        examples: [
          ['Mana māja ir maza, bet silta.', 'Minha casa é pequena, mas aconchegante.'],
          ['Vai tas ir tavs suns?', 'Esse é o seu cachorro?'],
          ['Viņas brālis strādā Ventspilī.', 'O irmão dela trabalha em Ventspils.'],
          ['Jūsu pasi, lūdzu!', 'O seu passaporte, por favor!'],
        ],
      },
      {
        heading: 'Savs: o que é do próprio sujeito',
        text: 'Quando o dono é o próprio sujeito da frase, o letão usa “savs”, que declina como mans e tavs. Isso vale para todas as pessoas: “Es mīlu savu ģimeni” (amo a minha família) é o natural. Na 3ª pessoa, a escolha muda o sentido: “Jānis brauc ar savu mašīnu” é o carro do próprio Jānis; “Jānis brauc ar viņa mašīnu” é o carro de outro homem. “Savs” nunca faz parte do sujeito: é “Mana māja ir liela”, e não “Sava māja”.',
        examples: [
          ['Anna zvana savai mātei.', 'A Anna liga para a própria mãe.'],
          ['Es mīlu savu ģimeni.', 'Eu amo a minha família.'],
          ['Viņi pārdod savu māju.', 'Eles estão vendendo a casa deles (a própria).'],
          ['Pēteris runā ar viņas brāli.', 'O Pēteris conversa com o irmão dela.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a alternância no genitivo e no plural da 2ª declinação: é brāļi e lāča, e não “brāli” (plural) ou “lāca”.',
      'Pôr a alternância onde ela não entra: no dativo e no acusativo singular a consoante fica: brālim, brāli.',
      'Mudar a terminação de viņa, viņas, mūsu, jūsu, viņu: eles não concordam: mūsu māja, mūsu draugi.',
      'Usar “viņa” ou “mans” quando o dono é o sujeito: o natural é “savs”: “Viņš mīl savu sievu” (a própria esposa).',
      'Usar “savs” no sujeito: “Sava māja ir liela” está errado; o certo é “Mana māja ir liela”.',
    ],
    quiz: [
      {
        question: 'Qual é o genitivo de “lācis” (urso)?',
        options: ['lāča', 'lāca', 'lācis'],
        answer: 'lāča',
        explanation: 'Na 2ª declinação, o genitivo singular tem alternância: c → č, lācis → lāča.',
      },
      {
        question: 'Qual é o plural de “brālis” (irmão)?',
        options: ['brāļi', 'brāli', 'brālis'],
        answer: 'brāļi',
        explanation: 'Em todo o plural da 2ª declinação o l vira ļ: brāļi. brāli é o acusativo singular.',
      },
      {
        question: 'Como se diz “a Anna liga para a própria mãe”?',
        options: ['Anna zvana savai mātei.', 'Anna zvana viņas mātei.', 'Anna zvana sava māte.'],
        answer: 'Anna zvana savai mātei.',
        explanation: 'A mãe é da própria Anna (o sujeito): savs, no dativo savai. “viņas mātei” seria a mãe de outra mulher.',
      },
      {
        question: 'Como se diz “a casa deles”?',
        options: ['viņu māja', 'viņi māja', 'viņiem māja'],
        answer: 'viņu māja',
        explanation: 'O possessivo de viņi é viņu, e ele nunca muda: viņu māja, viņu draugi.',
      },
      {
        question: 'O que é “Jāņi”?',
        options: ['a grande festa de junho, com fogueiras', 'um prato de peixe', 'uma cidade da costa'],
        answer: 'a grande festa de junho, com fogueiras',
        explanation: 'Jāņi, o plural de Jānis (João), é a grande festa de 23 e 24 de junho, com fogueiras e canções de “līgo”.',
      },
    ],
  },
  // ───────────────────────────── B1.1 ─────────────────────────────
  {
    id: 'lv-g12',
    level: 'B1.1',
    title: 'O futuro com -s- (runāšu, būšu, iešu) e o imperativo (nāc!, nāciet!)',
    emoji: '🔮',
    summary: 'O futuro letão é uma forma só, feita com -s- sobre o infinitivo sem o -t: runāt → es runāšu, tu runāsi, viņš runās. O imperativo sai do presente: o do “tu” é igual à forma do presente (nāc!, lasi!), e o de “jūs” termina em -iet (nāciet!, lasiet!). Para “vamos!”, usa-se o futuro: Iesim!',
    sections: [
      {
        heading: 'O futuro',
        text: 'Tira-se o -t do infinitivo e acrescentam-se as terminações -šu, -si, -s, -sim, -siet (ou -sit), -s: runā-t → runāšu. Não há verbo auxiliar, como o nosso “vou falar”: é uma palavra só. Mais uma vez, a 3ª pessoa é igual no singular e no plural (viņš runās, viņi runās). Até būt e iet são regulares no futuro: būšu, iešu.',
        table: {
          head: ['Pessoa', 'runāt (falar)', 'lasīt (ler)', 'būt (ser, estar)', 'iet (ir)'],
          rows: [
            ['es', 'runāšu', 'lasīšu', 'būšu', 'iešu'],
            ['tu', 'runāsi', 'lasīsi', 'būsi', 'iesi'],
            ['viņš, viņa', 'runās', 'lasīs', 'būs', 'ies'],
            ['mēs', 'runāsim', 'lasīsim', 'būsim', 'iesim'],
            ['jūs', 'runāsiet', 'lasīsiet', 'būsiet', 'iesiet'],
            ['viņi, viņas', 'runās', 'lasīs', 'būs', 'ies'],
          ],
        },
        examples: [
          ['Rīt es braukšu uz Siguldu.', 'Amanhã eu vou para Sigulda.'],
          ['Nākamgad mēs būsim Latvijā.', 'No ano que vem a gente vai estar na Letônia.'],
          ['Vai tu nāksi vakarā?', 'Você vem hoje à noite?'],
          ['Es tev piezvanīšu.', 'Eu te ligo.'],
          ['Ko jūs darīsiet sestdien?', 'O que vocês vão fazer no sábado?'],
        ],
      },
      {
        heading: 'Os verbos curtos no futuro',
        text: 'Nos verbos da 1ª conjugação, o -s- se junta direto à consoante da raiz: braukt → braukšu, nākt → nākšu, dzert → dzeršu. Quando a raiz termina em d, t, s ou z, entra um -ī- no meio para facilitar a pronúncia: ēst (raiz ēd-) → ēdīšu, nest (levar, raiz nes-) → nesīšu. O resultado soa como a palavra ganhando um “chiado” no fim.',
        table: {
          head: ['Infinitivo', 'es', 'viņš', 'Português'],
          rows: [
            ['braukt', 'braukšu', 'brauks', 'ir (de veículo)'],
            ['nākt', 'nākšu', 'nāks', 'vir'],
            ['dzert', 'dzeršu', 'dzers', 'beber'],
            ['dot', 'došu', 'dos', 'dar'],
            ['ēst', 'ēdīšu', 'ēdīs', 'comer'],
            ['nest', 'nesīšu', 'nesīs', 'levar (carregando)'],
          ],
        },
        examples: [
          ['Vakarā mēs ēdīsim zivis.', 'À noite a gente vai comer peixe.'],
          ['Rīt līs.', 'Amanhã vai chover.'],
          ['Kas būs, tas būs.', 'O que tiver de ser, será.'],
        ],
      },
      {
        heading: 'O imperativo',
        text: 'Para dar uma ordem ou fazer um pedido a quem se trata por “tu”, usa-se a própria forma do presente, sem o pronome: nāc! (vem!), lasi! (lê!), ej! (vai!). Para “jūs” (vocês ou o senhor), acrescenta-se -iet à forma do “tu”; nos verbos da 2ª conjugação, entra também o -j-: runā → runājiet. O imperativo de būt é esi!, esiet!. Com “lūdzu” e o plural, o pedido fica educado.',
        table: {
          head: ['Infinitivo', 'tu', 'jūs', 'Português'],
          rows: [
            ['runāt', 'runā!', 'runājiet!', 'fale!'],
            ['lasīt', 'lasi!', 'lasiet!', 'leia!'],
            ['nākt', 'nāc!', 'nāciet!', 'venha!'],
            ['iet', 'ej!', 'ejiet!', 'vá!'],
            ['ēst', 'ēd!', 'ēdiet!', 'coma!'],
            ['teikt', 'saki!', 'sakiet!', 'diga!'],
            ['būt', 'esi!', 'esiet!', 'seja! esteja!'],
          ],
        },
        examples: [
          ['Nāc šurp!', 'Vem cá!'],
          ['Lūdzu, runājiet lēnāk!', 'Por favor, fale mais devagar!'],
          ['Sakiet, lūdzu, kur ir stacija?', 'Diga-me, por favor, onde fica a estação?'],
          ['Esi uzmanīgs!', 'Tome cuidado!'],
        ],
      },
      {
        heading: '“Vamos!”, “que ele venha” e a negação',
        text: 'Para “vamos fazer algo”, o letão usa o futuro do “mēs”: iesim! (vamos!), dziedāsim! (vamos cantar!); na fala, o presente também serve: ejam!. Para a 3ª pessoa, usa-se “lai” com o presente: “Lai viņš nāk” (que ele venha), e é daí que vem o brinde e o viva “Lai dzīvo!”. Para proibir, basta o ne- grudado: neej!, nerunājiet!, nesmēķējiet!',
        examples: [
          ['Iesim uz jūru!', 'Vamos para o mar!'],
          ['Lai dzīvo Latvija!', 'Viva a Letônia!'],
          ['Neej prom!', 'Não vá embora!'],
          ['Lūdzu, nesmēķējiet šeit.', 'Por favor, não fume aqui.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um auxiliar como o “vou falar”: o futuro letão é uma palavra só: runāšu.',
      'Esquecer o -ī- nas raízes em d, t, s, z: é ēdīšu, e não “ēdšu” nem “ēšu”.',
      'Usar “tu” e o singular com desconhecidos também no imperativo: o pedido educado é no plural: “Lūdzu, nāciet!”.',
      'Esquecer o -j- da 2ª conjugação no plural: é runājiet, e não “runāiet”.',
      'Traduzir “que ele venha” com o subjuntivo: o letão usa lai + presente: “Lai viņš nāk”.',
    ],
    quiz: [
      {
        question: 'Complete: Rīt es ___ uz Siguldu. (braukt)',
        options: ['braukšu', 'braucu', 'brauksim'],
        answer: 'braukšu',
        explanation: 'Futuro de es: -šu. braucu é presente ou passado; brauksim é de mēs.',
      },
      {
        question: 'Qual é o futuro de “viņš ir”?',
        options: ['viņš būs', 'viņš būšu', 'viņš irs'],
        answer: 'viņš būs',
        explanation: 'būt é regular no futuro: būšu, būsi, būs.',
      },
      {
        question: 'Como se pede “fale mais devagar” a um desconhecido?',
        options: ['Lūdzu, runājiet lēnāk!', 'Lūdzu, runā lēnāk!', 'Lūdzu, runāsiet lēnāk!'],
        answer: 'Lūdzu, runājiet lēnāk!',
        explanation: 'Com jūs, o imperativo termina em -iet, e a 2ª conjugação ganha -j-: runājiet.',
      },
      {
        question: 'Como se diz “vamos!” (a pé)?',
        options: ['Iesim!', 'Ejiet!', 'Ies!'],
        answer: 'Iesim!',
        explanation: 'O “vamos” usa o futuro de mēs: iesim! ejiet! é uma ordem a vocês.',
      },
      {
        question: 'Qual é o futuro de “es ēdu” (ēst)?',
        options: ['es ēdīšu', 'es ēšu', 'es ēdšu'],
        answer: 'es ēdīšu',
        explanation: 'Raízes em d, t, s, z ganham -ī- antes do -š-: ēd- → ēdīšu.',
      },
    ],
  },
  {
    id: 'lv-g13',
    level: 'B1.1',
    title: 'Verbos reflexivos (-ties: mācīties, celties) e o vocativo (Jāni!, tēti!)',
    emoji: '🪞',
    summary: 'O “se” do letão fica grudado no fim do verbo: o infinitivo termina em -ties (mazgāties, lavar-se) e o presente em -os, -ies, -as… (es mazgājos, tu mazgājies, viņš mazgājas). Muitos verbos mudam de sentido com ele: mācīt é ensinar, mācīties é aprender. E para chamar alguém existe um caso próprio, o vocativo: Jānis → Jāni!, tētis → tēti!, mamma → mammu!',
    sections: [
      {
        heading: 'As terminações reflexivas',
        text: 'Em vez de um pronome solto como o nosso “me”, “se”, o letão gruda a marca reflexiva no fim do verbo, e a terminação muda com a pessoa: -os (es), -ies (tu), -as (viņš, viņi), -amies ou -āmies (mēs), -aties ou -āties (jūs). A base é a mesma do verbo sem o reflexivo, com as mesmas manias: celt (levantar) → es ceļu; celties (levantar-se) → es ceļos.',
        table: {
          head: ['Pessoa', 'mazgāties (lavar-se)', 'mācīties (aprender)', 'celties (levantar-se)'],
          rows: [
            ['es', 'mazgājos', 'mācos', 'ceļos'],
            ['tu', 'mazgājies', 'mācies', 'celies'],
            ['viņš, viņa', 'mazgājas', 'mācās', 'ceļas'],
            ['mēs', 'mazgājamies', 'mācāmies', 'ceļamies'],
            ['jūs', 'mazgājaties', 'mācāties', 'ceļaties'],
            ['viņi, viņas', 'mazgājas', 'mācās', 'ceļas'],
          ],
        },
        examples: [
          ['Es ceļos pulksten septiņos.', 'Eu me levanto às sete.'],
          ['Es mācos latviešu valodu.', 'Eu estou aprendendo letão.'],
          ['Kā jūs jūtaties? — Paldies, labi.', 'Como o senhor se sente? — Bem, obrigado.'],
        ],
      },
      {
        heading: 'Para que serve o reflexivo',
        text: 'O reflexivo cobre mais coisas que o nosso “se”. Há a ação sobre si mesmo (mazgāties, ģērbties: vestir-se), a ação de um com o outro (satikties: encontrar-se; sarunāties: conversar), os sentimentos (priecāties: alegrar-se; baidīties: ter medo; interesēties: interessar-se) e as coisas que acontecem sozinhas (sākties: começar; beigties: acabar). Em vários pares, o sentido muda bastante.',
        table: {
          head: ['Sem reflexivo', 'Português', 'Com reflexivo', 'Português'],
          rows: [
            ['mācīt', 'ensinar', 'mācīties', 'aprender, estudar'],
            ['satikt', 'encontrar alguém', 'satikties', 'encontrar-se (um com o outro)'],
            ['sākt', 'começar algo', 'sākties', 'começar (sozinho)'],
            ['priecēt', 'alegrar alguém', 'priecāties', 'ficar contente'],
          ],
        },
        examples: [
          ['Koncerts sākas pulksten astoņos.', 'O show começa às oito.'],
          ['Rīt mēs satiksimies pie Brīvības pieminekļa.', 'Amanhã a gente se encontra no Monumento da Liberdade.'],
          ['Viņa priecājas par dāvanu.', 'Ela fica contente com o presente.'],
          ['Mazs bērns baidās no suņiem.', 'Uma criança pequena tem medo de cachorros.'],
          ['Es interesējos par Latvijas vēsturi.', 'Eu me interesso pela história da Letônia.'],
        ],
      },
      {
        heading: 'O reflexivo no passado, no futuro e no imperativo',
        text: 'Nos outros tempos, as terminações seguem a mesma ideia: no passado, -os, -ies, -ās, -āmies, -āties (es mazgājos, viņš mazgājās); no futuro, -šos, -sies, -sies, -simies, -sieties (es mazgāšos). No imperativo, o “tu” termina em -ies e o “jūs” em -ieties: celies! (levanta!), apsēdieties! (sente-se!). Para negar, o ne- vai no começo, como sempre: nemācos, neceļas.',
        examples: [
          ['Vakar es cēlos ļoti agri.', 'Ontem eu me levantei muito cedo.'],
          ['Lūdzu, apsēdieties!', 'Sente-se, por favor!'],
          ['Nebaidies, suns nekož!', 'Não tenha medo, o cachorro não morde!'],
        ],
      },
      {
        heading: 'O vocativo: chamar alguém',
        text: 'Para chamar ou cumprimentar alguém pelo nome, o letão tem um caso próprio, o vocativo. Os nomes masculinos em -is fazem -i: Jānis → Jāni!, Pēteris → Pēteri!, tētis → tēti!. Os masculinos em -s e -š perdem a terminação: Ivars → Ivar!, Mārtiņš → Mārtiņ!. Os diminutivos também encurtam: meitiņa → meitiņ! (filhinha), Jānītis → Jānīt!. Os nomes femininos costumam ficar como estão (Anna!, Līga!), mas “mamma” vira “mammu!”. No plural, usa-se o nominativo: Draugi! Dāmas un kungi!',
        table: {
          head: ['Nominativo', 'Vocativo', 'Regra'],
          rows: [
            ['Jānis, Pēteris', 'Jāni! Pēteri!', '-is → -i'],
            ['tētis', 'tēti!', '-is → -i'],
            ['Ivars, Mārtiņš', 'Ivar! Mārtiņ!', 'cai o -s, -š'],
            ['meitiņa, Jānītis', 'meitiņ! Jānīt!', 'o diminutivo encurta'],
            ['mamma', 'mammu!', 'forma própria'],
            ['Anna, Līga', 'Anna! Līga!', 'igual ao nominativo'],
          ],
        },
        examples: [
          ['Jāni, nāc šurp!', 'Jānis, vem cá!'],
          ['Labrīt, tēti!', 'Bom dia, pai!'],
          ['Mammu, es mācos!', 'Mãe, eu estou estudando!'],
          ['Meitiņ, celies, ir jau astoņi!', 'Filhinha, levanta, já são oito horas!'],
          ['Dārgie draugi, priecājos jūs redzēt!', 'Queridos amigos, que bom ver vocês!'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “se” como palavra solta: não existe “es sevi mazgāju” para o dia a dia; diz-se “es mazgājos”.',
      'Confundir mācīt e mācīties: “Es mācu latviešu valodu” é “eu ensino letão”; “eu aprendo” é “es mācos”.',
      'Usar o verbo sem reflexivo quando a coisa acontece sozinha: “o show começa” é “koncerts sākas”, e não “koncerts sāk”.',
      'Chamar alguém no nominativo quando o nome termina em -is ou -s: é “Jāni!” e “Ivar!”, e não “Jānis!” e “Ivars!”.',
      'Confundir o vocativo Jāni! com o plural Jāņi: Jāņi é a festa de junho (e “os Jānis”).',
    ],
    quiz: [
      {
        question: 'Complete: Es ___ latviešu valodu. (mācīties)',
        options: ['mācos', 'mācu', 'mācās'],
        answer: 'mācos',
        explanation: 'mācīties no presente: es mācos, tu mācies, viņš mācās. “es mācu” é “eu ensino”.',
      },
      {
        question: 'Qual é a diferença entre mācīt e mācīties?',
        options: ['ensinar × aprender', 'aprender × ensinar', 'nenhuma'],
        answer: 'ensinar × aprender',
        explanation: 'mācīt é ensinar; com o reflexivo, mācīties, é aprender, estudar.',
      },
      {
        question: 'Como se chama o Jānis?',
        options: ['Jāni!', 'Jāņi!', 'Jānim!'],
        answer: 'Jāni!',
        explanation: 'Nomes em -is fazem o vocativo em -i: Jāni! Jāņi é o plural (e a festa de junho); Jānim é o dativo.',
      },
      {
        question: 'Como se pede, com educação, que alguém se sente?',
        options: ['Lūdzu, apsēdieties!', 'Lūdzu, apsēdies!', 'Lūdzu, apsēžas!'],
        answer: 'Lūdzu, apsēdieties!',
        explanation: 'O imperativo reflexivo de jūs termina em -ieties: apsēdieties! apsēdies! é para quem se trata por tu.',
      },
      {
        question: 'Complete: Koncerts ___ pulksten astoņos. (começa)',
        options: ['sākas', 'sāk', 'sākos'],
        answer: 'sākas',
        explanation: 'O show começa sozinho: sākties, na 3ª pessoa sākas. sākos seria “eu começo”.',
      },
    ],
  },
];
