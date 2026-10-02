import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tsakônio — só A1.1 e A1.2 (pacote incompleto, ver index.ts). Toda a análise
 * vem de en.wikipedia.org/wiki/Tsakonian_Greek (classificação, fonologia, dígrafos, tabela de
 * conjugação do verbo “ser/estar” e do verbo “trazer”) e de entradas individuais do Wikcionário em
 * inglês (en.wiktionary.org, categoria “Tsakonian lemmas”) para a etimologia dos pronomes — ver o
 * cabeçalho de vocabulario.ts para a citação completa de cada fonte.
 */
export const GRAMMAR_TSD: GrammarTopic[] = [
  {
    id: 'tsd-g1',
    level: 'A1.1',
    title: 'Do dórico, não do coiné',
    emoji: '🏛️',
    summary:
      'O tsakônio descende do dórico antigo (o grego falado em Esparta e na região do Peloponeso), não do ramo ático-jônico de que vêm o grego padrão e todos os outros dialetos gregos modernos — por isso é o caso mais forte de “língua separada”, e não só “dialeto”, dentro do ramo helênico.',
    sections: [
      {
        text:
          'A Wikipédia em inglês resume assim: “Unlike all other extant varieties of Greek, Tsakonian derives from Doric Greek rather than from the Attic–Ionic branch” (diferente de todas as outras variedades vivas do grego, o tsakônio descende do grego dórico, não do ramo ático-jônico). E, mais adiante: “Although Tsakonian and standard Modern Greek are related, they are not mutually intelligible” (embora o tsakônio e o grego padrão moderno sejam parentes, eles não são mutuamente inteligíveis). Essa origem dórica aparece em palavras do dia a dia: o tsakônio preserva o “digama” (ϝ, a letra grega antiga para o som /w/), que o ático já tinha perdido na época clássica. É o caso de “βάννε” (cordeiro, ovelha): vem do dórico “ϝαρήν” (wărḗn), com o digama preservado como o som /v/, enquanto o ático “ἀρήν” (arḗn) já não tinha mais esse som.',
        table: {
          head: ['Grego antigo (dórico)', 'Grego antigo (ático)', 'Tsakônio', 'Tradução'],
          rows: [
            ['ϝαρήν (wărḗn)', 'ἀρήν (arḗn)', 'βάννε', 'cordeiro, ovelha'],
            ['ᾱ̔μέρᾱ (hāmérā)', 'ἡμέρα (hēmérā)', 'αμέρα', 'dia'],
            ['τύ (tú)', 'σύ (sú)', 'εκιού', 'tu, você'],
          ],
        },
        examples: [
          ['Νι έννι βάννε.', 'Isto é um cordeiro.'],
          ['Νι έννι αμέρα.', 'Isto é dia.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o tsakônio é só um “sotaque” do grego moderno: a Wikipédia é explícita em dizer que não há inteligibilidade mútua entre as duas línguas, apesar do parentesco.',
      'Esperar que toda palavra grega tenha um equivalente previsível em tsakônio pela simples troca de letras: mudanças como a queda do /s/ final (rotacismo) e a redução de grupos consonantais (ver tsd-g2) tornam irreconhecível o parentesco em muitas palavras.',
    ],
    quiz: [
      {
        question: 'De que ramo do grego antigo descende o tsakônio?',
        options: ['Do dórico', 'Do ático-jônico (o mesmo do grego padrão)', 'Do coiné bizantino'],
        answer: 'Do dórico',
        explanation:
          'A Wikipédia é clara: “Unlike all other extant varieties of Greek, Tsakonian derives from Doric Greek rather than from the Attic–Ionic branch.”',
      },
      {
        question: 'Quem fala grego padrão entende tsakônio sem estudar?',
        options: ['Não — as duas línguas não são mutuamente inteligíveis, apesar do parentesco', 'Sim, perfeitamente', 'Só a forma escrita, nunca a falada'],
        answer: 'Não — as duas línguas não são mutuamente inteligíveis, apesar do parentesco',
        explanation: '“Although Tsakonian and standard Modern Greek are related, they are not mutually intelligible” (Wikipédia).',
      },
    ],
  },
  {
    id: 'tsd-g2',
    level: 'A1.1',
    title: 'Dígrafos: letras extras para sons que o grego padrão não tem',
    emoji: '🔤',
    summary:
      'O tsakônio se escreve com o alfabeto grego comum, mas usa dígrafos (duas letras para um só som) para representar sons que o grego padrão não tem — fruto de mudanças como a palatalização (amolecimento de consoantes antes de certas vogais) e a aspiração.',
    sections: [
      {
        text:
          'Segundo a Wikipédia, o tsakônio usa “the standard Greek alphabet, along with digraphs to represent certain sounds”. O linguista Thanásis Kostákis criou ainda uma notação alternativa, com pontos, espírito áspero e cáron (“Thanasis Costakis invented an orthography using dots, spiritus asper, and caron for use in his works”), usada nos livros dele e reaproveitada por algumas fontes acadêmicas — por isso a mesma palavra às vezes aparece escrita de duas formas diferentes (ex.: “σχίνα” e “σ̌ίνα” para “montanha”).',
        table: {
          head: ['Dígrafo', 'Som (IPA)', 'Exemplo'],
          rows: [
            ['σχ', 'ʃ (como o “x” de “xícara”)', 'σχίνα (montanha)'],
            ['τθ', 'tʰ (um “t” soprado)', 'τθούμα (boca)'],
            ['πφ', 'pʰ (um “p” soprado)', 'πφη (que, pronome relativo)'],
            ['νν / λλ', 'n / l SEM palatalização (sem o amolecimento comum em outras posições)', '—'],
          ],
        },
        examples: [
          ['Νι έννι σχίνα.', 'Isto é uma montanha.'],
          ['Νι έννι τθούμα.', 'Isto é a boca.'],
        ],
      },
    ],
    pitfalls: [
      'Ler “σχ”, “τθ”, “πφ” e “κχ” como se fossem duas letras separadas, igual soletrando no grego padrão: no tsakônio, cada par de letras representa UM SÓ som.',
      'Estranhar encontrar a mesma palavra escrita de duas formas em fontes diferentes: o alfabeto grego com dígrafos (o mais comum hoje) e a notação de Kostákis, com pontos e cáron, convivem nos textos sobre a língua.',
    ],
    quiz: [
      {
        question: 'O que o dígrafo “σχ” representa no tsakônio?',
        options: ['Um só som, [ʃ] (o “x” de “xícara”)', 'Dois sons separados, “s” e depois “ch”', 'A letra “x” do alfabeto latino'],
        answer: 'Um só som, [ʃ] (o “x” de “xícara”)',
        explanation: 'Dígrafos como “σχ”, “τθ” e “πφ” existem justamente para dar um símbolo a sons que uma só letra grega não representa.',
      },
      {
        question: 'Além do alfabeto grego com dígrafos, que outra notação existe para escrever tsakônio?',
        options: ['A notação de Kostákis, com pontos, espírito áspero e cáron', 'O alfabeto cirílico', 'Não existe nenhuma outra notação'],
        answer: 'A notação de Kostákis, com pontos, espírito áspero e cáron',
        explanation: 'Criada por Thanásis Kostákis para os próprios livros de gramática e dicionário da língua.',
      },
    ],
  },
  {
    id: 'tsd-g3',
    level: 'A1.2',
    title: 'Pronomes vindos do dórico',
    emoji: '🙋',
    summary:
      'Os pronomes pessoais do tsakônio vêm direto do dórico antigo, por isso costumam ser bem diferentes dos do grego padrão (que vêm do ático).',
    sections: [
      {
        text:
          'O Wikcionário mostra a etimologia de cada pronome tsakônio separadamente. “Εκιού” (tu, você) vem do dórico “τύ”, enquanto o grego padrão usa “εσύ”, descendente do ático “σύ”. “Νάμου” (nós, nosso) vem do dórico “ᾱ̔μῶν”, contra o ático “ἡμῶν” (> grego padrão “εμείς”). “Σι” (eles, elas) vem do dórico “σφι”, enquanto o ático tinha “σφεῖς”. Mesmo “εζού” (eu), que o Wikcionário deriva do grego antigo em geral (não especificamente do dórico), já soa bem diferente do “εγώ” do grego padrão.',
        table: {
          head: ['Tsakônio', 'Vem de (grego antigo)', 'Tradução'],
          rows: [
            ['εζού', 'ἐγώ', 'eu, me, meu'],
            ['εκιού', 'dórico τύ (ático: σύ)', 'tu, você, teu'],
            ['νι', 'dórico νίν', 'ele, ela, isto'],
            ['νάμου', 'dórico ᾱ̔μῶν (ático: ἡμῶν)', 'nós, nosso'],
            ['νιούμου', 'dórico ὑμῶν', 'vós, vosso'],
            ['σι', 'dórico σφι (ático: σφεῖς)', 'eles, elas, seu'],
          ],
        },
        examples: [
          ['Εζού τσαι εκιού.', 'Eu e você.'],
          ['Groússa námou eíni ta Tsakónika.', 'Nossa língua é o tsakônio.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “νι” (ele/ela, singular) com “σι” (eles/elas, plural): são pessoas gramaticais diferentes, a 3ª do singular e a 3ª do plural.',
      'Esperar formas parecidas com o grego padrão (εγώ, εσύ, αυτός...): os pronomes tsakônios vêm de um ramo diferente do grego antigo (o dórico) e muitas vezes não lembram nada o grego padrão.',
    ],
    quiz: [
      {
        question: 'De que forma dórica vem o pronome tsakônio “εκιού” (tu, você)?',
        options: ['De “τύ”', 'De “σύ”', 'De “ἐγώ”'],
        answer: 'De “τύ”',
        explanation: 'O Wikcionário cita: “from Doric Greek τύ (tú); compare Attic Greek σύ (sú)”.',
      },
      {
        question: 'O que significa “σι” em tsakônio?',
        options: ['Eles, elas (3ª pessoa do plural)', 'Eu (1ª pessoa do singular)', 'Tu, você (2ª pessoa)'],
        answer: 'Eles, elas (3ª pessoa do plural)',
        explanation: '“Σι” vem do dórico “σφι” e aparece, por exemplo, na frase “Κιά έννι το όντα σι;” (onde fica o quarto dele/dela?).',
      },
    ],
  },
  {
    id: 'tsd-g4',
    level: 'A1.2',
    title: 'A cópula “έννι”: ser/estar no presente e no passado',
    emoji: '🔁',
    summary:
      'O verbo “ser/estar” do tsakônio tem uma forma própria para cada pessoa, bem diferente do grego padrão — e os outros verbos formam o presente com essa cópula mais um particípio que muda conforme o GÊNERO do sujeito, não só a pessoa.',
    sections: [
      {
        text:
          'A tabela de conjugação do artigo da Wikipédia dá as seis formas do presente e do passado da cópula tsakônia:',
        table: {
          head: ['Pessoa', 'Presente (“é/está”)', 'Passado (“era/esteve”)'],
          rows: [
            ['eu', 'ένει (ení)', 'έμα (éma)'],
            ['tu', 'έσει (esí)', 'έσα (ésa)'],
            ['ele/ela/isto', 'έννι (éni)', 'έκη (éki)'],
            ['nós', 'έμε (éme)', 'έμαϊ (émaï)'],
            ['vós', 'έτθε (éthe)', 'έτθαϊ (éthaï)'],
            ['eles/elas', 'είνι (íni)', 'ήγκιαϊ (ígiaï)'],
          ],
        },
        examples: [
          ['Νι έννι λιούκο.', 'Ele/isto é lobo.'],
          ['Κιά έννι το όντα σι;', 'Onde fica o quarto dele/dela?'],
        ],
      },
      {
        heading: 'O presente perifrástico dos outros verbos',
        text:
          'A Wikipédia descreve o tsakônio como preservando “participial periphrasis for the present tense” (uma construção perifrástica com particípio, para o tempo presente) — um traço que o grego padrão não tem mais. Com o verbo “trazer”, por exemplo, a mesma pessoa (“eu trago”) muda de forma conforme o GÊNERO de quem fala: “ένει φερήκχου” (um homem), “ένει φερήκχα” (uma mulher), “ένει φερήκχουντα” (neutro). Já o passado simples (aoristo) não tem essa concordância de gênero: “ενέγκα” (eu trouxe), “ενέντζερε” (tu trouxeste), “ενέντζε” (ele/ela trouxe).',
        examples: [
          ['Ένει φερήκχου.', '(Eu) trago. (dito por um homem)'],
          ['Ένει φερήκχα.', '(Eu) trago. (dito por uma mulher)'],
          ['Ενέγκα.', '(Eu) trouxe.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o presente de todos os verbos tsakônios muda só pela pessoa, como no grego padrão: muitos verbos usam a cópula (“ένει”, “έννι”...) mais um particípio que muda de forma conforme o GÊNERO do sujeito — um traço raro entre as variedades do grego.',
      'Esperar a cópula do grego padrão (είμαι, είσαι, είναι...): nenhuma das seis formas tsakônias se escreve igual à forma padrão correspondente.',
    ],
    quiz: [
      {
        question: 'Como se diz “ele/ela/isto é” em tsakônio?',
        options: ['έννι', 'ένει', 'είνι'],
        answer: 'έννι',
        explanation: '“Έννι” é a 3ª pessoa do singular do presente — aparece, por exemplo, em “Κιά έννι το όντα σι;” (onde fica o quarto dele/dela?).',
      },
      {
        question: 'O que muda, de forma incomum, no presente de verbos como “trazer” no tsakônio?',
        options: ['O particípio muda de forma conforme o gênero do sujeito', 'O verbo não tem presente, só passado', 'O verbo é sempre igual em todas as pessoas'],
        answer: 'O particípio muda de forma conforme o gênero do sujeito',
        explanation: '“Ένει φερήκχου” (um homem), “ένει φερήκχα” (uma mulher) e “ένει φερήκχουντα” (neutro) significam todos “eu trago”, mas o particípio concorda em gênero com quem fala.',
      },
    ],
  },
];
