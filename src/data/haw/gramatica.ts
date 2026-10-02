import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do havaiano (ʻŌlelo Hawaiʻi) — só A1.1 e A1.2 (pacote incompleto, ver
 * `incomplete` em index.ts). Fontes conferidas palavra a palavra e fato a fato nesta entrega:
 *
 * - en.wikipedia.org/wiki/Hawaiian_language — classificação genealógica, inventário de consoantes e
 *   vogais, macron (kahakō), ordem VSO, história da língua (proibição de 1896, status oficial de 1978,
 *   ʻAha Pūnana Leo).
 * - en.wikipedia.org/wiki/Hawaiian_phonology — estrutura silábica (C)V(V) só aberta, regra de acento
 *   (penúltima mora), a variação livre entre [t] e [k] (mais [k] em Oʻahu desde a década de 1820, mais
 *   [t] no dialeto de Niʻihau), contraste fonêmico de duração vocálica (ex.: /kane/ × /kaːne/).
 * - en.wikipedia.org/wiki/Hawaiian_grammar — ordem VSO, partículas de tempo/aspecto (ke…nei presente,
 *   ua perfeito, e futuro/infinitivo), pronomes (singular/plural, inclusivo/exclusivo), as duas classes
 *   possessivas "a" e "o" (kino ʻā / kino ʻō), artigos (ka/ke/nā/he) e a regra de "ke" antes de certos
 *   sons.
 * - en.wiktionary.org — confirmação palavra a palavra de "kou" (teu, classe-o) e "koʻu" (meu, classe-o),
 *   usados como par mínimo do ʻokina nesta gramática.
 *
 * O havaiano é uma língua bem documentada (ao contrário de outros pacotes indígenas pequenos deste
 * app, como tpj): por isso os tópicos aqui cobrem mais terreno, mas continuam restritos ao que as
 * fontes acima afirmam — nada de regra "inventada" para preencher lacuna.
 */
