import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do shipibo-konibo — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes
 * principais: es.wikipedia.org/wiki/Idioma_shipibo (ordem SOV, posposições, alinhamento ergativo
 * consistente — ver Valenzuela, Pilar (2000), “Ergatividad escindida en wariapano, yaminawa y
 * shipibo-konibo”, citada na bibliografia do próprio artigo — e as quatro frases de exemplo com marcação
 * de caso) e en.wikipedia.org/wiki/Evidentiality, que cita Valenzuela, Pilar (2003), “Evidentiality in
 * Shipibo-Konibo, with a comparative overview of the category in Panoan”, com o exemplo “Aronkiai”. Ver
 * o cabeçalho de vocabulario.ts para a lista completa de fontes e para a explicação da ortografia dupla
 * usada neste pacote (a forma “ɨ” da Intercontinental Dictionary Series ao lado do “E” maiúsculo das
 * frases citadas da Wikipédia em espanhol).
 */
export const GRAMMAR_SHP: GrammarTopic[] = [
  {
    id: 'shp-g1',
    level: 'A1.1',
    title: 'Ɨ-a × E-n: a marcação do sujeito muda com o verbo',
    emoji: '🙋',
    summary: 'O shipibo-konibo tem alinhamento ergativo consistente: o sujeito de um verbo sem objeto leva uma marca; o de um verbo com objeto leva outra.',
    sections: [
      {
        text: 'Diferente do português, em que o pronome “eu” tem sempre a mesma forma, no shipibo-konibo a forma do pronome de 1ª pessoa muda conforme o verbo da frase tem ou não um objeto. Em “Ɨ-a-ra isin-ai” (eu estou doente), o verbo “isin-ai” (estar doente) não tem objeto, e o sujeito aparece na forma “ɨ-a” — o chamado caso absolutivo. Já em “E-n-ra nawa-n ochíti jamá-ke” (eu chutei o cachorro do mestiço), o verbo “jamá-ke” (chutar) tem um objeto (“o cachorro do mestiço”), e o sujeito aparece como “E-n” — com o sufixo “-n”, o caso ergativo. É esse contraste (uma marca para o sujeito “sozinho”, outra para o sujeito que age sobre algo) que caracteriza um idioma de alinhamento ergativo. A língua espanhola em es.wikipedia.org/wiki/Idioma_shipibo destaca que o shipibo-konibo mantém esse padrão de forma CONSISTENTE, ao contrário de outras línguas da família pano, que misturam ergatividade com outros padrões (ergatividade cindida, segundo Valenzuela, Pilar, 2000).',
        table: {
          head: ['Frase', 'Tipo de verbo', 'Forma do sujeito “eu”'],
          rows: [
            ['Ɨ-a-ra isin-ai.', 'sem objeto (estar doente)', 'ɨ-a (absolutivo)'],
            ['E-n-ra nawa-n ochíti jamá-ke.', 'com objeto (chutar o cachorro)', 'E-n (ergativo, com “-n”)'],
          ],
        },
        examples: [
          ['Ɨ-a-ra isin-ai.', 'Eu estou doente. (absolutivo)'],
          ['E-n-ra nawa-n ochíti jamá-ke.', 'Eu chutei o cachorro do mestiço. (ergativo)'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre a mesma forma do pronome, como em português: “ɨ-a” e “E-n” são a MESMA pessoa gramatical (eu), mas mudam de forma conforme o verbo tem ou não objeto.',
      'Achar que a escolha entre as duas formas é livre ou estilística: ela segue a estrutura da frase (se o verbo tem objeto ou não), não a vontade de quem fala.',
    ],
    quiz: [
      {
        question: 'Em “Ɨ-a-ra isin-ai” (eu estou doente), que caso marca o sujeito “ɨ-a”?',
        options: ['Absolutivo (verbo sem objeto)', 'Ergativo (verbo com objeto)', 'Não há marcação de caso nesta língua'],
        answer: 'Absolutivo (verbo sem objeto)',
        explanation: '“Isin-ai” (estar doente) não tem objeto, então o sujeito aparece na forma absolutiva “ɨ-a”, sem o sufixo “-n”.',
      },
      {
        question: 'O que torna o alinhamento ergativo do shipibo-konibo diferente do de outras línguas pano, segundo Valenzuela (2000)?',
        options: ['É consistente, sem misturar com outros padrões', 'Não existe marcação de caso nenhuma', 'Só os verbos no passado marcam o sujeito'],
        answer: 'É consistente, sem misturar com outros padrões',
        explanation: 'Outras línguas pano têm ergatividade cindida (misturada com outros padrões); o shipibo-konibo mantém o padrão ergativo de forma consistente.',
      },
    ],
  },
  {
    id: 'shp-g2',
    level: 'A1.1',
    title: 'Ordem SOV e a posposição “-nko”',
    emoji: '➡️',
    summary: 'O verbo fecha a frase, e o shipibo-konibo usa posposições (presas depois do nome), não preposições.',
    sections: [
      {
        text: 'O shipibo-konibo segue a ordem SOV (sujeito-objeto-verbo): o verbo vem por último. Em “E-n-ra nawa-n ochíti jamá-ke” (eu chutei o cachorro do mestiço), o objeto “nawa-n ochíti” (o cachorro do mestiço) vem antes do verbo “jamá-ke” (chutei). A língua também marca relações como “para” ou “até” com POSPOSIÇÕES — partículas presas DEPOIS do nome, ao contrário das preposições do português, que vêm antes. Em “E-a-ra Kako-nko ka-iba-ke” (fui ao Caco ontem), a posposição “-nko” vem grudada ao nome do lugar (“Kako”, um topônimo), não antes dele.',
        examples: [
          ['E-n-ra nawa-n ochíti jamá-ke.', 'Eu chutei o cachorro do mestiço. (objeto antes do verbo)'],
          ['E-a-ra Kako-nko ka-iba-ke.', 'Fui ao Caco ontem. (“-nko”, para/até, depois do nome do lugar)'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o verbo logo depois do sujeito, como em português: no shipibo-konibo o objeto vem no meio, e o verbo fecha a frase.',
      'Traduzir preposições do português colocando a palavra ANTES do nome: no shipibo-konibo, “-nko” (para, até) vem DEPOIS do nome do lugar, preso a ele.',
    ],
    quiz: [
      {
        question: 'Qual é a ordem básica de palavras do shipibo-konibo?',
        options: ['Sujeito-Objeto-Verbo (SOV)', 'Sujeito-Verbo-Objeto (SVO)', 'Verbo-Sujeito-Objeto (VSO)'],
        answer: 'Sujeito-Objeto-Verbo (SOV)',
        explanation: 'O verbo fecha a frase, depois do objeto — diferente da ordem SVO do português.',
      },
      {
        question: 'Em “E-a-ra Kako-nko ka-iba-ke” (fui ao Caco ontem), onde fica a posposição “-nko”?',
        options: ['Depois do nome do lugar, grudada a ele', 'Antes do nome do lugar, separada dele', 'No final da frase, depois do verbo'],
        answer: 'Depois do nome do lugar, grudada a ele',
        explanation: 'Posposições vêm depois do nome (“Kako-nko”), ao contrário das preposições do português, que vêm antes.',
      },
    ],
  },
  {
    id: 'shp-g3',
    level: 'A1.2',
    title: 'O sufixo “-n” também marca posse',
    emoji: '👨‍👩‍👧',
    summary: '“-n” não marca só o sujeito ergativo: o mesmo sufixo liga um possuidor ao que ele possui, como em “ɨ-n papa” (meu pai).',
    sections: [
      {
        text: 'Além de marcar o sujeito de um verbo com objeto (ver o tópico sobre ergatividade), o sufixo “-n” também aparece ligando um possuidor ao substantivo possuído: “ɨ-n papa” (meu pai), “ɨ-n tita” (minha mãe), “ɨ-n maṣ̌po” (minha cabeça). O mesmo sufixo aparece dentro da frase “nawa-n ochíti-nin natex-ke” (o cachorro do mestiço me mordeu), ligando “nawa” (mestiço, forasteiro) a “ochíti” (cachorro) — “nawa-n ochíti” é “o cachorro DO mestiço”. Uma marca cobrindo tanto o sujeito de um verbo transitivo quanto o possuidor de um substantivo é um padrão conhecido em línguas de alinhamento ergativo como o shipibo-konibo.',
        table: {
          head: ['Frase', 'Função de “-n”'],
          rows: [
            ['Ɨ-n papa.', 'posse (meu pai)'],
            ['Nawa-n ochíti-nin natex-ke.', 'posse (o cachorro DO mestiço)'],
            ['E-n-ra nawa-n ochíti jamá-ke.', 'sujeito ergativo (EU chutei)'],
          ],
        },
        examples: [
          ['Ɨ-n papa, ɨ-n tita.', 'Meu pai, minha mãe.'],
          ['Ɨ-n maṣ̌po.', 'Minha cabeça.'],
          ['Nawa-n ochíti-nin natex-ke.', 'O cachorro do mestiço me mordeu.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o “-n” ao formar uma posse: sem ele, “ɨ papa” fica incompleto — o certo é “ɨ-n papa”.',
      'Achar que “-n” tem um único sentido fixo: o mesmo sufixo marca tanto posse (“ɨ-n papa”) quanto o sujeito de um verbo transitivo (“E-n-ra”) — o contexto da frase é que diferencia.',
    ],
    quiz: [
      { question: 'Como se diz “minha cabeça” em shipibo-konibo?', options: ['Ɨ-n maṣ̌po.', 'Ɨ-a maṣ̌po.', 'Maṣ̌po ɨ-n.'], answer: 'Ɨ-n maṣ̌po.', explanation: 'O sufixo “-n” liga o pronome “ɨ” (eu) ao substantivo “maṣ̌po” (cabeça), formando a posse.' },
      { question: 'Em “nawa-n ochíti-nin natex-ke” (o cachorro do mestiço me mordeu), o que “nawa-n” marca?', options: ['O possuidor do cachorro (o mestiço)', 'O objeto da mordida', 'O tempo do verbo'], answer: 'O possuidor do cachorro (o mestiço)', explanation: '“Nawa-n” (do mestiço) liga o possuidor “nawa” a “ochíti” (cachorro), com o mesmo sufixo “-n” usado em “ɨ-n papa”.' },
    ],
  },
  {
    id: 'shp-g4',
    level: 'A1.2',
    title: 'Evidencialidade: o sufixo reportativo “-ronki”',
    emoji: '🗣️',
    summary: 'O verbo shipibo-konibo pode marcar que uma informação foi ouvida de outra pessoa, não vista ou sabida diretamente.',
    sections: [
      {
        text: 'Segundo Valenzuela (2003), citada em en.wikipedia.org/wiki/Evidentiality, o shipibo-konibo tem um sistema de evidencialidade: o verbo marca a FONTE da informação de quem fala. O sufixo reportativo “-ronki” indica que a informação foi ouvida de outra pessoa (“dizem que…”), não vista ou vivida diretamente por quem fala. O exemplo citado é “Aronkiai” (a-ronki-ai), traduzido como “dizem que ela vai fazer isso” — o sufixo “-ronki” fica entre a raiz do verbo e a terminação de tempo/aspecto. Esse tipo de marcação da fonte da informação, presa ao próprio verbo, é um traço estudado de modo comparativo em várias línguas da família pano.',
        examples: [['Aronkiai.', 'Dizem que ela vai fazer isso. (a + “-ronki”, reportativo + “-ai”, presente)']],
      },
    ],
    pitfalls: [
      'Achar que a marcação da fonte da informação é opcional ou apenas estilística: no shipibo-konibo ela é gramaticalizada, presa ao verbo.',
      'Confundir evidencialidade com certeza/incerteza: “-ronki” marca que a informação veio de outra pessoa, não se ela é verdadeira ou falsa.',
      'Procurar uma palavra separada para “dizem que”, como em português: no shipibo-konibo essa marca vem presa ao verbo, pelo sufixo “-ronki”.',
    ],
    quiz: [
      {
        question: 'O que o sufixo “-ronki” marca no verbo shipibo-konibo?',
        options: ['Que a informação foi ouvida de outra pessoa (relato)', 'Que a ação já terminou', 'Que a frase é negativa'],
        answer: 'Que a informação foi ouvida de outra pessoa (relato)',
        explanation: 'É o sufixo reportativo: marca que quem fala está repassando algo que ouviu, não algo que viu ou sabe por si.',
      },
      {
        question: 'Qual exemplo citado por Valenzuela (2003) mostra o sufixo “-ronki”?',
        options: ['Aronkiai', 'Ɨ-a-ra isin-ai', 'Ɨ-n papa'],
        answer: 'Aronkiai',
        explanation: '“Aronkiai” (a-ronki-ai) é traduzido como “dizem que ela vai fazer isso” — o “-ronki” fica entre a raiz do verbo e a terminação de presente “-ai”.',
      },
    ],
  },
];
