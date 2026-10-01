import type { GrammarTopic } from '../types';

/** Tópicos de gramática do igbo — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_IG: GrammarTopic[] = [
  {
    id: 'ig-g1',
    level: 'A1.1',
    title: 'As letras ị, ọ, ụ, ṅ e os encontros gb, kp, nw',
    emoji: '🔤',
    summary: 'O igbo tem quatro letras a mais que o português e grupos de consoantes que valem um só som.',
    sections: [
      {
        text: 'Ị, ọ e ụ não são “i”, “o” e “u” com um acento decorativo: são vogais diferentes, mais abertas/“pesadas” (os linguistas chamam isso de harmonia vocálica). Trocar uma vogal comum pela vogal com o pontinho embaixo troca a palavra. O ṅ é outra letra à parte: o som nasal do “ng” de “ringue”, sozinho, sem vogal depois dele dentro da sílaba.',
        table: {
          head: ['Letra/grupo', 'Som', 'Exemplo'],
          rows: [
            ['ị', 'vogal mais aberta que o “i” comum', 'nwanyị (mulher)'],
            ['ọ', 'vogal mais aberta que o “o” comum', 'ọka (milho)'],
            ['ụ', 'vogal mais aberta que o “u” comum', 'ụlọ (casa)'],
            ['ṅ', 'nasal sozinha, como o “ng” de “ringue”', 'nkwọ (um dos 4 dias da semana igbo)'],
            ['gb, kp', 'um só som: lábios e garganta fecham juntos', 'gbaghara (perdoar)'],
            ['nw', 'um “w” bem unido, quase nasalado', 'nwa (filho/filha), nwoke (homem)'],
          ],
        },
        examples: [
          ['Ụlọ m dị mma.', 'Minha casa é boa.'],
          ['Nwa m dị nta.', 'Meu filho/minha filha é pequeno(a).'],
        ],
      },
    ],
    pitfalls: [
      'Ler “ị”, “ọ”, “ụ” como se fossem só “i”, “o”, “u” com um acento bonito: são vogais diferentes, e confundi-las muda a palavra.',
      'Separar “gb”, “kp” ou “nw” em dois sons: no igbo, cada um desses grupos é ouvido como um som só.',
    ],
    quiz: [
      {
        question: '“ị”, “ọ” e “ụ” são…',
        options: ['Letras com vogais próprias, não “i/o/u” com acento', 'Só uma forma bonita de escrever i/o/u', 'Marcas de tom'],
        answer: 'Letras com vogais próprias, não “i/o/u” com acento',
        explanation: 'São vogais do igbo mais abertas que i, o, u: parte do sistema de harmonia vocálica da língua.',
      },
      {
        question: 'O grupo “nw”, como em “nwa” (filho/filha), soa como…',
        options: ['Um “w” bem unido, quase nasalado, um som só', '“n” e “w” separados, como em “banwé”', 'Como o “nh” do português'],
        answer: 'Um “w” bem unido, quase nasalado, um som só',
        explanation: 'É um dos encontros próprios do igbo (como gb e kp): duas letras, um só som.',
      },
    ],
  },
  {
    id: 'ig-g2',
    level: 'A1.1',
    title: 'Os tons do igbo',
    emoji: '🎵',
    summary: 'O igbo é uma língua tonal: a mesma sequência de letras pode ter sentidos opostos, só pela altura da voz.',
    sections: [
      {
        text: 'No igbo, cada sílaba tem um tom alto ou baixo (há também o “downstep”, um tom alto que cai um degrau depois de outro alto). Quando o tom é marcado na escrita, o acento agudo (´) indica tom alto e o acento grave (`) indica tom baixo — mas no dia a dia (jornais, placas, mensagens) o tom quase nunca é escrito: quem já sabe a língua reconhece a palavra certa pelo contexto. O exemplo mais famoso é “akwa”, que sem marcação de tom pode ser quatro palavras diferentes.',
        table: {
          head: ['Escrita com tom', 'Tom', 'Significado'],
          rows: [
            ['ákwá', 'alto-alto', 'choro'],
            ['àkwà', 'baixo-baixo', 'cama'],
            ['àkwá', 'baixo-alto', 'ovo'],
            ['ákwà', 'alto-baixo', 'pano, tecido'],
          ],
        },
        examples: [
          ['éze', 'rei'],
          ['ézē (com downstep)', 'dente'],
        ],
      },
    ],
    pitfalls: [
      'O português usa a entoação só para perguntar ou dar ênfase: no igbo, mudar o tom muda a palavra inteira, não o sentimento por trás dela.',
      'Achar que, como o texto escrito quase nunca marca o tom, o tom “não importa”: ele importa demais para quem fala — só não aparece na escrita comum.',
    ],
    quiz: [
      {
        question: 'O que diferencia “ákwá” (choro) de “àkwà” (cama) na escrita com tom?',
        options: ['Só o tom da voz: as letras são as mesmas', 'Uma letra a mais em “àkwà”', 'O gênero da palavra'],
        answer: 'Só o tom da voz: as letras são as mesmas',
        explanation: 'As duas palavras se escrevem “akwa”; só o tom (marcado aqui com acentos) mostra qual é qual.',
      },
      {
        question: 'No dia a dia (jornal, placa, mensagem), o igbo escrito…',
        options: ['Quase sempre marca o tom com acentos', 'Quase nunca marca o tom: o contexto resolve', 'Usa números para marcar o tom'],
        answer: 'Quase nunca marca o tom: o contexto resolve',
        explanation: 'A marcação de tom aparece sobretudo em dicionários e material para quem está aprendendo — não no uso comum.',
      },
    ],
  },
  {
    id: 'ig-g3',
    level: 'A1.1',
    title: 'Os pronomes e o verbo bụ',
    emoji: '🙋',
    summary: 'Seis pronomes sem gênero e um verbo, “bụ”, para apresentar quem é quem.',
    sections: [
      {
        text: 'O igbo não marca gênero gramatical em nenhum pronome: “ọ” serve tanto para “ele” quanto para “ela” (e também para “isso”). Para dizer quem alguém é, usa-se o verbo “bụ” (ser) logo depois do sujeito.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['m', 'eu'],
            ['gị', 'você, tu'],
            ['ọ', 'ele, ela, isso (sem gênero)'],
            ['anyị', 'nós'],
            ['unu', 'vocês'],
            ['ha', 'eles, elas'],
          ],
        },
        examples: [
          ['Aha m bụ Ngozi.', 'Meu nome é Ngozi.'],
          ['Ọ bụ enyi m.', 'Ele/ela é meu amigo/minha amiga.'],
          ['Anyị bụ ndị Igbo.', 'Somos igbos.'],
        ],
      },
    ],
    pitfalls: ['Esperar um pronome diferente para “ele” e para “ela”: o igbo usa “ọ” para os dois — o gênero só aparece, se precisar, em palavras como “nwoke” (homem) e “nwanyị” (mulher).'],
    quiz: [
      {
        question: 'Qual pronome serve tanto para “ele” quanto para “ela” em igbo?',
        options: ['ọ', 'gị', 'ha'],
        answer: 'ọ',
        explanation: '“Ọ” não marca gênero: cobre “ele”, “ela” e também “isso”.',
      },
      {
        question: 'Como se diz “Meu nome é…” em igbo?',
        options: ['Aha m bụ…', 'Gị bụ…', 'Kedụ aha…'],
        answer: 'Aha m bụ…',
        explanation: '“Aha m bụ” é, ao pé da letra, “nome eu é”: o jeito igbo de apresentar o nome.',
      },
    ],
  },
  {
    id: 'ig-g4',
    level: 'A1.2',
    title: 'O possessivo: o nome colado ao dono',
    emoji: '👪',
    summary: 'Em igbo, “meu”, “seu”, “nosso”… não são palavras à parte: o pronome vem colado depois do nome.',
    sections: [
      {
        text: 'O português põe o possessivo antes do nome (“meu nome”, “sua casa”). O igbo faz o contrário: o nome vem primeiro, e o pronome (sem nenhuma palavra de ligação) vem logo depois, mostrando de quem é.',
        table: {
          head: ['Igbo', 'Ao pé da letra', 'Tradução'],
          rows: [
            ['aha m', 'nome eu', 'meu nome'],
            ['nna gị', 'pai você', 'seu pai'],
            ['nwa m', 'filho/filha eu', 'meu filho/minha filha'],
            ['ezinụlọ anyị', 'família nós', 'nossa família'],
          ],
        },
        examples: [
          ['Nna m nọ n’ụlọ.', 'Meu pai está em casa.'],
          ['Ụlọ gị dị mma.', 'Sua casa é boa.'],
        ],
      },
    ],
    pitfalls: ['Traduzir ao pé da letra na ordem do português, pondo o pronome antes do nome: em igbo, o nome vem primeiro, e o “dono” vem depois, colado a ele.'],
    quiz: [
      {
        question: 'Como se diz “meu pai” em igbo?',
        options: ['nna m', 'm nna', 'nna bụ'],
        answer: 'nna m',
        explanation: 'O nome (“nna”) vem primeiro; o pronome (“m”) vem depois, sem palavra de ligação.',
      },
      {
        question: 'Em “ezinụlọ gị”, “gị” quer dizer…',
        options: ['seu, sua', 'eu', 'nós'],
        answer: 'seu, sua',
        explanation: '“Gị” colado depois do nome marca a posse de “você”: “ezinụlọ gị” é “sua família”.',
      },
    ],
  },
];
