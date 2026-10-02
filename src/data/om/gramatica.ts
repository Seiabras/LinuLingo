import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do oromo — por enquanto só A1.1 e A1.2 (pacote incompleto, ver `incomplete`
 * em index.ts). Fontes: Wikipedia ("Oromo language", seção de fonologia: ejetivas, dígrafos do
 * qubee, geminação e vogal longa, com os exemplos "hara/haaraa" e "badaa/baddaa"), Wiktionary
 * (tabela de pronomes pessoais em "inni"; "koo"/"kee" como possessivos de "ana"/"si"; o verbo "dha"
 * com os exemplos "Inni diimaa dha" / "Isheen diimtuu dha" / "Isaan diimoo dha"; "kun" com os
 * exemplos "Kun gaarii dha" / "Kun kan koo dha"), Glosbe om-en ("maal", "eenyu", "sana").
 */
export const GRAMMAR_OM: GrammarTopic[] = [
  {
    id: 'om-g1',
    level: 'A1.1',
    title: 'Pronúncia: o qubee, as ejetivas e a letra dobrada',
    emoji: '🔤',
    summary: 'O qubee (alfabeto latino oficial desde 1991) tem sons “secos”, presos na garganta — as ejetivas c, q, x, ph —, e dobra letras para marcar vogal longa ou consoante geminada.',
    sections: [
      {
        text: 'O oromo se escreve no qubee, adotado oficialmente em 1991 em vez da escrita etíope (ge’ez) usada antes. Além dos dígrafos ch, dh, ny, ph, sh e zh, o qubee tem quatro letras que marcam consoantes ejetivas: um som “seco”, sem ar saindo, fechado por um instante na garganta antes de soltar.',
        table: {
          head: ['Letra', 'Som (IPA)', 'Exemplo'],
          rows: [
            ['c', 'ejetiva de “tch”: [t͡ʃʼ]', 'ciree (café da manhã)'],
            ['q', 'ejetiva de “k”: [kʼ]', 'qilleensa (ar, vento)'],
            ['x', 'ejetiva de “t”: [tʼ]', 'xiqqaa (pequeno)'],
            ['ph', 'ejetiva de “p”: [pʼ]', 'Itoophiyaa (Etiópia)'],
            ['dh', 'implosiva: [ɗ], a garganta puxa o ar para dentro', 'dhiira (homem)'],
          ],
        },
        examples: [
          ['Akkam!', 'Oi, como vai!'],
          ['Xiqqaa dha.', 'É pequeno.'],
        ],
      },
      {
        heading: 'Vogal dobrada é vogal longa, consoante dobrada é geminada',
        text: 'O qubee marca o comprimento do som dobrando a letra: uma vogal dobrada soa mais longa, e uma consoante dobrada soa “demorada”, como se a língua ficasse mais tempo no lugar antes de soltar. A diferença muda o sentido da palavra.',
        table: {
          head: ['Curto', 'Longo/geminado', 'O que muda'],
          rows: [
            ['hara (lago)', 'haaraa (novo)', 'vogal “a” longa'],
            ['badaa (ruim)', 'baddaa (planalto)', 'consoante “d” geminada'],
          ],
        },
        examples: [['Ji’a tokko.', 'Um mês/uma lua.']],
      },
    ],
    pitfalls: [
      'Ler c, q, x e ph como “tch”, “k”, “t” e “p” comuns: são sons ejetivos, fechados na garganta, que não existem em português.',
      'Não notar a letra dobrada: “hara” (lago) e “haaraa” (novo) são palavras diferentes só pela vogal longa.',
    ],
    quiz: [
      {
        question: 'O que diferencia “hara” (lago) de “haaraa” (novo)?',
        options: ['A vogal “a” dobrada, que fica longa', 'O tom da sílaba', 'Nada, são a mesma palavra'],
        answer: 'A vogal “a” dobrada, que fica longa',
        explanation: 'No qubee, a vogal dobrada marca o som longo: “hara” tem “a” curto, “haaraa” tem “aa” longo.',
      },
      {
        question: 'O que é uma consoante “ejetiva”, como em q, x, c e ph?',
        options: ['Um som seco, fechado por um instante na garganta antes de soltar', 'Uma consoante sempre muda', 'Uma letra que nunca se pronuncia'],
        answer: 'Um som seco, fechado por um instante na garganta antes de soltar',
        explanation: 'Ejetivas são consoantes “glotalizadas”: a garganta fecha, sobe a pressão do ar e solta um som seco, sem o português ter equivalente.',
      },
    ],
  },
  {
    id: 'om-g2',
    level: 'A1.1',
    title: 'Pronomes pessoais: ani, ati, inni, isheen…',
    emoji: '🙋',
    summary: 'O oromo distingue “ele” (inni) de “ela” (isheen) já no pronome de sujeito, e “isin” serve tanto para “vocês” quanto como forma de respeito no singular.',
    sections: [
      {
        text: 'Os pronomes de sujeito (quem pratica a ação) do oromo:',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['ani', 'eu'],
            ['ati', 'tu, você'],
            ['inni', 'ele'],
            ['isheen', 'ela'],
            ['nu (ou nuyi)', 'nós'],
            ['isin', 'vós, vocês (e forma de respeito no singular)'],
            ['isaan', 'eles, elas'],
          ],
        },
        examples: [
          ['Ani diimaa dha.', 'Eu sou vermelho.'],
          ['Isheen diimtuu dha.', 'Ela é vermelha.'],
        ],
      },
      {
        heading: '“Isin” também é respeito',
        text: 'Assim como o português usa “o senhor” ou “vocês” para formalizar o “tu”, o oromo usa “isin” (originalmente “vocês”) para tratar uma única pessoa com respeito — um idoso, uma autoridade.',
      },
    ],
    pitfalls: [
      'Usar “ati” com qualquer pessoa mais velha ou desconhecida: o respeito pede “isin”, mesmo falando com uma pessoa só.',
      'Confundir “inni” (ele) com “isheen” (ela): ao contrário do português, o oromo já marca esse gênero no próprio pronome de sujeito.',
    ],
    quiz: [
      {
        question: 'Como se diz “ela” em oromo?',
        options: ['isheen', 'inni', 'isin'],
        answer: 'isheen',
        explanation: '“Isheen” é o pronome de sujeito feminino da 3ª pessoa do singular.',
      },
      {
        question: 'Além de “vocês”, para que mais serve “isin”?',
        options: ['Forma de respeito para falar com uma única pessoa', 'Forma íntima entre amigos', 'Só se usa para objetos'],
        answer: 'Forma de respeito para falar com uma única pessoa',
        explanation: '“Isin” trata uma pessoa só com respeito, como o “vocês” de cortesia em certos contextos do português.',
      },
    ],
  },
  {
    id: 'om-g3',
    level: 'A1.2',
    title: 'O verbo “ser” grudado no fim da frase: dha',
    emoji: '🔗',
    summary: '“Dha” gruda no fim do predicado para dizer “é/sou/são” — e o adjetivo antes dele muda de forma conforme o gênero e o número do sujeito.',
    sections: [
      {
        text: 'Para dizer “X é Y”, o oromo põe “dha” no fim da frase, depois do predicado — não existe um verbo solto como o “é” do português.',
        examples: [
          ['Kun gaarii dha.', 'Isto é bom.'],
          ['Kun kan koo dha.', 'Este é o meu.'],
        ],
      },
      {
        heading: 'O adjetivo concorda com o sujeito',
        text: 'Alguns adjetivos, como as cores, mudam de forma conforme o sujeito é masculino, feminino ou plural — o oposto do português, em que o verbo “ser” muda e o adjetivo vermelho fica praticamente igual.',
        table: {
          head: ['Sujeito', 'Frase', 'Tradução'],
          rows: [
            ['ani / inni (masc.)', 'Ani diimaa dha. / Inni diimaa dha.', 'Eu sou / Ele é vermelho.'],
            ['isheen (fem.)', 'Isheen diimtuu dha.', 'Ela é vermelha.'],
            ['isaan (plural)', 'Isaan diimoo dha.', 'Eles são vermelhos.'],
          ],
        },
      },
      {
        heading: 'O sujeito às vezes ganha um “-n” no final',
        text: 'Quando o substantivo que faz a pergunta ou a afirmação é o sujeito da frase, ele costuma ganhar um “-n” no fim: “maqaa” (nome) vira “maqaan” em “Maqaan kee eenyu?” (qual é o seu nome?) e “Maqaan koo…” (meu nome é…). É a marca de sujeito (caso nominativo), não faz parte da palavra sozinha.',
        examples: [
          ['Maqaan kee eenyu?', 'Qual é o seu nome?'],
          ['Maqaan koo Linu.', 'Meu nome é Linu.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser” solto, separado do predicado: “dha” gruda direto depois da palavra que descreve o sujeito.',
      'Usar sempre “diimaa” (vermelho) para qualquer sujeito: no feminino vira “diimtuu”, no plural “diimoo”.',
      'Estranhar o “-n” extra em palavras como “maqaan”: é a marca de sujeito, some quando a palavra não é o sujeito da frase.',
    ],
    quiz: [
      {
        question: 'Como se diz “Isto é bom” em oromo?',
        options: ['Kun gaarii dha.', 'Dha kun gaarii.', 'Gaarii kun dha.'],
        answer: 'Kun gaarii dha.',
        explanation: '“Dha” vem sempre no fim da frase, depois do predicado (“gaarii”, bom).',
      },
      {
        question: 'Como fica “vermelho” quando o sujeito é “isheen” (ela)?',
        options: ['diimtuu', 'diimaa', 'diimoo'],
        answer: 'diimtuu',
        explanation: 'O feminino singular de “diimaa” é “diimtuu”; o plural é “diimoo”.',
      },
    ],
  },
  {
    id: 'om-g4',
    level: 'A1.2',
    title: 'Possessivos, demonstrativos e perguntas',
    emoji: '❓',
    summary: '“Koo” e “kee” grudam a ideia de “meu” e “teu” ao que vem antes; “kun” e “sana” apontam para perto e para longe; “maal”, “eenyu” e “meeqa” abrem as perguntas mais úteis.',
    sections: [
      {
        text: 'Os possessivos “koo” (meu) e “kee” (teu) vêm depois da coisa possuída, como um adjetivo.',
        examples: [
          ['Maqaan kee eenyu?', 'Qual é o seu nome? (lit. “seu nome é quem?”)'],
          ['Kun kan koo dha.', 'Este é o meu.'],
        ],
      },
      {
        heading: 'Perto e longe: kun e sana',
        text: '“Kun” aponta para algo perto (este, esta, isto); “sana” para algo mais longe (aquele, aquela, aquilo). Os dois podem vir sozinhos, como pronome, ou junto de um substantivo.',
        examples: [
          ['Kun maal dha?', 'O que é isto?'],
          ['Sana maal dha?', 'O que é aquilo?'],
        ],
      },
      {
        heading: 'As três perguntas mais úteis',
        table: {
          head: ['Pergunta', 'Tradução'],
          rows: [
            ['maal', 'o quê'],
            ['eenyu', 'quem'],
            ['meeqa', 'quanto, quantos'],
          ],
        },
      },
    ],
    pitfalls: [
      'Pôr o possessivo antes do substantivo, como em português (“meu nome”): em oromo ele vem depois, “maqaan kee” (nome-teu).',
      'Misturar “kun” (perto) com “sana” (longe): a escolha depende da distância de quem fala até a coisa.',
    ],
    quiz: [
      {
        question: 'Como se pergunta “o que é isto?”',
        options: ['Kun maal dha?', 'Maal kun dha?', 'Dha kun maal?'],
        answer: 'Kun maal dha?',
        explanation: 'A ordem é sujeito (“kun”) + predicado (“maal”) + “dha”.',
      },
      {
        question: 'Onde vem o possessivo “kee” (teu) numa frase como “seu nome”?',
        options: ['Depois do substantivo: “maqaan kee”', 'Antes do substantivo: “kee maqaan”', 'Só pode ficar sozinho'],
        answer: 'Depois do substantivo: “maqaan kee”',
        explanation: 'Diferente do português, o possessivo oromo vem depois da palavra que ele modifica.',
      },
    ],
  },
];
