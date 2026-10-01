import type { GrammarTopic } from '../types';

/** Tópicos de gramática do aimará — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_AY: GrammarTopic[] = [
  {
    id: 'ay-g1',
    level: 'A1.1',
    title: 'Três vogais, consoantes ejetivas e o “x” raspado',
    emoji: '🔤',
    summary: 'O aimará escreve com só três vogais (a, i, u) e, como o quéchua, marca consoantes ejetivas e aspiradas — mas tem um som a mais que o quéchua não tem: o “x”.',
    sections: [
      {
        text: 'A ortografia oficial do aimará (o “alfabeto único”, adotado na Bolívia e no Peru em 1984-85) usa só três vogais — a, i, u — que podem ser longas (escritas com trema: ä, ï, ü, ou dobradas: aa, ii, uu). As consoantes p, t, ch, k e q têm, como no quéchua, três versões: simples, aspirada (ph, th, chh, kh, qh) e ejetiva (p\', t\', ch\', k\', q\'). O aimará tem ainda a letra “x”, um som raspado no fundo da garganta (parecido com o “j” do espanhol ou com uma versão mais fraca do “q”), que aparece em palavras comuns como “uñjaña” (ver) e no sufixo de tópico “-xa” (“nayax”, “eu, por minha vez”).',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ["t'", 'ejetiva: um estalo seco, sem soprar', "t'ant'a (pão)"],
            ['ph', 'aspirada: sopro de ar depois do p', 'phaxsi (lua)'],
            ['x', 'raspado no fundo da garganta', 'suxta (seis), nayax (eu, tópico)'],
            ['ä, ï, ü', 'vogal longa', 'jutäwa (vou vir)'],
          ],
        },
        examples: [
          ["Ch'uqixa jach'awa.", 'A batata é grande.'],
          ['Suxta mara.', 'Seis anos.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o “x” aimará com o “x” do português: aqui ele nunca soa como “ch” ou “z” — é sempre o som raspado da garganta.',
      'Ignorar o apóstrofo das ejetivas: “ch\'uqi” (batata) e um “chuqi” mal pronunciado podem confundir quem já fala aimará.',
    ],
    quiz: [
      { question: 'Quantas vogais tem a escrita oficial do aimará?', options: ['3 (a, i, u)', '5, como o português', '7'], answer: '3 (a, i, u)', explanation: 'Como no quéchua, o som original da língua usa só a, i, u — podendo ser longas (ä, ï, ü).' },
      { question: 'O que o “x” marca em “suxta” (seis)?', options: ['Um som raspado no fundo da garganta', 'Um “ch” como em “chuva”', 'Uma vogal muda'], answer: 'Um som raspado no fundo da garganta', explanation: 'É um som que o português não tem, parecido com o “j” do espanhol — não é o “x” do português.' },
    ],
  },
  {
    id: 'ay-g2',
    level: 'A1.1',
    title: 'Pronomes, posse grudada e a assertiva “-wa” (sem verbo “ser”)',
    emoji: '🙋',
    summary: 'O aimará não tem um verbo separado para “ser/estar”: para afirmar algo, basta grudar “-wa” na palavra principal da frase.',
    sections: [
      {
        text: 'Os quatro pronomes de base do aimará são “naya” (eu), “juma” (tu/você), “jupa” (ele/ela) e “jiwasa” (nós, incluindo quem ouve) — o plural de cada um leva “-naka” (“nayanaka”, nós sem incluir quem ouve; “jumanaka”, vocês; “jupanaka”, eles/elas). A posse é um sufixo grudado no substantivo, não uma palavra separada: “uta” (casa) vira “uta-ja” (minha casa), “uta-ma” (tua casa), “uta-pa” (a casa dele/dela). E para dizer “eu sou X” ou “isto é X”, não existe um verbo como o nosso “ser”: basta acrescentar o sufixo “-wa” (às vezes “-twa” depois de vogal) na palavra que descreve o sujeito.',
        table: {
          head: ['Pronome', 'Tradução', 'Posse (casa)'],
          rows: [
            ['naya', 'eu', 'utaja (minha casa)'],
            ['juma', 'tu, você', 'utama (tua casa)'],
            ['jupa', 'ele, ela', 'utapa (a casa dele/dela)'],
            ['jiwasa', 'nós (com quem ouve)', 'utasa (nossa casa)'],
          ],
        },
        examples: [
          ['Naya jaqitwa.', 'Eu sou uma pessoa.'],
          ['Nayax yatichiritwa.', 'Eu sou professor(a).'],
          ['Jupax jilajawa.', 'Ele é meu irmão.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser/estar” para traduzir frases como “eu sou professor”: em aimará, o sufixo “-wa”/“-twa” faz esse trabalho sozinho, grudado no substantivo.',
      'Esquecer o sufixo de posse: em aimará não existe um “meu” solto — ele vem sempre grudado no final da palavra (“uta-ja”, nunca “ja uta”).',
    ],
    quiz: [
      { question: 'Como se diz “minha casa” em aimará?', options: ['Utaja', 'Uta naya', 'Naya uta'], answer: 'Utaja', explanation: 'O sufixo de posse “-ja” (meu) gruda direto no substantivo: uta + ja = utaja.' },
      { question: 'Qual verbo o aimará usa para dizer “eu sou uma pessoa”?', options: ['Nenhum: só o sufixo “-wa”/“-twa”', 'Kay', 'Ser'], answer: 'Nenhum: só o sufixo “-wa”/“-twa”', explanation: '“Naya jaqitwa” (eu sou uma pessoa) não tem verbo nenhum: “-twa” grudado em “jaqi” (pessoa) já afirma a frase.' },
    ],
  },
  {
    id: 'ay-g3',
    level: 'A1.2',
    title: 'Evidencialidade: de onde vem o que você diz',
    emoji: '🔍',
    summary: 'Como em vários estudos sobre o aimará do sul, a língua marca na própria gramática se a informação vem de experiência direta, de dedução ou de boato.',
    sections: [
      {
        text: 'Pesquisas de linguística sobre o aimará do sul (o falado em torno de La Paz e do lago Titicaca) descrevem um sistema de evidencialidade com três marcas principais: o sufixo/partícula “-wa” para informação direta (o próprio “-wa” da assertiva, usado quando o falante viu ou tem certeza pessoal daquilo), o sufixo “-tay” para informação inferida ou deduzida (o falante concluiu algo, mas não viu diretamente), e a palavra “siwa” (algo como “dizem que”, de “saña”, dizer) para relatar o que outra pessoa contou.',
        table: {
          head: ['Marca', 'Fonte da informação', 'Exemplo (aproximado)'],
          rows: [
            ['-wa', 'Direta: eu vi, eu sei com certeza', 'Jupax jilajawa. (Ele é meu irmão — eu sei.)'],
            ['-tay', 'Inferência, dedução', '(algo como) “deve ser”, concluído sem ver diretamente'],
            ['siwa', 'Relato: alguém contou (de “saña”, dizer)', 'Jalluwa, siwa. (Dizem que está chovendo.)'],
          ],
        },
        examples: [
          ['Jalluwa.', 'Está chovendo (eu vejo/sei).'],
          ['Jalluwa, siwa.', 'Dizem que está chovendo.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar o “-wa” só como um “é”: ele também carrega a informação de que o falante tem certeza pessoal, não é neutro como o nosso verbo “ser”.',
      'Confundir “siwa” (relato, “dizem que”) com uma simples palavra de boato solta: ela tem um peso gramatical parecido com um sufixo de evidencialidade em outras línguas andinas.',
    ],
    quiz: [
      { question: 'O que a marca “-wa” indica sobre a informação de uma frase?', options: ['Que o falante tem conhecimento direto ou certeza pessoal', 'Que é só um boato', 'Que é uma pergunta'], answer: 'Que o falante tem conhecimento direto ou certeza pessoal', explanation: '“-wa” marca afirmação com base em conhecimento direto — é também a marca usada nas frases sem verbo “ser” deste curso.' },
      { question: '“Jalluwa, siwa” quer dizer…', options: ['Dizem que está chovendo (alguém contou)', 'Com certeza está chovendo (eu vi)', 'Vai chover amanhã'], answer: 'Dizem que está chovendo (alguém contou)', explanation: '“Siwa” marca que a informação veio de outra pessoa, não da experiência direta de quem fala.' },
    ],
  },
  {
    id: 'ay-g4',
    level: 'A1.2',
    title: 'O passado na frente, o futuro atrás: a metáfora do tempo',
    emoji: '🔍',
    summary: 'Uma descoberta real e famosa da linguística: no aimará, o passado fica “na frente” (onde se vê) e o futuro fica “atrás” (onde não se vê) — o espelho do que o português faz.',
    sections: [
      {
        text: 'Em 2006, os linguistas Rafael Núñez e Eve Sweetser publicaram, na revista Cognitive Science, um estudo sobre como o aimará fala do tempo usando o espaço: a língua usa “nayra” — a mesma palavra para “olho”, “vista” e “frente” — para dizer “passado” (o que já foi visto, o que é conhecido), e usa “qhipa” — a mesma palavra para “costas”, “atrás” — para dizer “futuro” (o que ainda não se vê, o que é desconhecido). É o espelho exato da metáfora do português, em que o futuro fica “à frente” e o passado “para trás”. O estudo mostrou até que os gestos de falantes aimarás mais velhos acompanham essa lógica: eles apontam para trás do corpo ao falar do futuro, e para a frente ao falar do passado.',
        table: {
          head: ['Palavra', 'Sentido espacial', 'Sentido temporal'],
          rows: [
            ['nayra', 'olho, vista, frente', 'passado (“nayra”, antes, como em “nayrax kawkins irnaqayäta?”, onde você trabalhava antes?)'],
            ['qhipa', 'costas, atrás', 'futuro (“qhipüru”, lit. “dia de trás”, usado para “outro dia, no futuro”)'],
          ],
        },
        examples: [
          ['Nayrax kawkins irnaqayäta?', 'Antes, onde você trabalhava? (“nayra” = antes, no passado)'],
          ['Qhipürü', 'Outro dia, no futuro (lit. “dia de trás”)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar que “na frente” e “atrás” signifiquem a mesma coisa que em português: no aimará é o contrário — o que já aconteceu (e por isso é “visível”, conhecido) fica na frente; o que ainda não aconteceu (e por isso é “invisível”) fica atrás.',
      'Achar que é só uma curiosidade de tradução: o estudo de Núñez e Sweetser mostrou que até os gestos de apontar acompanham essa lógica — não é uma figura de linguagem isolada.',
    ],
    quiz: [
      { question: 'No aimará, qual palavra serve tanto para “olho/frente” quanto para “passado”?', options: ['Nayra', 'Qhipa', 'Pacha'], answer: 'Nayra', explanation: '“Nayra” liga o que já foi visto (o passado, conhecido) com a frente, de onde se vê.' },
      { question: 'Por que o futuro é associado a “atrás” (qhipa) no aimará, segundo o estudo de Núñez e Sweetser?', options: ['Porque o futuro ainda não pode ser visto, como o que fica atrás do corpo', 'Porque “atrás” soa parecido com “depois” em espanhol', 'Não há explicação, é uma coincidência'], answer: 'Porque o futuro ainda não pode ser visto, como o que fica atrás do corpo', explanation: 'A lógica aimará liga “visível” a “conhecido/passado” e “invisível” a “desconhecido/futuro” — o espelho da lógica do português.' },
    ],
  },
];
