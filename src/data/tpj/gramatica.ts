import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tapiete — só A1.1 e A1.2 (pacote incompleto). Toda a análise fonológica e
 * morfológica vem de González, Hebe (2010) “Una aproximación a la fonología del tapiete
 * (Tupí-Guaraní)”, LIAMES 8, pp. 7-43 — ver o cabeçalho de vocabulario.ts para a citação completa.
 */
export const GRAMMAR_TPJ: GrammarTopic[] = [
  {
    id: 'tpj-g1',
    level: 'A1.1',
    title: 'Só sílabas abertas',
    emoji: '🔤',
    summary: 'O tapiete só permite sílabas abertas (terminadas em vogal): CV, V ou CVV — sem consoante no final, salvo casos bem específicos.',
    sections: [
      {
        text: 'González (2010) mostra que a estrutura silábica canônica do tapiete é (C)V(V)(N): um ataque consonantal opcional, um núcleo de uma ou duas vogais, e no máximo uma consoante nasal em posição final — e mesmo essa coda nasal é, na maioria dos casos, só a nasalidade de uma vogal nasal vizinha se manifestando foneticamente como consoante. Todas as consoantes do tapiete podem começar uma sílaba; nenhuma (exceto a nasal e, em contextos específicos, /h/) pode terminá-la.',
        table: {
          head: ['Tipo de sílaba', 'Exemplo', 'Tradução'],
          rows: [
            ['CV.CV', 'he.pɨ', 'caro'],
            ['V.CV', 'a.ra', 'céu'],
            ['CVV.CV', 'hai.mbe', 'tosta, torra'],
          ],
        },
        examples: [
          ['Ampo tata.', 'Isto é fogo.'],
          ['Ampo ɨ.', 'Isto é água.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar fechar uma sílaba com uma consoante qualquer, como em português (“parte”, “pasta”): no tapiete, só uma nasal (e, em contextos restritos, /h/) pode ocupar essa posição, e mesmo assim como resultado de um processo fonológico, não livremente.',
      'Esperar consoantes duplas ou agrupadas no meio da palavra: o tapiete evita sequências de consoantes, com poucas exceções bem específicas (como as oclusivas pré-nasalizadas mb, nd, ŋg, que contam como um só segmento).',
    ],
    quiz: [
      { question: 'Que tipos de sílaba o tapiete permite?', options: ['CV, V e CVV (sempre terminadas em vogal)', 'Qualquer sílaba, como no português', 'Só CVC, terminada em consoante'], answer: 'CV, V e CVV (sempre terminadas em vogal)', explanation: 'O tapiete não aceita sílabas fechadas por qualquer consoante: a estrutura canônica é (C)V(V)(N), quase sempre uma sílaba aberta.' },
      { question: 'Quando uma consoante nasal pode aparecer no final de uma sílaba tapiete?', options: ['Como resultado da nasalidade de uma vogal nasal vizinha', 'Livremente, em qualquer palavra', 'Nunca, em nenhum contexto'], answer: 'Como resultado da nasalidade de uma vogal nasal vizinha', explanation: 'É um efeito fonético da harmonia nasal, não uma consoante final livre como em português.' },
    ],
  },
  {
    id: 'tpj-g2',
    level: 'A1.1',
    title: 'Harmonia nasal',
    emoji: '👃',
    summary: 'Uma sílaba nasal acentuada espalha a nasalidade para as vogais e consoantes vizinhas dentro da mesma palavra.',
    sections: [
      {
        text: 'A harmonia nasal é um traço típico das línguas tupi-guarani, e o tapiete a tem de forma bem marcada: quando a sílaba acentuada de uma raiz é nasal (tem uma vogal nasal ou uma consoante nasal), essa nasalidade se espalha para a esquerda e para a direita dentro da palavra fonológica, afetando a qualidade das vogais e de certas consoantes vizinhas. Como consequência, as oclusivas sonoras pré-nasalizadas (“mb”, “nd”, “ŋg”) alternam com as nasais simples (“m”, “n”, “ŋ”) conforme o contexto é oral ou nasal.',
        table: {
          head: ['Consoante oral', 'Variante nasal', 'Contexto'],
          rows: [
            ['mb', 'm', 'ao lado de uma sílaba nasal'],
            ['nd', 'n', 'ao lado de uma sílaba nasal'],
            ['ŋg', 'ŋ', 'ao lado de uma sílaba nasal'],
          ],
        },
        examples: [
          ['Ampo kãwĩ.', 'Isto é chicha.'],
          ['Ampo sĩ.', 'Esta é a mãe.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a nasalidade é só uma questão da vogal em si (como o “ã” do português): no tapiete, uma única sílaba nasal pode “contaminar” várias vogais e consoantes da mesma palavra.',
      'Ignorar o trema (ä, ë, ö, ü) usado por González (2010) para marcar vogal nasal na ortografia deste pacote: “wähe” (chega) e “pörä” (bonito) têm vogal nasalizada, não é só um acento decorativo.',
    ],
    quiz: [
      { question: 'O que dispara a harmonia nasal numa palavra tapiete?', options: ['Uma sílaba acentuada que já é nasal (vogal ou consoante nasal)', 'Qualquer vogal átona', 'A posição da palavra na frase'], answer: 'Uma sílaba acentuada que já é nasal (vogal ou consoante nasal)', explanation: 'É a sílaba NASAL ACENTUADA da raiz que espalha a nasalidade para os segmentos vizinhos.' },
      { question: 'O que acontece com “mb” num contexto nasal?', options: ['Alterna para “m”', 'Vira “p”', 'Não muda nunca'], answer: 'Alterna para “m”', explanation: 'As oclusivas pré-nasalizadas mb/nd/ŋg têm, em contexto nasal, as variantes m/n/ŋ.' },
    ],
  },
  {
    id: 'tpj-g3',
    level: 'A1.2',
    title: 'O prefixo “a-” e a pessoa no verbo',
    emoji: '🙋',
    summary: 'O tapiete marca a 1ª pessoa com o prefixo “a-” no verbo, além de ter pronomes independentes como “nde” (tu/você) e “ha’e” (ele/ela).',
    sections: [
      {
        text: 'Como em outras línguas tupi-guarani, o tapiete marca quem pratica a ação diretamente no verbo, com um prefixo. González (2010) documenta o prefixo de 1ª pessoa “a-” em dezenas de exemplos diferentes, com os mais variados verbos: “a-karu” (como), “a-pota” (quero), “a-hesha” (vejo), “a-wata” (ando). A 3ª pessoa usa um prefixo diferente, “o-” (ou sua variante nasal “ñi-”/“ñ-”): “ha’e ñi-mbo’e” (ele/ela estuda), “heta o-ĩ” (há muito, literalmente “muito 3-ser”). Além dos prefixos verbais, o tapiete tem pronomes independentes, como “nde” (tu/você) e “ha’e” (ele/ela), usados como sujeito da frase.',
        table: {
          head: ['Pessoa', 'Prefixo no verbo', 'Exemplo'],
          rows: [
            ['1ª (eu)', 'a-', 'a-karu (como)'],
            ['3ª (ele/ela)', 'o- / ñi-', "ha'e ñi-mbo'e (ele/ela estuda)"],
          ],
        },
        examples: [
          ['A-karu.', 'Eu como.'],
          ["Ha'e ñi-mbo'e.", 'Ele/ela estuda.'],
          ['Heta o-ĩ.', 'Há muito.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar um pronome solto antes de cada verbo, como “eu” antes de “como” em português: no tapiete, o prefixo “a-” já marca a 1ª pessoa dentro do próprio verbo, e o pronome “nde”/“ha\'e” é mais usado como sujeito independente ou para dar ênfase.',
      'Confundir “nde” (tu/você) com “ha\'e” (ele/ela): são pessoas gramaticais diferentes, a 2ª e a 3ª.',
    ],
    quiz: [
      { question: 'O que o prefixo “a-” marca num verbo tapiete?', options: ['A 1ª pessoa (eu)', 'A 3ª pessoa (ele/ela)', 'O tempo passado'], answer: 'A 1ª pessoa (eu)', explanation: '“a-karu” (eu como), “a-pota” (eu quero) — o “a-” é o prefixo da 1ª pessoa, atestado em dezenas de verbos.' },
      { question: 'O que significa “ha\'e”?', options: ['Ele, ela', 'Tu, você', 'Eu'], answer: 'Ele, ela', explanation: '“Nde” é “tu/você” (2ª pessoa); “ha\'e” é “ele/ela” (3ª pessoa).' },
    ],
  },
  {
    id: 'tpj-g4',
    level: 'A1.2',
    title: 'Acento na penúltima sílaba',
    emoji: '🔊',
    summary: 'O acento do tapiete é previsível: recai sobre a penúltima sílaba da palavra — mas alguns sufixos deslocam esse padrão.',
    sections: [
      {
        text: 'Em tapiete, o acento tônico é previsível e recai, por padrão, na penúltima sílaba da palavra: “tá.ta” (fogo) e “dʒa.só.ʒa” (panela) seguem esse padrão. Alguns sufixos monossilábicos, porém, “puxam” o acento para si mesmos quando se juntam à raiz — por exemplo, o sufixo aumentativo “-kwe” desloca o acento para a própria sílaba do sufixo (“ro\'ɨ-kwe”, geada grande). Outros sufixos, ao contrário, não atraem o acento e deixam que ele continue recaindo na penúltima sílaba da palavra já com o sufixo incluído.',
        table: {
          head: ['Padrão', 'Exemplo', 'Tradução'],
          rows: [
            ['Penúltima sílaba (padrão)', 'tá.ta', 'fogo'],
            ['Penúltima sílaba (padrão)', 'ká.ru', 'come'],
          ],
        },
        examples: [
          ['Ampo tata.', 'Isto é fogo.'],
          ['A-karu.', 'Eu como.'],
        ],
      },
    ],
    pitfalls: [
      'Acentuar sempre a última sílaba, por hábito de outras línguas: no tapiete, o padrão por defeito é a PENÚLTIMA sílaba.',
      'Esquecer que alguns sufixos monossilábicos mudam o lugar do acento: a palavra toda (raiz + sufixo) é que segue o padrão, não só a raiz sozinha.',
    ],
    quiz: [
      { question: 'Onde recai o acento, por padrão, numa palavra tapiete?', options: ['Na penúltima sílaba', 'Sempre na última sílaba', 'Sempre na primeira sílaba'], answer: 'Na penúltima sílaba', explanation: 'González (2010) documenta esse padrão acentual como previsível na maioria das palavras não derivadas.' },
      { question: 'O que pode acontecer ao lugar do acento quando se acrescenta um sufixo?', options: ['Alguns sufixos monossilábicos atraem o acento para si', 'O acento nunca muda de lugar', 'O acento sempre vai para a primeira sílaba'], answer: 'Alguns sufixos monossilábicos atraem o acento para si', explanation: 'González (2010) lista sufixos que atraem o acento (como o aumentativo “-kwe”) e outros que não atraem.' },
    ],
  },
];
