import type { GrammarTopic } from '../types';

/** Tópicos de gramática do neerlandês — A1.1 ao A2.2 (pacote incompleto; B1 em diante ainda falta). */
export const GRAMMAR_NL: GrammarTopic[] = [
  {
    id: 'nl-g1',
    level: 'A1.1',
    title: 'Pronúncia: ij, oe, ui, g e as vogais dobradas',
    emoji: '🔤',
    summary: 'A escrita do neerlandês é bem regular, mas alguns grupos de letras têm sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'Vogal dobrada (aa, ee, oo, uu) indica vogal longa. Os ditongos e o “g” são os pontos que mais pedem treino.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ij / ei', '“éi” bem aberto', 'wijn (vinho), klein (pequeno)'],
            ['oe', '“u”', 'goed (bom), broer (irmão)'],
            ['ui', 'ditongo sem igual no português', 'huis (casa)'],
            ['g / ch', 'som raspado na garganta', 'goed, acht (oito)'],
            ['w', 'entre “v” e “u”', 'water (água), wit (branco)'],
            ['aa / oo', 'a / o longos', 'naam (nome), groot (grande)'],
          ],
        },
        examples: [
          ['Goedemorgen!', 'Bom dia!'],
          ['Mijn huis is klein.', 'A minha casa é pequena.'],
        ],
      },
    ],
    pitfalls: ['Ler “oe” como “ô-ê”: “goed” soa parecido com “rrut”, com o “r” raspado do carioca no começo.', 'Ler “ij” como “i”: “wijn” soa parecido com “véin”.'],
    quiz: [
      { question: 'Como soa o “oe” de “moeder”?', options: ['“u”', '“ô”', '“ê”'], answer: '“u”', explanation: 'Em neerlandês, “oe” sempre soa como o nosso “u”.' },
      { question: 'O que indica a vogal dobrada em “naam”?', options: ['que o “a” é longo', 'que há duas sílabas', 'que o “a” é nasal'], answer: 'que o “a” é longo', explanation: 'aa, ee, oo e uu são vogais longas, numa sílaba só.' },
    ],
  },
  {
    id: 'nl-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo zijn',
    emoji: '🙋',
    summary: 'Os pronomes pessoais, as formas curtas (je, ze, we) e o verbo “zijn” (ser e estar).',
    sections: [
      {
        text: 'O pronome é obrigatório. Muitos pronomes têm uma forma forte e uma curta, usada quando não há ênfase: “jij/je”, “zij/ze”, “wij/we”. “U” é o tratamento formal (o senhor, a senhora) e usa a mesma forma de “jij”: “u bent”.',
        table: {
          head: ['Pronome', 'Tradução', 'zijn'],
          rows: [
            ['ik', 'eu', 'ben'],
            ['jij / je', 'tu, você', 'bent'],
            ['u', 'o senhor, a senhora', 'bent'],
            ['hij / zij / het', 'ele / ela / (neutro)', 'is'],
            ['wij / we', 'nós', 'zijn'],
            ['jullie', 'vocês', 'zijn'],
            ['zij / ze', 'eles, elas', 'zijn'],
          ],
        },
        examples: [
          ['Ik ben student.', 'Sou estudante.'],
          ['Wij zijn vrienden.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Na pergunta, o verbo vem antes de “jij” e perde o -t: “jij woont”, mas “Woon jij in Utrecht?”.', 'Omitir o pronome como em português: em neerlandês ele é obrigatório.'],
    quiz: [
      { question: 'Complete: “Ik ___ student.”', options: ['ben', 'is', 'zijn'], answer: 'ben', explanation: '“ben” é a forma de “zijn” para “ik”.' },
      { question: 'Qual é a pergunta certa?', options: ['Woon jij in Recife?', 'Woont jij in Recife?', 'Jij woont in Recife?'], answer: 'Woon jij in Recife?', explanation: 'Quando “jij” vem depois do verbo, o -t cai: “woon jij”.' },
    ],
  },
  {
    id: 'nl-g3',
    level: 'A1.2',
    title: 'De, het, een e o possessivo',
    emoji: '👪',
    summary: 'Dois artigos definidos (de e het), um indefinido (een) e possessivos que não mudam.',
    sections: [
      {
        text: 'A maioria das palavras usa “de”; as neutras usam “het”. No plural, todas usam “de”. O artigo indefinido é sempre “een” (lido com “e” fraco). O possessivo não concorda com a coisa possuída: “mijn” serve para tudo.',
        table: {
          head: ['', 'definido', 'indefinido', 'meu / minha'],
          rows: [
            ['comum (de)', 'de hond', 'een hond', 'mijn broer'],
            ['neutro (het)', 'het huis', 'een huis', 'mijn huis'],
            ['plural', 'de honden', '—', 'mijn broers'],
          ],
        },
        examples: [
          ['Mijn huis is klein.', 'A minha casa é pequena.'],
          ['Mijn moeder heet Rosa.', 'A minha mãe se chama Rosa.'],
        ],
      },
    ],
    pitfalls: ['Adivinhar “het” pelo português: não há relação; aprenda cada palavra com o artigo.', 'Pôr artigo antes do possessivo (“de mijn moeder”): é só “mijn moeder”.'],
    quiz: [
      { question: 'Qual é o artigo de “huis” (casa)?', options: ['het', 'de', 'een'], answer: 'het', explanation: '“huis” é neutro: het huis.' },
      { question: 'Qual é o artigo de todas as palavras no plural?', options: ['de', 'het', 'een'], answer: 'de', explanation: 'No plural, o artigo definido é sempre “de”: de huizen.' },
    ],
  },
  {
    id: 'nl-g4',
    level: 'A1.2',
    title: 'O verbo hebben e a negação: niet e geen',
    emoji: '🚫',
    summary: '“hebben” (ter) e as duas maneiras de negar: “niet” e “geen”.',
    sections: [
      {
        text: '“niet” nega o verbo ou um adjetivo e costuma ficar depois do verbo: “Ik weet het niet” (não sei), “Het huis is niet groot”. “geen” nega um substantivo que viria com “een” ou sem artigo: “Ik heb geen kat” (não tenho gato).',
        table: {
          head: ['Pronome', 'hebben', 'negativo com geen'],
          rows: [
            ['ik', 'heb', 'heb geen kat'],
            ['jij / u', 'hebt', 'hebt geen kat'],
            ['hij / zij', 'heeft', 'heeft geen kat'],
            ['wij', 'hebben', 'hebben geen kat'],
            ['jullie', 'hebben', 'hebben geen kat'],
            ['zij', 'hebben', 'hebben geen kat'],
          ],
        },
        examples: [
          ['Ik heb een hond.', 'Eu tenho um cachorro.'],
          ['Het huis is niet groot.', 'A casa não é grande.'],
        ],
      },
    ],
    pitfalls: ['Pôr “niet” antes do verbo como o “não” português: “Ik niet weet” está errado; o certo é “Ik weet het niet”.', 'Dizer “niet een”: para negar “um/uma”, use “geen”.'],
    quiz: [
      { question: 'Como se diz “eu não tenho gato”?', options: ['Ik heb geen kat.', 'Ik heb niet een kat.', 'Ik niet heb kat.'], answer: 'Ik heb geen kat.', explanation: 'Para negar um substantivo com “een”, usa-se “geen”.' },
      { question: 'Complete: “Hij ___ een broer.”', options: ['heeft', 'heb', 'hebt'], answer: 'heeft', explanation: '“heeft” é a forma de “hebben” para “hij” e “zij” (ela).' },
    ],
  },
  {
    id: 'nl-g5',
    level: 'A2.1',
    title: 'O perfeito: hebben of zijn + voltooid deelwoord',
    emoji: '🕰️',
    summary: 'Para contar o que já aconteceu, o neerlandês usa o tempo perfeito: um verbo auxiliar (hebben ou zijn) mais o particípio passado, que fica no fim da frase.',
    sections: [
      {
        text: 'O particípio passado da maioria dos verbos se forma com “ge-” antes do radical e “-d” ou “-t” depois (regra do “’t kofschip”: depois de uma consoante surda, -t; senão, -d). Alguns verbos são irregulares e precisam ser aprendidos de cor, como “gekocht” (de kopen) e “gedacht” (de denken). A maioria dos verbos usa “hebben”; os verbos de movimento ou mudança de estado (gaan, komen, worden, blijven) usam “zijn”.',
        table: {
          head: ['Verbo', 'Particípio', 'Exemplo'],
          rows: [
            ['werken (trabalhar)', 'gewerkt', 'Ik heb gewerkt.'],
            ['kopen (comprar)', 'gekocht', 'Ik heb een jas gekocht.'],
            ['zien (ver)', 'gezien', 'Ik heb een film gezien.'],
            ['gaan (ir)', 'gegaan', 'Ik ben naar huis gegaan.'],
          ],
        },
        examples: [
          ['Het heeft gisteren geregend.', 'Choveu ontem.'],
          ['Ik ben naar school gegaan.', 'Eu fui para a escola.'],
        ],
      },
      {
        heading: 'Hebben ou zijn?',
        text: 'A maior parte dos verbos leva “hebben”. Levam “zijn” os verbos que mostram ir de um lugar a outro ou mudar de estado: gaan, komen, worden, blijven, en também zijn no seu próprio perfeito (“ik ben geweest”).',
        examples: [['Ik ben in Amsterdam geweest.', 'Eu estive em Amsterdã.']],
      },
    ],
    pitfalls: [
      'Usar “hebben” com verbos de movimento: “ik heb gegaan” está errado; o certo é “ik ben gegaan”.',
      'Esquecer o “ge-” nos verbos regulares: não é “ik heb werkt”, e sim “ik heb gewerkt”.',
      'Pôr o particípio no meio da frase como em português: ele vai para o fim, depois do auxiliar.',
    ],
    quiz: [
      { question: 'Como se diz “eu comprei uma jaqueta”?', options: ['Ik heb een jas gekocht.', 'Ik ben een jas gekocht.', 'Ik heb gekocht een jas.'], answer: 'Ik heb een jas gekocht.', explanation: '“Kopen” usa “hebben”, e o particípio “gekocht” fica no fim.' },
      { question: 'Qual auxiliar usa o verbo “gaan” (ir) no perfeito?', options: ['zijn', 'hebben', 'worden'], answer: 'zijn', explanation: 'Verbos de movimento, como “gaan”, usam “zijn”: “ik ben gegaan”.' },
    ],
  },
  {
    id: 'nl-g6',
    level: 'A2.1',
    title: 'Os verbos modais: kunnen, moeten, willen, mogen',
    emoji: '💭',
    summary: 'Quatro verbos modais dizem se algo é possível, necessário, desejado ou permitido, e vêm sempre acompanhados de um infinitivo no fim da frase.',
    sections: [
      {
        text: 'O verbo modal se conjuga normalmente e vem em segunda posição na frase; o segundo verbo fica no infinitivo, no fim, sem “te”.',
        table: {
          head: ['Modal', 'Sentido', 'Exemplo'],
          rows: [
            ['kunnen', 'poder, conseguir', 'Ik kan goed zwemmen.'],
            ['moeten', 'ter que, dever', 'Ik moet een jas kopen.'],
            ['willen', 'querer', 'Ik wil naar huis gaan.'],
            ['mogen', 'ter permissão', 'Mag ik een vraag stellen?'],
          ],
        },
        examples: [
          ['Ik moet een jas kopen.', 'Eu tenho que comprar uma jaqueta.'],
          ['Het mag niet.', 'Não é permitido.'],
        ],
      },
    ],
    pitfalls: ['Pôr “te” antes do infinitivo depois de um modal: diferente de “willen leren”, não se usa “te” aqui.', 'Esquecer que o infinitivo vai para o fim da frase, não logo depois do modal.'],
    quiz: [
      { question: 'Como se diz “eu tenho que comprar uma jaqueta”?', options: ['Ik moet een jas kopen.', 'Ik moet kopen een jas.', 'Ik moet te kopen een jas.'], answer: 'Ik moet een jas kopen.', explanation: 'O modal “moet” vem em segundo lugar e o infinitivo “kopen” fica no fim.' },
      { question: '“Mag ik…?” pergunta sobre…', options: ['permissão', 'capacidade', 'obrigação'], answer: 'permissão', explanation: '“Mogen” expressa permissão, como “posso…?” em português.' },
    ],
  },
  {
    id: 'nl-g7',
    level: 'A2.2',
    title: 'O adjetivo com -e: quando ele muda',
    emoji: '📏',
    summary: 'Antes de um substantivo, o adjetivo neerlandês quase sempre ganha um -e no fim — exceto diante de uma palavra “het” no singular e sem artigo definido.',
    sections: [
      {
        text: 'O adjetivo ganha -e diante de qualquer substantivo “de” (no singular ou no plural), diante de qualquer plural, e diante de um substantivo “het” definido (met “het” ou “dit/dat”). Só fica sem -e diante de um substantivo “het” indefinido no singular (met “een” ou sem artigo).',
        table: {
          head: ['Caso', 'Forma', 'Exemplo'],
          rows: [
            ['de + singular', 'com -e', 'de grote stad'],
            ['het + definido', 'com -e', 'het grote huis'],
            ['het + een (indefinido)', 'sem -e', 'een groot huis'],
            ['plural (de ou het)', 'com -e', 'grote huizen'],
          ],
        },
        examples: [
          ['Dat is een groot huis.', 'Essa é uma casa grande.'],
          ['Het grote huis is van mijn oma.', 'A casa grande é da minha vó.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o -e diante de “de”: é “de grote stad”, nunca “de groot stad”.', 'Pôr -e diante de “een huis”: com “een” e uma palavra “het”, o adjetivo fica sem -e: “een groot huis”.'],
    quiz: [
      { question: 'Como se diz “uma casa grande” (huis é het-woord)?', options: ['een groot huis', 'een grote huis', 'het groot huis'], answer: 'een groot huis', explanation: 'Com “een” e uma palavra “het” no singular, o adjetivo não ganha -e.' },
      { question: 'Como se diz “a cidade grande” (stad é de-woord)?', options: ['de grote stad', 'de groot stad', 'een grote stad'], answer: 'de grote stad', explanation: 'Diante de uma palavra “de”, o adjetivo sempre ganha -e.' },
    ],
  },
  {
    id: 'nl-g8',
    level: 'A2.2',
    title: 'Comparativo e superlativo: -er e -st',
    emoji: '📈',
    summary: 'Para comparar, o neerlandês acrescenta -er ao adjetivo (e -st para o superlativo), com “dan” para “do que”.',
    sections: [
      {
        text: 'A maioria dos adjetivos ganha -er no comparativo e -st no superlativo (com “het” antes). “Dan” liga a comparação a quem ou ao que se compara. Alguns adjetivos comuns são irregulares.',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['groot (grande)', 'groter', 'het grootst'],
            ['klein (pequeno)', 'kleiner', 'het kleinst'],
            ['goed (bom)', 'beter', 'het best'],
            ['graag (com gosto)', 'liever', 'het liefst'],
          ],
        },
        examples: [
          ['Mijn broer is groter dan ik.', 'Meu irmão é mais alto do que eu.'],
          ['Ik drink liever koffie dan thee.', 'Eu prefiro tomar café do que chá.'],
        ],
      },
    ],
    pitfalls: ['Usar “meer” com adjetivos curtos: em neerlandês, “meer groot” está errado; o certo é “groter”.', 'Esquecer que “goed” é irregular: não é “goeder”, e sim “beter”.'],
    quiz: [
      { question: 'Como se diz “meu irmão é mais alto do que eu”?', options: ['Mijn broer is groter dan ik.', 'Mijn broer is meer groot dan ik.', 'Mijn broer is grootst dan ik.'], answer: 'Mijn broer is groter dan ik.', explanation: 'O comparativo regular de “groot” é “groter”, com “dan” para “do que”.' },
      { question: 'Qual é o comparativo de “goed” (bom)?', options: ['beter', 'goeder', 'meer goed'], answer: 'beter', explanation: '“Goed” é irregular: beter, het best.' },
    ],
  },
];
