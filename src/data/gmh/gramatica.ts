import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do alto-alemão médio — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: Wikipédia em inglês (“Middle High German” — período, dialetos, obras, 4 casos, 3
 * gêneros, verbos fortes/fracos, e a marcação moderna de vogal longa que os manuscritos originais
 * não tinham); Wiktionary (seção “Middle High German” de “sīn”/“sun”/“tohter”/“daȥ”, com tabela de
 * conjugação/declinação de cada um, conferida individualmente).
 */
export const GRAMMAR_GMH: GrammarTopic[] = [
  {
    id: 'gmh-g1',
    level: 'A1.1',
    title: 'A grafia que os próprios manuscritos não usavam',
    emoji: '🪶',
    summary: 'Os manuscritos do alto-alemão médio quase nunca marcavam vogal longa — o circunflexo (â ê î ô û) que os livros modernos usam é uma convenção acadêmica do século XIX, não algo que os escribas escreviam.',
    sections: [
      {
        text: 'Segundo a Wikipédia, a duração da vogal é quase sempre deixada sem marca nos manuscritos originais — as edições modernas é que acrescentam o circunflexo para mostrar qual vogal era longa. Essa convenção vem sobretudo de Karl Lachmann, no século XIX, e é a que os manuais acadêmicos (e este pacote) seguem hoje. Os manuscritos também variam muito de região para região; a edição moderna “nivela” boa parte dessa variação.',
        table: {
          head: ['Palavra (grafia moderna normalizada)', 'O que o manuscrito tende a escrever', 'Tradução'],
          rows: [
            ['hūs', 'hus (sem marca de vogal longa)', 'casa'],
            ['wīn', 'win', 'vinho'],
            ['brōt', 'brot', 'pão'],
          ],
        },
        examples: [['Daȥ ist mīn hūs.', 'Essa é a minha casa.']],
      },
      {
        heading: 'A letra “ȥ”',
        text: 'Os manuais modernos também usam uma letra especial, o “ȥ” de rabinho (às vezes escrita apenas “z” ou “s”), para um som que os manuscritos originais grafavam de formas variadas. Este pacote segue essa mesma convenção moderna nas poucas palavras em que ela aparece, como “daȥ” (isso/aquilo) e “wīȥ” (branco).',
      },
    ],
    pitfalls: ['Achar que o circunflexo (â ê î ô û) é algo que os cavaleiros e poetas da época escreviam: é uma marca acadêmica moderna, útil para quem estuda hoje, mas ausente da maioria dos manuscritos reais.'],
    quiz: [
      {
        question: 'Quem marcava a vogal longa com circunflexo (â ê î ô û) no alto-alemão médio?',
        options: ['Os editores acadêmicos modernos, não os escribas da época', 'Os próprios escribas medievais, sempre', 'Nenhuma fonte marca vogal longa nesse idioma'],
        answer: 'Os editores acadêmicos modernos, não os escribas da época',
        explanation: 'Os manuscritos originais quase nunca marcam a duração da vogal — foi a edição acadêmica (sobretudo a partir de Karl Lachmann, no século XIX) que criou essa convenção para ajudar quem estuda o idioma hoje.',
      },
    ],
  },
  {
    id: 'gmh-g2',
    level: 'A1.1',
    title: 'Quatro casos, três gêneros',
    emoji: '📜',
    summary: 'O alto-alemão médio ainda tinha os quatro casos do alemão de hoje (nominativo, genitivo, dativo, acusativo) e três gêneros — “sun” (filho) e “tohter” (filha) mostram como o substantivo muda de forma.',
    sections: [
      {
        text: 'Segundo a Wikipédia, os substantivos se declinavam em quatro casos, dois números e três gêneros, com classes fortes e fracas — a mesma arquitetura básica do alemão moderno, só que mais rica. “Sun” (filho, masculino) é um substantivo forte sem Umlaut; “tohter” (filha, feminino) é um substantivo antigo em -r que não muda no singular, mas ganha Umlaut no plural.',
        table: {
          head: ['Caso', 'sun (filho), singular', 'tohter (filha), singular'],
          rows: [
            ['Nominativo', 'sun', 'tohter'],
            ['Genitivo', 'sunes / suns', 'tohter'],
            ['Dativo', 'sune', 'tohter'],
            ['Acusativo', 'sun', 'tohter'],
          ],
        },
        examples: [['Daȥ ist mīn sun.', 'Esse é o meu filho.']],
      },
      {
        heading: 'O plural de tohter muda de som',
        text: 'No plural, “tohter” ganha Umlaut e passa a “töhter” — o mesmo tipo de mudança de vogal que o alemão moderno guarda até hoje em palavras como “Mutter/Mütter” (mãe/mães). Esse pacote, no nível A1, ainda não ensina o plural dos substantivos.',
      },
    ],
    pitfalls: ['Achar que o alto-alemão médio já tinha só dois casos como o inglês moderno: ele ainda tinha os quatro casos cheios, herdados do alto-alemão antigo e do germânico comum.'],
    quiz: [
      {
        question: 'Quantos casos gramaticais o alto-alemão médio tinha para o substantivo?',
        options: ['Quatro (nominativo, genitivo, dativo, acusativo)', 'Dois', 'Nenhum, a ordem das palavras já bastava'],
        answer: 'Quatro (nominativo, genitivo, dativo, acusativo)',
        explanation: 'O alto-alemão médio herdou os mesmos quatro casos que o alemão moderno ainda tem — a mesma arquitetura básica, com classes fortes e fracas de substantivo.',
      },
    ],
  },
  {
    id: 'gmh-g3',
    level: 'A1.2',
    title: 'O verbo sīn (ser/estar): quase igual há 800 anos',
    emoji: '🧑',
    summary: 'Das poucas coisas do alto-alemão médio que quase não mudaram: “ich bin, du bist, ër ist, wir birn, ir birt, sie sint” já é muito parecido com o “ich bin, du bist, er ist, wir sind, ihr seid, sie sind” do alemão de hoje.',
    sections: [
      {
        text: 'O verbo “sīn” (também chamado pelo infinitivo alternativo “wësen”) é irregular, como em quase toda língua germânica. A tabela do presente do indicativo mostra que a 1ª e a 2ª pessoa já são praticamente idênticas ao alemão moderno — é o plural que mudou mais (birn/birt em vez de sind/seid).',
        table: {
          head: ['Pronome', 'Tradução', 'sīn (presente)'],
          rows: [
            ['ich', 'eu', 'bin'],
            ['du', 'tu', 'bist'],
            ['ër', 'ele', 'ist'],
            ['wir', 'nós', 'birn'],
            ['ir', 'vós', 'birt'],
            ['sie', 'eles', 'sint'],
          ],
        },
        examples: [
          ['Ich bin Linu.', 'Eu sou Linu.'],
          ['Wir birn vriunt.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Tentar usar “haben” (ter) com a mesma segurança: nenhuma fonte conferida traz a conjugação do presente de “haben” especificamente para o alto-alemão médio — por isso este pacote não ensina esse verbo ainda.'],
    quiz: [
      {
        question: 'Como se diz “nós somos amigos” em alto-alemão médio?',
        options: ['Wir birn vriunt.', 'Wir sint vriunt.', 'Ir birt vriunt.'],
        answer: 'Wir birn vriunt.',
        explanation: '“Wir” é a primeira pessoa do plural, com a forma “birn” do verbo “sīn” — diferente do “wir sind” do alemão moderno, mas já reconhecível.',
      },
    ],
  },
  {
    id: 'gmh-g4',
    level: 'A1.2',
    title: 'du e ir: número, não cortesia confirmada',
    emoji: '🤝',
    summary: '“Du” é singular e “ir” é plural — mas, ao contrário do francês antigo (“tu”/“vos”) e do castelhano medieval (“tú”/“vos”), nenhuma fonte conferida confirma que “ir” já funcionava como tratamento cortês no alto-alemão médio.',
    sections: [
      {
        text: '“Ir” é o plural de “du”, assim como “wir” é o plural de “ich”. No alemão moderno, “ihr” (vindo de “ir”) pode soar como um tratamento mais antigo ou regional, e o uso cortês de um pronome de plural é bem documentado em outras línguas da época (como o francês antigo e o castelhano medieval, ambos já neste aplicativo). Mas, para o PRÓPRIO alto-alemão médio, o uso cortês de “ir” dirigido a uma só pessoa é descrito, nas fontes conferidas, como pouco atestado e talvez regional — não uma regra firme que este pacote possa ensinar como fato.',
        examples: [
          ['Bist du ritter?', 'Tu és cavaleiro? (uma pessoa)'],
          ['Ir birt ritter.', 'Vós sois cavaleiros. (mais de uma pessoa)'],
        ],
      },
    ],
    pitfalls: ['Supor, só porque o francês antigo e o castelhano medieval (também neste aplicativo) têm um “vos” de cortesia bem documentado, que o alto-alemão médio funciona igual: aqui a fonte não confirma isso, e este pacote prefere não inventar.'],
    quiz: [
      {
        question: 'O alto-alemão médio tinha uma forma de cortesia (como o “vos” do francês antigo) claramente confirmada?',
        options: ['Não — as fontes conferidas descrevem esse uso como pouco atestado, não uma regra firme', 'Sim, “ir” era sempre a forma cortês para uma só pessoa', 'Sim, mas só na poesia'],
        answer: 'Não — as fontes conferidas descrevem esse uso como pouco atestado, não uma regra firme',
        explanation: 'Diferente do francês antigo e do castelhano medieval, a fonte consultada não confirma uma regra firme de cortesia para “ir” no alto-alemão médio — por isso este pacote trata “du”/“ir” só como singular/plural.',
      },
    ],
  },
];
