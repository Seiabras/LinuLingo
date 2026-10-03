import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do somali — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * - en.wikipedia.org/wiki/Somali_grammar: tabela de pronomes enfáticos e clíticos (aniga/aan/i,
 *   adiga/aad/ku, isaga/uu, iyada/ay, innaga/aynu/ina, annaga/aannu/na, idinka/aydin/idin, iyaga/ay);
 *   o artigo definido sufixado (-ka/-ta, com os exemplos buug → buugga, gacan → gacanta, nin → ninka);
 *   a polaridade de gênero (buugga, masculino, × buugagta, feminino); a tabela do presente habitual de
 *   «keen» com os clíticos (waan keenaa, waad keentaa, wuu keenaa, way keentaa, waan keennaa, waad
 *   keentaan, way keenaan); as partículas de foco baa/ayaa/waxa(a) e waa, com os exemplos «Maxamed baa
 *   baxay», «Sahra ayaa baxday», «Waxaa baxay Maxamed», «Maxamed wuu baxay», «Sahro way baxday».
 * - en.wikipedia.org/wiki/Somali_language: a distinção inclusivo/exclusivo no «nós», a ordem SOV e o
 *   adjetivo depois do substantivo.
 * - Wiktionary: a tabela de conjugação de «cab» (cabbaa, cabtaa, cabbaa, cabtaa, cabnaa, cabtaan,
 *   cabbaan) e o gênero de cada substantivo (g=m / g=f nos verbetes).
 * - Wikivoyage (Somali phrasebook): «Magacay waa ___», «Waan wanaagsanahay».
 * - Na tabela de pronomes, a coluna «com waa» das duas linhas de «nós» repete o «(waan) keennaa» da
 *   tabela do presente da Wikipédia, que não separa inclusivo de exclusivo.
 */
