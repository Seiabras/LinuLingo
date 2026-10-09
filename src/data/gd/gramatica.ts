import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do gaélico escocês — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Fontes: en.wikipedia.org/wiki/Scottish_Gaelic_grammar (lenição, ordem VSO, pronomes
 * preposicionais, presente contínuo, passado e futuro), os verbetes do Wiktionary citados em
 * vocabulario.ts e, para as construções inteiras de A2 (contínuo, passado, futuro/hábito e
 * sentimento com “air”), a wiki de gramática da comunidade gaelicgrammar.org/~gaelic/mediawiki
 * (páginas “Lenition”, “Tha” e “Experiencer Constructions”).
 */
export const GRAMMAR_GD: GrammarTopic[] = [
  {
    id: 'gd-g1',
    level: 'A1.1',
    title: 'A lenição (séimheachadh)',
    emoji: '🔤',
    summary: 'A marca mais característica da escrita gaélica: um “h” aparece depois da consoante inicial de certas palavras.',
    sections: [
      {
        text: 'A lenição acontece quando uma palavra-gatilho vem antes — um possessivo como “mo” (meu/minha), o número “dà” (dois), ou um substantivo feminino antes de um adjetivo. Ela muda o som da consoante inicial, e a escrita ganha um “h” logo depois dela.',
        table: {
          head: ['Sem lenição', 'Com lenição', 'Quando acontece'],
          rows: [
            ['beag (pequeno)', 'bheag', 'depois de substantivo feminino: bò bheag'],
            ['snog (bonito)', 'shnog', 'mesmo padrão: s + h'],
            ['cù (cachorro)', 'chù', 'depois de “mo”: mo chù'],
            ['màthair (mãe)', 'mhàthair', 'depois de “mo”: mo mhàthair'],
          ],
        },
        examples: [
          ['mo mhàthair', 'minha mãe'],
          ['dà chat', 'dois gatos'],
        ],
      },
    ],
    pitfalls: [
      'Tentar pronunciar o “h” como uma letra separada: ele só marca a mudança de som da consoante anterior.',
      'Esperar a lenição em “l”, “n” e “r”: a gramática do gaélico não a mostra na escrita para essas três letras.',
    ],
    quiz: [
      { question: 'Qual é a forma de “beag” (pequeno) depois de “mo”?', options: ['bheag', 'mheag', 'beag'], answer: 'bheag', explanation: '“Mo” aciona a lenição: o “b” ganha um “h” depois dele.' },
      { question: '“Mo mhàthair” quer dizer…', options: ['minha mãe', 'meu pai', 'minha casa'], answer: 'minha mãe', explanation: '“Màthair” é mãe; com “mo” (meu/minha) o “m” inicial vira “mh”.' },
    ],
  },
  {
    id: 'gd-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo bi (tha / chan eil)',
    emoji: '🙋',
    summary: 'Sete pronomes e um só verbo, “bi”, para “ser” e “estar” — sem palavras separadas para “sim” e “não”.',
    sections: [
      {
        text: 'O gaélico responde “sim” ou “não” repetindo o verbo da pergunta. Com o verbo “bi”, a forma afirmativa é “tha” e a negativa é “chan eil”.',
        table: {
          head: ['Pronome', 'Tradução', 'tha (afirmativo)', 'chan eil (negativo)'],
          rows: [
            ['mi', 'eu', 'tha mi', 'chan eil mi'],
            ['thu', 'tu, você (informal)', 'tha thu', 'chan eil thu'],
            ['e / i', 'ele / ela', 'tha e / tha i', 'chan eil e / chan eil i'],
            ['sinn', 'nós', 'tha sinn', 'chan eil sinn'],
            ['sibh', 'vocês; formal', 'tha sibh', 'chan eil sibh'],
            ['iad', 'eles, elas', 'tha iad', 'chan eil iad'],
          ],
        },
        examples: [
          ['Tha mi gu math.', 'Eu estou bem.'],
          ['Chan eil fios agam.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar palavras para “sim” e “não”: a resposta repete “tha” ou “chan eil”.',
      'Esquecer o pronome depois do verbo: o gaélico sempre diz “tha mi”, nunca só “tha” sozinho para “eu estou”.',
    ],
    quiz: [
      { question: 'Como se responde afirmativamente a uma pergunta feita com o verbo “bi”?', options: ['Tha', 'Seadh', 'Sim'], answer: 'Tha', explanation: 'O gaélico responde repetindo o verbo: “tha” é a forma afirmativa de “bi”.' },
      { question: 'O que significa “chan eil”?', options: ['não (negativo de “bi”)', 'sim', 'talvez'], answer: 'não (negativo de “bi”)', explanation: '“Chan eil” é a forma negativa presente do verbo “bi”.' },
    ],
  },
  {
    id: 'gd-g3',
    level: 'A1.2',
    title: 'A ordem verbo-sujeito-objeto (VSO)',
    emoji: '🔁',
    summary: 'O verbo vem sempre primeiro na frase gaélica: Verbo-Sujeito-Objeto, diferente da ordem Sujeito-Verbo-Objeto do português.',
    sections: [
      {
        text: 'Em português, o verbo fica no meio: “eu tenho uma casa” (sujeito-verbo-objeto). No gaélico, o verbo abre a frase: “Tha taigh agam” é, literalmente, “está casa em-mim” — “tha” vem antes até do que funciona como sujeito gramatical. Essa ordem VSO é rara entre as línguas do mundo e aparece em todas as línguas celtas insulares (também no irlandês e no galês).',
        examples: [
          ['Tha taigh agam.', 'Eu tenho uma casa. (o verbo vem primeiro)'],
          ['Tha mi gu math.', 'Eu estou bem.'],
          ['Tha e snog.', 'Ele é legal.'],
          ["Bha iad a' teagasg Seumas.", 'Eles estavam ensinando o Seumas.'],
        ],
      },
    ],
    pitfalls: [
      'Começar a frase pelo pronome, como em português (“Mi tha gu math”): no gaélico o verbo sempre vem primeiro.',
      'Traduzir palavra por palavra sem notar a ordem: “tha taigh agam” não é “eu tenho casa”, é “está casa em-mim”, com o verbo na frente.',
    ],
    quiz: [
      { question: 'Qual é a ordem das palavras numa frase simples em gaélico?', options: ['Verbo-Sujeito-Objeto', 'Sujeito-Verbo-Objeto', 'Objeto-Verbo-Sujeito'], answer: 'Verbo-Sujeito-Objeto', explanation: 'O gaélico, como as outras línguas celtas insulares, põe o verbo em primeiro lugar na frase.' },
      { question: 'Em “Tha mi gu math”, qual palavra vem primeiro?', options: ['o verbo “tha”', 'o pronome “mi”', 'o advérbio “gu math”'], answer: 'o verbo “tha”', explanation: 'VSO: o verbo abre a frase, antes até do sujeito “mi”.' },
    ],
  },
  {
    id: 'gd-g4',
    level: 'A1.2',
    title: 'Sem verbo “ter”: tha… agam',
    emoji: '🤲',
    summary: 'Para dizer que tem algo, o gaélico não usa um verbo “ter”: usa “bi” (tha) com a preposição “aig” grudada a um pronome.',
    sections: [
      {
        text: 'A preposição “aig” (em, junto de) se junta a cada pronome numa forma só, como “comigo”/“contigo” em português — mas aqui ela substitui o verbo “ter” inteiro.',
        table: {
          head: ['aig + pronome', 'Tradução'],
          rows: [
            ['agam', 'em mim'],
            ['agad', 'em ti'],
            ['aige', 'nele (dele)'],
            ['aice', 'nela (dela)'],
            ['againn', 'em nós'],
            ['agaibh', 'em vós'],
            ['aca', 'neles'],
          ],
        },
        examples: [
          ['Tha taigh agam.', 'Eu tenho uma casa.'],
          ['Tha trì tunnagan aige.', 'Ele tem três patos.'],
          ['Chan eil fios agam.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ter” separado: não existe — é sempre “tha… aig” mais o pronome certo.',
      'Trocar “agam” (em mim) por “aige” (nele): a terminação muda com a pessoa, como uma preposição conjugada.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho um cachorro” em gaélico?', options: ['Tha cù agam.', 'Mi tha cù.', 'Cù tha agam.'], answer: 'Tha cù agam.', explanation: '“Tha” (verbo) + “cù” (o que se tem) + “agam” (em mim) — literalmente “está cachorro em mim”.' },
      { question: 'O que quer dizer “aige”?', options: ['nele, com ele', 'em mim', 'em nós'], answer: 'nele, com ele', explanation: '“Aige” é a forma de “aig” (em, com) para a terceira pessoa masculina.' },
    ],
  },
  {
    id: 'gd-g5',
    level: 'A2.1',
    title: 'O presente contínuo: tha mi a’ / ag + verbo',
    emoji: '🏃',
    summary: 'Para dizer que algo está acontecendo agora, o gaélico usa o verbo “bi” mais uma forma especial do verbo principal — a mesma lógica de “a’ fuireach” e “ag iarraidh”, que já apareceram nos exemplos das primeiras unidades.',
    sections: [
      {
        text: 'Essa forma especial (chamada de nome verbal) vem depois de “a’ ” quando o verbo começa com consoante, e depois de “ag” quando começa com vogal. Ela nunca aparece sozinha: sempre precisa do verbo “bi” (tha, bidh, bha…) na frente.',
        table: {
          head: ['Verbo (forma de dicionário)', 'Forma contínua', 'Tradução'],
          rows: [
            ['obraich (trabalhar)', 'ag obair', 'trabalhando'],
            ['coisich (andar)', 'a’ coiseachd', 'andando'],
            ['leugh (ler)', 'a’ leughadh', 'lendo'],
            ['bruidhinn (falar)', 'a’ bruidhinn', 'falando'],
          ],
        },
        examples: [
          ['Tha mi ag obair.', 'Estou trabalhando.'],
          ['Tha mi a’ leughadh.', 'Estou lendo.'],
          ['Dè tha dol?', 'O que está acontecendo? (lit. “o que está indo?”, jeito comum de perguntar “o que você está fazendo?”)'],
        ],
      },
    ],
    pitfalls: [
      'Usar o verbo principal sozinho, sem “tha”: o gaélico sempre monta o presente contínuo com “tha” (ou “bidh”) mais a forma em “a’ ”/“ag”.',
      'Confundir a forma contínua com a entrada de dicionário do verbo: “obraich” é a forma que aparece no vocabulário, mas a frase usa “ag obair”, sem o “ch” final.',
    ],
    quiz: [
      { question: 'Como se diz “estou trabalhando” em gaélico?', options: ['Tha mi ag obair.', 'Obraich mi.', 'Bidh mi obraich.'], answer: 'Tha mi ag obair.', explanation: 'O presente contínuo é “tha” + a forma especial do verbo (“ag obair”), nunca o verbo sozinho.' },
      { question: 'Antes de um verbo que começa com vogal, como “obair”, usa-se…', options: ['ag', 'a’', 'do'], answer: 'ag', explanation: 'Verbos que começam com vogal levam “ag” (ag obair); os que começam com consoante levam “a’ ” (a’ coiseachd).' },
    ],
  },
  {
    id: 'gd-g6',
    level: 'A2.1',
    title: 'O passado: lenição, “dh’ ” e os verbos de raiz irregular',
    emoji: '⏪',
    summary: 'O passado regular funciona como a lenição que já vimos na unidade 1: muda o som (e a escrita) da consoante inicial do verbo. Mas alguns dos verbos mais comuns do dia a dia têm uma raiz própria no passado, sem nenhuma lenição.',
    sections: [
      {
        text: 'Nos verbos regulares, o passado é a própria forma de lenição do verbo (como no imperativo): “pòg” vira “phòg”, “cuidich” vira “chuidich”. Verbos que começam com vogal (ou com “f”) recebem “dh’ ” em vez de uma letra muda: “fàg” vira “dh’fhàg”. Nas perguntas e negativas, entra a partícula “do”: “an do…?”, “cha do…”.',
        table: {
          head: ['Verbo', 'Passado', 'Tipo'],
          rows: [
            ['pòg (beijar)', 'phòg', 'lenição regular'],
            ['cuidich (ajudar)', 'chuidich', 'lenição regular'],
            ['fàg (deixar)', 'dh’fhàg', '“dh’ ” + lenição (começa com vogal)'],
            ['dèan (fazer)', 'rinn', 'raiz irregular'],
            ['rach (ir)', 'chaidh', 'raiz irregular'],
            ['faic (ver)', 'chunnaic', 'raiz irregular'],
            ['cluinn (ouvir)', 'chuala', 'raiz irregular'],
            ['abair (dizer)', 'thuirt', 'raiz irregular'],
          ],
        },
        examples: [
          ['Dh’fhàg mi an taigh.', 'Eu saí de casa. (lit. “deixei a casa”)'],
          ['Dè rinn thu an-dè?', 'O que você fez ontem?'],
          ['An do chuidich thu mi?', 'Você me ajudou?'],
          ['Cha do phòg sinn.', 'Nós não nos beijamos.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar lenir “l”, “n” e “r” no passado: como na lenição comum da unidade 1, essas três letras não mudam na escrita.',
      'Usar “cha” ou “an” sozinhos antes de um verbo no passado: eles precisam da partícula “do” — “cha do”, “an do” — só nesse tempo.',
      'Esperar lenição nos verbos de raiz irregular: “rinn”, “chaidh”, “chunnaic”, “chuala” e “thuirt” não são o verbo comum mais um “h” — são formas próprias, decoradas à parte.',
    ],
    quiz: [
      { question: 'Qual é o passado de “dèan” (fazer)?', options: ['rinn', 'dhèan', 'dheanaich'], answer: 'rinn', explanation: '“Dèan” é irregular: o passado usa a raiz própria “rinn”, sem lenição.' },
      { question: 'Por que “fàg” (deixar) vira “dh’fhàg” no passado, e não “fhàg”?', options: ['porque começa com vogal (e também leva “dh’ ” quando começa com “f”)', 'porque é um verbo irregular', 'porque “fàg” nunca tem passado'], answer: 'porque começa com vogal (e também leva “dh’ ” quando começa com “f”)', explanation: 'Verbos que começam com vogal ou com “f” recebem o prefixo “dh’ ” no passado, em vez de uma lenição comum.' },
    ],
  },
  {
    id: 'gd-g7',
    level: 'A2.2',
    title: 'O futuro (e o hábito): bidh mi',
    emoji: '🔮',
    summary: 'O verbo “bi” tem uma única forma, “bidh” (ou “bithidh”), que serve tanto para o futuro (“vou fazer”) quanto para o que se faz com frequência (“costumo fazer”) — uma herança de uma fase antiga da língua, quando esse tempo era o presente comum.',
    sections: [
      {
        text: 'Depois de “cha” (negativa) e de “am” (pergunta), “bidh” muda para “bhi”/“bi”: “cha bhi”, “am bi…?”. Os verbos regulares, fora o “bi”, ganham a terminação “-idh” no futuro (coisichidh, cluinnidh).',
        table: {
          head: ['Forma', 'Uso', 'Exemplo'],
          rows: [
            ['bidh / bithidh', 'afirmativa', 'Bidh mi ag obair.'],
            ['cha bhi', 'negativa', 'Cha bhi mi trang.'],
            ['am bi…?', 'pergunta', 'Am bi thu trang?'],
          ],
        },
        examples: [
          ['Bidh sinn ag obair a-màireach.', 'Vamos trabalhar amanhã.'],
          ['Bidh mi ag èisteachd ris an rèidio.', 'Eu costumo escutar rádio.'],
          ['Cha bhi mi trang.', 'Eu não vou estar ocupado. / Eu não costumo estar ocupado.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que “bidh” é só futuro: a mesma forma também quer dizer “costumo…”, para hábitos.',
      'Usar “bidh” depois de “cha” ou “am”: nesses dois casos a forma muda para “bhi”/“bi” — “cha bhi”, “am bi”.',
    ],
    quiz: [
      { question: '“Bidh mi ag obair a-màireach” quer dizer…', options: ['Vou trabalhar amanhã.', 'Eu trabalhei ontem.', 'Eu trabalho agora.'], answer: 'Vou trabalhar amanhã.', explanation: '“Bidh” é o futuro (e também o hábito) do verbo “bi”.' },
      { question: 'Como se nega “bidh mi trang” (vou estar ocupado)?', options: ['Cha bhi mi trang.', 'Chan eil mi trang.', 'Cha do bhi mi trang.'], answer: 'Cha bhi mi trang.', explanation: 'Depois de “cha”, “bidh” vira “bhi”: “cha bhi”.' },
    ],
  },
  {
    id: 'gd-g8',
    level: 'A2.2',
    title: 'Sentimentos “sobre” você: tha… orm',
    emoji: '😨',
    summary: 'Fome, sede e medo não são coisas que a pessoa “tem” em gaélico: elas ficam “sobre” a pessoa, com a preposição “air” conjugada — a mesma lógica de “agam” (em mim) da unidade 2, só que com outra preposição.',
    sections: [
      {
        text: '“Air” (sobre) se junta a cada pronome numa forma só, como “aig” já fazia. O sentimento é o sujeito gramatical da frase, e a pessoa vem depois, com “air” conjugado.',
        table: {
          head: ['air + pronome', 'Tradução'],
          rows: [
            ['orm', 'sobre mim'],
            ['ort', 'sobre ti'],
            ['air', 'sobre ele'],
            ['oirre', 'sobre ela'],
            ['oirnn', 'sobre nós'],
            ['oirbh', 'sobre vós'],
            ['orra', 'sobre eles'],
          ],
        },
        examples: [
          ['Tha an t-acras orm.', 'Estou com fome. (lit. “a fome está sobre mim”)'],
          ['Tha pathadh ort?', 'Você está com sede?'],
          ['Tha an t-eagal oirre.', 'Ela está com medo.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir ao pé da letra, com a pessoa como sujeito: “tha an t-eagal orm” não é “eu tenho medo”, é “o medo está sobre mim” — quem manda na frase é o sentimento.',
      'Confundir com “agam” (em mim, visto na unidade 2, usado para posse e conhecimento): fome, sede e medo usam “air” (sobre), não “aig” (em).',
    ],
    quiz: [
      { question: 'Como se diz “estou com fome” em gaélico?', options: ['Tha an t-acras orm.', 'Tha acras agam.', 'Mi tha acras.'], answer: 'Tha an t-acras orm.', explanation: 'Fome usa “tha” + o sentimento + “orm” (sobre mim), não o verbo “ter”.' },
      { question: 'O que significa “oirre”?', options: ['sobre ela', 'sobre nós', 'sobre mim'], answer: 'sobre ela', explanation: '“Oirre” é a forma de “air” (sobre) para a terceira pessoa feminina.' },
    ],
  },
];
