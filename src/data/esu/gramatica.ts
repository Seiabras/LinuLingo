import type { GrammarTopic } from '../types';

/**
 * Gramática do iúpique do Alasca central — por enquanto só A1.1 e A1.2 (curso incompleto). Fontes:
 * [WIKI] Wikipédia em inglês, «Central Alaskan Yupʼik» (consultada em 10/10/2026): a estrutura da
 * palavra (raiz, pós-bases, final, enclítico), os exemplos “assirtua”, “neqengqertua”, “kipusvik”,
 * “angyaq tak'uq”, “angyaq kiputaa”, “assikaqa”, os três números (singular, dual, plural) e a ausência
 * de gênero e de artigo; «Nunivak Cupʼig language», a tabela dos números; [ANLC] (“Cangacit?”,
 * “Assirtua”); [WIKT] (os exemplos dos verbetes). Todos os exemplos são frases das fontes, com a
 * tradução delas.
 */
export const GRAMMAR_ESU: GrammarTopic[] = [
  {
    id: 'esu-g1',
    level: 'A1.1',
    title: 'Quem faz a ação: o fim do verbo',
    emoji: '🙋',
    summary: '“Eu”: -tua (ou -ua). “Ele, ela”: -tuq (ou -uq). Pergunta a “você”: -cit.',
    sections: [
      {
        text: 'O iúpique não precisa de pronome antes do verbo: o fim do verbo já diz quem faz a ação. No modo de afirmar (o indicativo), “eu” termina em -tua ou -ua, e “ele, ela”, em -tuq ou -uq. Nas perguntas, o modo muda (o interrogativo), e “você” termina em -cit.',
        table: {
          head: ['Pessoa', 'Fim', 'Exemplo'],
          rows: [
            ['eu', '-tua, -ua', 'Assirtua. (estou bem)'],
            ['ele, ela', '-tuq, -uq', 'Qavartuq. (ele, ela dorme)'],
            ['você (pergunta)', '-cit', 'Cangacit? (como vai você?)'],
          ],
        },
        examples: [
          ['Neqengqertua.', 'Eu tenho peixe.'],
          ['Angyaq tak\'uq.', 'O barco é comprido.'],
          ['Qavcinek allrakungqercit?', 'Quantos anos você tem?'],
        ],
      },
    ],
    pitfalls: ['Usar -tuq para “eu”: “assirtua” é “estou bem”; o fim -tuq é de “ele, ela”.'],
    quiz: [
      { question: 'Como se diz “estou bem”?', options: ['Assirtua', 'Cangacit', 'Qavartuq'], answer: 'Assirtua', explanation: '-tua é o fim de “eu”.' },
      { question: 'O que quer dizer “Cangacit?”?', options: ['Como vai você?', 'Estou bem.', 'Obrigado.'], answer: 'Como vai você?', explanation: '-cit é “você”, nas perguntas.' },
    ],
  },
  {
    id: 'esu-g2',
    level: 'A1.1',
    title: 'Uma palavra, uma frase',
    emoji: '🧩',
    summary: 'A palavra iúpique tem raiz, pós-bases (que mudam o sentido), final (quem, quando) e às vezes um enclítico.',
    sections: [
      {
        text: 'Uma palavra iúpique se monta em quatro partes: a raiz, que dá o sentido; as pós-bases, que acrescentam ideias (“grande”, “fazer”, “querer”, “no passado”); o final, que diz o modo, a pessoa e o número; e, às vezes, um enclítico, que mostra a atitude de quem fala. Por isso uma palavra só pode valer uma frase inteira.',
        table: {
          head: ['Parte', 'Exemplo', 'Sentido'],
          rows: [
            ['raiz', 'assir-', 'bom'],
            ['final', '-tua', 'eu (afirmando)'],
            ['enclítico', '-gguq', '(ele diz que…)'],
          ],
        },
        examples: [
          ['Assirtua-gguq.', '(Ele diz que) estou bem.'],
          ['Angyarpaliyukapigtellruunga.', 'Eu queria muito construir um barco grande.'],
        ],
      },
    ],
    pitfalls: ['Procurar um adjetivo separado: o iúpique não tem adjetivos; “grande” é uma pós-base, como o -vak de “tuntuvak” (alce, “caribu grande”).'],
    quiz: [
      { question: 'Em “assirtua”, qual parte quer dizer “eu”?', options: ['-tua', 'assir-', '-gguq'], answer: '-tua', explanation: '“Assir-” é a raiz (bom); “-tua” é o final de “eu”.' },
    ],
  },
  {
    id: 'esu-g3',
    level: 'A1.2',
    title: 'Pós-bases: -vik, -vak, -ngqer-',
    emoji: '🏗️',
    summary: '-vik é “o lugar de”, -vak é “grande” e -ngqer- é “ter”.',
    sections: [
      {
        text: 'As pós-bases transformam uma palavra em outra. Com -vik (o lugar de), “kipus-” (comprar) vira “kipusvik”, a loja, e “elitnaur-” (estudar) vira “elitnaurvik”, a escola. Com -vak (grande), “tuntu” (caribu) vira “tuntuvak” (alce). E com -ngqer- (ter), um nome vira verbo: “neqa” (peixe) vira “neqengqertua”, eu tenho peixe.',
        table: {
          head: ['Pós-base', 'Sentido', 'Exemplo'],
          rows: [
            ['-vik', 'o lugar de', 'kipusvik (loja), elitnaurvik (escola)'],
            ['-vak', 'grande', 'tuntuvak (alce)'],
            ['-ngqer-', 'ter', 'neqengqertua (eu tenho peixe)'],
          ],
        },
        examples: [
          ['Neqengqertua.', 'Eu tenho peixe.'],
          ['Kipusvik.', 'Loja (o lugar de comprar).'],
        ],
      },
    ],
    pitfalls: ['Confundir -vik (lugar) com -vak (grande): “elitnaurvik” é a escola, o lugar de estudar.'],
    quiz: [
      { question: 'O que quer dizer “tuntuvak”?', options: ['alce (caribu grande)', 'o lugar do caribu', 'eu tenho caribu'], answer: 'alce (caribu grande)', explanation: '-vak é “grande”.' },
    ],
  },
  {
    id: 'esu-g4',
    level: 'A1.2',
    title: 'Contar em vinte, com dual e plural',
    emoji: '🔢',
    summary: 'Os números vão de cinco em cinco e de vinte em vinte; 40 é “dois vintes” (no dual) e 60, “três vintes” (no plural).',
    sections: [
      {
        text: 'O iúpique conta em base 20. De 6 a 8, os números se fazem com -legen (arvinlegen, malrunlegen, pingayunlegen); 15 tem palavra própria, “akimiaq”; e 20 é “yuinaq”. Para 40, 60, 80 e 100, conta-se em vintes, e a palavra “vinte” mostra os três números da língua: um vinte é “yuinaq” (singular), dois vintes são “yuinaak malruk” (dual) e três vintes, “yuinaat pingayun” (plural).',
        table: {
          head: ['Número', 'Iúpique', 'Ao pé da letra'],
          rows: [
            ['1, 2, 3, 4, 5', 'atauciq, malruk, pingayun, cetaman, talliman', '—'],
            ['10', 'qula', '—'],
            ['15', 'akimiaq', '—'],
            ['20', 'yuinaq', 'um vinte'],
            ['40', 'yuinaak malruk', 'dois vintes (dual)'],
            ['60', 'yuinaat pingayun', 'três vintes (plural)'],
            ['100', 'yuinaat talliman', 'cinco vintes'],
          ],
        },
        examples: [
          ['Qula malruk.', 'Doze (dez e dois).'],
          ['Yuinaqek allrakungqertua.', 'Tenho vinte anos.'],
        ],
      },
    ],
    pitfalls: ['Usar o plural para dois: dois vintes são “yuinaak” (dual), e não “yuinaat”.'],
    quiz: [
      { question: 'Quanto é “yuinaat talliman”?', options: ['cem', 'vinte e cinco', 'cinquenta'], answer: 'cem', explanation: 'Cinco vintes: 5 × 20 = 100.' },
    ],
  },
];