export const GRAMMAR_HAW: GrammarTopic[] = [
  {
    id: 'haw-g1',
    level: 'A1.1',
    title: 'Só 8 consoantes e o ʻokina',
    emoji: '🔤',
    summary: 'O havaiano tem só 8 fonemas consonantais — incluindo o ʻokina, uma oclusiva glotal que é uma letra própria, não um apóstrofo decorativo.',
    sections: [
      {
        text: 'Segundo a Wikipédia (Hawaiian_language e Hawaiian_phonology), o havaiano tem apenas oito consoantes: /m, n, p, t, ʔ (o ʻokina), w, l, h/ — um dos menores inventários consonantais do mundo. Duas dessas consoantes têm uma variação chamativa: [t] e [k] alternam livremente na fala de muitos falantes (“quase único entre as línguas do mundo”, diz a Wikipédia), com [k] tendo se tornado dominante em Oʻahu desde a década de 1820, enquanto o dialeto da ilha de Niʻihau mantém mais o [t]. Da mesma forma, /w/ pode soar como [w] ou [v], e /l/ varia entre [l], [ɾ] e [ɹ]. O ʻokina (ʻ) é tratado como uma consoante própria do alfabeto havaiano: ele distingue palavras, como em “aʻo” (ensinar/aprender) versus uma sequência sem a pausa glotal.',
        table: {
          head: ['Consoante', 'Variações possíveis', 'Observação'],
          rows: [
            ['/t/ ~ /k/', '[t] ou [k]', '[k] predomina em Oʻahu; [t] é mais comum no dialeto de Niʻihau'],
            ['/w/', '[w] ou [v]', 'varia conforme o falante e a palavra'],
            ['/l/', '[l], [ɾ] ou [ɹ]', 'variação livre, sem mudar o sentido'],
            ['ʻokina (/ʔ/)', 'sempre uma parada glotal', 'é uma consoante plena, nunca “muda”'],
          ],
        },
        examples: [
          ['Aloha!', 'Olá! / Amor! / Adeus!'],
          ["Mahalo nui loa!", 'Muito obrigado!'],
        ],
      },
    ],
    pitfalls: [
      'Tratar o ʻokina como um apóstrofo decorativo ou ignorá-lo ao digitar: ele é uma consoante própria do havaiano, e tirá-lo pode trocar uma palavra por outra (é por isso que o teclado deste curso tem a letra “ʻ” à parte).',
      'Estranhar quando a mesma palavra aparece grafada ora com “t” ora com “k” em fontes diferentes: as duas são a mesma consoante havaiana, variando livremente — não é erro de ortografia.',
    ],
    quiz: [
      { question: 'Quantas consoantes tem o havaiano?', options: ['Só 8, incluindo o ʻokina', '21, como no alfabeto latino inteiro', '15, sem contar o ʻokina'], answer: 'Só 8, incluindo o ʻokina', explanation: 'A Wikipédia (Hawaiian_language) lista exatamente 8 fonemas consonantais: m, n, p, t/k, ʻokina, w, l, h.' },
      { question: 'O que é o ʻokina?', options: ['Uma consoante havaiana própria (oclusiva glotal), não um apóstrofo decorativo', 'Um acento que marca a sílaba tônica', 'Um sinal só usado em nomes próprios'], answer: 'Uma consoante havaiana própria (oclusiva glotal), não um apóstrofo decorativo', explanation: 'O ʻokina representa o fonema /ʔ/ e é tratado como letra própria do alfabeto havaiano, podendo distinguir palavras.' },
    ],
  },
  {
    id: 'haw-g2',
    level: 'A1.1',
    title: 'Vogais longas e o kahakō',
    emoji: '🔊',
    summary: 'O havaiano tem 5 vogais curtas e as mesmas 5 vogais longas (marcadas pelo kahakō, o traço sobre a letra): a duração muda o sentido da palavra.',
    sections: [
      {
        text: 'As cinco vogais do havaiano são /a, e, i, o, u/, cada uma podendo ser curta ou longa — a versão longa dura o dobro e é escrita com um traço (kahakō, o macron): ā, ē, ī, ō, ū. A Wikipédia dá como exemplo o contraste fonêmico entre a vogal curta e a longa (/kane/ × /kaːne/, a diferença de duração de “kāne”, homem/marido): só a duração já muda — ou pode mudar — o sentido. A sílaba do havaiano é sempre aberta: (C)V(V), ou seja, um ataque consonantal opcional seguido de uma ou duas vogais, nunca fechada por consoante (Hawaiian_phonology). Quanto ao acento, ele recai, de forma previsível, na penúltima mora da palavra (cada vogal curta vale uma mora; uma vogal longa vale duas).',
        table: {
          head: ['Vogal curta', 'Vogal longa (kahakō)', 'Exemplo com a vogal longa'],
          rows: [
            ['a', 'ā', 'ʻāina (terra)'],
            ['e', 'ē', 'kēia (este, esta)'],
            ['i', 'ī', 'ʻīlio (cachorro)'],
            ['o', 'ō', 'kākou (nós, com quem ouve)'],
            ['u', 'ū', 'hōkū (estrela)'],
          ],
        },
        examples: [
          ['Nani ka lā.', 'O sol/dia é bonito.'],
          ['Nani ka mahina.', 'A lua é bonita.'],
        ],
      },
    ],
    pitfalls: [
      'Ignorar o kahakō ao escrever, achando que é só um detalhe estético: ele marca uma vogal longa que pode distinguir palavras, do mesmo jeito que o ʻokina distingue consoantes.',
      'Esperar sílabas fechadas por consoante, como em português (“mar”, “sol”): no havaiano, toda sílaba termina em vogal — não existe, por exemplo, uma palavra terminada em consoante.',
    ],
    quiz: [
      { question: 'O que o kahakō (traço sobre a vogal) indica?', options: ['Que a vogal é longa (dura o dobro)', 'Que a sílaba é tônica', 'Que a palavra é um verbo'], answer: 'Que a vogal é longa (dura o dobro)', explanation: 'O kahakō marca a vogal longa (ā, ē, ī, ō, ū), que contrasta com a vogal curta correspondente.' },
      { question: 'Como é a estrutura de sílaba do havaiano?', options: ['Sempre aberta: (C)V(V), terminada em vogal', 'Pode terminar em qualquer consoante, como em português', 'Sempre uma só vogal, nunca duas seguidas'], answer: 'Sempre aberta: (C)V(V), terminada em vogal', explanation: 'A fonologia havaiana só permite sílabas abertas: um ataque consonantal opcional e um núcleo de uma ou duas vogais.' },
    ],
  },
  {
    id: 'haw-g3',
    level: 'A1.2',
    title: 'Verbo primeiro: a ordem VSO',
    emoji: '🔁',
    summary: 'O havaiano é uma língua VSO (verbo–sujeito–objeto): o verbo (ou o predicado) vem antes do sujeito, ao contrário do português.',
    sections: [
      {
        text: 'A Wikipédia descreve o havaiano como “uma língua analítica com ordem verbo–sujeito–objeto” (Hawaiian_language) — e o artigo Hawaiian_grammar detalha que a ordem é “predominantemente VSO”, embora flexível (a palavra em foco pode vir primeiro na frase). Isso aparece o tempo todo no vocabulário deste curso: frases com adjetivo também colocam o predicado primeiro, sem precisar de um verbo “ser/estar” — “Maikaʻi au.” (lit. “bem eu”) já significa “eu estou bem”, sem nenhuma palavra para “estar”. Com verbos de ação, partículas de tempo/aspecto vêm coladas ANTES do verbo, formando um bloco verbal que soma tudo isso antes do sujeito: “ke…nei” marca o presente contínuo (“ke hele nei au”, estou indo), “ua” marca o perfeito/passado (“ua ʻai”, comeu/já comeu), e “e” sozinho marca o futuro ou o infinitivo (“e hoʻomaka”, vamos começar/começar).',
        table: {
          head: ['Partícula', 'Sentido', 'Exemplo'],
          rows: [
            ['ke … nei', 'presente contínuo', 'Ke hele nei au i ke kula. (Estou indo para a escola.)'],
            ['ua', 'perfeito/passado', 'Ua ʻai ka pōpoki i ka iʻa. (O gato comeu o peixe.)'],
            ['e …', 'futuro, convite, infinitivo', 'E hoʻomaka kākou! (Vamos começar!)'],
          ],
        },
        examples: [
          ['Maikaʻi au.', 'Eu estou bem. (lit. “bem eu” — sem verbo “ser/estar”)'],
          ['Nani ke kai.', 'O mar é bonito. (lit. “bonito o mar”)'],
          ['Ke inu nei au i ka wai.', 'Eu estou bebendo água.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser/estar” separado antes do adjetivo, como em português: no havaiano, o próprio adjetivo (ou substantivo) no início da frase já funciona como predicado — “Nani ke kai.” não tem (nem precisa de) um “é”.',
      'Colocar o sujeito antes do verbo por hábito do português: no havaiano, o bloco verbal (partícula + verbo) normalmente vem primeiro, e só depois o sujeito.',
    ],
    quiz: [
      { question: 'Qual é a ordem básica de palavras do havaiano?', options: ['Verbo–sujeito–objeto (VSO)', 'Sujeito–verbo–objeto (SVO), como o português', 'Objeto–verbo–sujeito (OVS)'], answer: 'Verbo–sujeito–objeto (VSO)', explanation: 'A Wikipédia classifica o havaiano como uma língua analítica de ordem VSO, embora com alguma flexibilidade para dar ênfase.' },
      { question: 'O que “Maikaʻi au.” significa, literalmente?', options: ['“Bem eu” — e já quer dizer “eu estou bem”, sem verbo separado', '“Eu sou bem”, com um verbo “ser” implícito em “au”', 'É agramatical; faltaria um verbo'], answer: '“Bem eu” — e já quer dizer “eu estou bem”, sem verbo separado', explanation: 'O havaiano não precisa de um verbo “ser/estar” para predicados de qualidade: o adjetivo no início da frase já é o predicado.' },
    ],
  },
  {
    id: 'haw-g4',
    level: 'A1.2',
    title: 'Kākou ou mākou? Nós com ou sem quem ouve',
    emoji: '🙌',
    summary: 'O havaiano distingue um “nós” que inclui a pessoa com quem se fala (kākou) de um “nós” que a exclui (mākou) — uma diferença que o português não marca.',
    sections: [
      {
        text: 'Segundo o artigo Hawaiian_grammar da Wikipédia, os pronomes havaianos marcam não só número (singular e plural — a língua também tem uma forma dual, para “nós dois”, mas este curso ainda não cobre esse nível), como também, na 1ª pessoa, se quem ouve está incluído ou não: “kākou” é “nós” incluindo a pessoa com quem se fala (“vamos todos”, por exemplo, numa saudação de grupo), enquanto “mākou” é “nós” excluindo quem ouve (por exemplo, para falar da própria família a um visitante de fora). Essa distinção inclusivo/exclusivo não existe no português, que usa “nós” para os dois casos.',
        table: {
          head: ['Pessoa', 'Pronome', 'Sentido'],
          rows: [
            ['1ª singular', 'au', 'eu'],
            ['2ª singular', 'ʻoe', 'você, tu'],
            ['3ª singular', 'ia', 'ele, ela'],
            ['1ª plural, inclusivo', 'kākou', 'nós (com quem ouve)'],
            ['1ª plural, exclusivo', 'mākou', 'nós (sem quem ouve)'],
            ['2ª plural', 'ʻoukou', 'vocês'],
            ['3ª plural', 'lākou', 'eles, elas'],
          ],
        },
        examples: [
          ['E hoʻomaka kākou!', 'Vamos começar! (todo mundo aqui, inclusive você)'],
          ['Mākou mai Hawaiʻi.', 'Nós somos do Havaí. (eu e os meus, sem incluir quem ouve)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “kākou” e “mākou” como se fossem apenas variantes livres: a escolha entre os dois muda o sentido da frase — inclui ou não a pessoa com quem você está falando.',
      'Esquecer que existe também uma forma DUAL (para “nós dois”), além do singular e do plural: este curso, por enquanto, só cobre singular e plural.',
    ],
    quiz: [
      { question: 'Qual é a diferença entre “kākou” e “mākou”?', options: ['“Kākou” inclui quem ouve; “mākou” exclui quem ouve', 'São sinônimos perfeitos, sem diferença de sentido', '“Kākou” é formal e “mākou” é informal'], answer: '“Kākou” inclui quem ouve; “mākou” exclui quem ouve', explanation: 'É a distinção inclusivo/exclusivo da 1ª pessoa do plural, documentada no artigo Hawaiian_grammar da Wikipédia.' },
      { question: 'O português marca essa mesma distinção inclusivo/exclusivo no “nós”?', options: ['Não — o português usa “nós” para os dois casos', 'Sim, com “nós” e “a gente”', 'Sim, com “nós” e “vós”'], answer: 'Não — o português usa “nós” para os dois casos', explanation: 'É uma distinção que o português simplesmente não tem: por isso ela chama atenção de quem aprende havaiano.' },
    ],
  },
  {
    id: 'haw-g5',
    level: 'A1.2',
    title: 'Ka, ke, nā, he: os artigos',
    emoji: '📝',
    summary: 'O havaiano tem um artigo definido singular que muda de forma (ka/ke) conforme o som seguinte, um plural (nā) e um indefinido (he).',
    sections: [
      {
        text: 'Segundo Hawaiian_grammar (Wikipédia), o artigo definido singular do havaiano tem duas formas: “ke” antes de palavras que começam com k, e, a ou o (entre outros casos específicos memorizados), e “ka” nos demais casos. “Nā” é o artigo plural, usado tanto em contexto definido quanto indefinido. “He” é o artigo indefinido singular, usado por exemplo na pergunta “He aha kēia?” (O que é isto?, lit. “um-quê isto”). Esses artigos já aparecem espalhados nas frases de exemplo do vocabulário deste curso: “ka hale” (a casa), “ke kula” (a escola), “nā manu” (os pássaros).',
        table: {
          head: ['Artigo', 'Uso', 'Exemplo'],
          rows: [
            ['ke', 'definido singular, antes de k/e/a/o e alguns outros casos', 'ke kula (a escola)'],
            ['ka', 'definido singular, nos demais casos', 'ka hale (a casa)'],
            ['nā', 'plural (definido ou indefinido)', 'nā manu (os pássaros, pássaros)'],
            ['he', 'indefinido singular', 'He hale kēia. (Isto é uma casa.)'],
          ],
        },
        examples: [
          ['Nani ka hale.', 'A casa é bonita.'],
          ['Nui ke kula.', 'A escola é grande.'],
          ['He aha kēia?', 'O que é isto?'],
        ],
      },
    ],
    pitfalls: [
      'Tentar prever “ka” ou “ke” só pela lógica do português: a escolha depende do SOM da palavra seguinte em havaiano (k, e, a, o e alguns casos específicos pedem “ke”), sem relação com gênero gramatical (que o havaiano nem tem).',
      'Confundir “nā” (plural) com “nā” de outras línguas polinésias parecidas: aqui ele é só o artigo plural, antes de um substantivo.',
    ],
    quiz: [
      { question: 'Quando se usa “ke” em vez de “ka”?', options: ['Antes de palavras que começam com certos sons, como k, e, a, o', 'Só antes de nomes próprios', 'Nunca — “ke” é uma variante antiga em desuso'], answer: 'Antes de palavras que começam com certos sons, como k, e, a, o', explanation: 'É uma regra fonológica de escolha do artigo definido singular, não uma questão de gênero (que o havaiano não tem).' },
      { question: 'O que “he” marca?', options: ['O artigo indefinido singular (“um”, “uma”)', 'O artigo definido plural', 'Uma pergunta, sempre'], answer: 'O artigo indefinido singular (“um”, “uma”)', explanation: '“He hale kēia.” = “Isto é uma casa.” — “he” é o indefinido, diferente do definido “ka”/“ke”.' },
    ],
  },
];
