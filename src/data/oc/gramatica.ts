import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do occitano — A1 completo, mais A2 (g5-g7). Fontes das formas verbais do A2:
 * Wikcionari em inglês (en.wiktionary.org), verbetes com tabela de conjugação lengadociana de
 * "parlar", "èsser", "aver", "viure", "partir" e "nevar" (o modelo de participi passat regular).
 */
export const GRAMMAR_OC: GrammarTopic[] = [
  {
    id: 'oc-g1',
    level: 'A1.1',
    title: 'Pronúncia: ò, lh, nh — e seis dialetos',
    emoji: '🔤',
    summary: 'O occitano usa o alfabeto latino quase como o português, com alguns sons e acentos próprios — e uma diversidade de dialetos que vale conhecer antes de começar.',
    sections: [
      {
        text: 'O occitano não é uma língua única e uniforme: tem seis grandes dialetos, falados numa área que vai do sul da França aos vales do Piemonte, na Itália, e ao Val d\'Aran, na Espanha — provençal, gascão, lengadocian, lemosin, auvernhat e vivaro-alpino. Este curso segue a norma clássica escrita, baseada no lengadocian (o dialeto central, tomado como referência por ficar no meio dos demais e ser o mais próximo do latim). Pronúncias — e, às vezes, até palavras inteiras — mudam de uma região occitana para outra.',
      },
      {
        heading: 'Letras e sons próprios',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ò', 'aberto, como o "ó" de "nó"', 'nòu [nɔw] (novo/nove)'],
            ['lh', 'como o lh do português', 'filha [ˈfiʎo] (filha)'],
            ['nh', 'como o nh do português', 'montanha [munˈtaɲo] (montanha)'],
            ['ch', 'como o "tch" de "tchau"', 'nuèch [ˈnɥɛtʃ] (noite)'],
          ],
        },
        examples: [
          ['Parlas occitan?', 'Você fala occitano?'],
          ['Bona nuèch a totes.', 'Boa noite a todos.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma pronúncia única para o occitano: os seis dialetos soam — e às vezes se escrevem — de forma bem diferente entre si; as formas deste curso seguem a norma clássica do lengadocian.',
      'Ler "lh" como um l duplo comum: em occitano soa exatamente como o lh do português.',
    ],
    quiz: [
      { question: 'Como soa "lh" em "filha"?', options: ['como o lh do português', 'como um l duplo', 'como j'], answer: 'como o lh do português', explanation: 'O lh occitano soa exatamente como o lh do português.' },
      { question: 'Quantos grandes dialetos tem o occitano?', options: ['seis', 'dois', 'doze'], answer: 'seis', explanation: 'Provençal, gascão, lengadocian, lemosin, auvernhat e vivaro-alpino — este curso usa a norma clássica baseada no lengadocian.' },
    ],
  },
  {
    id: 'oc-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo èsser',
    emoji: '🙋',
    summary: 'Sete pronomes de sujeito, quase sempre dispensáveis porque o verbo já diz quem fala; o verbo “èsser” (ser) conjugado no presente.',
    sections: [
      {
        text: 'Como no português, o pronome de sujeito costuma sumir: “soi de Brasil” já é “(eu) sou do Brasil”. Usa-se o pronome sobretudo para dar ênfase ou evitar ambiguidade.',
        table: {
          head: ['Pronome', 'Tradução', 'èsser (presente)'],
          rows: [
            ['ieu', 'eu', 'soi'],
            ['tu', 'você', 'ès'],
            ['el / ela', 'ele / ela', 'es'],
            ['nosautres', 'nós', 'sèm'],
            ['vosautres', 'vocês', 'sètz'],
            ['eles / elas', 'eles / elas', 'son'],
          ],
        },
        examples: [
          ['Soi de Brasil.', 'Sou do Brasil.'],
          ['Vosautres sètz plan amables.', 'Vocês são muito amáveis.'],
        ],
      },
    ],
    pitfalls: ['Traduzir "vosautres" por "vós" arcaico do português: em occitano é o "vocês" comum do dia a dia, sem tom antigo ou cerimonioso.'],
    quiz: [{ question: 'Como se diz "vocês são" em occitano?', options: ['vosautres sètz', 'vosautres ès', 'nosautres sètz'], answer: 'vosautres sètz', explanation: '"Vosautres" é a segunda pessoa do plural, com a forma "sètz" do verbo èsser.' }],
  },
  {
    id: 'oc-g3',
    level: 'A1.2',
    title: 'O artigo, o gênero e os possessivos',
    emoji: '📘',
    summary: 'O occitano tem artigo definido (lo/la/los/las) e indefinido (un/una), além de possessivos que concordam com o substantivo possuído, não com quem possui.',
    sections: [
      {
        table: {
          head: ['', 'Masculino', 'Feminino'],
          rows: [
            ['Definido singular', 'lo filh', 'la filha'],
            ['Definido plural', 'los filhs', 'las filhas'],
            ['Indefinido singular', 'un fraire', 'una sòrre'],
          ],
        },
        text: 'A maioria dos substantivos terminados em consoante ou vogal átona é masculina, e os terminados em -a costumam ser femininos — parecido com o português. O l\' substitui "lo"/"la" antes de palavra começada por vogal, como em francês.',
        examples: [
          ['Ma familha es granda.', 'Minha família é grande.'],
          ['L\'ostal es pichon.', 'A casa é pequena.'],
        ],
      },
      {
        heading: 'Os possessivos',
        text: 'O possessivo concorda com o substantivo que vem depois, não com o gênero de quem fala: “mon paire” (meu pai) mas “ma maire” (minha mãe) — o "meu"/"minha" muda com "pai"/"mãe", não com quem é o dono.',
        table: {
          head: ['Possuidor', 'Masculino', 'Feminino'],
          rows: [
            ['eu', 'mon', 'ma'],
            ['você', 'ton', 'ta'],
            ['ele/ela', 'son', 'sa'],
            ['nós', 'nòstre', 'nòstra'],
            ['vocês', 'vòstre', 'vòstra'],
          ],
        },
        examples: [
          ['Mon paire e ma maire.', 'Meu pai e minha mãe.'],
          ['Ton nom es plan bèl.', 'Seu nome é muito bonito.'],
        ],
      },
    ],
    pitfalls: ['Usar "ma" achando que é sempre "minha" no sentido de "eu sou mulher": o possessivo concorda com a palavra seguinte — "mon paire" é "meu pai", mesmo dito por uma mulher.'],
    quiz: [{ question: 'Como se diz "meu pai" em occitano?', options: ['mon paire', 'ma paire', 'ton paire'], answer: 'mon paire', explanation: '"Paire" é masculino, então o possessivo é "mon", mesmo quando quem fala é mulher.' }],
  },
  {
    id: 'oc-g4',
    level: 'A1.2',
    title: 'Aver e os verbos regulares em -ar',
    emoji: '🧭',
    summary: 'O verbo “aver” (ter) no presente, e o padrão dos verbos regulares em -ar, como “parlar” (falar) e “aimar” (gostar).',
    sections: [
      {
        text: 'Os verbos terminados em -ar seguem, no presente, o padrão -i, -as, -a, -am, -atz, -an.',
        table: {
          head: ['Pronome', 'parlar', 'aimar'],
          rows: [
            ['ieu', 'parli', 'aimi'],
            ['tu', 'parlas', 'aimas'],
            ['el/ela', 'parla', 'aima'],
            ['nosautres', 'parlam', 'aimam'],
            ['vosautres', 'parlatz', 'aimatz'],
            ['eles/elas', 'parlan', 'aiman'],
          ],
        },
        examples: [
          ['Parli occitan.', 'Eu falo occitano.'],
          ['Aimi fòrça lo cafè.', 'Eu gosto muito do café.'],
        ],
      },
      {
        heading: 'O verbo aver',
        text: '“Aver” (ter) é irregular, mas muito usado — funciona como o português "ter", direto, sem a construção invertida de outras línguas vizinhas.',
        table: {
          head: ['Pronome', 'aver (presente)'],
          rows: [
            ['ieu', 'ai'],
            ['tu', 'as'],
            ['el/ela', 'a'],
            ['nosautres', 'avèm'],
            ['vosautres', 'avètz'],
            ['eles/elas', 'an'],
          ],
        },
        examples: [
          ['Ai un fraire e una sòrre.', 'Tenho um irmão e uma irmã.'],
          ['As de fraires?', 'Você tem irmãos?'],
        ],
      },
    ],
    pitfalls: ['Conjugar "aimar" achando que precisa de preposição como no português "gostar DE": em occitano "aimar" é direto — "aimi lo cafè", nunca "aimi de cafè".'],
    quiz: [{ question: 'Como se diz "eu gosto do café" em occitano?', options: ['aimi lo cafè', 'aimi de cafè', 'ai lo cafè'], answer: 'aimi lo cafè', explanation: '"Aimar" é um verbo direto: o que se gosta é objeto direto, sem preposição.' }],
  },
  {
    id: 'oc-g5',
    level: 'A2.1',
    title: 'O futur: parlarai, seràs, serà…',
    emoji: '🔮',
    summary: 'O futur dos verbos regulares em -ar se forma com a terminação -ai, -às, -à, -em, -etz, -an sobre o infinitivo; o verbo èsser tem um futur irregular, mas muito usado.',
    sections: [
      {
        text: 'Os verbos regulares em -ar formam o futur acrescentando -ai, -às, -à, -em, -etz, -an direto sobre o infinitivo (sem tirar o -ar).',
        table: {
          head: ['Pronome', 'parlar (futur)', 'crompar (futur)'],
          rows: [
            ['ieu', 'parlarai', 'cromparai'],
            ['tu', 'parlaràs', 'cromparàs'],
            ['el/ela', 'parlarà', 'cromparà'],
            ['nosautres', 'parlarem', 'cromparem'],
            ['vosautres', 'parlaretz', 'cromparetz'],
            ['eles/elas', 'parlaràn', 'cromparàn'],
          ],
        },
        examples: [
          ['Deman parlarai amb lo professor.', 'Amanhã falarei com o professor.'],
          ['Cromparem un vestit novèl.', 'Compraremos uma roupa nova.'],
        ],
      },
      {
        heading: 'O futur irregular de èsser',
        text: '"Èsser" (ser/estar) tem um futur irregular, construído sobre a raiz "ser-" em vez do infinitivo inteiro — mas as terminações finais (-ai, -às, -à, -em, -etz, -an) são as mesmas dos verbos regulares.',
        table: {
          head: ['Pronome', 'èsser (futur)'],
          rows: [
            ['ieu', 'serai'],
            ['tu', 'seràs'],
            ['el/ela', 'serà'],
            ['nosautres', 'serem'],
            ['vosautres', 'seretz'],
            ['eles/elas', 'seràn'],
          ],
        },
        examples: [
          ['Deman serai a l\'escòla.', 'Amanhã estarei na escola.'],
          ['Seràs content de la vila.', 'Você vai ficar feliz com a cidade.'],
        ],
      },
    ],
    pitfalls: ['Tentar formar o futur de "èsser" sobre o infinitivo inteiro ("èsserai"): a raiz do futur é irregular, "ser-", não o infinitivo "èsser".'],
    quiz: [{ question: 'Como se diz "amanhã estarei na escola" em occitano?', options: ['Deman serai a l\'escòla.', 'Deman èsserai a l\'escòla.', 'Deman soi a l\'escòla.'], answer: 'Deman serai a l\'escòla.', explanation: 'O futur de "èsser" usa a raiz irregular "ser-" + as terminações regulares do futur.' }],
  },
  {
    id: 'oc-g6',
    level: 'A2.1',
    title: 'O passat compausat: ai parlat, as crompat…',
    emoji: '📜',
    summary: 'Para contar algo que já aconteceu, o occitano usa o verbo "aver" no presente mais o participi passat do verbo principal — parecido com o "tenho falado" do português, mas valendo também para o "falei" simples.',
    sections: [
      {
        text: 'O participi passat regular dos verbos em -ar termina em -at (parlar → parlat, crompar → crompat); o dos verbos em -ir termina em -it (partir → partit). Os verbos em -re costumam ser irregulares: "viure" (morar/viver) vira "viscut", e os próprios auxiliares "aver" e "èsser" têm participis irregulares, "agut" e "estat".',
        table: {
          head: ['Pronome', 'aver (presente)', 'ai + participi'],
          rows: [
            ['ieu', 'ai', 'ai parlat'],
            ['tu', 'as', 'as crompat'],
            ['el/ela', 'a', 'a dobrit'],
            ['nosautres', 'avèm', 'avèm trabalhat'],
            ['vosautres', 'avètz', 'avètz esperat'],
            ['eles/elas', 'an', 'an sarrat'],
          ],
        },
        examples: [
          ['Ai parlat amb lo mètge.', 'Falei com o médico.'],
          ['As crompat un capèl novèl?', 'Você comprou um chapéu novo?'],
          ['Avèm trabalhat tota la jornada.', 'Trabalhamos o dia inteiro.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer que o auxiliar é sempre "aver" (ter) nesses verbos, mesmo quando o português usaria "ser/estar" com alguns verbos de movimento: "ai anat" (fui/tenho ido), não um verbo com "èsser".',
      'Inventar o participi passat trocando só o -ar por -at em TODO verbo: os verbos em -re, como "viure" (→ viscut) e os próprios "aver" (→ agut) e "èsser" (→ estat), são irregulares.',
    ],
    quiz: [{ question: 'Como se diz "eu comprei um chapéu" em occitano?', options: ['Ai crompat un capèl.', 'Soi crompat un capèl.', 'Crompi agut un capèl.'], answer: 'Ai crompat un capèl.', explanation: 'O passat compausat usa "aver" no presente (ai) + o participi passat regular de -ar (crompat).' }],
  },
  {
    id: 'oc-g7',
    level: 'A2.2',
    title: 'L\'imperfach: parlavi, èri… o passat que se repetia',
    emoji: '🕰️',
    summary: 'O imperfach (èri, parlavi) descreve como as coisas ERAM ou costumavam acontecer no passado, em vez de um fato pontual já concluído (esse é o papel do passat compausat, visto na unidade anterior).',
    sections: [
      {
        text: 'Os verbos em -ar formam o imperfach com -avi, -avas, -ava, -àvem, -àvetz, -avan sobre a raiz do infinitivo. O verbo "èsser" tem uma forma irregular própria, muito usada para descrever um estado no passado.',
        table: {
          head: ['Pronome', 'parlar (imperfach)', 'èsser (imperfach)'],
          rows: [
            ['ieu', 'parlavi', 'èri'],
            ['tu', 'parlavas', 'èras'],
            ['el/ela', 'parlava', 'èra'],
            ['nosautres', 'parlàvem', 'èrem'],
            ['vosautres', 'parlàvetz', 'èretz'],
            ['eles/elas', 'parlavan', 'èran'],
          ],
        },
        examples: [
          ['Quand ieu èri enfant, parlavi pas occitan.', 'Quando eu era criança, eu não falava occitano.'],
          ['Cada estiu, fasiá fòrça calor.', 'Todo verão, fazia muito calor.'],
        ],
      },
      {
        heading: 'Imperfach contra passat compausat',
        text: 'O imperfach descreve um cenário, um hábito ou algo que durava no passado ("parlavi occitan cada jorn", eu falava occitano todo dia); o passat compausat (unidade anterior) conta um fato pontual, já concluído ("ai parlat amb el ièr", falei com ele ontem). É a mesma distinção que o português faz entre "eu falava" e "eu falei".',
        examples: [['Quand plasiá fòrça calor, bevián fòrça aiga.', 'Quando fazia muito calor, eles bebiam muita água.']],
      },
    ],
    pitfalls: ['Usar o imperfach pra um fato pontual já terminado: "ièr parlavi amb el" soa estranho — pra um fato pontual de ontem, o certo é o passat compausat, "ièr ai parlat amb el".'],
    quiz: [{ question: 'Como se diz "quando eu era criança" em occitano?', options: ['Quand ieu èri enfant', 'Quand ieu soi enfant', 'Quand ieu serai enfant'], answer: 'Quand ieu èri enfant', explanation: '"Èri" é o imperfach de "èsser", usado pra descrever um estado no passado.' }],
  },
];
