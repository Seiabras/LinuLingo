import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do huni kuĩ (hãtxa kuĩ), do A1.1 ao B1.4. As siglas das fontes e a regra de
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
          ['Huni kuĩ yunumakẽ.', 'Os huni kuĩ, sem legumes.'],
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

  // ══ B1 ══
  // As regras vêm dos capítulos 3, 4, 7 e 8 de [KAX14], com a página; os exemplos de [KAX14] estão em
  // alfabeto fonético e foram passados pela regra de grafia do cabeçalho de vocabulario.ts (marcados
  // “convertida”, com a forma original). Os outros exemplos são frases de “Yauxiku nawa” já na grafia
  // atual de Joaquim Kaxinawá ([KAX11] cap. IV), conferidas na imagem da página.
  {
    id: 'cbs-g9',
    level: 'B1.1',
    title: 'Rã: porque e se',
    emoji: '🔗',
    summary: 'Quando duas orações se juntam, a primeira pode terminar em “-rã”. Com o mesmo sujeito, ela dá a causa; com sujeitos diferentes, a condição: “se…”.',
    sections: [
      {
        // [KAX14] 192 (7.1: sujeitos correferentes, causa e efeito; “a primeira oração é marcada pela
        // partícula rã e a marca modal declarativa ocorre na segunda”) e 193, ex. 975-976. Ex. 975, convertida:
        // “huni-ø tĩ i ka rã ratɨ ʂu ki”, o homem caiu porque teve medo.
        text: 'Em hãtxa kuĩ, duas orações podem ser ligadas pelo “-rã” no fim da primeira. Quando as duas têm o mesmo sujeito, uma é a causa da outra, e o sujeito só aparece uma vez. Só a última oração leva o tempo e o “-ki” do fim. Joaquim Kaxinawá mostra que a mesma frase se entende dos dois jeitos: “o homem caiu porque teve medo” ou “o homem teve medo e caiu”.',
        examples: [
          ['Huni tĩ ikarã, rateshuki.', 'O homem caiu porque teve medo.'],
          ['Ha hikitã hawenabu yuikĩ.', 'Ele chegou e falou com os parentes.'],
        ],
      },
      {
        // [KAX14] 194-195 (7.2: “os sujeitos são distintos e a relação entre elas é a de condição”; “o morfema
        // rã serve também a função de marcador de condição”), ex. 985, convertida: “mĩ ɨ-a kuʃa rã ɨ̃ kaʂa i”.
        // [KAX11] 117, parte 8, frase 9 (“ha rami ikayarã”, quando ele estava se transformando).
        text: 'Quando os sujeitos são diferentes, o “-rã” vira condição: “se…”. Em “Mĩ ea kuxarã, ẽ kashai”, quem bate é “mĩ” e quem chora é “ẽ”. O “-rã” pode vir também depois do “-ya” (quando): “ikayarã”, enquanto estava.',
        table: {
          head: ['Sujeitos', 'O “-rã” quer dizer', 'Exemplo'],
          rows: [
            ['o mesmo', 'causa: porque, e', 'Huni tĩ ikarã, rateshuki.'],
            ['diferentes', 'condição: se', 'Mĩ ea kuxarã, ẽ kashai.'],
          ],
        },
        examples: [
          ['Mĩ ea kuxarã, ẽ kashai.', 'Se você me bater, eu choro.'],
          ['Ha rami ikayarã, runũ pimakĩ.', 'Quando ele estava se transformando, a cobra lhe deu de comer.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o tempo e o “-ki” nas duas orações: só a última leva, como em “Huni tĩ ikarã, rateshuki”.',
      'Repetir o sujeito quando é o mesmo: “huni” aparece só uma vez.',
    ],
    quiz: [
      { question: 'O que quer dizer “Mĩ ea kuxarã, ẽ kashai”?', options: ['Se você me bater, eu choro.', 'Você me bateu porque eu chorei.', 'Eu bato em você e choro.'], answer: 'Se você me bater, eu choro.', explanation: 'Os sujeitos são diferentes (“mĩ” e “ẽ”), e por isso o “-rã” é condição.' },
      { question: 'Em “Huni tĩ ikarã, rateshuki”, qual oração leva o “-ki”?', options: ['A segunda', 'A primeira', 'As duas'], answer: 'A segunda', explanation: 'A primeira termina em “-rã”; só a última leva o tempo e o “-ki”.' },
    ],
  },
  {
    id: 'cbs-g10',
    level: 'B1.1',
    title: 'Tã: quando, e o verbo que vem depois',
    emoji: '⏱️',
    summary: 'O “-tã” fecha a oração que diz quando ou em que circunstância: “Nukutã, hatu kenashuki”, quando chegou, chamou eles. Só o último verbo leva o tempo.',
    sections: [
      {
        // [KAX14] 195 (7.3: “a oração circunstancial é marcada pela partícula ta(n), precede a oração eventiva
        // e apenas a segunda oração recebe marca temporal e modal”), ex. 986 e 989, convertidas: “nuku tã
        // hatu-ø kena ʂu ki”; “runu-ø uĩ tã nã ɨ̃ ratɨ ʂu ki”. A junção (“nukutã”, “uĩtãnã”) segue a grafia
        // de [KAX11] (“hikitã”, “hiwetanã”).
        text: 'Para dizer “quando isso aconteceu, aquilo aconteceu”, o hãtxa kuĩ põe primeiro a circunstância, fechada com “-tã”, e depois o que aconteceu. Só a segunda oração leva o tempo (“-shu”) e o “-ki”. Às vezes o “-tã” ganha um “nã” logo depois.',
        examples: [
          ['Nukutã, hatu kenashuki.', 'Quando chegou, chamou eles.'],
          ['Runu uĩtãnã, ẽ rateshuki.', 'Quando eu vi a cobra, tive medo.'],
        ],
      },
      {
        // [KAX11] 91, parte 3, frase 2 (“ha hiki-tã”, glosado “chegar-LP”, p. 92); 96, parte 4, frase 1; o
        // “haskatã” (então) em 116, parte 8, frase 2 (“haska-tã então-TRANS”, p. 118). As glosas de [KAX11]
        // chamam o “-tã” de “TRANS”; a tese de 2014 o descreve como marca da oração circunstancial.
        text: 'Na história do povo sovino, o “-tã” aparece a cada passo e amarra a narração: “Ha hikitã hawenabu yuikĩ” (ele chegou e falou com os parentes). Grudado em “haska” (assim), forma “haskatã”: então, depois disso.',
        examples: [
          ['Ha hikitã hawenabu yuikĩ.', 'Ele chegou e falou com os parentes.'],
          ['Haskakirã hi shanaki tsautã, “she! she!” iki tsaukẽ.', 'Ela pousou num pau seco e ficou cantando: “she! she!”.'],
          ['Haskatã hunibu rami.', 'Então os homens se transformaram.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “quando” no começo, como em português: o “-tã” vem no fim da oração da circunstância.',
      'Confundir “-tã” com “tiã”: “hawa tiã” é a pergunta “quando?”; o “-tã” liga duas orações.',
    ],
    quiz: [
      { question: 'Como se diz “quando chegou, chamou eles”?', options: ['Nukutã, hatu kenashuki.', 'Hatu kenashuki, nukutã.', 'Nukushuki, hatu kenatã.'], answer: 'Nukutã, hatu kenashuki.', explanation: 'A circunstância, com “-tã”, vem primeiro; só o segundo verbo leva “-shu” e “-ki”.' },
      { question: 'O que quer dizer “haskatã”?', options: ['então, depois disso', 'por quê?', 'amanhã'], answer: 'então, depois disso', explanation: 'É “haska” (assim) com o “-tã” que liga as orações.' },
    ],
  },
  {
    id: 'cbs-g11',
    level: 'B1.2',
    title: 'Tanaya, ya: depois que, quando',
    emoji: '⏭️',
    summary: 'O “-tanaya” (ou “-taya”, “-naya”, “-ya”) depois do verbo diz o que aconteceu antes: “depois que…”, “quando…”.',
    sections: [
      {
        // [KAX14] 198 (7.4: “Esse tipo de subordinação é feito por meio do morfema tanaya ~ taya ~ naya ~ ya,
        // que segue o verbo da oração dependente”), ex. 1003 e 1004, convertidas: “ɨ-ã bɨnɨ hiwɨ tã nuku taya
        // ɨ̃ ɨa bɨni ma ʂu ki”; “baka ɨ̃ bawa tanaya ɨ̃ bɨnɨ̃ pi ʂu ki”.
        text: 'Quando uma coisa acontece depois da outra, o verbo da primeira ganha “-tanaya”, que também aparece mais curto: “-taya”, “-naya” ou só “-ya”. A segunda oração leva o tempo e o “-ki”. Nos dois exemplos de Joaquim Kaxinawá, quem faz a primeira ação não é quem faz a segunda.',
        table: {
          head: ['Forma', 'Exemplo', 'Tradução'],
          rows: [
            ['-tanaya', 'Baka ẽ bawatanaya, ẽ benẽ pishuki.', 'Depois que cozinhei o peixe, meu marido comeu.'],
            ['-taya', 'Ẽ bene hiwetã nukutaya, ẽ ea benimashuki.', 'Depois que meu marido chegou em casa, eu me alegrei.'],
            ['-ya', 'Txuxiaya binã tũkua.', 'Quando estava secando, o marimbondo o picou.'],
          ],
        },
      },
      {
        // [KAX11] 86, parte 2, frase 8 (“hamakiri besutanaya”, glosado “bɨsu-tana-ja outro-lado-quando/SI”, p.
        // 89); 91, parte 3, frase 1 (“txuxiaya”, “tʃuʃia-ja secando-quando/SI”, p. 92) e frase 7 (“keyatapa
        // tanaya”, “txuxitanaya”, p. 95); 101, parte 5, frase 5 (“shurutanaya”); 106, parte 6, frase 6
        // (“haskaya”, “haska-ja assim-quando/SE”, p. 109).
        text: 'Nas histórias, esse “-ya” conta o que vem antes e prepara o que vem depois. Com “haska” (assim), forma “haskaya”: “então, nisso”, que abre muitas frases de “Yauxiku nawa”.',
        examples: [
          ['Ha yauxiku nawa hamakiri besutanaya, sheki beru betsa tukũni kiaki, nishekepãnã.', 'Quando o povo sovino virou a cara para o outro lado, o calango pôs um grão de milho na boca.'],
          ['Ma keyatapa tanaya, tauru tãtãkĩ.', 'Quando o milho cresceu, limparam o roçado.'],
          ['Haskaya ha txere, hawẽ hiwetã nukuirã…', 'Então a curica, chegando à casa dela…'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “-tanaya” no último verbo: ele fica no verbo que aconteceu antes.',
      'Achar que “haskaya” é uma pergunta: é “então, nisso”; a pergunta “como?” é “haska”, no começo da frase.',
    ],
    quiz: [
      { question: 'O que quer dizer “Baka ẽ bawatanaya, ẽ benẽ pishuki”?', options: ['Depois que cozinhei o peixe, meu marido comeu.', 'Meu marido cozinhou o peixe e eu comi.', 'Vou cozinhar o peixe para o meu marido.'], answer: 'Depois que cozinhei o peixe, meu marido comeu.', explanation: '“-tanaya” fica no verbo que veio antes: “bawa”, cozinhar.' },
      { question: 'Qual destas formas NÃO é do “depois que”?', options: ['-tiru', '-taya', '-naya'], answer: '-tiru', explanation: '“-tiru” é o futuro; “-tanaya”, “-taya”, “-naya” e “-ya” são formas do “depois que, quando”.' },
    ],
  },
  {
    id: 'cbs-g12',
    level: 'B1.2',
    title: 'Para quê? Rã e nã: o mesmo sujeito ou outro',
    emoji: '🎯',
    summary: 'A oração de finalidade vem em segundo lugar. Se quem faz é o mesmo, ela fecha com “rã”; se é outra pessoa, com “nã”.',
    sections: [
      {
        // [KAX14] 200 (7.6: “As orações subordinadas finais, ou de propósito, ocorrem em segunda posição e são
        // marcadas ou por nã ou por rã. Quando os sujeitos são diferentes, a subordinada final é marcada por
        // nã”; “quando os sujeitos são iguais, … por rã”) e 202 (a língua “possui um sistema de referência
        // alternada”). Ex. 1023, convertida: “ɨ-ã risi-ø ɨ̃ niʂa i raka katsi rã”. [KAX11] 96, parte 4, frase 7
        // (“mã batxiwanunã”, para vocês fazerem vestido).
        text: 'Para dizer “para quê”, o hãtxa kuĩ põe a finalidade depois do verbo principal. E ela mostra se quem vai fazer é a mesma pessoa ou outra. Com o mesmo sujeito, fecha em “rã”: “Ẽ risi ẽ nishai, rakakatsirã”, vou amarrar a minha rede para (eu) deitar. Com outro sujeito, fecha em “nã”: o homem da história vai buscar algodão “mã batxiwanunã”, para vocês fazerem vestido. Joaquim Kaxinawá chama isso de referência alternada.',
        table: {
          head: ['Quem faz a finalidade', 'Marca', 'Exemplo'],
          rows: [
            ['o mesmo sujeito', 'rã', 'Ẽ risi ẽ nishai, rakakatsirã. (para eu deitar)'],
            ['outro sujeito', 'nã', 'Ẽ yauxiku nawa nua shapu bikai, mã batxiwanunã. (para vocês fazerem vestido)'],
          ],
        },
      },
      {
        // [KAX14] 199 (7.5: “Quando duas orações se combinam, exprimindo simultaneidade, a oração que
        // corresponde ao cenário, vem seguida da marca nã”); [KAX11] 117, parte 8, frase 11 (“kuxanu ikaya”,
        // “kuʃa-nu-ika-ja”, queria bater, p. 122) e frase 10 (“retenũ ika”, queria matar).
        text: 'O mesmo “nã” marca também o cenário de uma ação que acontece ao mesmo tempo. E nas frases da história, o “-nu” com “ika” é traduzido como vontade: “kuxanu ikaya”, quis bater; “retenũ ika”, quis matar.',
        examples: [
          ['Kunirã haki sinatariakĩ, kuxanu ikaya, runu yauxini kiaki.', 'O poraquê ficou com raiva dele e quis bater, mas a cobra não deixou.'],
          ['Haskaya I haki sinatakĩ, retenũ ika inikiaki.', 'A arraia ficou com raiva e quis matar.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “rã” quando a finalidade é de outra pessoa: “para vocês fazerem” pede “nã” (“mã batxiwanunã”).',
      'Pôr a finalidade antes do verbo principal: ela vem em segundo lugar.',
    ],
    quiz: [
      { question: '“Vou amarrar a minha rede para eu deitar.” A finalidade fecha com…', options: ['rã', 'nã', 'tã'], answer: 'rã', explanation: 'Quem amarra e quem deita é a mesma pessoa: “rakakatsirã”.' },
      { question: 'Em “mã batxiwanunã”, por que o fim é “nã”?', options: ['Quem vai fazer o vestido são outras pessoas', 'É uma pergunta', 'É o passado remoto'], answer: 'Quem vai fazer o vestido são outras pessoas', explanation: 'O homem vai buscar o algodão; quem faz o vestido é “mã”, vocês: sujeito diferente, “nã”.' },
    ],
  },
  {
    id: 'cbs-g13',
    level: 'B1.3',
    title: '-ma: fazer alguém fazer',
    emoji: '🫱',
    summary: 'O sufixo “-ma” no verbo quer dizer “fazer alguém fazer”: “naxi” (tomar banho) → “naxima” (dar banho).',
    sections: [
      {
        // [KAX14] 128 (“Verbos transitivos e intransitivos se combinam com o causativo –ma, o que os distingue
        // dos nomes e adjetivos”) e 129-130, ex. 664, 665, 667 e 672, convertidas: “ɨ̃ naʃi ma ʂu ki”; “ɨ̃ kuʃi ma ʂu
        // ki”; “ɨ̃ hãtʃa ma ʂu ki”; “mã ɨa uʂa ma mis ki”.
        text: 'Para dizer que alguém fez outra pessoa fazer algo, o verbo ganha “-ma”, logo antes do tempo. É o causativo. Ele funciona com verbos com objeto e sem objeto, e é uma das coisas que separam os verbos dos nomes e adjetivos.',
        table: {
          head: ['Verbo', 'Com “-ma”', 'Tradução'],
          rows: [
            ['naxi (tomar banho)', 'Ẽ naximashuki.', 'Eu dei banho nele.'],
            ['kuxi (correr)', 'Ẽ kuximashuki.', 'Eu fiz ele correr.'],
            ['hãtxa (falar)', 'Ẽ hãtxamashuki.', 'Eu fiz ele conversar.'],
            ['usha (dormir)', 'Mã ea ushamamiski.', 'Vocês me fazem dormir.'],
          ],
        },
      },
      {
        // [KAX14] 198, ex. 1003 (“bɨni ma”, glosado “alegrar CAUS1”), convertida; [KAX14] 130, ex. 670 (“ɨ̃
        // matu-ø pi ma …”, eu faço vocês comerem); [KAX11] 117, parte 8, frase 9 (“runũ pimakĩ”, glosado
        // “cobra comer-PERF.2” e traduzido “a cobra deu a comida”, p. 121); 101, parte 5, frase 5 (“banaima”,
        // glosado “plantar-CAUS”, p. 104).
        text: 'O “-ma” aparece também nas histórias. Joaquim Kaxinawá traduz “runũ pimakĩ” por “a cobra deu a comida”: “pima”, dar de comer, tem a forma de “pi” (comer) com o “-ma”. E “benima”, alegrar, também leva o causativo.',
        examples: [
          ['Ha rami ikayarã, runũ pimakĩ.', 'Quando ele estava se transformando, a cobra lhe deu de comer.'],
          ['Ẽ bene hiwetã nukutaya, ẽ ea benimashuki.', 'Depois que meu marido chegou em casa, eu me alegrei.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o “-ma” do causativo com o “-ma” da negação: “taxima” (adjetivo) é “não vermelho”, mas “naxima” (verbo) é “dar banho”.',
      'Esquecer o “-ma”: sem ele, o banho é da própria pessoa (“Bakebe ẽ naxiai”, eu tomo banho com a criança); “eu dei banho nele” é “Ẽ naximashuki”.',
    ],
    quiz: [
      { question: 'O que quer dizer “Ẽ kuximashuki”?', options: ['Eu fiz ele correr.', 'Eu corri.', 'Eu não corri.'], answer: 'Eu fiz ele correr.', explanation: '“kuxi” é correr; com “-ma”, fazer correr.' },
      { question: 'Como se diz “vocês me fazem dormir”?', options: ['Mã ea ushamamiski.', 'Mã ushamiski.', 'Ẽ matu ushamamiski.'], answer: 'Mã ea ushamamiski.', explanation: '“Mã” faz, “ea” recebe, e “usha” (dormir) ganha “-ma”.' },
    ],
  },
  {
    id: 'cbs-g14',
    level: 'B1.3',
    title: 'Aka, ika, ani kiaki: contar o que alguém disse',
    emoji: '🗨️',
    summary: 'A fala de alguém vem primeiro, e depois um verbo de dizer: “aka”, “ika”, “anikiaki” ou “hatuani kiaki” (disse a eles).',
    sections: [
      {
        // [KAX11] 86, parte 2, frases 5, 10 e 11 (“Anikiaki”, glosado “ani kiaki dizer REPORT.2”, p. 88; “aka”,
        // glosado “AUX”, traduzido “disse”, p. 90); 91, parte 3, frase 6 (“hatuani kiaki”, “ha-tua-ni kiaki”,
        // “ele disse”, p. 94); 101, parte 5, frase 2 (“hatuani kiaki”, glosado “3-pl-obl-PASS.5 REPORT.2”,
        // “disse a eles”, p. 102); 96, parte 4, frases 3 e 4 (“ikaya”, “ika”); 106, parte 6, frase 3
        // (“hatuani kiaki”, “disse a eles”, p. 107-108); [KAX14] 174 (5.1.3, “kiaki”).
        text: 'Nas histórias, a fala dos personagens vem primeiro, do jeito que foi dita, e depois um verbo de dizer fecha a frase: “aka” ou “ika” (disse), “anikiaki” (disse, há muito tempo, contam) e “hatuani kiaki” (disse a eles). O “kiaki” lembra que quem conta não viu: é história dos antigos.',
        table: {
          head: ['Fecho', 'Sentido', 'Exemplo'],
          rows: [
            ['aka', 'disse', 'Nishekepã, hania sheki beru betsarã? Aka.'],
            ['ika', 'disse', 'Mĩ hawakatsi txere txi bumai? Ika.'],
            ['anikiaki', 'disse (contam)', 'Nishekepã, ẽ sheki ea shemeshuwẽ? Anikiaki.'],
            ['hatuani kiaki', 'disse a eles', 'Ẽ pinukãi shapu heshe yumetsuikai, hatuani kiaki.'],
          ],
        },
      },
      {
        // [KAX11] 86, parte 2, frases 5 e 10 (“nishekepã”, “nik-pã calango-CLASS”, p. 88 e 90); 92, parte 3,
        // frase 3 (“enabũ”, meus parentes); 101, parte 5, frase 6 (“ẽ aĩnẽ”, minha mulher).
        text: 'Para chamar alguém na fala, o nome vem no começo: o povo sovino chama o calango de “nishekepã”, e o homem chama os parentes de “enabũ” (meus parentes) e a esposa de “ẽ aĩnẽ” (minha mulher).',
        examples: [
          ['Enabũ, ẽ yauxiku nawaki baika.', 'Meus parentes, eu fui passear no povo sovino.'],
          ['Ẽ aĩnẽ, shapu ẽ mia banashunimarã, ma shuruaki bitawẽ? Anikiaki.', 'Minha mulher, o algodão que eu plantei para você já está maduro, vá buscar, disse.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “disse” antes da fala, como em português: em hãtxa kuĩ ele fecha a frase.',
      'Achar que “anikiaki” é uma fala de hoje: o “kiaki” é das histórias que quem conta não viu.',
    ],
    quiz: [
      { question: 'Em “Mĩ hawakatsi txere txi bumai? Ika.”, o que é “ika”?', options: ['disse', 'o fogo', 'por quê'], answer: 'disse', explanation: '“Ika” fecha a fala do personagem.' },
      { question: 'O que quer dizer “hatuani kiaki”?', options: ['disse a eles (contam)', 'vamos!', 'amanhã'], answer: 'disse a eles (contam)', explanation: '“hatu” é “eles”, e “ani kiaki”, “disse, contam”.' },
    ],
  },
  {
    id: 'cbs-g15',
    level: 'B1.4',
    title: 'Rã, tã, nã em foco: foi a curica quem pegou',
    emoji: '🔦',
    summary: 'Além de ligar orações, “rã”, “tã” e “nã” destacam a palavra mais importante: “Habĩ txi bikinã, txerẽ binikiaki”, quem pegou o fogo foi a curica.',
    sections: [
      {
        // [KAX14] 203 (cap. 8: “tanto rã quanto tã marcam constituintes em FOCo”), 205 (“A partícula rã também
        // tem a função de marcar sujeitos de orações essivas”), ex. 1035, 1037 e 1038, convertidas: “Malu-ø rã
        // peruana ki”; “Muru-ø rã rau mɨni ki”; “ʃinu-ã hina-ø rã tʃai-pa ki”; 206 (“a sua função mais geral
        // parece ser a de FOCalizador”).
        text: 'Joaquim Kaxinawá mostra que “rã”, “tã” e “nã” não servem só para ligar orações: a função mais geral delas é pôr uma palavra em foco. Numa frase de “ser”, o “-rã” marca de quem se fala.',
        examples: [
          ['Malurã peruanaki.', 'A Malu é peruana.'],
          ['Mururã rau meniki.', 'O Muru é sábio dos remédios.'],
          ['Xinuã hinarã txaipaki.', 'O rabo do macaco é comprido.'],
        ],
      },
      {
        // [KAX11] 92, parte 3, frase 8 (“Habĩ txi bikinã, txerẽ binikiaki”, quem pegou o fogo foi a curica); 96,
        // parte 4, frase 6 (“Haskaya shapu bikinã, pinũ bini kiaki”); 101, parte 5, frase 9 (“Haska xina harukũ
        // huirã; kana yaix hunũ”, quem chegou primeiro foi o tatu “kana”); [KAX14] 291, adivinha 5.887 (“runu wã
        // nã”, convertida).
        text: 'As histórias usam esse foco para dizer “quem fez foi…”: primeiro a ação, fechada com “nã” ou “rã”, depois quem fez. É assim que a história conta quem trouxe o fogo e o algodão.',
        examples: [
          ['Habĩ txi bikinã, txerẽ binikiaki.', 'Quem pegou o fogo foi a curica.'],
          ['Haskaya shapu bikinã, pinũ bini kiaki.', 'Quem pegou o algodão foi o beija-flor.'],
          ['Haska xina harukũ huirã; kana yaix hunũ.', 'Quem chegou primeiro foi o tatu “kana”.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o “-rã” de “Malurã” é o “-ã” de quem faz a ação: aqui é foco, numa frase de “ser”.',
      'Traduzir palavra por palavra: “Habĩ txi bikinã, txerẽ binikiaki” fica melhor como “quem pegou o fogo foi a curica”.',
    ],
    quiz: [
      { question: 'Em “Habĩ txi bikinã, txerẽ binikiaki”, quem pegou o fogo?', options: ['A curica', 'O povo sovino', 'O beija-flor'], answer: 'A curica', explanation: 'A ação vem antes, com “nã”, e depois quem fez: “txerẽ”.' },
      { question: 'O que quer dizer “Mururã rau meniki”?', options: ['O Muru é sábio dos remédios.', 'O Muru está doente.', 'O Muru deu o remédio.'], answer: 'O Muru é sábio dos remédios.', explanation: '“-rã” marca o assunto da frase de “ser”; “rau meni” é sábio dos remédios.' },
    ],
  },
  {
    id: 'cbs-g16',
    level: 'B1.4',
    title: 'Eã, ea: “fui eu!” e o pronome enfático',
    emoji: '☝️',
    summary: 'Para responder “quem?” só com o pronome, quem fez a ação diz “eã”, e quem só estava diz “ea”. Com o foco, “earã”: eu, eu mesmo.',
    sections: [
      {
        // [KAX14] 148 (4.3: “A série 2, combina-se morfema –ã ‘ergativo’ quando codifica um agente … quando um
        // pronome ocorre em função enfática e como único elemento de uma sentença fragmento”), ex. 776, 763,
        // 764 e 765, convertidas: “tsuã awa aʂu mɨ̃?” – “ɨ-ã”; “tsua hanu mɨ̃?” – “ɨ-a”; “tsuã pi ʂu mɨ̃?” – “ɨ-ã”;
        // “tsua tʃani-ʂu mɨ̃?” – “ɨ-a”; 149, ex. 767 (“nuku=ã > nukũ”, nós).
        text: 'Quando a resposta a uma pergunta com “tsua” (quem) é só um pronome, ele mostra o papel da pessoa. Se ela fez algo com alguém ou alguma coisa (matou a anta, comeu), a resposta é “eã”, com o “-ã” de quem faz. Se ela só estava ali, ou falou, é “ea”. Para “nós”, a forma de quem faz é “nukũ”.',
        table: {
          head: ['Pergunta', 'Resposta', 'Por quê'],
          rows: [
            ['Tsuã awa ashu mẽ? (quem matou a anta?)', 'Eã. (eu)', 'fez algo com a anta: “-ã”'],
            ['Tsuã pishu mẽ? (quem comeu?)', 'Eã. (eu)', 'comer tem objeto: “-ã”'],
            ['Tsua hanu mẽ? (quem está aí?)', 'Ea. (eu)', 'só estar: sem “-ã”'],
            ['Tsua txanishu mẽ? (quem falou?)', 'Ea. (eu)', 'falar, aqui, sem objeto'],
          ],
        },
      },
      {
        // [KAX11] 112, parte 7, frases 5-7 (“earã ẽ hasĩ kainai…”, “ɨa-rã 1-FOC”, p. 116); 106, parte 6, frase 11
        // (“Ha isku eã atanũ ika hikikãi”, eu quero fazer, o japó entrou, p. 110).
        text: 'Com o “-rã” do foco, o pronome fica ainda mais forte: “earã”, eu mesmo. É assim que, no fim da história, cada um escolhe o bicho em que vai virar. E o japó, querendo ser o primeiro a flechar, diz “eã atanũ”, eu é que vou fazer.',
        examples: [
          ['Earã ẽ hasĩ kainai, earã ẽ nea kainai.', 'Eu vou virar mutum; eu vou virar jacamim.'],
          ['Ha isku eã atanũ ika hikikãi.', '“Eu é que vou fazer”, disse o japó, e entrou.'],
        ],
      },
    ],
    pitfalls: [
      'Responder “ẽ” sozinho a “quem?”: a resposta curta é “eã” ou “ea”, não “ẽ”.',
      'Usar “eã” para quem só estava: “Tsua hanu mẽ?” (quem está aí?) pede “Ea”.',
    ],
    quiz: [
      { question: '“Tsuã pishu mẽ?” (quem comeu?). Você comeu. O que responde?', options: ['Eã.', 'Ea.', 'Ẽ.'], answer: 'Eã.', explanation: 'Comer tem objeto: quem fez leva o “-ã”, “eã”.' },
      { question: '“Tsua hanu mẽ?” (quem está aí?). O que responde?', options: ['Ea.', 'Eã.', 'Mĩ.'], answer: 'Ea.', explanation: 'Só estar não tem objeto: “ea”, sem o “-ã”.' },
    ],
  },
];
