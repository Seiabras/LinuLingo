import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do hopi — quatro, os genuinamente sourced que este curso conseguiu sustentar
 * (ver `incomplete` em `index.ts`). Fonte principal: en.wikipedia.org/wiki/Hopi_language (seções
 * “Syntax”/“Word order”, “Morphology”/“Suffixes”, “Phonology” e “Orthography”, que citam Harold C.
 * Conklin, Ekkehart Malotki e Benjamin Lee Whorf, entre outros). O Wiktionary em inglês (verbete “hopi”)
 * fornece o único exemplo de uso completo encontrado nesta pesquisa. Nenhuma fonte consultada traz um
 * paradigma de conjugação verbal completo nem uma frase interrogativa — por isso este curso descreve os
 * fenômenos de verbo e de posposição sem fabricar um exemplo que a fonte não dá.
 */
export const GRAMMAR_HOP: GrammarTopic[] = [
  {
    id: 'hop-g1',
    level: 'A1.1',
    title: 'Sujeito-objeto-verbo, e adjetivo sem verbo de ligação',
    emoji: '➡️',
    summary: 'O hopi é uma língua sujeito-objeto-verbo (SOV): o verbo fecha a frase. E um adjetivo predicativo vem direto depois do sujeito, sem nenhum verbo como “ser”/“estar” no meio.',
    sections: [
      {
        text: 'A Wikipédia em inglês afirma, na seção de sintaxe: “Hopi is a subject–object–verb language” (“o hopi é uma língua sujeito-objeto-verbo”). Isso significa que, numa frase como “Nuʼ taawa tuwa” (eu vejo o sol), a ordem literal é “eu — sol — vejo”: o objeto (“sol”) vem no meio, entre o sujeito e o verbo, que sempre fecha a frase.',
      },
      {
        heading: 'Adjetivo sem “ser”/“estar”',
        text: 'A mesma seção da Wikipédia dá o exemplo “maana wuupa”, traduzido como “a moça [é] alta”: o adjetivo (“wuupa”, alta) vem direto depois do sujeito (“maana”, moça), sem nenhuma palavra equivalente a “é”. O mesmo padrão aparece nas cores vistas na segunda unidade: “owa qömvi” (a pedra [é] preta) e “paahu sakwa” (a água [é] azul).',
        examples: [
          ['Maana wuupa.', 'A moça é alta. (exemplo da Wikipédia em inglês; “maana” e “wuupa” não fazem parte do vocabulário deste curso — ver a nota abaixo)'],
          ['Owa qömvi.', 'A pedra é preta.'],
          ['Paahu sakwa.', 'A água é azul.'],
        ],
      },
      {
        heading: 'Pronomes: forma de sujeito × forma de objeto',
        text: 'A mesma fonte (seção de morfologia, sufixos) dá a tabela completa dos pronomes pessoais, com uma forma para o sujeito (nominativa) e outra para o objeto (oblíqua). Este curso usa só as formas de sujeito no vocabulário e nas lições — a fonte não traz nenhuma frase completa usando as formas de objeto, por isso este curso não arrisca combiná-las sozinho.',
        table: {
          head: ['Pronome', 'Forma de sujeito', 'Forma de objeto'],
          rows: [
            ['eu', 'nuʼ', 'nuy'],
            ['tu, você', 'um', 'ung'],
            ['ele, ela', 'pam', 'put'],
            ['nós', 'itam', 'itamuy'],
            ['eles, elas', 'puma', 'pumuy'],
          ],
        },
      },
    ],
    pitfalls: [
      'Esperar um verbo “ser”/“estar” antes do adjetivo, como em português: no hopi, o adjetivo vem direto depois do sujeito, sem nada no meio (“maana wuupa”, a moça [é] alta).',
      'Usar a forma de objeto do pronome (“nuy”, “ung”...) no lugar do sujeito: essas formas marcam quem recebe a ação, não quem a pratica — o sujeito usa sempre a forma nominativa (“nuʼ”, “um”...).',
    ],
    quiz: [
      {
        question: 'Qual é a ordem básica de palavras do hopi, segundo a Wikipédia em inglês?',
        options: ['Sujeito-Objeto-Verbo (SOV)', 'Sujeito-Verbo-Objeto (SVO)', 'Verbo-Sujeito-Objeto (VSO)'],
        answer: 'Sujeito-Objeto-Verbo (SOV)',
        explanation: 'A Wikipédia em inglês afirma diretamente: “Hopi is a subject–object–verb language” (o hopi é uma língua sujeito-objeto-verbo).',
      },
      {
        question: 'Na frase “maana wuupa” (a moça é alta), o que liga o sujeito ao adjetivo?',
        options: ['Nada: o adjetivo vem direto, sem verbo de ligação', 'O verbo “ser”, oculto mas presente', 'Uma partícula obrigatória entre os dois'],
        answer: 'Nada: o adjetivo vem direto, sem verbo de ligação',
        explanation: 'A Wikipédia em inglês usa esse exemplo exatamente para mostrar que um adjetivo predicativo não precisa de cópula em hopi.',
      },
      {
        question: 'Qual é a forma de objeto do pronome “nuʼ” (eu), segundo a tabela de pronomes da Wikipédia em inglês?',
        options: ['nuy', 'ung', 'put'],
        answer: 'nuy',
        explanation: 'A tabela de pronomes da Wikipédia em inglês lista “nuy” como a forma oblíqua (de objeto) de “nuʼ”.',
      },
    ],
  },
  {
    id: 'hop-g2',
    level: 'A1.1',
    title: 'A escrita: oclusiva glotal e vogal longa',
    emoji: '🔤',
    summary: 'O hopi usa o alfabeto latino com um acréscimo: o apóstrofo marca uma consoante real (a oclusiva glotal), e escrever uma vogal duas vezes seguidas marca uma vogal longa.',
    sections: [
      {
        text: 'Segundo a seção de ortografia do artigo “Hopi language” da Wikipédia em inglês, o símbolo ⟨ʼ⟩ representa o som /ʔ/ — a oclusiva glotal, uma parada no ar que existe em português só entre vogais em certas palavras (como no “uh-uh” de negação), mas nunca escrita como letra própria. No hopi, ela é uma consoante de verdade, igual a qualquer outra.',
      },
      {
        heading: 'Vogal longa: a letra dobrada',
        text: 'A mesma fonte afirma que “vogais longas se escrevem dobradas” (“long vowels are written double”). Por isso “qöötsa” (branco) tem dois “ö” seguidos, e “kuuyi” (água engarrafada) e “tuukwi” (montanha) têm dois “u” seguidos: não é erro de digitação nem letra repetida por acaso, é a duração da vogal marcada na escrita.',
        table: {
          head: ['Marca', 'O que marca', 'Exemplo'],
          rows: [
            ['ʼ', 'oclusiva glotal (consoante)', 'Nuʼ, Suukyaʼ'],
            ['vogal dobrada (öö, uu, ii...)', 'vogal longa', 'Qöötsa, Kuuyi, Tuukwi'],
          ],
        },
      },
    ],
    pitfalls: [
      'Ler o apóstrofo como só uma marca decorativa ou uma aspa: ele representa uma consoante real, a oclusiva glotal.',
      'Achar que uma vogal dobrada é erro de grafia: ela marca uma vogal longa, uma diferença de duração que pode mudar o sentido da palavra.',
    ],
    quiz: [
      {
        question: 'O que o apóstrofo (ʼ) representa na escrita do hopi, segundo a Wikipédia em inglês?',
        options: ['Uma oclusiva glotal (uma consoante real)', 'Só uma pausa decorativa, sem som próprio', 'O plural do substantivo'],
        answer: 'Uma oclusiva glotal (uma consoante real)',
        explanation: 'A seção de ortografia descreve ⟨ʼ⟩ como a representação do som /ʔ/, a oclusiva glotal.',
      },
      {
        question: 'O que significa escrever uma vogal duas vezes seguidas, como em “qöötsa” ou “kuuyi”?',
        options: ['Que a vogal é longa', 'Que a palavra está no plural', 'Que a sílaba é átona'],
        answer: 'Que a vogal é longa',
        explanation: 'A Wikipédia em inglês afirma que vogais longas se escrevem dobradas no hopi.',
      },
    ],
  },
  {
    id: 'hop-g3',
    level: 'A1.2',
    title: 'Tom descendente, e o plural por reduplicação',
    emoji: '🔁',
    summary: 'A variante da Terceira Mesa desenvolveu tons nas vogais longas, marcados com acento grave. E o hopi forma o plural de substantivos e verbos, entre outros meios, repetindo parte da própria palavra.',
    sections: [
      {
        text: 'A Wikipédia em inglês, citando o linguista Benjamin Lee Whorf, afirma que “a variante da Terceira Mesa do hopi desenvolveu tom nas vogais longas” — com tons descendentes ou nivelados. Esse tom descendente é marcado, na escrita, com um acento grave: o próprio exemplo da fonte é “tsirò”, “pássaros”, o plural de “tsiro” (pássaro, uma palavra deste curso). Esse acento grave não é força de voz, como o acento do português: é uma informação de melodia.',
      },
      {
        heading: 'Plural por reduplicação parcial',
        text: 'A seção de morfologia da mesma fonte afirma: “a pluralidade de substantivos e verbos é indicada, entre outros meios, por reduplicação parcial”, e dá um exemplo completo de frase: “taa~taqt nöö~nösa” (“vários homens comeram”). O til (~) usado ali marca, só na transcrição da própria fonte, a parte repetida: “taaqa” (homem, uma palavra deste curso) vira “taataqt”, e “nöösa” (comer, também deste curso) vira “nöönösa”. O til não é uma letra do alfabeto hopi — é só um recurso de transcrição linguística.',
        examples: [['Taa~taqt nöö~nösa.', '“Vários homens comeram” — exemplo do artigo “Hopi language” da Wikipédia em inglês.']],
      },
    ],
    pitfalls: [
      'Achar que o til (~) é uma letra do alfabeto hopi: ele é só uma marca de transcrição usada pela fonte para destacar a reduplicação, não algo que se escreve numa palavra comum.',
      'Tentar formar o plural de qualquer palavra hopi sozinho, reduplicando por conta própria: a fonte mostra só este exemplo pronto, sem detalhar a regra completa — por isso este curso não arrisca aplicá-la a outras palavras.',
    ],
    quiz: [
      {
        question: 'O que o acento grave marca sobre uma vogal longa na variante da Terceira Mesa do hopi, segundo a Wikipédia em inglês?',
        options: ['Um tom descendente', 'A sílaba tônica, como no português', 'O plural da palavra'],
        answer: 'Um tom descendente',
        explanation: 'A Wikipédia em inglês, citando Whorf, descreve tons descendentes ou nivelados nas vogais longas da variante da Terceira Mesa, marcados com acento grave.',
      },
      {
        question: 'Segundo a Wikipédia em inglês, como o hopi forma o plural de substantivos e verbos, entre outros meios?',
        options: ['Por reduplicação parcial (repetindo parte da palavra)', 'Só com um sufixo fixo, igual em toda palavra', 'O hopi não tem plural'],
        answer: 'Por reduplicação parcial (repetindo parte da palavra)',
        explanation: 'A fonte dá o exemplo “taa~taqt nöö~nösa” (vários homens comeram), com o til marcando a parte repetida de “taaqa” e de “nöösa”.',
      },
    ],
  },
  {
    id: 'hop-g4',
    level: 'A1.2',
    title: 'Verbos sem conjugação fixa, e posposições',
    emoji: '🧩',
    summary: 'Os verbos do hopi recebem sufixos, mas sem um padrão regular simples — por isso este curso usa só a forma citada de cada verbo. E o hopi usa posposições (depois do substantivo), não preposições.',
    sections: [
      {
        text: 'A seção de morfologia da Wikipédia em inglês afirma: “os verbos também são marcados por sufixos, mas eles não são usados de um jeito regular”. É por isso que este curso não conjuga os oito verbos do seu vocabulário (“nöösa”, comer; “tuwa”, ver; “navota”, ouvir; “kwala”, ferver; “momori”, nadar; “naani”, dar risadinha; “ööyi”, ficar satisfeito; “takta”, construir ninho): cada um aparece só na forma citada pelo Wiktionary em inglês, sem flexão de sujeito nem de tempo.',
      },
      {
        heading: 'Aspecto durativo',
        text: 'A mesma fonte descreve dois sufixos, “–lawu” e “–ta”, usados para “transformar um verbo simples num durativo (indicando que a ação está em andamento e ainda não terminou)”. A fonte não mostra a forma durativa de nenhum dos oito verbos deste curso — por isso este curso registra o fenômeno, sem fabricar um exemplo que a fonte não dá.',
      },
      {
        heading: 'Posposições, não preposições',
        text: 'Como língua sujeito-objeto-verbo, o hopi usa posposições — a partícula vem depois do substantivo, não antes, ao contrário do português. A Wikipédia em inglês cita três: “akw” (com, instrumental), “angkw” (de, a partir de) e “ep” (em, dentro de, sobre). A fonte não traz uma frase completa combinando essas posposições com os substantivos deste curso, por isso elas ficam registradas aqui como vocabulário gramatical, sem entrar nas lições.',
      },
    ],
    pitfalls: [
      'Tentar conjugar os verbos deste curso (“nöösa”, “tuwa”, “navota”...) por conta própria: a fonte afirma que os sufixos verbais do hopi não seguem um padrão regular simples, então este curso usa só a forma citada de cada verbo.',
      'Procurar uma preposição antes do substantivo, como em português (“com”, “de”): no hopi, documentado como língua sujeito-objeto-verbo, a partícula equivalente (a posposição) vem depois do substantivo.',
    ],
    quiz: [
      {
        question: 'Segundo a Wikipédia em inglês, por que este curso não conjuga os verbos do seu vocabulário hopi?',
        options: ['Porque os sufixos verbais não seguem um padrão regular simples, segundo a fonte', 'Porque o hopi não tem verbos', 'Porque todo verbo hopi é idêntico ao substantivo correspondente'],
        answer: 'Porque os sufixos verbais não seguem um padrão regular simples, segundo a fonte',
        explanation: 'A Wikipédia em inglês afirma que os verbos são marcados por sufixos, “mas eles não são usados de um jeito regular” — por isso este curso evita inventar uma conjugação.',
      },
      {
        question: 'O que a posposição “akw”, citada pela Wikipédia em inglês, marca?',
        options: ['Instrumento (“com”)', 'Lugar (“em”)', 'Origem (“de”)'],
        answer: 'Instrumento (“com”)',
        explanation: 'A tabela gramatical da Wikipédia em inglês lista “akw” como posposição instrumental (“com”), diferente de “angkw” (“de”) e “ep” (“em”).',
      },
    ],
  },
];
