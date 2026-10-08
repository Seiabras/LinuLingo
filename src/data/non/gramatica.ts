import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do nórdico antigo — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: Zoëga, "A Concise Dictionary of Old Icelandic" (1910); Barnes, "A New Introduction to
 * Old Norse"; "Old Norse Online" (UT Austin); para as runas — Wikipedia "Younger Futhark" e
 * openl.io/alphabets/younger-futhark (nomes, ordem e valores sonoros das 16 runas, conferidos
 * contra os dois).
 */
export const GRAMMAR_NON: GrammarTopic[] = [
  {
    id: 'non-g1',
    level: 'A1.1',
    title: 'Pronúncia: þ, ð, æ, ø e as vogais longas',
    emoji: '🔤',
    summary: 'O nórdico antigo tem quatro letras que o português não tem (þ, ð, æ, ø/ǫ) e marca vogal longa com acento agudo — nenhuma delas muda o SOM da vogal, só a duração.',
    sections: [
      {
        text: 'A ortografia usada aqui é a normalizada acadêmica (a mesma do dicionário de Zoëga e das gramáticas modernas) — os próprios manuscritos medievais eram bem menos consistentes. Duas letras marcam sons que o português não distingue por escrito: þ (þorn) é o "th" surdo do inglês "thing"; ð (eð) é o "th" sonoro do inglês "this". Repare que são letras DIFERENTES para sons diferentes, não a mesma letra em dois contextos.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['þ (þorn)', '"th" surdo (inglês "thing")', 'þökk ("THÖKK", obrigado)'],
            ['ð (eð)', '"th" sonoro (inglês "this")', 'goðr ("GO-ðr", bom, variante antiga de góðr)'],
            ['æ', '"ai" aberto e alongado (inglês "cat")', 'ætt ("AIT", família)'],
            ['ö / ø', 'vogal arredondada, como o alemão/sueco ö', 'köttr ("KÖTT-r", gato)'],
            ['vogal com acento (á é í ó ú ý)', 'vogal LONGA — dura o dobro, mesmo som, mais tempo', 'vín [viːn] (vinho) × vin (não existe sozinha; compare vinr)'],
          ],
        },
        examples: [
          ['Þökk fyrir brauðit.', 'Obrigado pelo pão.'],
          ['Vínit er gott.', 'O vinho é bom.'],
        ],
      },
      {
        heading: 'O -r final do nominativo é sempre pronunciado',
        text: 'Muitos substantivos masculinos terminam em "-r" quando são o SUJEITO da frase (vinr, hundr, köttr, sonr) — esse "-r" nunca é mudo, ao contrário do que acontece com o -r final em outras línguas.',
        examples: [['Hundr minn er mikill.', 'Meu cachorro é grande.']],
      },
    ],
    pitfalls: [
      'Confundir þ e ð: são letras diferentes para sons diferentes (surdo × sonoro), não duas grafias do mesmo som.',
      'Ignorar o acento nas vogais achando que é só decoração: á/é/í/ó/ú/ý marcam vogal LONGA, uma diferença real de pronúncia (e às vezes de sentido) em nórdico antigo.',
    ],
    quiz: [
      {
        question: 'O que diferencia þ de ð no nórdico antigo?',
        options: ['þ é surdo, ð é sonoro — letras diferentes para sons diferentes', 'São a mesma letra, só varia a grafia', 'þ só aparece no fim da palavra'],
        answer: 'þ é surdo, ð é sonoro — letras diferentes para sons diferentes',
        explanation: 'þ (þorn) soa como o "th" de "thing" (inglês); ð (eð) soa como o "th" de "this" — são fonemas distintos, cada um com sua própria letra.',
      },
    ],
  },
  {
    id: 'non-g2',
    level: 'A1.1',
    title: 'O Futhark Mais Recente: as 16 runas vikings',
    emoji: 'ᚠ',
    summary: 'Na era viking (séc. VIII–XII), o nórdico antigo também se escrevia em runas — o Futhark Mais Recente (Younger Futhark), um alfabeto de só 16 símbolos, usado em pedras rúnicas e inscrições.',
    sections: [
      {
        text: 'As sagas e as Eddas, que são a maior fonte de vocabulário do nórdico antigo, foram escritas bem depois, já em alfabeto latino (séc. XIII, principalmente na Islândia cristã). Mas durante a era viking de verdade, a escrita usada era rúnica: o Futhark Mais Recente, reduzido de 24 runas (o Futhark Antigo, de um período anterior) para só 16 — cada runa passou a servir para vários sons parecidos de uma vez (ex.: a mesma runa "kaun" vale tanto para [k] quanto para [g]), o que torna a leitura de inscrições reais bem mais ambígua do que a escrita latina normalizada usada no resto deste curso.',
        heading: 'As 16 runas, na ordem tradicional',
        table: {
          head: ['Runa', 'Nome', 'Som', 'Significado do nome'],
          rows: [
            ['ᚠ', 'fé', '[f]', 'riqueza, gado'],
            ['ᚢ', 'úr', '[u], [v], [w], [y], [ø]', 'chuva / ferro'],
            ['ᚦ', 'þurs', '[þ], [ð]', 'gigante'],
            ['ᚬ', 'óss', '[o], [ɔ]', 'um deus (ásvir)'],
            ['ᚱ', 'reið', '[r]', 'cavalgada'],
            ['ᚴ', 'kaun', '[k], [g], [ŋ]', 'ferida'],
            ['ᚼ', 'hagall', '[h]', 'granizo'],
            ['ᚾ', 'nauðr', '[n]', 'necessidade'],
            ['ᛁ', 'íss', '[i], [e]', 'gelo'],
            ['ᛅ', 'ár', '[a]', 'colheita, fartura'],
            ['ᛋ', 'sól', '[s]', 'sol'],
            ['ᛏ', 'týr', '[t], [d]', 'o deus Týr'],
            ['ᛒ', 'bjarkan', '[b], [p]', 'bétula (árvore)'],
            ['ᛘ', 'maðr', '[m]', 'ser humano'],
            ['ᛚ', 'lögr', '[l]', 'água, lago'],
            ['ᛦ', 'ýr', '[ʀ]', 'teixo (árvore)'],
          ],
        },
        examples: [
          ['ᚠᛁᚾᛅᚱ', 'finnar (variante de ortografia rúnica de uma palavra atestada — veja como uma runa cobre vários sons: o "i" de "finnar" é a mesma runa ᛁ que também serve para [e])'],
        ],
      },
      {
        heading: 'Por que só 16 runas para tantos sons?',
        text: 'O Futhark Mais Recente é mais simples que o alfabeto latino que normalizamos neste curso — ele não distingue surdo de sonoro (a runa "kaun" serve tanto para [k] quanto para [g]) nem marca vogal longa separadamente. Por isso, a leitura de uma inscrição rúnica real depende muito do contexto — é um sistema feito para entalhar rápido em pedra ou madeira, não para registrar cada detalhe da língua falada.',
      },
    ],
    pitfalls: [
      'Achar que o Futhark Mais Recente (16 runas, era viking) é o mesmo que o Futhark Antigo (24 runas, período anterior, usado até por volta do séc. VIII): são dois sistemas diferentes, de épocas diferentes.',
      'Esperar que cada runa tenha um som só: várias runas do Futhark Mais Recente cobrem vários sons parecidos de uma vez (ex.: a runa "úr" serve pra [u], [v], [w], [y] e [ø]).',
    ],
    quiz: [
      {
        question: 'Quantas runas tem o Futhark Mais Recente (Younger Futhark), o usado na era viking?',
        options: ['16', '24', '26'],
        answer: '16',
        explanation: 'O Futhark Antigo tinha 24 runas; na era viking ele foi simplificado para o Futhark Mais Recente, de só 16 runas, cada uma cobrindo vários sons parecidos.',
      },
      {
        question: 'Qual runa representa o som [f], e o que seu nome significa?',
        options: ['ᚠ (fé) — riqueza, gado', 'ᛏ (týr) — o deus Týr', 'ᛚ (lögr) — água, lago'],
        answer: 'ᚠ (fé) — riqueza, gado',
        explanation: '"Fé" é a primeira runa do Futhark (como o "alfa" do alfabeto grego) e dá nome ao próprio sistema — "fu-þ-ark" vem das suas primeiras seis runas: f, u, þ, a, r, k.',
      },
    ],
  },
  {
    id: 'non-g3',
    level: 'A1.2',
    title: 'Os pronomes e o verbo vera',
    emoji: '🙋',
    summary: 'Sete pronomes de sujeito (com "hon", um pronome só pra "ela" — como o português); o verbo "vera" ("ser/estar") é irregular, parecido com o "be" do inglês.',
    sections: [
      {
        text: 'Como em português, o pronome de sujeito costuma sumir: "em Auðr" já é "(eu) sou Auðr", porque a terminação do verbo já diz quem fala. O nórdico antigo distingue "hann" (ele) de "hon" (ela) — bem diferente de línguas como o inglês moderno, mas igual o português faz com ele/ela.',
        table: {
          head: ['Pronome', 'Tradução', 'vera (presente)'],
          rows: [
            ['ek', 'eu', 'em'],
            ['þú', 'você', 'ert'],
            ['hann / hon', 'ele / ela', 'er'],
            ['vér', 'nós', 'erum'],
            ['þér', 'vocês', 'eruð'],
            ['þeir', 'eles', 'eru'],
          ],
        },
        examples: [
          ['Ek em Auðr.', 'Eu sou Auðr.'],
          ['Vér erum vinir.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Confundir "er" (ele/ela é) com "ert" (você é): são pessoas diferentes do mesmo verbo, parecidas na escrita.'],
    quiz: [{ question: 'Como se diz "vocês são amigos" em nórdico antigo?', options: ['Þér eruð vinir.', 'Þér ert vinir.', 'Vér erum vinir.'], answer: 'Þér eruð vinir.', explanation: '"Þér" é a segunda pessoa do plural, com a forma "eruð" do verbo "vera".' }],
  },
  {
    id: 'non-g4',
    level: 'A1.2',
    title: 'Sem artigo, e os substantivos masculinos em -r',
    emoji: '📘',
    summary: 'O nórdico antigo não tem artigo definido nem indefinido — "hús" já pode ser "a casa", "uma casa" ou só "casa". Muitos substantivos masculinos terminam em "-r" no nominativo (quando são sujeito da frase).',
    sections: [
      {
        text: 'Como o latim, o nórdico antigo nunca teve palavras para "o", "a", "um" ou "uma" — o contexto decide. "Hús er lítit" pode ser "a casa é pequena", "uma casa é pequena" ou só "casa pequena é".',
        examples: [
          ['Hús er lítit.', 'A casa é pequena. / Uma casa é pequena.'],
          ['Vín er gott.', 'O vinho é bom.'],
        ],
      },
      {
        heading: 'O "-r" que aparece e desaparece',
        text: 'Muitos substantivos masculinos (vinr, hundr, köttr, sonr) terminam em "-r" quando são o SUJEITO da frase (caso nominativo) — mas esse "-r" some quando a palavra assume outras funções na frase (outros casos gramaticais, que ficam para unidades futuras). Por enquanto, repare só que "-r" final em palavra masculina quase sempre marca "é o sujeito desta frase".',
        table: {
          head: ['Palavra (sujeito, com -r)', 'Tradução'],
          rows: [
            ['vinr', 'amigo'],
            ['hundr', 'cachorro'],
            ['sonr', 'filho'],
          ],
        },
        examples: [['Hundr minn er mikill.', 'Meu cachorro é grande.']],
      },
    ],
    pitfalls: [
      'Tentar traduzir "o"/"a" para o nórdico antigo: não existe artigo; "hús" sozinha já pode significar "a casa", "uma casa" ou só "casa".',
      'Achar que o "-r" final é sempre parte da raiz da palavra: em muitos masculinos, ele é só a marca de "sujeito da frase" e desaparece noutros contextos gramaticais.',
    ],
    quiz: [{ question: 'Como se diz "o cachorro é grande" em nórdico antigo?', options: ['Hundr er mikill.', 'Hund er mikill.', 'Hundr er mikil.'], answer: 'Hundr er mikill.', explanation: '"Hundr" (com -r, sujeito) + "er" (vera) + "mikill" (grande, forma masculina concordando com "hundr").' }],
  },
];
