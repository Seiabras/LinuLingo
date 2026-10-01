import type { GrammarTopic } from '../types';

/** Tópicos de gramática do quéchua sulenho — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_QU: GrammarTopic[] = [
  {
    id: 'qu-g1',
    level: 'A1.1',
    title: 'Três vogais, consoantes ejetivas e aspiradas',
    emoji: '🔤',
    summary: 'O quéchua escreve com só três vogais (a, i, u) e marca com apóstrofo um tipo de consoante que o português não tem: a ejetiva.',
    sections: [
      {
        text: 'Na ortografia oficial do quéchua sulenho, “e” e “o” só aparecem em palavras emprestadas do espanhol: o som real da língua tem só três vogais, a, i e u (perto de “q”, elas soam mais abertas, quase como “e” e “o”, mas continuam sendo /i/ e /u/). As consoantes p, t, ch, k e q têm cada uma três versões: simples, aspirada (com sopro, escrita com h: ph, th, chh, kh, qh) e ejetiva (um estalo seco, escrita com apóstrofo: p\', t\', ch\', k\', q\').',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['q', 'como um “k”, mas mais fundo na garganta', 'qucha (lago)'],
            ["t'", 'ejetiva: um estalo seco, sem soprar', "t'anta (pão)"],
            ["ch'", 'ejetiva', "ch'arki (charque)"],
            ['ph', 'aspirada: sopro de ar depois do p', 'phawan (voa)'],
            ['ñ', 'como o “nh” do português', 'ñuqa (eu)'],
          ],
        },
        examples: [
          ["T'antata mikhuni.", 'Eu como pão.'],
          ["Wik'uña urqupi kan.", 'A vicunha está na montanha.'],
        ],
      },
    ],
    pitfalls: [
      'Ignorar o apóstrofo: “q\'illu” (amarelo) e um simples “qillu” mal pronunciado podem confundir quem já fala quéchua.',
      'Ler “q” como o “k” do português: o “q” quéchua é mais fundo na garganta, parecido com o árabe ou com o espanhol da América andina.',
    ],
    quiz: [
      { question: 'Quantas vogais tem a escrita oficial do quéchua?', options: ['3 (a, i, u)', '5, como o português', '7'], answer: '3 (a, i, u)', explanation: '“E” e “o” só aparecem em empréstimos do espanhol; o som original da língua usa só a, i, u.' },
      { question: 'O que o apóstrofo marca em “t\'anta”?', options: ['Uma consoante ejetiva', 'Uma vogal longa', 'Um acento tônico'], answer: 'Uma consoante ejetiva', explanation: 'O apóstrofo escreve as consoantes ejetivas (p\', t\', ch\', k\', q\'), um estalo seco que não existe em português.' },
    ],
  },
  {
    id: 'qu-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo kay (ser, estar)',
    emoji: '🙋',
    summary: 'Sete pronomes — dois deles para “nós” — e um verbo só para ser e estar.',
    sections: [
      {
        text: 'O quéchua distingue dois tipos de “nós”: “ñuqanchik” inclui a pessoa com quem você fala, e “ñuqayku” a exclui. É uma diferença que o português não marca, mas que muda o sentido: dizer “ñuqanchik” para alguém de fora do grupo seria incluí-lo sem querer.',
        table: {
          head: ['Pronome', 'Tradução', 'kay'],
          rows: [
            ['ñuqa', 'eu', 'kani'],
            ['qam', 'tu, você', 'kanki'],
            ['pay', 'ele, ela', 'kan'],
            ['ñuqanchik', 'nós (com quem ouve)', 'kanchik'],
            ['ñuqayku', 'nós (sem quem ouve)', 'kayku'],
            ['qamkuna', 'vocês', 'kankichik'],
            ['paykuna', 'eles, elas', 'kanku'],
          ],
        },
        examples: [
          ['Ñuqa Qusqumanta kani.', 'Eu sou de Cusco.'],
          ['Ñuqanchik runakuna kanchik.', 'Nós (você e eu) somos pessoas.'],
        ],
      },
    ],
    pitfalls: ['Usar “ñuqanchik” sem pensar em quem está incluído: se a pessoa que ouve não faz parte, o certo é “ñuqayku”.'],
    quiz: [
      { question: 'Se você fala com um amigo e quer dizer “nós dois”, incluindo-o, qual forma usa?', options: ['Ñuqanchik', 'Ñuqayku', 'Qamkuna'], answer: 'Ñuqanchik', explanation: '“Ñuqanchik” inclui a pessoa com quem você fala; “ñuqayku” a deixaria de fora.' },
      { question: 'Qual é a forma de “kay” para “qam” (tu, você)?', options: ['kanki', 'kani', 'kan'], answer: 'kanki', explanation: '“Kani” é para “ñuqa”, “kan” é para “pay”; “kanki” é a forma de “qam”.' },
    ],
  },
  {
    id: 'qu-g3',
    level: 'A1.2',
    title: 'Evidencialidade: de onde vem o que você diz',
    emoji: '🔍',
    summary: 'O quéchua obriga a marcar, com um sufixo, se a informação vem de experiência própria, de boato ou de suposição.',
    sections: [
      {
        text: 'Em quéchua, quase toda frase leva um pequeno sufixo que diz de onde vem a informação — algo que o português deixa implícito ou explica com uma frase inteira (“eu vi”, “dizem que”, “deve ser”). São três: “-mi” (ou “-n” depois de vogal) para o que você viu ou sabe de primeira mão; “-si” (ou “-s”) para o que alguém contou; e “-chá” para suposição ou dedução.',
        table: {
          head: ['Sufixo', 'Fonte da informação', 'Exemplo'],
          rows: [
            ['-mi / -n', 'Direta: eu vi, eu sei', "T'antam kan. (Há pão — eu sei, eu vi.)"],
            ['-si / -s', 'Relato: alguém contou', "T'antas kan. (Dizem que há pão.)"],
            ['-chá', 'Suposição, dedução', "T'antachá kan. (Deve haver pão.)"],
          ],
        },
        examples: [
          ['Allinmi.', 'Estou bem (eu sei que estou).'],
          ['Wasichá hatun.', 'A casa deve ser grande (é só uma suposição).'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir o sufixo como se fosse um advérbio solto: ele gruda na palavra que carrega a informação mais importante da frase, não sempre no verbo.',
      'Esquecer o sufixo: uma frase em quéchua sem nenhuma marca de evidência soa incompleta para um falante nativo.',
    ],
    quiz: [
      { question: 'Qual sufixo marca que você viu a informação com os próprios olhos?', options: ['-mi', '-si', '-chá'], answer: '-mi', explanation: '“-mi” (ou “-n”) marca evidência direta: você viu, sabe ou presenciou.' },
      { question: '“T\'antas kan” quer dizer…', options: ['Dizem que há pão (alguém contou)', 'Com certeza há pão', 'Talvez haja pão'], answer: 'Dizem que há pão (alguém contou)', explanation: '“-si/-s” marca informação de segunda mão, um relato — não é a sua própria experiência.' },
    ],
  },
  {
    id: 'qu-g4',
    level: 'A1.2',
    title: 'Posse, tópico -qa e a negação mana…-chu',
    emoji: '🧩',
    summary: 'O quéchua é aglutinante: cada ideia gramatical é um sufixo grudado na palavra, encadeado um atrás do outro.',
    sections: [
      {
        text: 'Não existe “meu”, “teu” ou “dele” como palavra separada: são sufixos presos ao substantivo. O sufixo “-qa” marca o tópico da frase (do que se está falando), parecido com uma vírgula depois do sujeito. E a negação precisa de duas peças, “mana” antes do verbo e “-chu” grudado nele — sozinho, “mana” fica incompleto.',
        table: {
          head: ['Posse', 'Exemplo', 'Tradução'],
          rows: [
            ['-y (meu)', 'wasi-y', 'minha casa'],
            ['-yki (teu, seu)', 'wasi-yki', 'tua casa'],
            ['-n (dele, dela)', 'wasi-n', 'a casa dele/dela'],
            ['-nchik (nosso, incl.)', 'wasi-nchik', 'nossa casa (com quem ouve)'],
          ],
        },
        examples: [
          ['Wasiy hatunmi.', 'Minha casa é grande.'],
          ['Mana yachanichu.', 'Eu não sei.'],
          ['Ñuqaqa Qusqumanta kani.', 'Eu, por minha vez, sou de Cusco.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o “-chu” na negação: “mana yachani” sozinho soa cortado pela metade — falta o “-chu” no verbo.',
      'Procurar uma palavra solta para “meu”: em quéchua ela está sempre grudada no final do substantivo.',
    ],
    quiz: [
      { question: 'Como se diz “eu não sei” em quéchua?', options: ['Mana yachanichu.', 'Mana yachani.', 'Yachanichu mana.'], answer: 'Mana yachanichu.', explanation: 'A negação tem duas partes: “mana” antes do verbo e “-chu” grudado nele.' },
      { question: 'O que “wasiyki” quer dizer?', options: ['Tua casa', 'Minha casa', 'A casa dele'], answer: 'Tua casa', explanation: '“-yki” é o sufixo de posse da segunda pessoa (tu, você).' },
    ],
  },
];
