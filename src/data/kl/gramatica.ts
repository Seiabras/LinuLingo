import type { GrammarTopic } from '../types';

/**
 * Gramática do kalaallisut — A1.1 e A1.2 (pacote incompleto). Fontes: Wikipédia em português,
 * «Língua groenlandesa»; Wikipédia em inglês, «Greenlandic language» e «Greenlandic orthography»
 * (exemplos “Qimmersuaqanngilaq” — ele não tem um cachorro grande —, “Anda-p nanoq takuaa” — o Anda vê
 * um urso —, “kaffisortarpoq” — ele costuma tomar café — e “sinippoq” — ele dorme —, além da lista dos
 * 8 casos e da frase “There is no category of definiteness in Greenlandic”); English Wiktionary, nos
 * verbetes de cada palavra citada (ajunngilaq, ateqarpoq, aalisagaq, qaqortoq/qernertoq/tungujortoq/
 * aappaluttoq, illu, Kalaallit Nunaat, qulit, arfinillit). Nenhuma forma foi flexionada por conta
 * própria: todo exemplo com sufixos é uma palavra ou frase que apareceu assim, pronta, numa fonte.
 */
export const GRAMMAR_KL: GrammarTopic[] = [
  {
    id: 'kl-g1',
    level: 'A1.1',
    title: 'Três vogais, o q fundo e as consoantes dobradas',
    emoji: '🔤',
    summary: 'O kalaallisut usa o alfabeto latino, mas com só três vogais e uma distinção entre k e q que muda o sentido da palavra.',
    sections: [
      {
        text: 'Desde a reforma ortográfica de 1973, o kalaallisut se escreve só com a, i, u — sem e nem o. Perto do “q” (um som dito mais fundo na garganta, uvular), essas vogais soam mais abertas, quase como “e” e “o”, mas continuam se escrevendo a, i, u. “Q” e “k” são letras diferentes pra sons diferentes: trocar uma pela outra muda a palavra.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['q', 'como “k”, mas dito bem no fundo da garganta (uvular)', 'qanoq (como), qujanaq (obrigado)'],
            ['k', 'como o “k” do português, mais pra frente na boca', 'kina (quem)'],
            ['ll', 'um “l” surdo (sem vibrar a garganta), como soprar dos dois lados da língua', 'illit (você), pilluarit (parabéns)'],
            ['vogal dobrada (aa, ii, uu)', 'não é uma vogal “longa”: conta como duas sílabas (duas moras)', 'qaqortoq (branco), niaqoq (cabeça)'],
          ],
        },
        examples: [
          ['Qujanaq!', 'Obrigado!'],
          ['Illit, qanoq ippit?', 'E você, como vai?'],
        ],
      },
    ],
    pitfalls: ['Ler “q” como o “k” do português: em “qanoq” o som sai bem mais fundo na garganta.', 'Esperar um “e” ou um “o” na escrita: o groenlandês moderno só escreve a, i, u.'],
    quiz: [
      { question: 'Quantas vogais o kalaallisut escreve?', options: ['Três: a, i, u', 'Cinco, como o português', 'Duas'], answer: 'Três: a, i, u', explanation: 'Desde a reforma de 1973, só a, i e u aparecem na escrita — mesmo quando soam mais abertas perto do q.' },
      { question: 'O que diferencia “q” de “k”?', options: ['O lugar na garganta onde o som é feito', 'Nada, são a mesma letra', '“q” só aparece em nomes próprios'], answer: 'O lugar na garganta onde o som é feito', explanation: '“q” é uvular (bem no fundo); “k” é velar (mais pra frente) — a diferença muda o sentido da palavra.' },
    ],
  },
  {
    id: 'kl-g2',
    level: 'A1.1',
    title: 'Uma palavra, uma frase: a polissíntese',
    emoji: '🧩',
    summary: 'O kalaallisut gruda uma raiz com vários sufixos numa palavra só — essa palavra pode ser uma frase inteira, sem precisar de mais nada.',
    sections: [
      {
        text: 'O kalaallisut é uma língua polissintética: a raiz do verbo vem primeiro, e depois se grudam sufixos de negação, de tempo, de modo e, no fim, uma terminação que já indica quem faz a ação — tudo isso numa palavra só, sem espaço. “Sinippoq” (ele/ela dorme) já é uma frase completa: a raiz “sinig-” (dormir) mais a terminação “-poq”, de “ele/ela, no presente”. Um exemplo bem citado é “Qimmersuaqanngilaq” (“ele não tem um cachorro grande”): junta “qimme-” (cachorro) com o aumentativo “-suaq” (grande), o sufixo “ter” e a negação, tudo numa palavra.',
        table: {
          head: ['Pedaço', 'O que faz', 'Exemplo'],
          rows: [
            ['raiz', 'o significado central', 'sinig- (dormir), ajor- (ser ruim)'],
            ['-nngit-', 'nega o que vem antes', 'ajorpoq (é ruim) → ajunngilaq (está bem, “não é ruim”)'],
            ['-poq', 'terminação de “ele/ela”, presente, afirmativo', 'sinippoq (ele dorme), oqarpoq (ele fala)'],
            ['-nga', 'terminação de “eu”', 'ajorpoq → ajunngilanga (eu estou bem)'],
          ],
        },
        examples: [
          ['Sinippoq.', 'Ele/ela dorme.'],
          ['Ajunngilaq.', 'Está bem, está em ordem.'],
          ['Ajunngilanga, qujanaq.', 'Estou bem, obrigado(a).'],
        ],
      },
    ],
    pitfalls: ['Tentar traduzir palavra por palavra, do jeito do português: em kalaallisut, uma palavra inteira já pode ser a frase.', 'Inventar uma terminação nova por conta própria: as combinações de sufixos seguem regras de harmonia e assimilação bem específicas — melhor aprender frases prontas primeiro.'],
    quiz: [
      { question: 'O que “ajunngilaq” significa, literalmente?', options: ['“Não é ruim” → está bem', 'Um cumprimento qualquer', 'O nome de uma pessoa'], answer: '“Não é ruim” → está bem', explanation: '“Ajorpoq” é “é ruim”; “-nngit-” nega: “ajunngilaq” vira “está bem”.' },
      { question: 'Por que “sinippoq” já é uma frase completa?', options: ['Porque a terminação “-poq” já diz quem faz a ação (ele/ela)', 'Porque é uma palavra curta', 'Não é uma frase completa, falta um pronome'], answer: 'Porque a terminação “-poq” já diz quem faz a ação (ele/ela)', explanation: 'O kalaallisut não precisa de um pronome separado: a pessoa já vem marcada na terminação do verbo.' },
    ],
  },
  {
    id: 'kl-g3',
    level: 'A1.2',
    title: 'Absolutivo e ergativo: dois jeitos de ser sujeito',
    emoji: '🎯',
    summary: 'O substantivo muda de forma segundo 8 casos — os dois mais importantes marcam quem faz a ação (ergativo) e quem recebe, ou age sozinho (absolutivo).',
    sections: [
      {
        text: 'O kalaallisut tem 8 casos gramaticais: absolutivo, ergativo, instrumental, alativo, locativo, ablativo, prossecutivo e equativo. O sujeito de um verbo sozinho (sem objeto) e o objeto de um verbo com objeto ficam os dois no caso absolutivo, sem sufixo extra; já o sujeito de um verbo COM objeto vai pro caso ergativo, com o sufixo “-p”. É um sistema ergativo-absolutivo, diferente do português, que trata sujeito-sozinho e sujeito-com-objeto do mesmo jeito (nominativo).',
        table: {
          head: ['Frase', 'Palavra', 'Caso', 'Função'],
          rows: [
            ['Sinippoq.', '(ele, sem sufixo)', 'absolutivo (embutido na terminação)', 'sujeito do verbo sozinho'],
            ['Andap nanoq takuaa.', 'Anda-p', 'ergativo (-p)', 'quem vê (sujeito do verbo com objeto)'],
            ['Andap nanoq takuaa.', 'nanoq', 'absolutivo (sem sufixo)', 'o que é visto (o urso)'],
          ],
        },
        examples: [
          ['Andap nanoq takuaa.', 'O Anda vê um urso.'],
          ['Kalaallit Nunaanni nunaqarpunga.', 'Eu moro na Groenlândia. (nuna = terra, no caso locativo dentro do nome do país)'],
        ],
      },
    ],
    pitfalls: ['Achar que “-p” é um “s” possessivo, tipo o inglês: aqui ele marca quem pratica a ação sobre um objeto (ergativo), não posse.', 'Procurar uma ordem de palavras fixa feito o português (sujeito-verbo-objeto): o caso de cada palavra é que mostra sua função, não só a posição na frase.'],
    quiz: [
      { question: 'Em “Andap nanoq takuaa” (o Anda vê um urso), o que o “-p” em “Andap” marca?', options: ['Que Anda é quem pratica a ação (ergativo)', 'Que o urso pertence a Anda', 'O plural'], answer: 'Que Anda é quem pratica a ação (ergativo)', explanation: 'Como há um objeto (nanoq, o urso), o sujeito “Anda” leva o sufixo ergativo “-p”.' },
      { question: 'Quantos casos gramaticais o kalaallisut tem?', options: ['8', '4', '2'], answer: '8', explanation: 'Absolutivo, ergativo, instrumental, alativo, locativo, ablativo, prossecutivo e equativo.' },
    ],
  },
  {
    id: 'kl-g4',
    level: 'A1.2',
    title: 'Sem gênero, sem artigo — e cor é verbo',
    emoji: '🚫',
    summary: 'Não existe “o/a” nem masculino/feminino em kalaallisut; e o que em português é adjetivo de cor costuma nascer de um verbo.',
    sections: [
      {
        text: 'O kalaallisut não marca gênero gramatical em nenhum substantivo ou pronome, e não tem artigo definido ou indefinido — não existe uma palavra separada pra “o”, “a”, “um” ou “uma”. Mesmo as palavras de cor, que em português são adjetivos, nascem de um verbo descritivo mais o sufixo “-toq” (“o que é X”): “qaqorpoq” (é branco) vira “qaqortoq” (branco, “o que é branco”); por isso os dicionários costumam marcar essas palavras como substantivo, não adjetivo.',
        table: {
          head: ['Verbo (“é X”)', 'Com “-toq” (“o que é X”)', 'Português'],
          rows: [
            ['qaqorpoq', 'qaqortoq', 'branco'],
            ['qernerpoq', 'qernertoq', 'preto'],
            ['tungujorpoq', 'tungujortoq', 'azul'],
            ['aappaluppoq', 'aappaluttoq', 'vermelho'],
          ],
        },
        examples: [
          ['Illuga tungujortuuvoq.', 'A minha casa é azul.'],
          ['Aalisagaq.', 'Peixe (lit. “o que foi pescado”, de “aalisarpoq”, pesca, + “-gaq”).'],
        ],
      },
    ],
    pitfalls: ['Procurar “o”, “a”, “um” ou “uma” em frente ao substantivo: não existem — “illu” já pode ser “casa”, “a casa” ou “uma casa”, dependendo do contexto.', 'Tratar a palavra de cor como adjetivo que concorda em gênero: não há gênero gramatical pra concordar, e a palavra em si costuma ser um substantivo derivado de verbo.'],
    quiz: [
      { question: 'Como se forma a palavra “tungujortoq” (azul)?', options: ['Do verbo “tungujorpoq” (é azul) + o sufixo “-toq”', 'É uma raiz isolada, sem verbo', 'Vem de um empréstimo do dinamarquês'], answer: 'Do verbo “tungujorpoq” (é azul) + o sufixo “-toq”', explanation: '“-toq” transforma o verbo descritivo em “o que é X” — por isso dicionários marcam essas palavras de cor como substantivo.' },
      { question: 'O kalaallisut tem artigo definido (“o”, “a”)?', options: ['Não — não existe essa categoria na língua', 'Sim, um artigo só, sem gênero', 'Sim, um pra cada um dos 8 casos'], answer: 'Não — não existe essa categoria na língua', explanation: 'Sem gênero gramatical e sem artigos: “illu” sozinho já cobre “casa”, “a casa” e “uma casa”.' },
    ],
  },
];
