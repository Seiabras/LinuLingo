import type { GrammarTopic } from '../types';

/** Tópicos de gramática do hindi — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_HI: GrammarTopic[] = [
  {
    id: 'hi-g1',
    level: 'A1.1',
    title: 'A escrita devanágari',
    emoji: '🔤',
    summary: 'Uma escrita silábica (abugida) com mais de 2500 anos, também usada para escrever o sânscrito e o marathi.',
    sections: [
      {
        text: 'O devanágari se escreve da esquerda para a direita, com as letras penduradas numa linha horizontal no topo (“शिरोरेखा”). Cada consoante já carrega embutido o som “a”: “क” sozinho já soa “ka”. Para trocar essa vogal, usam-se sinais (“मात्रा”) grudados antes, depois, em cima ou embaixo da consoante — por isso o mesmo som pode “sumir” ou mudar de forma conforme o que vem ao redor.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['अ', 'um “a” curto', 'अच्छा (acchā, bom)'],
            ['न', 'como o “n” do português', 'नाम (nām, nome)'],
            ['ह', 'um “h” aspirado, que não existe em português', 'हाँ (hā̃, sim)'],
            ['◌ा', 'sinal de “ā” longo, grudado depois da consoante', 'माँ (mā̃, mãe)'],
            ['◌ी', 'sinal de “ī” longo, grudado depois da consoante', 'रोटी (roṭī, pão)'],
          ],
        },
        examples: [
          ['नमस्ते, मैं हिंदी सीख रहा हूँ।', 'Oi, eu estou aprendendo hindi.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar ler o devanágari letra por letra, como o alfabeto latino: os sinais de vogal mudam a forma e até a posição ao redor da consoante, então uma “sílaba” pode ter até três símbolos grudados.',
      'Esquecer que uma consoante sozinha, sem nenhum sinal, já soa com “a” embutido: “क” é “ka”, não “k”.',
    ],
    quiz: [
      { question: 'O devanágari é uma escrita…', options: ['silábica (abugida): a consoante já vem com uma vogal embutida', 'alfabética, uma letra por som, sem vogal embutida', 'ideográfica, um símbolo por palavra'], answer: 'silábica (abugida): a consoante já vem com uma vogal embutida', explanation: 'Numa abugida como o devanágari, cada consoante soa com “a” por padrão, e sinais ao redor dela trocam essa vogal.' },
      { question: 'Além do hindi, o devanágari também é usado para escrever…', options: ['o sânscrito e o marathi', 'o urdu', 'o inglês da Índia'], answer: 'o sânscrito e o marathi', explanation: 'O urdu usa uma escrita derivada do árabe-persa, mesmo sendo quase a mesma língua falada que o hindi.' },
    ],
  },
  {
    id: 'hi-g2',
    level: 'A1.1',
    title: 'तू, तुम, आप: os três níveis de “você”',
    emoji: '🙇',
    summary: 'O hindi tem três pronomes para “você”, cada um com seu próprio jeito de conjugar “ser/estar”.',
    sections: [
      {
        text: '“तू” é só para quem é muito íntimo — crianças, Deus em orações, ou entre amigos muito próximos — e pode soar rude fora desses contextos. “तुम” é o meio-termo, usado com amigos, colegas e pessoas da mesma idade ou mais novas. “आप” é o tratamento respeitoso, usado com desconhecidos, pessoas mais velhas, pais e qualquer figura de autoridade: é sempre o jeito mais seguro de começar uma conversa.',
        table: {
          head: ['Pronome', 'Nível', '“ser/estar” (होना)'],
          rows: [
            ['तू', 'muito íntimo', 'है'],
            ['तुम', 'informal', 'हो'],
            ['आप', 'formal, respeitoso', 'हैं'],
          ],
        },
        examples: [
          ['तू कहाँ है?', 'Onde você está? (bem íntimo)'],
          ['तुम कैसे हो?', 'Como você vai? (informal)'],
          ['आप कैसे हैं?', 'Como o(a) senhor(a) vai? (formal)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “तू” com um desconhecido ou alguém mais velho: soa rude ou até agressivo, mesmo sem essa intenção.',
      'Esquecer que o verbo muda com o pronome: “तुम है” e “आप हो” estão errados — é “तुम हो” e “आप हैं”.',
    ],
    quiz: [
      { question: 'Para falar com o pai de um(a) amigo(a) pela primeira vez, o pronome mais seguro é…', options: ['आप', 'तू', 'तुम'], answer: 'आप', explanation: '“आप” é o tratamento respeitoso, correto para desconhecidos e pessoas mais velhas.' },
      { question: 'Complete: “तुम कैसे ___?”', options: ['हो', 'है', 'हैं'], answer: 'हो', explanation: '“तुम” sempre vem com “हो”, nunca com “है” (de तू) nem “हैं” (de आप).' },
    ],
  },
  {
    id: 'hi-g3',
    level: 'A1.2',
    title: 'Gênero gramatical: masculino e feminino',
    emoji: '⚥',
    summary: 'Todo substantivo do hindi é masculino ou feminino, e adjetivos, verbos e até posposições concordam com ele.',
    sections: [
      {
        text: 'O hindi marca gênero gramatical (masculino, “पुल्लिंग”, e feminino, “स्त्रीलिंग”) em todo substantivo — mesmo em coisas sem sexo, como “घर” (casa, masculino) ou “रोटी” (pão, feminino). Muitos adjetivos terminados em “-आ” mudam para “-ई” no feminino: “बड़ा” (grande) vira “बड़ी” diante de um substantivo feminino. Adjetivos emprestados do persa ou do árabe, como “सफ़ेद” (branco) e “लाल” (vermelho), não mudam nunca.',
        table: {
          head: ['Masculino', 'Feminino', 'Exemplo'],
          rows: [
            ['बड़ा (grande)', 'बड़ी', 'मेरा घर बड़ा है। / मेरी बहन बड़ी है।'],
            ['छोटा (pequeno)', 'छोटी', 'मेरा भाई छोटा है। / मेरी बेटी छोटी है।'],
            ['काला (preto)', 'काली', 'कुत्ता काला है। / बिल्ली काली है।'],
            ['अच्छा (bom)', 'अच्छी', 'खाना अच्छा है। / चाय अच्छी है।'],
          ],
        },
        examples: [
          ['मेरा परिवार बड़ा है।', 'A minha família é grande. (परिवार é masculino)'],
          ['रोटी ताज़ी है।', 'O pão está fresco. (रोटी é feminino, apesar de “pão” ser masculino em português)'],
        ],
      },
    ],
    pitfalls: [
      'Supor que o gênero segue o sentido, como em português: “पानी” (água) é masculino, e “किताब” (livro) é feminino, sem ligação óbvia com o que a palavra significa.',
      'Esquecer de mudar o adjetivo: “यह बिल्ली काला है” soa errado — tem que ser “यह बिल्ली काली है”, concordando com “बिल्ली” (feminino).',
    ],
    quiz: [
      { question: 'Como se diz “a casa é pequena”, com “घर” (masculino)?', options: ['मेरा घर छोटा है।', 'मेरा घर छोटी है।', 'मेरी घर छोटा है।'], answer: 'मेरा घर छोटा है।', explanation: '“घर” é masculino, então o possessivo e o adjetivo ficam na forma masculina: “मेरा … छोटा”.' },
      { question: 'Qual adjetivo NUNCA muda de forma, mesmo com um substantivo feminino?', options: ['सफ़ेद (branco)', 'बड़ा (grande)', 'काला (preto)'], answer: 'सफ़ेद (branco)', explanation: '“सफ़ेद”, como “लाल” (vermelho), foi emprestado do persa e é invariável: não tem forma feminina separada.' },
    ],
  },
  {
    id: 'hi-g4',
    level: 'A1.2',
    title: 'Ter: के पास e o genitivo da família',
    emoji: '🤲',
    summary: 'O hindi não tem um verbo para “ter”: usa “के पास” (perto de) para objetos, e o possessivo direto para parentesco.',
    sections: [
      {
        text: 'Para dizer que alguém tem um objeto, o hindi usa a posposição “के पास” (perto de, com) antes de “होना”: “मेरे पास एक किताब है” é, ao pé da letra, “perto de mim um livro é”. Já para falar de parentesco, não se usa “के पास”: o jeito natural é só o possessivo (मेरा/मेरी) com “होना” — “मेरा एक भाई है” (tenho um irmão, literalmente “meu um irmão é”). Para negar qualquer um dos dois, “नहीं” vem antes do verbo: “मेरे पास नहीं है” (não tenho), “मेरा भाई नहीं है” (não tenho irmão).',
        table: {
          head: ['O que se tem', 'Construção', 'Exemplo'],
          rows: [
            ['objeto', 'X के पास … है', 'मेरे पास एक किताब है।'],
            ['parente', 'मेरा/मेरी … है', 'मेरा एक भाई है।'],
            ['negação', '… नहीं है', 'मेरे पास कुत्ता नहीं है।'],
          ],
        },
        examples: [
          ['मेरे पास एक किताब है।', 'Eu tenho um livro.'],
          ['मेरा एक भाई है।', 'Eu tenho um irmão.'],
          ['मेरे पास कुत्ता नहीं है।', 'Eu não tenho cachorro.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “के पास” com parentesco: “मेरे पास एक भाई है” soa estranho em hindi — o natural é “मेरा एक भाई है”, sem “के पास”.',
      'Esquecer que “नहीं” vem antes do verbo, não depois: é “नहीं है”, nunca “है नहीं” numa frase comum.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho um livro”?', options: ['मेरे पास एक किताब है।', 'मेरा एक किताब है।', 'मैं एक किताब हूँ।'], answer: 'मेरे पास एक किताब है।', explanation: 'Posse de objeto usa “के पास” (perto de) antes de “है”.' },
      { question: 'Como se diz “eu tenho uma irmã”?', options: ['मेरी एक बहन है।', 'मेरे पास एक बहन है।', 'मैं एक बहन हूँ।'], answer: 'मेरी एक बहन है।', explanation: 'Parentesco usa só o possessivo (मेरी, concordando com “बहन”, feminino) com “है”, sem “के पास”.' },
    ],
  },
];
