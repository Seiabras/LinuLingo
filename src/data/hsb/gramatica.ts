import type { GrammarTopic } from '../types';

/** Tópicos de gramática do alto-sorábio — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_HSB: GrammarTopic[] = [
  {
    id: 'hsb-g1',
    level: 'A1.1',
    title: 'Pronúncia: ć, dź, ě, ř, š, ž',
    emoji: '🔤',
    summary: 'O alto-sorábio usa o alfabeto latino com sinais diacríticos para sons próprios, parecidos com os do polonês e do tcheco.',
    sections: [
      {
        text: 'Boa parte das letras se lê como em português. As que mais chamam atenção são as com acento, feitas com a língua no céu da boca.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ć', 'um “tch” suave', 'dźěćo (criança)'],
            ['dź', 'como o “dj” de “adjetivo”', 'dźeń (dia)'],
            ['ě', 'um “ie” rápido depois de certas consoantes', 'lěto (ano)'],
            ['š', 'o nosso “x” de “xícara”', 'wšo (tudo)'],
            ['ž', 'o nosso “j” de “já”', 'žona (mulher)'],
          ],
        },
        examples: [
          ['Dobry dźeń!', 'Bom dia!'],
          ['Dźěćo hraje.', 'A criança brinca.'],
        ],
      },
    ],
    pitfalls: ['Ler “ć” como “c” + “h” separados: é um som só, suave.', 'Ler “š” como “s”: soa como o nosso “x”.'],
    quiz: [
      { question: 'Como soa o “š” de “wšo”?', options: ['Como “x” de “xícara”', 'Como “s” de “sapo”', 'Como “sh” do inglês “she”, igual'], answer: 'Como “x” de “xícara”', explanation: 'O “š” sorábio soa igual ao nosso “x”.' },
      { question: 'O que quer dizer “dźěćo”?', options: ['criança', 'dia', 'casa'], answer: 'criança', explanation: 'Palavra básica do vocabulário de família.' },
    ],
  },
  {
    id: 'hsb-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo być (ser/estar)',
    emoji: '🙋',
    summary: 'Sete pronomes e um só verbo, “być”, para o nosso ser e estar.',
    sections: [
      {
        text: 'Como o português, o alto-sorábio costuma usar o pronome, mas pode omitir quando o verbo já deixa claro quem fala. “Być” serve tanto para o que a pessoa é quanto para como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'być'],
          rows: [
            ['ja', 'eu', 'sym'],
            ['ty', 'tu, você', 'sy'],
            ['wón / wona', 'ele / ela', 'je'],
            ['my', 'nós', 'smy'],
            ['wy', 'vocês; o senhor (formal)', 'sće'],
            ['woni', 'eles, elas', 'su'],
          ],
        },
        examples: [
          ['Ja sym z Brazilskeje.', 'Eu sou do Brasil.'],
          ['Wy sće jara lubi.', 'Vocês são muito gentis.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” separado: “ja sym dobre” (estou bem) usa o mesmo “być”.'],
    quiz: [
      { question: 'Complete: “Ja ___ z Brazilskeje.”', options: ['sym', 'je', 'sće'], answer: 'sym', explanation: '“Sym” é a forma de “być” para “ja”.' },
      { question: '“Wy sće” serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: 'Como muitas línguas europeias, “wy” é o plural e também a forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'hsb-g3',
    level: 'A1.2',
    title: 'O dual: um número só para dois',
    emoji: '✌️',
    summary: 'Além de singular e plural, o alto-sorábio tem uma terceira forma gramatical usada só quando são exatamente duas coisas ou pessoas.',
    sections: [
      {
        text: 'O protoeslavo tinha três números — singular, dual e plural —, mas quase todas as línguas eslavas modernas perderam o dual. O alto-sorábio (como o esloveno) guardou: para duas coisas, o substantivo muda de forma, diferente de como mudaria para três ou mais.',
        table: {
          head: ['Quantidade', 'Forma', 'Exemplo'],
          rows: [
            ['1', 'singular', 'jedyn bratr (um irmão)'],
            ['2 (exatamente)', 'dual', 'dwaj bratraj (dois irmãos)'],
            ['3 ou mais', 'plural', 'tři bratřa (três irmãos)'],
          ],
        },
        examples: [
          ['Mam dwaj bratraj.', 'Tenho dois irmãos (os dois).'],
          ['Mam dwě sotřě.', 'Tenho duas irmãs (as duas).'],
        ],
      },
      {
        heading: 'O numeral “dois” também muda de gênero',
        text: '“Dwaj” é a forma masculina de “dois”; “dwě” serve para feminino e neutro — diferente do português, que só tem “dois/duas”.',
        examples: [['Dwaj bratraj a dwě sotřě.', 'Dois irmãos e duas irmãs.']],
      },
    ],
    pitfalls: ['Usar a forma de plural para exatamente duas coisas: o certo, com “dwaj/dwě”, é a forma dual.', 'Usar “dwaj” para substantivo feminino ou neutro: o certo ali é “dwě”.'],
    quiz: [
      { question: 'Como se diz “dois irmãos” (os dois)?', options: ['dwaj bratraj', 'dwě bratraj', 'tři bratraj'], answer: 'dwaj bratraj', explanation: '“Bratr” é masculino, então o numeral é “dwaj”, e o substantivo vai para a forma dual.' },
      { question: 'O dual do alto-sorábio é um resto de quê?', options: ['Um terceiro número do protoeslavo, perdido na maioria das línguas eslavas', 'Uma invenção recente da escola', 'Um empréstimo do alemão'], answer: 'Um terceiro número do protoeslavo, perdido na maioria das línguas eslavas', explanation: 'Só o alto-sorábio e o esloveno guardaram esse traço entre as línguas eslavas vivas.' },
    ],
  },
  {
    id: 'hsb-g4',
    level: 'A1.2',
    title: 'O verbo měć (ter) e a negação com nje-',
    emoji: '🤲',
    summary: '“Měć” é ter; para negar qualquer verbo, basta grudar “nje-” antes dele.',
    sections: [
      {
        text: 'O verbo ter segue o padrão eslavo comum, parecido com o polonês “mieć” e o tcheco “mít”. Para negar, “nje-” gruda direto no verbo, sem palavra separada.',
        table: {
          head: ['Pronome', 'měć (ter)', 'negativo'],
          rows: [
            ['ja', 'mam', 'njemam'],
            ['ty', 'maš', 'njemaš'],
            ['wón / wona', 'ma', 'njema'],
            ['my', 'mamy', 'njemamy'],
            ['wy', 'maće', 'njemaće'],
            ['woni', 'maja', 'njemaja'],
          ],
        },
        examples: [
          ['Mam jedneho bratra.', 'Tenho um irmão.'],
          ['Ja njewěm.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Usar uma palavra separada para negar, como em português (“não tenho”): em alto-sorábio é um prefixo grudado, “njemam”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Ja njewěm.', 'Ja wěm nje.', 'Nje ja wěm.'], answer: 'Ja njewěm.', explanation: '“Nje-” gruda direto antes do verbo.' },
      { question: '“Mamy” é a forma de měć para…', options: ['my (nós)', 'ja (eu)', 'woni (eles)'], answer: 'my (nós)', explanation: '“Mamy” é a 1ª pessoa do plural de “měć”.' },
    ],
  },
  {
    id: 'hsb-g5',
    level: 'A2.1',
    title: 'O acusativo: quando o substantivo é o objeto',
    emoji: '🎯',
    summary: 'O alto-sorábio tem 7 casos; o acusativo marca o que recebe a ação do verbo (“tenho um X”, “vejo um X”) e muda de forma diferente para cada gênero.',
    sections: [
      {
        text: 'Em português, “tenho um peixe” e “o peixe é grande” usam a mesma palavra “peixe”. Em alto-sorábio, não: quando o substantivo é objeto de um verbo como “mam” (tenho), ele pode mudar de forma — esse é o caso acusativo. A regra muda segundo o gênero.',
        table: {
          head: ['Gênero', 'Regra do acusativo', 'Exemplo'],
          rows: [
            ['Feminino (-a)', 'troca o -a final por -u', 'ryba → Mam wulku rybu.'],
            ['Masculino inanimado', 'igual ao nominativo (não muda)', 'kamjeń → Mam wulki kamjeń.'],
            ['Masculino animado (pessoas, animais)', 'igual ao genitivo (geralmente -a)', 'ptak → Mam wulkeho ptaka.'],
          ],
        },
        examples: [
          ['Mam wulku rybu.', 'Tenho um peixe grande.'],
          ['Mam wulkeho ptaka.', 'Tenho um pássaro grande.'],
          ['Mam wulki kamjeń.', 'Tenho uma pedra grande.'],
        ],
      },
      {
        heading: 'O mesmo padrão já apareceu no A1, sem explicação',
        text: 'A frase “Mam jedneho bratra” (tenho um irmão), do nível A1, já usava essa regra: “bratr” é masculino animado, então o numeral “jedyn” e o substantivo mudam para a forma do genitivo (“jedneho bratra”), igual a “wulkeho ptaka” agora.',
        examples: [['Mam jedneho bratra a wulkeho ptaka.', 'Tenho um irmão e um pássaro grande.']],
      },
    ],
    pitfalls: [
      'Usar a forma do nominativo para um substantivo feminino depois de “mam”: o certo é trocar -a por -u (“rybu”, não “ryba”).',
      'Esquecer que “pessoas e animais” (masculino animado) seguem a regra do genitivo no acusativo, diferente de objetos sem vida (masculino inanimado), que não mudam nada.',
    ],
    quiz: [
      { question: 'Como se diz “tenho um peixe grande”?', options: ['Mam wulku rybu.', 'Mam wulka ryba.', 'Mam wulki ryba.'], answer: 'Mam wulku rybu.', explanation: '“Ryba” é feminino: o acusativo troca o -a final por -u.' },
      { question: 'Por que “ptak” (pássaro) vira “ptaka” depois de “mam”?', options: ['Porque é masculino animado: o acusativo copia a forma do genitivo', 'Porque todo substantivo muda depois de “mam”', 'Porque “ptak” é uma excepção sem explicação'], answer: 'Porque é masculino animado: o acusativo copia a forma do genitivo', explanation: 'Substantivos masculinos animados (pessoas e animais) usam a forma do genitivo no acusativo; os inanimados não mudam.' },
    ],
  },
  {
    id: 'hsb-g6',
    level: 'A2.2',
    title: 'O pretérito composto: być + participium em -ł',
    emoji: '🕰️',
    summary: 'Para contar o que já aconteceu, o alto-sorábio junta o presente de “być” com uma forma do verbo principal terminada em -ł, que muda de acordo com o gênero de quem fala ou de quem é o sujeito.',
    sections: [
      {
        text: 'O pretérito composto (ou “perfeito”) é a forma comum de falar do passado. Ele tem duas partes: o presente de “być” (sym, sy, je, smy, sće, su) mais o chamado “participium em -ł” do verbo principal, que tem uma forma para o masculino, outra para o feminino e outra para o neutro.',
        table: {
          head: ['Pessoa', 'być (presente)', 'pisać no passado'],
          rows: [
            ['ja (masc./fem.)', 'sym', 'sym pisał / sym pisała'],
            ['ty (masc./fem.)', 'sy', 'sy pisał / sy pisała'],
            ['wón/wona/wono', 'je', 'je pisał / je pisała / je pisało'],
            ['my', 'smy', 'smy pisali'],
            ['wy', 'sće', 'sće pisali'],
            ['woni', 'su', 'su pisali'],
          ],
        },
        examples: [
          ['Ja sym pisał list.', 'Eu escrevi uma carta. (fala um homem)'],
          ['Ja sym pisała list.', 'Eu escrevi uma carta. (fala uma mulher)'],
          ['Wčera było ćopłe.', 'Ontem estava quente.'],
        ],
      },
      {
        heading: 'O verbo być no próprio passado',
        text: '“Być” também tem a sua própria forma em -ł: był (masc.), była (fem.), było (neutro), byli (plural).',
        examples: [['Wčera było ćopłe, dźensa je zymne.', 'Ontem estava quente, hoje está frio.']],
      },
    ],
    pitfalls: [
      'Esquecer de trocar a terminação do participium conforme quem fala: um homem diz “sym pisał”, uma mulher diz “sym pisała”.',
      'Confundir “sym pisał” (eu escrevi/tenho escrito) com “ja pisam” (eu escrevo, presente): são tempos diferentes, com partes diferentes da frase.',
    ],
    quiz: [
      { question: 'Como uma mulher diz “eu escrevi uma carta”?', options: ['Sym pisała list.', 'Sym pisał list.', 'Pisam list.'], answer: 'Sym pisała list.', explanation: 'O participium muda para “-ła” quando quem fala é mulher.' },
      { question: '“Było ćopłe” quer dizer…', options: ['Estava quente (no passado)', 'Está quente (agora)', 'Vai estar quente'], answer: 'Estava quente (no passado)', explanation: '“Było” é a forma neutra do passado de “być”.' },
    ],
  },
];
