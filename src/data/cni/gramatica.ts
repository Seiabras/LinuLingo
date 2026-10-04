import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do asháninka — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * Montoya e Ramos (2024), “Ashaninka”, Enciclopedia de las lenguas indígenas u originarias del Perú en
 * el Bicentenario, vol. 1, pp. 93-97 (Tabla 4, afixos de pessoa: n(o)- / p(i)- / i-~y-~Ø- / o-~Ø- / a-;
 * “de verbo inicial”; posse marcada no nome possuído; substantivos alienáveis × inalienáveis; o
 * único caso é o locativo -ki); Kindberg (1980), introdução (p. 5: “los sustantivos normalmente
 * poseídos se dan con el prefijo posesivo de primera persona n- o no-… naco ‘mi mano’, acontsi
 * ‘huella digital’”) e verbetes citados; MINEDU (2021) para as frases. Todos os exemplos são frases
 * dessas fontes, no alfabeto oficial (ver vocabulario.ts).
 *
 * ojitari (‘chama-se’, 3ª pessoa feminina/não masculina): MINEDU 2021, entrada timarantapaintsiri
 * (“¿Jaoka ojitari ñakarontsi timarantapaintsiri?” — qual é o número que sobrou?) e o título da
 * cartilha da PUCP-RIDEI “¿Paita ojitari iñane Asháninka?” (como se chama a língua asháninka?).
 */
