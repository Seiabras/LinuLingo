import type { GrammarTopic } from '../types';

/** Tópicos de gramática do baixo-alemão — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_NDS: GrammarTopic[] = [
  {
    id: 'nds-g1',
    level: 'A1.1',
    title: 'Sem a segunda mutação: por que soa como inglês',
    emoji: '🔤',
    summary: 'O baixo-alemão não passou pela mudança de som que criou o alto-alemão, então muitas palavras ficam mais perto do inglês e do neerlandês.',
    sections: [
      {
        text: 'No alto-alemão (o padrão ensinado como “alemão”), sons como p/t/k viraram pf/ts/ch em muitas palavras. O baixo-alemão não passou por essa mudança, então guardou os sons mais antigos — os mesmos que o inglês e o neerlandês também guardaram.',
        table: {
          head: ['Baixo-alemão', 'Alto-alemão', 'Inglês/Neerlandês'],
          rows: [
            ['Water', 'Wasser', 'water / water'],
            ['Schipp', 'Schiff', 'ship / schip'],
            ['maken', 'machen', 'make / maken'],
            ['Book', 'Buch', 'book / boek'],
          ],
        },
        examples: [
          ['Ik drink Water.', 'Eu bebo água.'],
          ['Dat is een good Book.', 'Esse é um bom livro (não entra no vocabulário deste bloco).'],
        ],
      },
    ],
    pitfalls: ['Achar que o baixo-alemão é só um "sotaque errado" do alemão: é uma língua de verdade, com história e gramática próprias.', 'Esperar a grafia do alto-alemão: “Water” se escreve com um só “s”.'],
    quiz: [
      { question: 'Por que “Water” soa mais perto do inglês “water” do que do alemão “Wasser”?', options: ['O baixo-alemão não passou pela segunda mutação consonantal', 'É um erro de ortografia', 'Vem do inglês moderno'], answer: 'O baixo-alemão não passou pela segunda mutação consonantal', explanation: 'O alto-alemão mudou sons como t→ss/z em muitas palavras; o baixo-alemão guardou a forma mais antiga, como o inglês e o neerlandês.' },
      { question: 'O baixo-alemão é…', options: ['uma língua própria, reconhecida como regional', 'um dialeto errado do alemão', 'a mesma coisa que o neerlandês'], answer: 'uma língua própria, reconhecida como regional', explanation: 'A Alemanha reconhece o Plattdüütsch como língua regional pela Carta Europeia das Línguas Regionais ou Minoritárias.' },
    ],
  },
  {
    id: 'nds-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo wesen (ser/estar)',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo, “wesen”, para o nosso ser e o nosso estar.',
    sections: [
      {
        text: 'Como no português, o baixo-alemão costuma dizer o pronome. O verbo “wesen” muda bastante de forma, mas cobre tanto “ser” quanto “estar”.',
        table: {
          head: ['Pronome', 'Tradução', 'wesen'],
          rows: [
            ['ik', 'eu', 'bün'],
            ['du', 'tu, você', 'büst'],
            ['he / se', 'ele / ela', 'is'],
            ['wi', 'nós', 'sünd'],
            ['ji', 'vós, vocês', 'sünd'],
            ['se', 'eles, elas', 'sünd'],
          ],
        },
        examples: [
          ['Ik bün ut São Paulo.', 'Sou de São Paulo.'],
          ['Wi sünd Fründ.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” separado: “mi geiht dat good” (estou bem) e “ik bün good” usam formas de “wesen” e da expressão “geiht”, não um verbo novo.', 'Confundir “se” (ela) com “se” (eles): o verbo ajuda a distinguir — “se is” (ela é) × “se sünd” (eles são).'],
    quiz: [
      { question: 'Complete: “Ik ___ ut Hamborg.”', options: ['bün', 'is', 'sünd'], answer: 'bün', explanation: '“Bün” é a forma de “wesen” para “ik”.' },
      { question: '“Se sünd Fründ” quer dizer…', options: ['Eles são amigos', 'Ela é amiga', 'Nós somos amigos'], answer: 'Eles são amigos', explanation: '“Se” antes de “sünd” (plural) é “eles/elas”; “se is” (singular) seria “ela”.' },
    ],
  },
  {
    id: 'nds-g3',
    level: 'A1.2',
    title: 'De, dat e o possessivo',
    emoji: '👪',
    summary: 'O artigo definido é “de” (masculino e feminino) ou “dat” (neutro); o possessivo vem antes do nome.',
    sections: [
      {
        text: 'Diferente do alto-alemão, que tem três artigos diferentes (der/die/das), o baixo-alemão simplificou para dois: “de” cobre o masculino e o feminino, e “dat” é só para o neutro.',
        table: {
          head: ['', 'Sem artigo', 'Com artigo'],
          rows: [
            ['masculino', 'Hund', 'de Hund'],
            ['feminino', 'Katt', 'de Katt'],
            ['neutro', 'Huus', 'dat Huus'],
            ['meu / minha', 'Vader / Moder', 'mien Vader / mien Moder'],
          ],
        },
        examples: [
          ['Dat Huus is lütt.', 'A casa é pequena.'],
          ['Mien Vader is ut Bremen.', 'O meu pai é de Bremen.'],
        ],
      },
    ],
    pitfalls: ['Usar artigo antes do possessivo como em português (“o meu pai”): em baixo-alemão é só “mien Vader”.', 'Pôr “de” antes de uma palavra neutra: “Huus” pede “dat”, não “de”.'],
    quiz: [
      { question: 'Como se diz “a casa”?', options: ['dat Huus', 'de Huus', 'een Huus'], answer: 'dat Huus', explanation: '“Huus” é neutro, então o artigo definido é “dat”.' },
      { question: 'Como se diz “minha mãe”?', options: ['mien Moder', 'de mien Moder', 'Moder mien'], answer: 'mien Moder', explanation: 'O possessivo vem antes do nome, sem artigo junto.' },
    ],
  },
  {
    id: 'nds-g4',
    level: 'A1.2',
    title: 'O verbo hebben (ter) e a negação com nich',
    emoji: '🤲',
    summary: '“Hebben” é ter; para negar, basta pôr “nich” depois do verbo.',
    sections: [
      {
        text: 'O verbo ter é irregular, mas parecido com o alemão “haben” e o inglês “have”. Para negar, “nich” vai logo depois do verbo — mais simples que o “não” do português, que vem antes.',
        table: {
          head: ['Pronome', 'hebben (ter)', 'negativo'],
          rows: [
            ['ik', 'heff', 'heff nich'],
            ['du', 'hest', 'hest nich'],
            ['he / se', 'hett', 'hett nich'],
            ['wi / ji / se', 'hebbt', 'hebbt nich'],
          ],
        },
        examples: [
          ['Ik heff twee Bröder.', 'Tenho dois irmãos.'],
          ['Ik weet dat nich.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Pôr “nich” antes do verbo, como o “não” do português: em baixo-alemão ele vem depois, “ik weet dat nich”.', 'Confundir “hett” (ele/ela tem) com “is” (ele/ela é): posse é com “hebben”, identidade é com “wesen”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Ik weet dat nich.', 'Ik nich weet dat.', 'Nich ik weet dat.'], answer: 'Ik weet dat nich.', explanation: '“Nich” vem depois do verbo, não antes como o “não” do português.' },
      { question: '“Hest du Bröder?” pergunta…', options: ['se você tem irmãos', 'como você se chama', 'de onde você é'], answer: 'se você tem irmãos', explanation: '“Hest” é a forma de “du” do verbo “hebben” (ter).' },
    ],
  },
];