export const GRAMMAR_SO: GrammarTopic[] = [
  {
    id: 'so-g1',
    level: 'A1.1',
    title: 'Pronomes: a forma forte e a forma curta',
    emoji: '🙋',
    summary:
      'O somali tem dois jogos de pronomes: o pronome “forte” (aniga, adiga…), que se comporta como um substantivo, e o pronome curto, que se junta à partícula “waa” antes do verbo (waan, waad, wuu, way).',
    sections: [
      {
        heading: 'As duas formas',
        text: 'O pronome forte aparece sozinho ou com ênfase (“Aniga?” — eu?). No dia a dia, quem marca a pessoa é a forma curta, grudada na partícula “waa”: “waa” + “aan” vira “waan”, “waa” + “uu” vira “wuu”, “waa” + “ay” vira “way”.',
        table: {
          head: ['Pessoa', 'Forte', 'Curta', 'Com “waa”'],
          rows: [
            ['eu', 'aniga', 'aan', 'waan'],
            ['você', 'adiga', 'aad', 'waad'],
            ['ele', 'isaga', 'uu', 'wuu'],
            ['ela', 'iyada', 'ay', 'way'],
            ['nós (com quem ouve)', 'innaga', 'aynu', 'waan'],
            ['nós (sem quem ouve)', 'annaga', 'aannu', 'waan'],
            ['vocês', 'idinka', 'aydin', 'waad'],
            ['eles, elas', 'iyaga', 'ay', 'way'],
          ],
        },
      },
      {
        heading: 'Dois “nós”',
        text: 'Como várias línguas da região, o somali tem dois “nós”: “innaga” inclui quem está ouvindo (nós dois, eu e você) e “annaga” deixa quem ouve de fora (eu e eles, mas não você).',
        examples: [
          ['Waan keenaa.', 'Eu trago.'],
          ['Wuu keenaa.', 'Ele traz.'],
          ['Way keentaa.', 'Ela traz.'],
          ['Way keenaan.', 'Eles trazem.'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre o pronome forte, como em português (“aniga keenaa”): numa frase comum, quem diz a pessoa é a forma curta junto de “waa” — “Waan keenaa”.',
      'Achar que existe um só “nós”: “innaga” inclui quem ouve, “annaga” não.',
    ],
    quiz: [
      {
        question: 'Como fica “waa” + “uu” (ele)?',
        options: ['wuu', 'waan', 'way'],
        answer: 'wuu',
        explanation: '“Waa” se junta ao pronome curto “uu” (ele) e vira “wuu”: “Wuu keenaa” (ele traz).',
      },
      {
        question: 'Qual “nós” inclui a pessoa que está ouvindo?',
        options: ['innaga', 'annaga', 'idinka'],
        answer: 'innaga',
        explanation: '“Innaga” é o “nós” inclusivo; “annaga” deixa quem ouve de fora; “idinka” é “vocês”.',
      },
    ],
  },
  {
    id: 'so-g2',
    level: 'A1.1',
    title: 'Masculino e feminino: o artigo vem no fim',
    emoji: '🏷️',
    summary:
      'O somali tem masculino e feminino, mas não tem artigo antes do substantivo: “o/a” é um sufixo, “-ka” no masculino e “-ta” no feminino. Sem o artigo, nada na palavra mostra o gênero.',
    sections: [
      {
        heading: 'O artigo sufixado',
        text: 'A consoante do artigo (k ou t) às vezes muda conforme a última letra do substantivo, por isso vale aprender cada palavra já com o seu gênero.',
        table: {
          head: ['Substantivo', 'Gênero', 'Com o artigo'],
          rows: [
            ['buug (livro)', 'masculino', 'buugga (o livro)'],
            ['nin (homem)', 'masculino', 'ninka (o homem)'],
            ['gacan (mão)', 'feminino', 'gacanta (a mão)'],
          ],
        },
      },
      {
        heading: 'O plural troca de gênero',
        text: 'Muitos substantivos mudam de gênero no plural: “buugga” (o livro) é masculino, mas “buugagta” (os livros) é feminino. É a chamada polaridade de gênero, comum em línguas da mesma família.',
        examples: [
          ['buug → buugga', 'livro → o livro (masculino)'],
          ['gacan → gacanta', 'mão → a mão (feminino)'],
          ['buugga → buugagta', 'o livro → os livros (o plural vira feminino)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um artigo antes do substantivo, como “o” e “a” em português: no somali ele vem colado no fim — “nin” (homem), “ninka” (o homem).',
      'Adivinhar o gênero pelo som da palavra: ele não segue regra fixa, por isso o vocabulário mostra o gênero de cada substantivo.',
    ],
    quiz: [
      {
        question: 'Como se diz “a mão” (gacan, feminino)?',
        options: ['gacanta', 'gacanka', 'ta gacan'],
        answer: 'gacanta',
        explanation: 'O artigo feminino é o sufixo “-ta”: gacan → gacanta.',
      },
      {
        question: '“Buugga” (o livro) é masculino. E “buugagta” (os livros)?',
        options: ['feminino', 'masculino', 'neutro'],
        answer: 'feminino',
        explanation: 'É a polaridade de gênero: muitos substantivos masculinos ficam femininos no plural.',
      },
    ],
  },
  {
    id: 'so-g3',
    level: 'A1.2',
    title: 'O presente: a terminação muda com a pessoa',
    emoji: '🔁',
    summary:
      'No presente habitual (o que a gente faz sempre), o verbo somali termina em “-aa” e ganha um “t” para “você” e “ela”: “waan keenaa” (eu trago), “waad keentaa” (você traz). O objeto vem antes do verbo.',
    sections: [
      {
        table: {
          head: ['Pessoa', 'keen (trazer)', 'cab (beber)'],
          rows: [
            ['eu', 'waan keenaa', 'waan cabbaa'],
            ['você', 'waad keentaa', 'waad cabtaa'],
            ['ele', 'wuu keenaa', 'wuu cabbaa'],
            ['ela', 'way keentaa', 'way cabtaa'],
            ['nós', 'waan keennaa', 'waan cabnaa'],
            ['vocês', 'waad keentaan', 'waad cabtaan'],
            ['eles, elas', 'way keenaan', 'way cabbaan'],
          ],
        },
      },
      {
        heading: 'O objeto vem antes',
        text: 'O somali põe o verbo no fim da frase (sujeito, objeto, verbo). Por isso “eu bebo água” é “Biyo waan cabbaa”, literalmente “água eu bebo”.',
        examples: [
          ['Biyo waan cabbaa.', 'Eu bebo água.'],
          ['Shaah waad cabtaa.', 'Você bebe chá.'],
          ['Hilib waan cunaa.', 'Eu como carne.'],
        ],
      },
    ],
    pitfalls: [
      'Usar a mesma forma para todo mundo: “eu” e “ele” terminam em “-aa” (cabbaa), mas “você” e “ela” levam o “t” (cabtaa).',
      'Pôr o objeto depois do verbo, como em português: com “waa”, a ordem básica é “Biyo waan cabbaa”, com a água antes (o objeto só vai para depois do verbo em construções de destaque, com “waxaa”).',
    ],
    quiz: [
      {
        question: 'Como se diz “ela traz”?',
        options: ['Way keentaa.', 'Wuu keenaa.', 'Waan keenaa.'],
        answer: 'Way keentaa.',
        explanation: '“Ela” usa “way” e a terminação com “t”: keentaa.',
      },
      {
        question: 'Qual é a ordem natural de “eu bebo chá”?',
        options: ['Shaah waan cabbaa.', 'Waan cabbaa shaah.', 'Cabbaa waan shaah.'],
        answer: 'Shaah waan cabbaa.',
        explanation: 'O objeto (shaah) vem antes de “waan” + verbo, que fecha a frase.',
      },
    ],
  },
  {
    id: 'so-g4',
    level: 'A1.2',
    title: 'O foco: “waa”, “baa” e “ayaa”',
    emoji: '🔦',
    summary:
      'A frase somali marca o que é novidade. “Waa” destaca o verbo (o que aconteceu); “baa” e “ayaa” destacam o substantivo que vem logo antes deles (quem fez).',
    sections: [
      {
        text: 'Compare: “Maxamed wuu baxay” responde “o que o Mohamed fez?” — ele saiu. Já “Maxamed baa baxay” responde “quem saiu?” — foi o Mohamed. “Ayaa” funciona como “baa”, e “waxaa” põe o destaque depois do verbo: “Waxaa baxay Maxamed” (quem saiu foi o Mohamed). Repare que o verbo também concorda com o gênero: “Maxamed wuu baxay” (ele saiu), mas “Sahro way baxday” (ela saiu).',
        examples: [
          ['Maxamed wuu baxay.', 'O Mohamed saiu. (destaque no verbo)'],
          ['Maxamed baa baxay.', 'Foi o Mohamed que saiu. (destaque em quem)'],
          ['Sahra ayaa baxday.', 'Foi a Sahra que saiu.'],
          ['Sahro way baxday.', 'A Sahra saiu.'],
        ],
      },
    ],
    pitfalls: [
      'Deixar a frase afirmativa sem partícula nenhuma: em geral ela leva “waa” (ou “baa”/“ayaa”), que diz onde está a informação nova.',
      'Trocar as perguntas: “baa” responde “quem?”, “waa” responde “o que fez?”.',
    ],
    quiz: [
      {
        question: 'Qual frase responde “quem saiu?”',
        options: ['Maxamed baa baxay.', 'Maxamed wuu baxay.', 'Wuu baxay.'],
        answer: 'Maxamed baa baxay.',
        explanation: '“Baa” põe o destaque no substantivo que vem antes dele: foi o Mohamed.',
      },
      {
        question: 'O que “waa” destaca?',
        options: ['o verbo', 'o sujeito', 'o objeto'],
        answer: 'o verbo',
        explanation: '“Waa” (e as formas waan, wuu, way…) põe o foco no verbo, no que aconteceu.',
      },
    ],
  },
];
