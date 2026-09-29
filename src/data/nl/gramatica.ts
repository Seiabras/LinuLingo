import type { GrammarTopic } from '../types';

/** Tópicos de gramática do neerlandês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_NL: GrammarTopic[] = [
  {
    id: 'nl-g1',
    level: 'A1.1',
    title: 'Pronúncia: ij, oe, ui, g e as vogais dobradas',
    emoji: '🔤',
    summary: 'A escrita do neerlandês é bem regular, mas alguns grupos de letras têm sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'Vogal dobrada (aa, ee, oo, uu) indica vogal longa. Os ditongos e o «g» são os pontos que mais pedem treino.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ij / ei', '«éi» bem aberto', 'wijn (vinho), klein (pequeno)'],
            ['oe', '«u»', 'goed (bom), broer (irmão)'],
            ['ui', 'ditongo sem igual no português', 'huis (casa)'],
            ['g / ch', 'som raspado na garganta', 'goed, acht (oito)'],
            ['w', 'entre «v» e «u»', 'water (água), wit (branco)'],
            ['aa / oo', 'a / o longos', 'naam (nome), groot (grande)'],
          ],
        },
        examples: [
          ['Goedemorgen!', 'Bom dia!'],
          ['Mijn huis is klein.', 'A minha casa é pequena.'],
        ],
      },
    ],
    pitfalls: ['Ler «oe» como «ô-ê»: «goed» soa parecido com «rrut», com o «r» raspado do carioca no começo.', 'Ler «ij» como «i»: «wijn» soa parecido com «véin».'],
    quiz: [
      { question: 'Como soa o «oe» de «moeder»?', options: ['«u»', '«ô»', '«ê»'], answer: '«u»', explanation: 'Em neerlandês, «oe» sempre soa como o nosso «u».' },
      { question: 'O que indica a vogal dobrada em «naam»?', options: ['que o «a» é longo', 'que há duas sílabas', 'que o «a» é nasal'], answer: 'que o «a» é longo', explanation: 'aa, ee, oo e uu são vogais longas, numa sílaba só.' },
    ],
  },
  {
    id: 'nl-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo zijn',
    emoji: '🙋',
    summary: 'Os pronomes pessoais, as formas curtas (je, ze, we) e o verbo «zijn» (ser e estar).',
    sections: [
      {
        text: 'O pronome é obrigatório. Muitos pronomes têm uma forma forte e uma curta, usada quando não há ênfase: «jij/je», «zij/ze», «wij/we». «U» é o tratamento formal (o senhor, a senhora) e usa a mesma forma de «jij»: «u bent».',
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
    pitfalls: ['Na pergunta, o verbo vem antes de «jij» e perde o -t: «jij woont», mas «Woon jij in Utrecht?».', 'Omitir o pronome como em português: em neerlandês ele é obrigatório.'],
    quiz: [
      { question: 'Complete: «Ik ___ student.»', options: ['ben', 'is', 'zijn'], answer: 'ben', explanation: '«ben» é a forma de «zijn» para «ik».' },
      { question: 'Qual é a pergunta certa?', options: ['Woon jij in Recife?', 'Woont jij in Recife?', 'Jij woont in Recife?'], answer: 'Woon jij in Recife?', explanation: 'Quando «jij» vem depois do verbo, o -t cai: «woon jij».' },
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
        text: 'A maioria das palavras usa «de»; as neutras usam «het». No plural, todas usam «de». O artigo indefinido é sempre «een» (lido com «e» fraco). O possessivo não concorda com a coisa possuída: «mijn» serve para tudo.',
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
    pitfalls: ['Adivinhar «het» pelo português: não há relação; aprenda cada palavra com o artigo.', 'Pôr artigo antes do possessivo («de mijn moeder»): é só «mijn moeder».'],
    quiz: [
      { question: 'Qual é o artigo de «huis» (casa)?', options: ['het', 'de', 'een'], answer: 'het', explanation: '«huis» é neutro: het huis.' },
      { question: 'Qual é o artigo de todas as palavras no plural?', options: ['de', 'het', 'een'], answer: 'de', explanation: 'No plural, o artigo definido é sempre «de»: de huizen.' },
    ],
  },
  {
    id: 'nl-g4',
    level: 'A1.2',
    title: 'O verbo hebben e a negação: niet e geen',
    emoji: '🚫',
    summary: '«hebben» (ter) e as duas maneiras de negar: «niet» e «geen».',
    sections: [
      {
        text: '«niet» nega o verbo ou um adjetivo e costuma ficar depois do verbo: «Ik weet het niet» (não sei), «Het huis is niet groot». «geen» nega um substantivo que viria com «een» ou sem artigo: «Ik heb geen kat» (não tenho gato).',
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
    pitfalls: ['Pôr «niet» antes do verbo como o «não» português: «Ik niet weet» está errado; o certo é «Ik weet het niet».', 'Dizer «niet een»: para negar «um/uma», use «geen».'],
    quiz: [
      { question: 'Como se diz «eu não tenho gato»?', options: ['Ik heb geen kat.', 'Ik heb niet een kat.', 'Ik niet heb kat.'], answer: 'Ik heb geen kat.', explanation: 'Para negar um substantivo com «een», usa-se «geen».' },
      { question: 'Complete: «Hij ___ een broer.»', options: ['heeft', 'heb', 'hebt'], answer: 'heeft', explanation: '«heeft» é a forma de «hebben» para «hij» e «zij» (ela).' },
    ],
  },
];