export const GRAMMAR_CNI: GrammarTopic[] = [
  {
    id: 'cni-g1',
    level: 'A1.1',
    title: 'No-, pi-, i-, o-: quem fala está no começo do verbo',
    emoji: '🙋',
    summary: 'O asháninka marca quem faz a ação com um prefixo no verbo; os pronomes soltos servem para dar ênfase.',
    sections: [
      {
        text: 'No asháninka, o verbo leva na frente um prefixo que diz quem faz a ação: no- (eu), pi- (você), i- (ele; y- antes de vogal), o- (ela) e a- (nós). Com o verbo “chamar-se”, dá para ver três pessoas em frases reais: nojita (eu me chamo), pijitari (você se chama, na pergunta) e ojitari (ela/isso se chama).',
        table: {
          head: ['Pessoa', 'Prefixo', 'Exemplo'],
          rows: [
            ['eu', 'no-', 'Nojita Kapeshi. (eu me chamo Kapeshi)'],
            ['você', 'pi-', '¿Jaoka pijitari? (como você se chama?)'],
            ['ele', 'i- / y-', 'Yamanantake apa… (o pai comprou…)'],
            ['ela', 'o-', '¿Jaoka ojitari…? (como se chama…?)'],
            ['nós', 'a-', 'Tsame ayea. (vamos comer)'],
          ],
        },
        examples: [
          ['¿Jaoka pijitari? — Nojita Kapeshi.', 'Como você se chama? — Eu me chamo Kapeshi.'],
          ['¿Pokajimpi? — Nopokake.', 'Você veio? — Vim.'],
          ['Icheriakero jananeki paperi.', 'O menino rasgou o papel.'],
        ],
      },
      {
        text: 'Os pronomes soltos existem — naro (eu), abiro (você), irinti (ele), irointi (ela) —, mas a pessoa já está no verbo, e por isso eles aparecem sobretudo para destacar alguém: “Meka abirori…”, agora é VOCÊ que… Repare também que o asháninka começa a frase pelo verbo: “Yamanantake apa aparoni tyobirimento” é, palavra por palavra, “comprou o pai uma motosserra”.',
        examples: [
          ['Meka abirori poimishitobero ora pankenatantsi jenokiniri.', 'Agora, você resolve o problema de cima.'],
          ['Yamanantake apa aparoni tyobirimento.', 'Meu pai comprou uma motosserra.'],
          ['Opempe irinti oitsokatsiri.', 'O tucano, ele é ovíparo.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “Pijita Linu” para falar de si: pi- é “você”; para “eu me chamo”, use no-: “Nojita Linu.”',
      'Usar “naro” e “abiro” em toda frase, como “eu” e “você” no português: a pessoa já está no prefixo do verbo, e o pronome solto soa como ênfase.',
    ],
    quiz: [
      { question: 'Como se diz “eu me chamo Linu”?', options: ['Nojita Linu.', 'Pijitari Linu.', 'Ojitari Linu.'], answer: 'Nojita Linu.', explanation: 'O prefixo no- é “eu”; pi- é “você” e o- é “ela”.' },
      { question: 'Qual prefixo quer dizer “você”?', options: ['pi-', 'no-', 'o-'], answer: 'pi-', explanation: '“¿Jaoka pijitari?” — como VOCÊ se chama?' },
    ],
  },
  {
    id: 'cni-g2',
    level: 'A1.1',
    title: 'Je, te, eiro e as perguntas com jaoka',
    emoji: '❓',
    summary: '“Je” é sim, “te” nega a frase, “eiro” nega uma ordem, e “jaoka” abre perguntas de onde, como e qual.',
    sections: [
      {
        // Kindberg 1980, pp. 395 (no: caari, eiro, te; no hay: te catsi), 437 (sí: iri, je), 275 (adonde:
        // ¿jaoca?); MINEDU 2021, entradas okantakotiri e pitetsitok
        text: '“Je” quer dizer sim. Para negar, “te” vem antes do verbo. Para dizer “não faça!”, o asháninka usa outra palavra, “eiro”. E “jaoka” é a palavra de pergunta que serve para onde, como e qual: “¿Jaoka pijitari?” (como você se chama?).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['je', 'sim', 'Je. (sim)'],
            ['te', 'não', 'Te nokomityaro… (não tenho dificuldade…)'],
            ['eiro', 'não (em ordens)', 'Eiro pipiakotaro… (não se esqueça…)'],
            ['jaoka', 'onde? como? qual?', '¿Jaoka pijitari? (como você se chama?)'],
          ],
        },
        examples: [
          ['Te nokomityaro namenakotero okantakotiri shiyakantsi.', 'Não tenho dificuldade em ler a legenda da imagem.'],
          ['Eiro pipiakotaro poyero pitetsitok.', 'Não se esqueça de pôr os dois-pontos.'],
          ['¿Jaoka ojitari ñakarontsi timarantapaintsiri?', 'Qual é o número que sobrou?'],
        ],
      },
    ],
    pitfalls: [
      'Usar “te” para proibir: numa ordem negativa (“não faça”), o asháninka usa “eiro”.',
      'Confundir “ari” com “aari”: “ari” é uma afirmação, “aari” é “irmão” na boca de uma mulher — é um dos poucos casos em que a escrita dobra a vogal.',
    ],
    quiz: [
      { question: 'Como se diz “não” numa frase comum (não numa ordem)?', options: ['te', 'eiro', 'je'], answer: 'te', explanation: '“Eiro” é para ordens negativas (“não faça”); “je” é sim.' },
      { question: 'Qual palavra abre a pergunta “como você se chama?”', options: ['jaoka', 'je', 'naro'], answer: 'jaoka', explanation: '“¿Jaoka pijitari?”' },
    ],
  },
  {
    id: 'cni-g3',
    level: 'A1.2',
    title: 'Nobanko, pibanko, ibanko: de quem é',
    emoji: '🏠',
    summary: 'Os mesmos prefixos do verbo marcam o dono no nome: no- meu, pi- teu, i- dele, o- dela, a- nosso.',
    sections: [
      {
        // Montoya e Ramos 2024, p. 95 (“Los prefijos también se unen a los sustantivos para referir a la
        // persona poseedora”); nobanko: Kindberg 1980, p. 107; pibanko, ibanko, abanko, pitomi, oitsare:
        // MINEDU 2021 (entradas pitsirekero, kipatsipetoki, karamina, sankenarentsipana, pintsereakotero)
        text: 'Para dizer de quem é uma coisa, o asháninka usa no nome os mesmos prefixos do verbo. Com “casa” dá para ver quase todos, em frases reais: nobanko (minha casa), pibanko (tua casa), ibanko (a casa dele), abanko (a nossa casa). Note que “pankotsi” (casa, de ninguém em especial) perde o final -tsi e troca o p por b quando ganha dono.',
        table: {
          head: ['Dono', 'Prefixo', 'Exemplo'],
          rows: [
            ['meu', 'no-', 'nobanko (minha casa), notomi (meu filho)'],
            ['teu', 'pi-', 'pibanko (tua casa), pitomi (teu filho)'],
            ['dele', 'i-', 'ibanko (a casa dele)'],
            ['dela', 'o-', 'oitsare (a roupa dela)'],
            ['nosso', 'a-', 'abanko (a nossa casa)'],
          ],
        },
        examples: [
          ['Nojate nobankoki.', 'Vou para a minha casa.'],
          ['Pitsirekero shiyakantsi ashitakoroki pibanko.', 'Cole o desenho na porta da sua casa.'],
          ['Itantotaro kipatsipetoki ibanko koki.', 'A parede da casa do meu sogro é de adobe.'],
          ['Kametsa abetsikantyaro karamina abanko.', 'É bom cobrir a nossa casa com zinco.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “Nojate pankotsiki” para “vou para a MINHA casa”: com dono, a palavra muda — “nobankoki”.',
      'Achar que i- e o- são só “ele” e “ela” do verbo: no nome, eles são “dele” e “dela” (ibanko, oitsare).',
    ],
    quiz: [
      { question: 'Como se diz “a tua casa”?', options: ['pibanko', 'nobanko', 'abanko'], answer: 'pibanko', explanation: 'pi- é “teu”; no- é “meu” e a- é “nosso”.' },
      { question: '“Notomi” quer dizer…', options: ['meu filho', 'teu filho', 'filho dela'], answer: 'meu filho', explanation: 'no- é “meu”; “teu filho” é “pitomi”.' },
    ],
  },
  {
    id: 'cni-g4',
    level: 'A1.2',
    title: 'Noito, nako: o corpo sempre tem dono, e o -ki do lugar',
    emoji: '✋',
    summary: 'Partes do corpo e parentes vêm com dono; sem dono, ganham -tsi. E -ki marca o lugar.',
    sections: [
      {
        // Kindberg 1980, p. 5 (naco / acontsi), p. 299 (iitontsi / noito); Montoya e Ramos 2024, p. 94
        // (alienáveis × inalienáveis); Cushimariano e Sebastián 2008 (“-tsi suf. Se añade a sustantivos
        // no poseídos”)
        text: 'Partes do corpo e parentes são “de alguém” por natureza, e o dicionário os dá já com dono: noito (minha cabeça), nako (minha mão), noki (meu olho), noiti (meu pé), noishi (meu cabelo). Quando é preciso falar de uma parte do corpo sem dono, a palavra ganha o final -tsi: a cabeça, em geral, é “iitontsi”; e “akontsi”, da mesma raiz de “nako”, é a impressão digital.',
        examples: [
          ['noito → iitontsi', 'minha cabeça → cabeça (de ninguém em especial)'],
          ['nako → akontsi', 'minha mão → impressão digital'],
        ],
      },
      {
        // Montoya e Ramos 2024, p. 94: “los sustantivos no reciben marcas de caso, excepto el sufijo
        // locativo -ki”; frases: Kindberg 1980, pp. 107-108; MINEDU 2021, entrada tipitsaro
        text: 'O substantivo asháninka não muda para sujeito ou objeto; a única marca que ele recebe é -ki, que diz “em” ou “para” um lugar.',
        examples: [
          ['Nojempatake noitiki.', 'Estou com o pé dormente (lit. no meu pé).'],
          ['Ijajenkatake otishiki ikajemi.', 'Faz eco nos morros quando ele chama.'],
          ['Pishiyakante kipatsiki aparoni tipitsaro antaro.', 'Desenhe no chão uma linha aberta grande.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra “solta” para “mão” ou “olho” ao falar do próprio corpo: use a forma com dono (nako, noki).',
      'Esquecer o -ki: “Nojate nobanko” fica sem o “para”; o certo é “Nojate nobankoki”.',
    ],
    quiz: [
      { question: 'Como se diz “minha cabeça”?', options: ['noito', 'iitontsi', 'noiti'], answer: 'noito', explanation: '“Iitontsi” é a cabeça sem dono; “noiti” é “meu pé”.' },
      { question: 'O que o final -ki faz em “nobankoki”?', options: ['diz “para” (o lugar)', 'faz o plural', 'diz “meu”'], answer: 'diz “para” (o lugar)', explanation: '“Nojate nobankoki” — vou PARA a minha casa; o “meu” é o no-.' },
    ],
  },
];
