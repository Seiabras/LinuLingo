import type { UnitSeed } from '../types';

/**
 * Trilha do tsakônio: só as duas unidades do nível A1 (pacote marcado como incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para as fontes de cada palavra e para a explicação de
 * como as frases que não são citações diretas das fontes foram montadas (combinando o pronome “νι” com
 * a cópula de 3ª pessoa “έννι”, atestada na tabela de conjugação do artigo da Wikipédia).
 */
export const UNITS_TSD: UnitSeed[] = [
  {
    id: 'tsd-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Εζού, εκιού, νι',
    emoji: '🏛️',
    card: {
      id: 'tsd-c1',
      title: 'Uma língua vinda de Esparta',
      emoji: '🏛️',
      history:
        'O tsakônio é a variedade do grego moderno com a descendência mais divergente de todas: vem do dórico antigo (o grego falado em Esparta e na região do Peloponeso), não do ramo ático-jônico de que vêm o grego padrão e o coiné bizantino. É falado hoje numa região montanhosa do leste do Peloponeso, a Tsakônia, em aldeias como Leonídio e Tiros. O número de falantes caiu muito rápido: de uma estimativa de 200 mil falantes fluentes no passado para algo entre 200 e 1.000 por volta de 2007, segundo a Wikipédia; um levantamento mais recente (Campbell & Bellew, “Cataloguing the World’s Endangered Languages”, citado na mesma fonte) estima de 2.000 a 4.000 pessoas em 2018, incluindo quem entende mas fala pouco. A UNESCO classifica o tsakônio como “criticamente em perigo” no Atlas das Línguas em Perigo do Mundo.',
      culture_tip:
        'O nome “Tsákonas”/“Tzákonas” aparece pela primeira vez em cronistas bizantinos, que o derivam de uma corruptela de “Lákonas” — um lacedemônio, ou seja, um espartano —, numa referência direta às raízes dóricas da língua. Prastos, a antiga capital da região, foi incendiada por Ibrahim Paxá durante a Guerra de Independência grega, e os moradores se espalharam para Leonídio, Tiros e arredores — para onde a “capital” de fato da Tsakônia se mudou.',
      grammar_why:
        'Os pronomes do tsakônio vêm direto do dórico antigo, por isso soam bem diferentes dos do grego padrão (que vêm do ático): “εκιού” (tu, você) vem do dórico “τύ”, não do ático “σύ” que deu origem ao “εσύ” do grego padrão. Já o verbo “ser/estar” tem uma forma própria para cada pessoa — a 3ª do singular, “έννι” (é, está), aparece em quase toda frase simples deste curso.',
      grammar_examples: [
        ['Εζού τσαι εκιού.', 'Eu e você.'],
        ['Νι έννι λιούκο.', 'Ele/isto é lobo.'],
        ['Groússa námou eíni ta Tsakónika.', 'Nossa língua é o tsakônio.'],
      ],
      character_guide: [
        ['σχ', 'som “x” de “xícara” (um só som, não duas letras)', 'σχίνα (montanha)'],
        ['τθ', 'um “t” soprado (aspirado)', 'τθούμα (boca)'],
        ['πφ', 'um “p” soprado (aspirado)', 'πφη (que, pronome relativo)'],
        ['νν, λλ', '“n”/“l” sem a palatalização comum em outras posições', '—'],
      ],
    },
    lessons: [
      {
        id: 'tsd-u1-l1',
        title: 'Εζού, εκιού, νι, σι',
        kind: 'licao',
        words: ['εζού', 'εκιού', 'νι', 'νάμου', 'σι', 'τσαι'],
        cloze: [
          { sentence: '___ τσαι εκιού.', answer: 'Εζού', options: ['Εζού', 'Νι', 'Σι'], translation: 'Eu e você.' },
          { sentence: 'Εζού ___ εκιού.', answer: 'τσαι', options: ['τσαι', 'νι', 'σι'], translation: 'Eu e você.' },
          { sentence: 'Κιά έννι το όντα ___;', answer: 'σι', options: ['σι', 'νι', 'νάμου'], translation: 'Onde fica o quarto dele/dela?' },
        ],
        voice: {
          bot: 'Εκιού τσαι εζού;',
          botTranslation: 'Você e eu?',
          expected: ['Εζού τσαι εκιού.', 'εζού'],
          hint: 'Responda confirmando com “Εζού τσαι εκιού.” (eu e você).',
        },
        communityPrompt: 'Apresente-se em tsakônio usando “εζού” (eu) e “εκιού” (você), juntando os dois com “τσαι” (e).',
      },
      {
        id: 'tsd-u1-l2',
        title: 'Γουναίκα, μάτη, λιούκο',
        kind: 'licao',
        words: ['γουναίκα', 'μάτη', 'σάτη', 'βασιλλία', 'λιούκο', 'βου'],
        cloze: [
          { sentence: 'Νι έννι ___.', answer: 'γουναίκα', options: ['γουναίκα', 'μάτη', 'σάτη'], translation: 'Ela é uma mulher.' },
          { sentence: 'Νι έννι ___.', answer: 'λιούκο', options: ['λιούκο', 'βου', 'βασιλλία'], translation: 'Isto é um lobo.' },
          { sentence: 'Νι έννι ___.', answer: 'βασιλλία', options: ['βασιλλία', 'μάτη', 'βου'], translation: 'Ele é rei.' },
        ],
        voice: {
          bot: 'Νι έννι λιούκο;',
          botTranslation: 'Isto é um lobo?',
          expected: ['Νι έννι λιούκο.', 'λιούκο'],
          hint: 'Confirme com “Νι έννι λιούκο.” (isto é um lobo).',
        },
        communityPrompt: 'Descreva sua família em tsakônio usando “μάτη” (mãe) e “σάτη” (filha).',
      },
      {
        id: 'tsd-u1-l3',
        title: 'Test: εζού, νι, λιούκο',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Εκιού τσαι εζού; Νι έννι λιούκο;',
          botTranslation: 'Você e eu? Isto é um lobo?',
          expected: ['Εζού τσαι εκιού. Νι έννι λιούκο.', 'εζού', 'λιούκο'],
          hint: 'Confirme as duas perguntas, uma depois da outra.',
        },
        communityPrompt: 'Escreva três frases curtas apresentando pessoas e animais, usando “νι έννι” (ele/isto é).',
      },
    ],
  },
  {
    id: 'tsd-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Νι έννι θάσσα',
    emoji: '🌊',
    card: {
      id: 'tsd-c2',
      title: 'Montanhas, noites e o mar',
      emoji: '🌊',
      history:
        'A Tsakônia tem três dialetos: o do norte (aldeias de Sitena e Kastanítsa), o do sul (Melána, Prastos, Vaskina, Tiros, Leonídio, Pragmateftís e Sapounakéika) e o de Propôntis — falado numa antiga colônia tsakônia no Mar de Mármara (Própontis), perto de Gönen, até seus moradores serem reassentados na Grécia na troca de populações entre a Grécia e a Turquia em 1924. O dialeto de Propôntis parece ter se extinguido por volta de 1970, depois de já ter deixado de ser a língua principal da comunidade em 1914, com o exílio interno provocado pela Primeira Guerra Mundial.',
      culture_tip:
        'Kastanítsa, uma das aldeias do norte da Tsakônia, é famosa por suas castanhas — seu próprio nome vem da palavra grega para essa fruta. Historicamente, os tsakônios eram conhecidos como pedreiros e pastores, migrando sazonalmente: saíam depois do dia de São Demétrio e voltavam na Páscoa, trabalhando em lugares como a Ática.',
      grammar_why:
        'O verbo “ser/estar” muda de forma em cada pessoa (“έννι”, ele/ela/isto é; “ένει”, eu sou), e os outros verbos do tsakônio podem formar o presente com essa cópula mais um particípio — que muda de forma conforme o GÊNERO de quem fala, não só a pessoa, um traço raro entre as línguas gregas (ver gramatica.ts, tsd-g4).',
      grammar_examples: [
        ['Νι έννι θάσσα.', 'Isto é o mar.'],
        ['Ένει φερήκχου.', '(Eu) trago. (dito por um homem)'],
        ['Ενέγκα.', '(Eu) trouxe.'],
      ],
      character_guide: [
        ['σχ', 'som “x” de “xícara” (um só som)', 'σχίνα (montanha)'],
        ['τθ', 'um “t” soprado', 'τθούμα (boca)'],
        ['πφ', 'um “p” soprado', 'πφη (que)'],
        ['νν, λλ', '“n”/“l” sem palatalização', '—'],
      ],
    },
    lessons: [
      {
        id: 'tsd-u2-l1',
        title: 'Κούε, κούλικα, θάσσα',
        kind: 'licao',
        words: ['κούε', 'κούλικα', 'βάννε', 'όνε', 'ουιθί', 'θάσσα'],
        cloze: [
          { sentence: 'Νι έννι ___.', answer: 'κούε', options: ['κούε', 'κούλικα', 'όνε'], translation: 'É um cachorro.' },
          { sentence: 'Νι έννι ___.', answer: 'βάννε', options: ['βάννε', 'ουιθί', 'θάσσα'], translation: 'É um cordeiro.' },
          { sentence: 'Νι έννι ___.', answer: 'θάσσα', options: ['θάσσα', 'όνε', 'κούλικα'], translation: 'É o mar.' },
        ],
        voice: {
          bot: 'Νι έννι ουιθί;',
          botTranslation: 'Isto é uma cobra?',
          expected: ['Νι έννι ουιθί.', 'ουιθί'],
          hint: 'Confirme com “Νι έννι ουιθί.” (isto é uma cobra).',
        },
        communityPrompt: 'Liste os animais da fazenda em tsakônio usando “βου” (boi), “κούλικα” (vaca) e “βάννε” (cordeiro).',
      },
      {
        id: 'tsd-u2-l2',
        title: 'Αμέρα, νιούτθα, σάμερε',
        kind: 'licao',
        words: ['αμέρα', 'νιούτθα', 'σάμερε', 'επφέρζι', 'ύο', 'μάλι'],
        cloze: [
          { sentence: 'Νι έννι ___.', answer: 'αμέρα', options: ['αμέρα', 'νιούτθα', 'ύο'], translation: 'É dia.' },
          { sentence: '___.', answer: 'Σάμερε', options: ['Σάμερε', 'Επφέρζι', 'Κάτου'], translation: 'Hoje.' },
          { sentence: 'Νι έννι ___.', answer: 'μάλι', options: ['μάλι', 'ύο', 'νιούτθα'], translation: 'É uma maçã.' },
        ],
        voice: {
          bot: 'Σάμερε τσαι επφέρζι;',
          botTranslation: 'Hoje e ontem?',
          expected: ['Σάμερε τσαι επφέρζι.', 'σάμερε'],
          hint: 'Repita “Σάμερε τσαι επφέρζι.” (hoje e ontem).',
        },
        communityPrompt: 'Escreva sobre o seu dia usando “αμέρα” (dia), “νιούτθα” (noite), “σάμερε” (hoje) e “επφέρζι” (ontem).',
      },
      {
        id: 'tsd-u2-l3',
        title: 'Test: θάσσα, αμέρα',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Νι έννι θάσσα; Σάμερε τσαι επφέρζι;',
          botTranslation: 'É o mar? Hoje e ontem?',
          expected: ['Νι έννι θάσσα. Σάμερε τσαι επφέρζι.', 'θάσσα'],
          hint: 'Confirme as duas frases, uma depois da outra.',
        },
        communityPrompt: 'Escreva cinco frases curtas sobre a natureza e o tempo, usando pelo menos quatro palavras das duas unidades.',
      },
    ],
  },
];
