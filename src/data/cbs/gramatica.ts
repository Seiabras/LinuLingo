import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do huni kuĩ (hãtxa kuĩ), do A1.1 ao A2.2. As siglas das fontes e a regra de
 * grafia (do alfabeto fonético das teses para a grafia prática dos professores huni kuĩ) estão no
 * cabeçalho de vocabulario.ts. A fonte principal é a gramática de Joaquim Paulo de Lima Kaxinawá
 * ([KAX14], tese da UnB, 2014), um linguista huni kuĩ; os exemplos foram conferidos na imagem da
 * página. As frases montadas pelo curso estão marcadas “montada”, com a regra.
 */
export const GRAMMAR_CBS: GrammarTopic[] = [
  {
    id: 'cbs-g1',
    level: 'A1.1',
    title: 'Ẽ, mĩ, nũ, mã: quem faz e quem recebe',
    emoji: '🙋',
    summary: 'Quem faz a ação usa “ẽ, mĩ, nũ, mã”; quem recebe usa “ea, mia, nuku, matu”. Não há pronome de “ele”: no lugar, entra um demonstrativo.',
    sections: [
      {
        // [KAX14] 74, Tabelas 1 e 2; [KAX11] 66, Tabela 3; [CAM05] 60, quadro IV.
        text: 'O huni kuĩ tem duas séries de pronomes. A primeira serve para quem faz a ação e para quem é o assunto da frase: “ẽ” (eu), “mĩ” (você), “nũ” (nós) e “mã” (vocês). A segunda serve para quem recebe a ação: “ea” (me), “mia” (te, você), “nuku” (nos) e “matu” (vocês). No singular, ela leva o “-a” do objeto; no plural, não.',
        table: {
          head: ['Pessoa', 'Quem faz', 'Quem recebe'],
          rows: [
            ['eu', 'ẽ', 'ea'],
            ['você', 'mĩ', 'mia'],
            ['nós', 'nũ', 'nuku'],
            ['vocês', 'mã', 'matu'],
          ],
        },
        // [KAX14] 128, ex. 661; 144, ex. 741; 143, ex. 735.
        examples: [
          ['Ẽ mia uĩmiski.', 'Eu vejo você.'],
          ['Mĩ ea kuxamiski.', 'Você costuma me bater.'],
          ['Ẽ nami piai.', 'Eu estou comendo carne.'],
        ],
      },
      {
        // [KAX14] 74 (a série de demonstrativos “preenche a lacuna da inexistência de uma terceira
        // pessoa”) e 164, citado em [SD25] 18, nota 9; [KAX11] 66, Tabela 4 (ha, habu).
        text: 'Não existe um pronome próprio para “ele” ou “ela”. No lugar, entram os demonstrativos: “ha” (esse, ele) e “habu” (eles). Em muitas frases, a terceira pessoa nem aparece, e o contexto diz de quem se fala.',
        // [KAX14] 145, ex. 750-751.
        examples: [
          ['Ha tĩxiã.', 'Ele caiu.'],
          ['Habu tĩxiãbu.', 'Eles caíram.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “ẽ” no lugar de “ea”: em “Mĩ ea kuxamiski” (você costuma me bater), quem recebe é “ea”, e não “ẽ”.',
      'Procurar uma palavra para “ele”: o huni kuĩ usa o demonstrativo “ha”, ou deixa a pessoa de fora.',
    ],
    quiz: [
      { question: 'Como se diz “eu vejo você”?', options: ['Ẽ mia uĩmiski.', 'Mĩ ea uĩmiski.', 'Ea mĩ uĩmiski.'], answer: 'Ẽ mia uĩmiski.', explanation: '“Ẽ” é quem vê; “mia” é quem é visto.' },
      { question: 'Qual destas palavras é “me”, quem recebe a ação?', options: ['ea', 'ẽ', 'mĩ'], answer: 'ea', explanation: '“Ẽ” é eu fazendo; “ea” é eu recebendo.' },
    ],
  },
  {
    id: 'cbs-g2',
    level: 'A1.1',
    title: 'O verbo no fim da frase',
    emoji: '➡️',
    summary: 'A ordem é quem faz, o que recebe e, por último, o verbo.',
    sections: [
      {
        // [KAX11] 47 (“A ordem básica do Hãtxa kuĩ é A O V e S V”, citando também Camargo 1996); [SD25]
        // 16 (AOV nos dois idiomas).
        text: 'Em huni kuĩ, o verbo fecha a frase. Primeiro vem quem faz a ação, depois o que recebe e, no fim, o verbo: “Ẽ nami piai” é “eu – carne – estou comendo”. Quando não há objeto, fica só quem faz e o verbo. Por isso, “coma esta banana” fica “Na mani piwe”: “esta banana” vem antes de “piwe” (coma).',
        // [KAX14] 77, ex. 297; 143, ex. 735; [CAM05] 59, ex. 4a.
        examples: [
          ['Na mani piwe.', 'Coma esta banana.'],
          ['Ẽ nami piai.', 'Eu estou comendo carne.'],
          ['Aĩbũ huni uĩaki.', 'A mulher olhou o homem.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o verbo no meio, como em português: “Ẽ piai nami” está fora da ordem. O certo é “Ẽ nami piai”.',
      'Traduzir palavra por palavra: “coma esta banana” não começa por “coma”; começa por “na mani” (esta banana).',
    ],
    quiz: [
      { question: 'Qual é a ordem básica das palavras?', options: ['Quem faz, objeto, verbo', 'Quem faz, verbo, objeto', 'Verbo, quem faz, objeto'], answer: 'Quem faz, objeto, verbo', explanation: 'O verbo fica no fim, como em “Ẽ nami piai”.' },
      { question: 'Em “Na mani piwe” (coma esta banana), o que vem por último?', options: ['O verbo “piwe”', 'A palavra “mani”', 'A palavra “na”'], answer: 'O verbo “piwe”', explanation: '“Na mani” (esta banana) vem antes; o verbo fecha a frase.' },
    ],
  },
  {
    id: 'cbs-g3',
    level: 'A1.2',
    title: 'Ki, kiki, kiaki: eu vi, vai acontecer, dizem',
    emoji: '🗣️',
    summary: 'O fim da frase diz se a coisa já aconteceu e foi vista (-ki), se ainda vai acontecer (kiki) ou se quem fala só ouviu contar (kiaki).',
    sections: [
      {
        // [KAX14] 171-174 (5.1.1 a 5.1.3).
        text: 'Toda afirmação em huni kuĩ termina com uma destas marcas. “-ki” fecha o que já aconteceu e quem fala sabe que é verdade. “kiki” fecha o que ainda está acontecendo ou vai acontecer, com certeza. “kiaki” fecha o que quem fala não viu: ouviu de outra pessoa, ou é uma história antiga. As histórias dos antigos terminam as frases com “kiaki”.',
        table: {
          head: ['Marca', 'Quando se usa', 'Exemplo'],
          rows: [
            ['-ki', 'já aconteceu, e quem fala sabe', 'Nami bashuki. (a carne cozinhou)'],
            ['kiki', 'está acontecendo ou vai acontecer, com certeza', 'Mexu kiri naxi shani kiki.'],
            ['kiaki', 'quem fala não viu: ouviu contar', 'Mexu kiri naxi shani kiaki.'],
          ],
        },
        // [KAX14] 172, ex. 883; 173, ex. 885; 174, ex. 891 e 893.
        examples: [
          ['Nami bashuki.', 'A carne cozinhou.'],
          ['Mexu kiri naxi shani kiki.', 'Amanhã ele vai tomar banho. (com certeza)'],
          ['Mexu kiri naxi shani kiaki.', 'Amanhã, dizem, ele vai tomar banho.'],
          ['Mexu kiri hu shani kiaki.', 'Dizem que ele vem amanhã.'],
        ],
      },
      {
        // [KAX14] 175-176: qualidade permanente com -ki (ex. 896, “minha casa é redonda”), estado passageiro
        // com kiki (ex. 903, “ele está alegre”).
        text: 'A mesma escolha vale para as qualidades. O que é sempre assim, como uma casa redonda, leva “-ki”. O que é passageiro, como estar alegre, leva “kiki”.',
        // [KAX14] 175, ex. 896; 176, ex. 903 (“ha-ø bɨ ni ma i kiki”), escrito “benimai” como em [BINA] 5
        // (“ẽ hatuki benimai”) e [CAM05] 63 (“benimai”, estar contente).
        examples: [
          ['Ẽ hiwerã turuki.', 'Minha casa é redonda.'],
          ['Ha benimai kiki.', 'Ele está alegre.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que “kiki” e “kiaki” são a mesma coisa: “kiki” é certeza; “kiaki” é “dizem que”.',
      'Procurar uma palavra solta para “dizem que”: ela já está no “kiaki” do fim da frase.',
    ],
    quiz: [
      { question: 'Que marca fecha uma história que quem fala só ouviu contar?', options: ['kiaki', 'kiki', '-ki'], answer: 'kiaki', explanation: '“kiaki” marca o que quem fala não viu, como as histórias dos antigos.' },
      { question: '“Mexu kiri naxi shani kiki” quer dizer…', options: ['Amanhã ele vai tomar banho, com certeza.', 'Dizem que amanhã ele vai tomar banho.', 'Ontem ele tomou banho.'], answer: 'Amanhã ele vai tomar banho, com certeza.', explanation: '“kiki” é a certeza sobre o que ainda vai acontecer.' },
    ],
  },
  {
    id: 'cbs-g4',
    level: 'A1.2',
    title: 'Na, ha, uwa: este, esse, aquele',
    emoji: '👉',
    summary: 'Os demonstrativos medem a distância: “na” (perto de mim), “ha” (perto de você), “uwa” (longe), “tua” e “tuturia” (bem longe).',
    sections: [
      {
        // [KAX14] 76, Tabela 4; ex. 297, 300, 303 e 298 (p. 77).
        text: 'O demonstrativo vem antes do nome. São cinco distâncias: “na” (perto de quem fala), “ha” (perto de quem ouve), “uwa” (longe dos dois), “tua” (muito longe) e “tuturia” (muito, muito longe). O “ha” também faz o papel de “ele”.',
        table: {
          head: ['Demonstrativo', 'Distância'],
          rows: [
            ['na', 'perto de quem fala'],
            ['ha', 'perto de quem ouve'],
            ['uwa', 'longe dos dois'],
            ['tua', 'muito longe'],
            ['tuturia', 'muito, muito longe'],
          ],
        },
        examples: [
          ['Na mani piwe.', 'Coma esta banana.'],
          ['Ha mani piwe.', 'Coma essa banana.'],
          ['Uwa mani piwe.', 'Coma aquela banana.'],
          ['Na shashurã enaki.', 'Esta canoa é minha.'],
        ],
      },
      {
        // [KAX14] 94-96, ex. 407-416, e o comentário da p. 94.
        text: 'Os números de um a dez têm nomes próprios. Segundo Joaquim Kaxinawá, antes do contato havia expressões para quantidades até vinte, e esta série foi organizada pelos professores huni kuĩ para contar como na escola. O onze é “itã besti”, “de novo mais um”.',
        table: {
          head: ['Número', 'Valor'],
          rows: [
            ['besti', '1'],
            ['rabe', '2'],
            ['tsamĩ', '3'],
            ['ketash', '4'],
            ['metsã', '5'],
            ['sĩti', '6'],
            ['kekũ', '7'],
            ['bune', '8'],
            ['usũ', '9'],
            ['nati', '10'],
            ['itã besti', '11'],
          ],
        },
        examples: [['Besti, rabe, tsamĩ…', 'Um, dois, três…']],
      },
    ],
    pitfalls: [
      'Pôr o demonstrativo depois do nome: é “na mani” (esta banana), e não “mani na”.',
      'Usar sempre “na”: para algo perto de quem ouve, o certo é “ha”.',
    ],
    quiz: [
      { question: 'Qual demonstrativo aponta algo perto de quem ouve?', options: ['ha', 'na', 'tua'], answer: 'ha', explanation: '“Na” é perto de quem fala; “ha”, perto de quem ouve; “tua”, muito longe.' },
      { question: 'Como se diz “onze”?', options: ['itã besti', 'nati besti', 'besti nati'], answer: 'itã besti', explanation: '“Itã besti” é “de novo mais um”.' },
    ],
  },
  {
    id: 'cbs-g5',
    level: 'A2.1',
    title: 'Cinco passados e um futuro',
    emoji: '⏳',
    summary: 'O verbo diz há quanto tempo a coisa aconteceu: há pouco (-shu), hoje cedo (-ika), ontem (-xiã), há anos (-ima) ou há muito tempo (-ni). O futuro é “-tiru”.',
    sections: [
      {
        // [KAX11] 51-53, quadro “Noções temporais” e ex. 9-13 (tĩ, cair; uʂa, dormir; pi, comer), conferidos
        // na imagem.
        text: 'O português tem um passado só para “eu caí”. O huni kuĩ escolhe entre cinco, conforme a distância: “-shu” (agorinha, há algumas horas), “-ika” (hoje cedo), “-xiã” (ontem, há alguns dias), “-ima” (há alguns anos) e “-ni” (há muito tempo). O sujeito vem antes, e o verbo leva a marca do tempo.',
        table: {
          head: ['Quando', 'Marca', 'Eu caí', 'Eu dormi'],
          rows: [
            ['agorinha', '-shu', 'Ẽ tĩshu.', 'Ẽ ushashu.'],
            ['hoje cedo', '-ika', 'Ẽ tĩika.', 'Ẽ ushaika.'],
            ['ontem, há dias', '-xiã', 'Ẽ tĩxiã.', 'Ẽ ushaxiã.'],
            ['há alguns anos', '-ima', 'Ẽ tĩ ikima.', 'Ẽ ushaima.'],
            ['há muito tempo', '-ni', 'Ẽ tĩini.', 'Ẽ ushani.'],
          ],
        },
      },
      {
        // [KAX11] 54, ex. 14-15 (“ẽ pi-tiru”, eu comerei; “ɨ̃ uʂa-tiru-ki”, eu dormirei; “ha tĩ-itiru-ki”, ele
        // vai cair); 55, ex. 17 (“ɨ̃-ka-i”, eu estou indo).
        text: 'Para o futuro, a marca é “-tiru”: “Ẽ pitiru” (eu vou comer). E para o que está acontecendo agora, “-ai” ou “-i”: “Ẽ kai” (estou indo). Na terceira pessoa, o fim da frase ganha “kiki”, porque ainda não acabou.',
        examples: [
          ['Ẽ pitiru.', 'Eu vou comer.'],
          ['Ẽ ushatiruki.', 'Eu vou dormir.'],
          ['Ẽ kai.', 'Estou indo.'],
          ['Ha ushai kiki.', 'Ele está dormindo.'],
        ],
      },
      {
        // [KAX14] 181-183, ex. 920, 923 e 926: as mesmas noções, como partículas, junto de “ki”.
        text: 'Com a chuva, que não tem sujeito, o tempo também aparece: “Ui ishuki” é “choveu agora há pouco”; “Ui iniki”, “choveu, muitos anos atrás”. E “ma” (já) com “-ma” (há mais de um ano) dá “Ma pimaki”: já comeu, faz tempo.',
        examples: [
          ['Ui ishuki.', 'Choveu. (acabou de parar)'],
          ['Ui iniki.', 'Choveu. (há muitos anos)'],
          ['Ma pimaki.', 'Já comeu. (há mais de um ano)'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre a mesma marca de passado: “ontem” pede “-xiã”, e não “-shu”, que é de poucas horas atrás.',
      'Esquecer o “-tiru” do futuro: “Ẽ pishu” é “eu comi”; “eu vou comer” é “Ẽ pitiru”.',
    ],
    quiz: [
      { question: 'Você caiu ontem. Como se diz?', options: ['Ẽ tĩxiã.', 'Ẽ tĩshu.', 'Ẽ tĩtiru.'], answer: 'Ẽ tĩxiã.', explanation: '“-xiã” é o passado de ontem ou de alguns dias; “-shu”, de poucas horas.' },
      { question: 'O que quer dizer “Ẽ pitiru”?', options: ['Eu vou comer.', 'Eu comi agora há pouco.', 'Eu comia há muito tempo.'], answer: 'Eu vou comer.', explanation: '“-tiru” é o futuro.' },
      { question: 'Qual marca conta algo de muito tempo atrás?', options: ['-ni', '-ika', '-shu'], answer: '-ni', explanation: '“-ni” é o passado remoto; “-ika” é hoje cedo.' },
    ],
  },
  {
    id: 'cbs-g6',
    level: 'A2.1',
    title: 'Perguntas: tsua, hawa, hani, haska',
    emoji: '❓',
    summary: 'A palavra da pergunta abre a frase; muitas perguntas, sobretudo as do passado, fecham com a partícula “mẽ”.',
    sections: [
      {
        // [KAX14] 185 (“constituintes perguntados são os primeiros elementos”) e ex. 938-974. A tese não dá
        // uma regra para o “mɨ̃” (PERG): nos exemplos, ele fecha todas as perguntas com “-ʂu” (940, 948,
        // 951, 954, 966) e também as de “haska” sem passado (968-969); as de “-i” (955, 957, 972, 974)
        // vêm sem ele. Revisão de 16/10/2026: o texto deixou de dizer que “mẽ” só vai no passado.
        text: 'Em huni kuĩ, a palavra que pergunta vem sempre no começo. Muitas perguntas terminam com a partícula “mẽ”. Nos exemplos de Joaquim Kaxinawá, ela fecha todas as perguntas sobre o que já aconteceu, depois do verbo com “-shu”: “Tsua nukushu mẽ?” (quem chegou?). Também aparece com “haska” (por que): “Haska i mĩ sina mẽ?” (por que você está triste?). Já as perguntas com o verbo em “-i”, sobre o que se quer ou para onde se vai, vêm sem ela: “Hara kiri mĩ kai?” (para onde você vai?).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['tsua', 'quem', 'Tsua nukushu mẽ? (quem chegou?)'],
            ['hawa', 'o que', 'Hawa mĩ ki kai? (o que você quer?)'],
            ['hawa tiã', 'quando', 'Hawa tiã mĩ kai? (quando você vai?)'],
            ['hani', 'onde', 'Hani a harã? (onde está ele?)'],
            ['hati', 'quanto', 'Hati xarabu mani mĩ pishu mẽ? (quantas bananas você comeu?)'],
            ['haska', 'como, por que', 'Haska i mĩ sina mẽ? (por que você está triste?)'],
            ['haratu', 'qual', 'Haratu tari mĩ ki kai? (qual roupa você quer?)'],
            ['hara kiri', 'para onde', 'Hara kiri mĩ kai? (para onde você vai?)'],
          ],
        },
      },
      {
        // [KAX14] 186, ex. 948 (tsu-bɨ, com quem); 187, ex. 951 (ha-nia, de onde); 190, ex. 966; 184, ex.
        // 938.
        text: 'As palavras de pergunta recebem as mesmas terminações dos nomes: “tsube” é “com quem” (de “-be”, com), e “hania” é “de onde”.',
        examples: [
          ['Tsube mĩ kashu mẽ?', 'Com quem você foi?'],
          ['Hania mĩ hushu mẽ?', 'De onde você veio?'],
          ['Haska tã mĩ nenu nukushu mẽ?', 'Como você chegou aqui?'],
          ['Mĩ tsua me kãi? Mĩ kena ea yuiriwe.', 'Quem é você? Diga logo o seu nome.'],
        ],
      },
    ],
    pitfalls: [
      'Deixar a palavra da pergunta no fim, como no português falado (“você foi com quem?”): em huni kuĩ, ela abre a frase.',
      'Esquecer o “mẽ” nas perguntas sobre o passado: “Tsua nukushu mẽ?”.',
    ],
    quiz: [
      { question: 'Como se pergunta “quem chegou?”?', options: ['Tsua nukushu mẽ?', 'Nukushu tsua mẽ?', 'Hawa nukushu mẽ?'], answer: 'Tsua nukushu mẽ?', explanation: '“Tsua” (quem) abre a pergunta, e “mẽ” fecha a pergunta sobre o passado.' },
      { question: 'O que quer dizer “Hara kiri mĩ kai?”?', options: ['Para onde você vai?', 'De onde você veio?', 'Quando você vai?'], answer: 'Para onde você vai?', explanation: '“Hara kiri” é “para onde”; “de onde” é “hania”, e “quando” é “hawa tiã”.' },
    ],
  },
  {
    id: 'cbs-g7',
    level: 'A2.2',
    title: 'Quem fez? O “-ã” do agente e as posposições',
    emoji: '🎯',
    summary: 'Quando um nome faz a ação sobre outro, ele ganha um “-ã” (ou só o til). As relações de lugar e companhia vêm depois do nome: “-anu” (para), “-anua” (de), “-be” (com), “-wẽ” (com, por meio de).',
    sections: [
      {
        // [KAX11] 60 e 65, ex. 39-41 e 91a-91g; [CAM05] 56-59, quadro II e ex. 3-4; [KAX14] 71, ex. 279.
        text: 'Com os nomes, o huni kuĩ marca quem faz a ação num verbo com objeto: o nome ganha “-ã”, que se junta à vogal final e vira só um til (“aĩbu” → “aĩbũ”). O objeto e o sujeito de um verbo sem objeto não ganham nada. Assim, a ordem pode até mudar, mas quem fez continua claro. Com os pronomes é diferente: eles seguem a regra do “ẽ/ea” do A1.',
        table: {
          head: ['Frase', 'Quem faz', 'O que recebe'],
          rows: [
            ['Yaixĩ atsa pishu.', 'yaixĩ (o tatu)', 'atsa (a macaxeira)'],
            ['Binã Bixku txatxixu.', 'binã (o marimbondo)', 'Bixku'],
            ['Aĩbũ huni uĩaki.', 'aĩbũ (a mulher)', 'huni (o homem)'],
          ],
        },
        // [KAX11] 65, ex. 91c, 91b e 91e; [CAM05] 59, ex. 4a e 4b.
        examples: [
          ['Yaixĩ atsa pishu.', 'O tatu comeu a macaxeira.'],
          ['Binã Bixku txatxixu.', 'O marimbondo ferrou o Bixku.'],
          ['Bixku tashnishuki.', 'O Bixku saiu. (sem objeto: nada de “-ã”)'],
          ['Hunĩ aĩbu uĩaki.', 'O homem olhou a mulher.'],
        ],
      },
      {
        // [CAM05] 62, ex. 10a (-wen), 11a-11b (-be) e 13 (-anu, escrito “baiyanu” como na frase 8 de “Yauxiku
        // nawa”, [KAX11] 85); [KAX14] 177, ex. 908 (ʂaʂu-anua, do barco); [KAX11] 67, ex. 94-95.
        text: 'Lugar e companhia vêm depois do nome, como pequenas terminações: “-anu” é “para” ou “em”; “-anua”, “de”; “-be”, “com” (companhia); “-wẽ”, “com” no sentido de instrumento ou meio.',
        table: {
          head: ['Terminação', 'Sentido', 'Exemplo'],
          rows: [
            ['-anu', 'para, em', 'Baiyanu ẽ kaa. (eu fui ao roçado)'],
            ['-anua', 'de', 'Bake ixta shashuanua tĩ ishu kiaki. (o menino caiu da canoa)'],
            ['-be', 'com (companhia)', 'Bakebe ẽ naxiai. (eu tomo banho com a criança)'],
            ['-wẽ', 'com (meio)', 'Shashuwẽ kaaki. (ele foi de canoa)'],
          ],
        },
        examples: [
          ['Mĩ nukube kai.', 'Você vai conosco.'],
          ['Ẽ mibe hãtxai.', 'Eu falo com você.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “-ã” em todo sujeito: “Bixku tashnishuki” (o Bixku saiu) não tem objeto, e por isso não leva “-ã”.',
      'Colocar “com” antes da palavra, como em português: é “mibe” (com você), e não “be mi”.',
    ],
    quiz: [
      { question: 'Em “Aĩbũ huni uĩaki”, quem olhou?', options: ['A mulher', 'O homem', 'Os dois'], answer: 'A mulher', explanation: 'O til de “aĩbũ” é o “-ã” de quem faz a ação.' },
      { question: 'Como se diz “eu fui ao roçado”?', options: ['Baiyanu ẽ kaa.', 'Baibe ẽ kaa.', 'Baiwẽ ẽ kaa.'], answer: 'Baiyanu ẽ kaa.', explanation: '“-anu” é “para”; “-be” é “com” (companhia) e “-wẽ”, “com” (meio).' },
    ],
  },
  {
    id: 'cbs-g8',
    level: 'A2.2',
    title: 'Ter, não ter e mandar: -ya, -ma e -we',
    emoji: '✋',
    summary: '“-ya” é “ter”; “-uma” e “-ma” são “não ter, não ser”; “-we” no fim do verbo é uma ordem.',
    sections: [
      {
        // [KAX14] 80, quadro dos atributivos e privativos; 80-82, ex. 319, 321-325 e 329; 82-84, ex. 332-343.
        text: 'Para dizer que alguém tem algo, o nome ganha “-ya” (ou “-haya”). Para dizer que não tem, ganha “-uma”. Com as qualidades, “-pa” afirma e “-ma” nega: “taxipa” é “bem vermelho”, e “taxima”, “não vermelho”. É o mesmo “-ma” que forma “ewapama” (pequeno, ao pé da letra “não grande”).',
        table: {
          head: ['Tem', 'Não tem / não é'],
          rows: [
            ['Mĩ epayaki. (você tem pai)', 'Ẽ epaumaki. (eu não tenho pai)'],
            ['Ha mekĩyaki. (ele tem mão)', 'Ha mekĩumaki. (ele não tem mão)'],
            ['Ẽ tarirã taxipaki. (minha roupa é vermelha)', 'Ẽ tarirã taximaki. (minha roupa não é vermelha)'],
            ['Ẽ tarirã hushupaki. (minha roupa é branca)', 'Ẽ tarirã hushumaki. (minha roupa não é branca)'],
          ],
        },
        // [KAX11] 82-83, frase 2 de “Yauxiku nawa”; [KAX11] Tabela 1, linhas 113-114.
        examples: [
          ['Huni kuĩ yunumake.', 'Os huni kuĩ, sem legumes.'],
          ['Uĩyamaki.', 'Não viu.'],
          ['Kaunamaki.', 'Não caiu.'],
        ],
      },
      {
        // [KAX14] 183, “os comandos diretos são marcados … pela partícula wɨ”, e ex. 297, 931 e 937 (p.
        // 77, 183 e 184); [KAX11] Tabela 1, linhas 64 (bukawẽ, vamos?) e 68 (inãwẽ, dê-me!).
        text: 'Para mandar, o verbo termina em “-we”: “piwe” (coma), “huriwe” (venha). Na tabela de Joaquim Kaxinawá, ele também aparece escrito com til, “-wẽ”, como em “inãwẽ” (me dê) e “bukawẽ” (vamos). Para proibir, o “-ma” entra antes: “… yamawe” (não faça).',
        examples: [
          ['Na mani piwe.', 'Coma esta banana.'],
          ['Neri huriwe!', 'Venha para cá!'],
          ['Ea atsa inãwẽ!', 'Me dê macaxeira!'],
          ['Bukawẽ!', 'Vamos!'],
          ['Ea kuxpi akawã yamawe.', 'Não me acue.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra solta para “não”: a negação vem presa à palavra, com “-ma” ou “-uma”.',
      'Esquecer o “-we” da ordem: “Na mani pi” fica incompleto; o certo é “Na mani piwe”.',
    ],
    quiz: [
      { question: 'Como se diz “eu não tenho pai”?', options: ['Ẽ epaumaki.', 'Ẽ epayaki.', 'Mĩ epayaki.'], answer: 'Ẽ epaumaki.', explanation: '“-uma” é “não ter”; “-ya” é “ter”.' },
      { question: 'Por que “ewapama” quer dizer “pequeno”?', options: ['É “ewapa” (grande) com “-ma” (não)', 'É uma palavra sem partes', 'É “ewa” (mãe) com “-pa”'], answer: 'É “ewapa” (grande) com “-ma” (não)', explanation: 'Ao pé da letra, “não grande”.' },
      { question: 'Qual destas frases é uma ordem?', options: ['Neri huriwe!', 'Ẽ kai.', 'Ha ushai kiki.'], answer: 'Neri huriwe!', explanation: 'O “-we” no fim do verbo faz a ordem: “venha para cá!”.' },
    ],
  },
];
