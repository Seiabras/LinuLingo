import type { GrammarTopic } from '../types';

/**
 * Gramática do palenquero — só A1.1 e A1.2 por enquanto (pacote incompleto, ver `incomplete` em
 * index.ts). Fontes: Wikipédia (espanhol), artigo “Criollo palenquero” (tabela de partículas de
 * tempo-aspecto-modo, tabela de pronomes, fonologia); Wikipédia (inglês), artigo “Palenquero” (ausência
 * de gênero gramatical, a partícula de plural “ma”, as quatro cópulas e, ta, jue, senda); e o texto do
 * Pai-Nosso em palenquero, citado tanto pela Wikipédia em espanhol quanto por Omniglot
 * (omniglot.com/writing/palenquero.htm) — ver o cabeçalho de vocabulario.ts para a lista completa.
 */
export const GRAMMAR_PLN: GrammarTopic[] = [
  {
    id: 'pln-g1',
    level: 'A1.1',
    title: 'Ta, a, tan, taba, asé, pa: partículas antes do verbo',
    emoji: '🔁',
    summary:
      'O verbo do palenquero não se conjuga: seis partículas, sempre antes do verbo, marcam o tempo, o aspecto e o modo que em português ficam na terminação do verbo.',
    sections: [
      {
        text: 'Segundo a Wikipédia em espanhol (artigo “Criollo palenquero”), o palenquero marca tempo, aspecto e modo com partículas presas antes do verbo, no lugar da conjugação do espanhol: “ta” marca o presente habitual/contínuo, “a” marca o passado perfectivo, “tan” marca o futuro, “taba” marca o passado imperfectivo (contínuo), “asé” marca o hábito, e “pa” marca o propósito ou o subjuntivo (“para que”). O verbo em si — “trabajá”, “viní”, “comé”, “kaminá” — fica sempre na mesma forma, qualquer que seja o sujeito.',
        table: {
          head: ['Partícula', 'O que marca', 'Exemplo citado'],
          rows: [
            ['ta', 'presente habitual/contínuo; também cópula de estado temporário', '“Ele ta trabajá” — ele/ela trabalha'],
            ['a', 'passado perfectivo', '“Bo a viní?” — você veio?'],
            ['tan', 'futuro', '“Ané tan comé?” — eles vão comer?'],
            ['taba', 'passado imperfectivo (contínuo)', '“Ele taba kaminá” — ele/ela estava andando'],
            ['asé', 'hábito', '“Moná asé vivi” — as crianças vivem'],
            ['pa', 'propósito/subjuntivo', '“Pa bo trabajá” — para que você trabalhe'],
          ],
        },
        examples: [
          ['Ele ta trabajá.', 'Ele/ela trabalha.'],
          ['Bo a viní?', 'Você veio?'],
          ['Ané tan comé?', 'Eles vão comer?'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma conjugação como em português ou em espanhol: o verbo do palenquero (“trabajá”, “viní”, “comé”) nunca muda — quem muda é a partícula antes dele.',
      'As próprias fontes consultadas listam “ta” e “asé” como marcadores parecidos (presente contínuo/habitual), sem distinguir claramente o uso de cada um: aqui só se repetem os exemplos citados, sem inventar uma regra mais fina do que as fontes garantem.',
    ],
    quiz: [
      {
        question: 'Como se diz “ele/ela trabalha” em palenquero?',
        options: ['Ele ta trabajá.', 'Ele tan trabajá.', 'Ele taba trabajá.'],
        answer: 'Ele ta trabajá.',
        explanation: '“Ta” marca o presente habitual/contínuo, antes do verbo invariável “trabajá”.',
      },
      {
        question: 'Qual partícula marca o futuro?',
        options: ['tan', 'taba', 'asé'],
        answer: 'tan',
        explanation: '“Tan” antes do verbo marca que a ação ainda vai acontecer, como em “Ané tan comé?” (eles vão comer?).',
      },
    ],
  },
  {
    id: 'pln-g2',
    level: 'A1.1',
    title: 'Os pronomes: í, bo, ele, suto, utere/enú, ané',
    emoji: '🙋',
    summary: 'Os pronomes pessoais do palenquero, numa tabela da Wikipédia em espanhol — e por que o verbo fica igual para todos eles.',
    sections: [
      {
        text: 'A Wikipédia em espanhol (artigo “Criollo palenquero”) registra seis pronomes pessoais, com uma forma fraca e uma forma forte no singular: “yo”/“í” (eu), “bo”/“uté” (tu, você) e “ele” (ele, ela — sem distinção de gênero). No plural: “suto”/“uto” (nós), “utere”/“enú” (vocês — “enú” é a forma revitalizada, e “utere” vem do espanhol “ustedes”, confirmado pelo Wikcionário) e “ané” (eles, elas — de origem banta, segundo a Wikipédia em inglês). Como o verbo nunca muda de forma, o pronome é sempre obrigatório na frase.',
        table: {
          head: ['Pessoa', 'Pronome', 'Origem/nota'],
          rows: [
            ['eu', 'í (yo)', 'forma fraca “í”, forma forte “yo”'],
            ['tu, você', 'bo (uté)', 'forma fraca “bo”, forma forte “uté”'],
            ['ele, ela', 'ele', 'sem distinção de gênero'],
            ['nós', 'suto (uto)', ''],
            ['vocês', 'utere / enú', '“utere”, do espanhol “ustedes”; “enú”, forma revitalizada'],
            ['eles, elas', 'ané', 'de origem banta'],
          ],
        },
        examples: [
          ['Suto e palenquero.', 'Nós somos palenqueros.'],
          ['Kuanto utere tene?', 'Quanto vocês têm?'],
        ],
      },
    ],
    pitfalls: [
      'Omitir o pronome como às vezes se faz em português (“trabalho” em vez de “eu trabalho”): no palenquero o pronome é sempre obrigatório, porque o verbo não indica sozinho quem é o sujeito.',
      '“Ané” não se parece com nenhum pronome do espanhol: vem de uma língua banta, não do léxico espanhol que deu a maior parte do vocabulário.',
    ],
    quiz: [
      {
        question: 'Qual é a forma revitalizada do pronome “vocês”?',
        options: ['enú', 'utere', 'ané'],
        answer: 'enú',
        explanation: 'A Wikipédia cita “enú” como a forma revitalizada de “vocês”, ao lado de “utere” (do espanhol “ustedes”).',
      },
      {
        question: 'De que origem vem o pronome “ané” (eles, elas)?',
        options: ['banta', 'espanhola', 'portuguesa'],
        answer: 'banta',
        explanation: 'Segundo a Wikipédia em inglês, “ané” tem origem banta — como boa parte da gramática do palenquero.',
      },
    ],
  },
  {
    id: 'pln-g3',
    level: 'A1.2',
    title: 'Sem gênero, plural com “ma”, e o que o espanhol perdeu no caminho',
    emoji: '➕',
    summary: 'O palenquero não tem gênero gramatical, marca o plural com a partícula “ma” antes do substantivo, e muda a pronúncia de muitas palavras espanholas.',
    sections: [
      {
        text: 'Segundo a Wikipédia em inglês (artigo “Palenquero”), o gênero gramatical “não existe” no palenquero, e adjetivos derivados do espanhol usam por padrão a forma masculina, como em “lengua africano” (língua africana, com “africano” no masculino mesmo acompanhando uma palavra feminina). O plural é marcado com a partícula “ma” antes do substantivo — “ma posá” é “as casas”, “ma ngaína” é “as galinhas” — e essa partícula, segundo a mesma fonte, é “a única flexão de origem kikongo presente no palenquero”, vinda do prefixo kikongo “ma-”. A Wikipédia em espanhol também lista mudanças de som regulares entre o espanhol e o palenquero: o /s/ no fim da sílaba cai (“pescado” vira “pekáo”), e há nasalização antes de /d/, /g/ e /b/ (“dos” vira “ndo”, “grande” vira “ngande”, “vender” vira “mbendé”).',
        table: {
          head: ['Espanhol', 'Palenquero', 'Mudança'],
          rows: [
            ['pescado', 'pekáo', 'queda do /s/ no fim da sílaba'],
            ['dos', 'ndo', 'nasalização: d → nd'],
            ['grande', 'ngande', 'nasalização: g → ng'],
            ['vender', 'mbendé', 'nasalização: b → mb'],
          ],
        },
        examples: [
          ['Ma posá.', 'As casas.'],
          ['Ma ngaína.', 'As galinhas.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um artigo ou terminação que marque o gênero, como “o”/“a” em português: o palenquero não distingue gênero gramatical.',
      'Esperar um “-s” no fim da palavra para marcar plural, como em português: o palenquero marca o plural ANTES do substantivo, com “ma”.',
    ],
    quiz: [
      {
        question: 'Como se diz “as galinhas” em palenquero?',
        options: ['Ma ngaína.', 'Ngaína ma.', 'Ngaínas.'],
        answer: 'Ma ngaína.',
        explanation: '“Ma” vem antes do substantivo para marcar o plural: “ma ngaína”, as galinhas.',
      },
      {
        question: 'De onde vem a partícula de plural “ma”?',
        options: ['do kikongo', 'do espanhol', 'do português'],
        answer: 'do kikongo',
        explanation: '“Ma” vem do prefixo kikongo “ma-” e é, segundo a Wikipédia, a única flexão de origem kikongo no palenquero.',
      },
    ],
  },
  {
    id: 'pln-g4',
    level: 'A1.2',
    title: 'Nu, e as quatro cópulas: e, ta, jue, senda',
    emoji: '🚫',
    summary: 'Como negar uma frase com “nu”, e os quatro verbos “ser”/“estar” do palenquero — cada um com um uso diferente.',
    sections: [
      {
        text: 'A negação no palenquero se faz com “nu”, numa frase citada pela Wikipédia em inglês: “Bo é mamá mí nu” (você não é minha mãe) — aqui “nu” vem depois do verbo. O Pai-Nosso em palenquero, citado tanto pela Wikipédia em espanhol quanto por Omniglot, mostra ainda uma negação dobrada: “Nu rejá suto kaí andi tentasión nu” (não nos deixe cair em tentação), com “nu” nas duas pontas da frase. O palenquero também tem quatro cópulas (verbos “ser”/“estar”), cada uma com uma função: “e” corresponde ao “ser” do espanhol, para estados permanentes; “ta” corresponde ao “estar”, para estados temporários e localização; “jue” é usada como cópula com substantivos; e “senda” aparece com substantivos e adjetivos predicativos de estado permanente — como em “santifikaro sendá nombre si” (santificado seja o teu nome), da mesma oração.',
        table: {
          head: ['Cópula', 'Função', 'Exemplo'],
          rows: [
            ['e', 'estado permanente (como “ser”)', 'Suto e palenquero. — Nós somos palenqueros.'],
            ['ta', 'estado temporário/localização (como “estar”)', 'Ese mujé ta ngolo. — Aquela mulher é/está gorda.'],
            ['jue', 'cópula com substantivos', 'Ele jue tatá. — Ele é pai.'],
            ['senda', 'predicado permanente (substantivo/adjetivo)', 'Santifikaro sendá nombre si. — Santificado seja o teu nome.'],
          ],
        },
        examples: [
          ['Bo é mamá mí nu.', 'Você não é minha mãe.'],
          ['Nu rejá suto kaí andi tentasión nu.', 'Não nos deixe cair em tentação.'],
        ],
      },
    ],
    pitfalls: [
      'Usar só um verbo “ser/estar” como em português: o palenquero tem quatro cópulas diferentes, cada uma com seu próprio uso.',
      'Esquecer que “nu” pode aparecer nas duas pontas da frase, como no Pai-Nosso em palenquero — uma negação dobrada, diferente do “nu” sozinho de “Bo é mamá mí nu”.',
    ],
    quiz: [
      {
        question: 'Qual cópula se usa para um estado temporário, como “estar gordo”?',
        options: ['ta', 'e', 'jue'],
        answer: 'ta',
        explanation: '“Ta” corresponde ao “estar” do espanhol: “Ese mujé ta ngolo” (aquela mulher está/é gorda).',
      },
      {
        question: 'Onde fica o “nu” que nega a frase “Bo é mamá mí nu”?',
        options: ['depois do verbo, no fim da frase', 'antes do verbo', 'no meio da frase'],
        answer: 'depois do verbo, no fim da frase',
        explanation: 'Nessa frase citada pela Wikipédia, “nu” vem no fim, depois de “Bo é mamá mí”.',
      },
    ],
  },
];
