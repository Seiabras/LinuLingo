import type { GrammarTopic } from '../types';

/**
 * Gramática do mongol na escrita tradicional (mvf), nível A1. A gramática da língua é a mesma do pacote
 * em cirílico (fontes: en.wikipedia.org/wiki/Mongolian_language); os tópicos daqui tratam do que muda
 * com a escrita: o sentido vertical, a grafia clássica (diferente da pronúncia de hoje) e as partículas
 * de pergunta. Fontes da escrita: en.wikipedia.org/wiki/Mongolian_script. Grafias: os verbetes do
 * Wiktionary citados em vocabulario.ts.
 */
export const GRAMMAR_MVF: GrammarTopic[] = [
  {
    id: 'mvf-g1',
    level: 'A1.1',
    title: 'De cima pra baixo, da esquerda pra direita',
    emoji: '📜',
    summary: 'A escrita mongol desce em colunas, e as colunas andam da esquerda pra direita; as letras de uma palavra ficam ligadas por uma linha vertical.',
    sections: [
      {
        text: 'Cada palavra é escrita de cima pra baixo, e a frase seguinte começa numa nova coluna à DIREITA da anterior — o contrário das escritas verticais do chinês e do japonês, cujas colunas andam da direita pra esquerda. A escrita mongol e as que nasceram dela (como a manchu) são as únicas escritas verticais conhecidas que andam da esquerda pra direita. As letras de uma palavra se ligam por uma linha que desce pelo meio, e cada letra tem uma forma no começo, outra no meio e outra no fim da palavra.',
        examples: [
          ['ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', 'Olá! (lit. “você está bem?”)'],
          ['ᠡᠨᠡ ᠬᠦᠮᠦᠨ ᠮᠢᠨᠤ ᠨᠠᠶ᠋ᠢᠵᠠ᠃', 'Esta pessoa é meu amigo/minha amiga.'],
        ],
      },
      {
        heading: 'Pontuação própria',
        text: 'O ponto final é “᠃” e a vírgula é “᠂”. Nas perguntas e exclamações, o app usa o “?” e o “!” comuns, que no texto vertical aparecem deitados.',
        examples: [
          ['ᠰᠠᠶ᠋ᠢᠨ᠂ ᠲᠠ ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', 'Bem, e você?'],
        ],
      },
    ],
    pitfalls: [
      'Ler as colunas da direita pra esquerda, como no chinês ou no japonês vertical: na escrita mongol, a primeira coluna é a da ESQUERDA.',
      'Achar que uma letra está errada porque parece diferente em outra palavra: a forma muda com a posição (começo, meio ou fim).',
    ],
    quiz: [
      { question: 'Em que sentido andam as colunas da escrita mongol?', options: ['Da esquerda pra direita', 'Da direita pra esquerda', 'De baixo pra cima'], answer: 'Da esquerda pra direita', explanation: 'Cada palavra desce de cima pra baixo, e a coluna seguinte fica à direita da anterior.' },
      { question: 'O que é “᠃”?', options: ['O ponto final', 'A letra a', 'Um número'], answer: 'O ponto final', explanation: '“᠃” fecha a frase, e “᠂” é a vírgula.' },
    ],
  },
  {
    id: 'mvf-g2',
    level: 'A1.1',
    title: 'Ordem SOV, sem artigos e sem gênero',
    emoji: '🧩',
    summary: 'A mesma gramática do mongol em cirílico: o verbo fecha a frase, não há palavras para “o/a/um/uma” e os substantivos não têm gênero.',
    sections: [
      {
        text: 'A ordem básica do mongol é sujeito-objeto-verbo, e a língua não tem artigos nem gênero gramatical. Frases do tipo “isto é ___” dispensam o verbo “ser”: “ᠡᠨᠡ ᠮᠣᠷᠢ᠃” (ene mori.) é “isto [é] um cavalo”. Para dizer como uma coisa está, usa-se “ᠪᠠᠢᠨ᠎ᠠ” (bayin-a) no fim, depois do adjetivo.',
        table: {
          head: ['Escrita', 'Leitura', 'Português'],
          rows: [
            ['ᠡᠨᠡ ᠮᠣᠷᠢ᠃', 'ene mori.', 'Isto é um cavalo.'],
            ['ᠲᠡᠮᠡᠭᠡ ᠲᠣᠮᠤ ᠪᠠᠢᠨ᠎ᠠ᠃', 'temege tomu bayin-a.', 'O camelo é grande.'],
            ['ᠴᠠᠰᠤ ᠴᠠᠭᠠᠨ ᠪᠠᠢᠨ᠎ᠠ᠃', 'času čaɣan bayin-a.', 'A neve é branca.'],
          ],
        },
        examples: [
          ['ᠡᠨᠡ ᠬᠦᠮᠦᠨ ᠮᠢᠨᠤ ᠨᠠᠶ᠋ᠢᠵᠠ᠃', 'Esta pessoa é meu amigo/minha amiga.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar um artigo antes do substantivo: ᠮᠣᠷᠢ sozinho já é “cavalo”, “um cavalo” ou “o cavalo”.',
      'Pôr o verbo no meio da frase: em mongol, ᠪᠠᠢᠨ᠎ᠠ e os outros verbos vêm no fim.',
    ],
    quiz: [
      { question: 'Onde fica o verbo na frase mongol?', options: ['No fim', 'No começo', 'No meio, como em português'], answer: 'No fim', explanation: 'A ordem é sujeito-objeto-verbo: ᠲᠡᠮᠡᠭᠡ ᠲᠣᠮᠤ ᠪᠠᠢᠨ᠎ᠠ᠃ termina em ᠪᠠᠢᠨ᠎ᠠ.' },
      { question: 'O mongol tem artigos (“o”, “um”)?', options: ['Não', 'Sim, um para cada gênero', 'Só no plural'], answer: 'Não', explanation: 'Não há artigos nem gênero gramatical.' },
    ],
  },
  {
    id: 'mvf-g3',
    level: 'A1.2',
    title: 'Grafia antiga, pronúncia de hoje',
    emoji: '🕰️',
    summary: 'A escrita tradicional guarda a ortografia do mongol clássico; a pronúncia mudou desde então, e muitas palavras se escrevem com letras que não se dizem mais.',
    sections: [
      {
        text: 'O cirílico, adotado no século XX, escreve o mongol como se fala hoje; a escrita tradicional escreve como se falava séculos atrás. A tabela compara a grafia tradicional, a leitura letra por letra e a mesma palavra em cirílico, que mostra a pronúncia de hoje.',
        table: {
          head: ['Escrita', 'Leitura', 'Cirílico (como se diz)', 'Português'],
          rows: [
            ['ᠮᠣᠷᠢ', 'mori', 'морь', 'cavalo'],
            ['ᠤᠰᠤ', 'usu', 'ус', 'água'],
            ['ᠰᠦᠨ', 'sün', 'сүү', 'leite'],
            ['ᠢᠮᠠᠭ᠎ᠠ', 'imaɣ-a', 'ямаа', 'cabra'],
            ['ᠲᠡᠮᠡᠭᠡ', 'temege', 'тэмээ', 'camelo'],
            ['ᠠᠭᠤᠯᠠ', 'aɣula', 'уул', 'montanha'],
            ['ᠨᠢᠳᠦ', 'nidü', 'нүд', 'olho'],
          ],
        },
      },
      {
        heading: 'A vogal solta no fim',
        text: 'Em palavras como “ᠢᠮᠠᠭ᠎ᠠ” (imaɣ-a) e “ᠰᠢᠨ᠎ᠡ” (sin-e), a última vogal fica separada do resto da palavra por um pequeno espaço — o separador de vogal. Ela não é outra palavra: é o fim da mesma palavra, escrito com a forma solta da letra.',
        examples: [
          ['ᠡᠨᠡ ᠢᠮᠠᠭ᠎ᠠ᠃', 'Isto é uma cabra.'],
          ['ᠭᠡᠷ ᠰᠢᠨ᠎ᠡ ᠪᠠᠢᠨ᠎ᠠ᠃', 'A casa é nova.'],
        ],
      },
    ],
    pitfalls: [
      'Escrever como se pronuncia: ᠤᠰᠤ (água) tem um u final que não se diz mais, e ᠰᠦᠨ (leite) termina com um n que o cirílico não escreve.',
      'Achar que a vogal solta depois do separador é outra palavra.',
    ],
    quiz: [
      { question: 'Como se escreve “сүү” (leite) na escrita tradicional?', options: ['ᠰᠦᠨ', 'ᠰᠦ', 'ᠤᠰᠤ'], answer: 'ᠰᠦᠨ', explanation: 'A grafia clássica é sün, com o n final que a pronúncia de hoje perdeu.' },
      { question: 'Na palavra ᠢᠮᠠᠭ᠎ᠠ (cabra), o que é a vogal separada no fim?', options: ['O fim da mesma palavra', 'Uma outra palavra', 'Um erro de digitação'], answer: 'O fim da mesma palavra', explanation: 'É o separador de vogal: a última vogal fica solta, mas pertence à palavra (imaɣ-a).' },
    ],
  },
  {
    id: 'mvf-g4',
    level: 'A1.2',
    title: 'Perguntas: ᠤᠤ e ᠪᠤᠢ',
    emoji: '❓',
    summary: 'Pergunta de sim ou não termina em ᠤᠤ (uu); pergunta com quem, o quê, onde termina em ᠪᠤᠢ (bui).',
    sections: [
      {
        text: 'São as mesmas partículas do mongol em cirílico, onde se escrevem “уу/үү” e “вэ/бэ”. Na escrita tradicional, a grafia é a mesma, “ᠪᠤᠢ” (bui), para “вэ” e para “бэ”: a escolha entre os dois é só de pronúncia.',
        table: {
          head: ['Partícula', 'Quando usar', 'Exemplo'],
          rows: [
            ['ᠤᠤ', 'pergunta de sim ou não', 'ᠴᠠᠢ ᠤᠤᠭᠤᠬᠤ ᠤᠤ?'],
            ['ᠪᠤᠢ', 'pergunta com palavra interrogativa', 'ᠡᠨᠡ ᠶᠠᠭᠤ ᠪᠤᠢ?'],
          ],
        },
        examples: [
          ['ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?', 'Qual é o seu nome?'],
          ['ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', 'Olá! (lit. “está bem?”)'],
        ],
      },
    ],
    pitfalls: [
      'Usar ᠤᠤ numa pergunta que já tem ᠬᠡᠨ (quem) ou ᠶᠠᠭᠤ (o quê): essas pedem ᠪᠤᠢ.',
    ],
    quiz: [
      { question: 'Qual partícula completa ᠡᠨᠡ ᠶᠠᠭᠤ ___? (o que é isto?)', options: ['ᠪᠤᠢ', 'ᠤᠤ', 'ᠪᠠᠢᠨ᠎ᠠ'], answer: 'ᠪᠤᠢ', explanation: 'A pergunta tem ᠶᠠᠭᠤ (o quê), por isso termina em ᠪᠤᠢ.' },
      { question: 'E ᠴᠠᠢ ᠤᠤᠭᠤᠬᠤ ___? (quer beber chá?)', options: ['ᠤᠤ', 'ᠪᠤᠢ', 'ᠬᠡᠨ'], answer: 'ᠤᠤ', explanation: 'É pergunta de sim ou não: termina em ᠤᠤ.' },
    ],
  },
];
