import type { GrammarTopic } from '../types';

/**
 * Gramática do inupiaque — por enquanto só A1.1 e A1.2 (curso incompleto). Fontes: [WIKI] Wikipédia
 * em inglês, «Iñupiaq language» (consultada em 10/10/2026): a tabela das terminações do indicativo
 * intransitivo (+t/ru + ŋa, tin, q), o número (singular, dual, plural), os modos e os números; [WIKT]
 * Wikcionário (verbetes do inupiaque e os exemplos deles); [OMNI] Omniglot (frases). Todos os exemplos
 * são frases das fontes, com a tradução delas.
 */
export const GRAMMAR_IK: GrammarTopic[] = [
  {
    id: 'ik-g1',
    level: 'A1.1',
    title: 'Quem faz a ação: o fim do verbo',
    emoji: '🙋',
    summary: 'Depois de vogal: -ruŋa (eu), -rutin (você), -ruq (ele, ela). Depois de consoante: -tuŋa, -tutin, -tuq.',
    sections: [
      {
        text: 'O inupiaque não precisa de pronome antes do verbo: o fim do verbo já diz quem faz a ação. Depois de vogal, o fim começa com “r”; depois de consoante, com “t”. Veja “ser bom” (raiz nakuu-, que termina em vogal) e “ir bem” (raiz piḷḷuataq-, que termina em consoante):',
        table: {
          head: ['Pessoa', 'Fim', 'Exemplo'],
          rows: [
            ['eu', '-ruŋa / -tuŋa', 'Nakuuruŋa. (estou bem)'],
            ['você', '-rutin / -tutin', 'Piḷḷuataqtutin! (você foi bem!)'],
            ['ele, ela', '-ruq / -tuq', 'Nakuuruq aġnaq. (a mulher é boa)'],
          ],
        },
        examples: [
          ['Agliqiłuŋa niġiruŋa.', 'Lendo, eu como.'],
          ['Savaktuq qaani.', 'Ele trabalha lá dentro.'],
          ['Iñuuruŋa Kisaġviŋmi.', 'Eu moro em Anchorage.'],
        ],
      },
      {
        text: 'Os pronomes existem e servem para dar ênfase: “uvaŋa” (eu), “ilviñ” (você), “uvagut” (nós).',
        examples: [
          ['Uvagut uqaqtugut.', 'Nós estamos conversando.'],
          ['Kiña aullaġniaqpa? … Ilviñ!', 'Quem vai? … Você!'],
        ],
      },
    ],
    pitfalls: [
      'Usar -ruq para “eu”: “nakuuruq” é “ele, ela está bem”; “eu estou bem” é “nakuuruŋa”.',
      'Esquecer de trocar “r” por “t” depois de consoante: “savaktuq” (de savak-), e não “savakruq”.',
    ],
    quiz: [
      { question: 'Como se diz “estou bem”?', options: ['Nakuuruŋa', 'Nakuuruq', 'Nakuurut'], answer: 'Nakuuruŋa', explanation: '-ruŋa é o fim de “eu” depois de vogal.' },
      { question: 'O que quer dizer “Piḷḷuataqtutin!”?', options: ['Você foi bem!', 'Eu fui bem!', 'Ele foi bem!'], answer: 'Você foi bem!', explanation: '-tutin é “você” depois de consoante.' },
    ],
  },
  {
    id: 'ik-g2',
    level: 'A1.1',
    title: 'Perguntas: kiña, nani, qanuq, qakugu, suna',
    emoji: '❓',
    summary: 'As palavras de pergunta e o fim -pich/-vin, que transforma o verbo em pergunta a “você”.',
    sections: [
      {
        text: 'As palavras de pergunta são “kiña” (quem), “nani” (onde), “napmun” (para onde), “qanuq” (como), “qakugu” (quando, no futuro) e “suna” (o quê). Quando a pergunta é para “você”, o verbo muda de fim: “Qanuq itpich?” (como vai você?), “Kinauvin?” (quem é você?). O inupiaque tem um modo só para as perguntas, o interrogativo.',
        examples: [
          ['Qanuq itpich?', 'Como vai?'],
          ['Napmun aullaġniaqpich?', 'Para onde você vai?'],
          ['Suna pisukpiuŋ?', 'O que você quer?'],
          ['Naami Kisaġvik?', 'Onde fica Anchorage?'],
        ],
      },
    ],
    pitfalls: ['“Qakugu” é “quando” só para o futuro: “Qakugu niksiksuġiaġniaqpich?” (quando você vai pescar?).'],
    quiz: [
      { question: 'Qual é a palavra para “quem”?', options: ['kiña', 'nani', 'qakugu'], answer: 'kiña', explanation: '“Kiña” é quem; “nani” é onde; “qakugu” é quando.' },
    ],
  },
  {
    id: 'ik-g3',
    level: 'A1.2',
    title: 'Um, dois e muitos: o dual',
    emoji: '✌️',
    summary: 'O inupiaque tem singular, dual (dois) e plural (três ou mais): iñuk, iññuk, iñuich.',
    sections: [
      {
        text: 'Além do singular e do plural, o inupiaque tem o dual, para exatamente duas coisas. O dual termina em -k e o plural, em -t (às vezes -it ou -ich). O verbo acompanha: -ruq para um, -ruk para dois e -rut para três ou mais.',
        table: {
          head: ['Um', 'Dois', 'Três ou mais'],
          rows: [
            ['iñuk (pessoa)', 'iññuk', 'iñuich'],
            ['iqaluk (peixe)', '—', 'iqaluit'],
            ['tuttu (caribu)', '—', 'tuttut'],
          ],
        },
        examples: [
          ['Malġuk iññuk paaqsaaġutiruk.', 'As duas pessoas se cruzaram.'],
          ['Iqaluit niġiruni nakuurut.', 'Os peixes são bons de comer.'],
          ['Agga tuttut.', 'Há caribus lá do outro lado.'],
        ],
      },
    ],
    pitfalls: ['Usar o verbo do singular com o plural: “Iqaluit … nakuurut”, e não “nakuuruq”.'],
    quiz: [
      { question: 'Como se diz “pessoas” (três ou mais)?', options: ['iñuich', 'iññuk', 'iñuk'], answer: 'iñuich', explanation: '“Iñuk” é uma pessoa, “iññuk” são duas e “iñuich”, três ou mais.' },
    ],
  },
  {
    id: 'ik-g4',
    level: 'A1.2',
    title: 'Contar em vinte',
    emoji: '🔢',
    summary: 'Os números do inupiaque vão de cinco em cinco e de vinte em vinte: tallimat (5), qulit (10), iñuiññaq (20).',
    sections: [
      {
        text: 'O inupiaque conta em base 20, com o cinco como degrau. O seis é irregular (itchaksrat), o sete e o oito se fazem a partir do cinco, e o número antes de um múltiplo de cinco se faz “tirando um”, com -utaiḷaq: nove é “quliŋŋuġutaiḷaq”, de “qulit” (dez).',
        table: {
          head: ['Número', 'Inupiaque', 'Ao pé da letra'],
          rows: [
            ['1, 2, 3, 4, 5', 'atausiq, malġuk, piŋasut, sisamat, tallimat', '—'],
            ['6', 'itchaksrat', '—'],
            ['7', 'tallimat malġuk', 'cinco e dois'],
            ['8', 'tallimat piŋasut', 'cinco e três'],
            ['9', 'quliŋŋuġutaiḷaq', 'dez menos um'],
            ['10', 'qulit', 'de “o de cima”: os dez dedos de cima'],
            ['20', 'iñuiññaq', 'a pessoa inteira'],
          ],
        },
        examples: [
          ['Tallimat malġuk.', 'Sete.'],
          ['Qulit atausiq.', 'Onze (dez e um).'],
        ],
      },
    ],
    pitfalls: ['Contar o seis como “cinco e um”: o seis tem palavra própria, “itchaksrat”.'],
    quiz: [
      { question: 'O que quer dizer “tallimat piŋasut”?', options: ['oito', 'três', 'quinze'], answer: 'oito', explanation: '“Tallimat” (cinco) + “piŋasut” (três) = oito.' },
    ],
  },
];
