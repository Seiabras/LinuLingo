import type { UnitSeed } from '../types';

/**
 * Trilha do eʋe — por enquanto só as duas unidades do nível A1 (pacote marcado como incompleto; ver
 * `incomplete` em index.ts). Cada lição usa só palavras e construções com fonte verificada (ver o
 * cabeçalho de vocabulario.ts): sem verbo “ser/estar” nem “ter” confirmados, as frases juntam
 * substantivo+artigo (“xɔ la”) ou sujeito+verbo+objeto.
 */
export const UNITS_EE: UnitSeed[] = [
  {
    id: 'ee-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ƒome la',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'ee-c1',
      title: 'O eʋe, a língua do Volta e do sul do Togo',
      emoji: '🇬🇭',
      history:
        'O eʋe (Eʋegbe) é falado por cerca de 5 milhões de pessoas, principalmente no sudeste de Gana (Região do Volta) e no sul do Togo, com falantes também no Benin. É o maior dos cinco grupos de línguas gbe (Capo, 1988), a mesma família do fon, falado mais a leste, no Benin. Pertence à família Níger-Congo, ramo Volta-Níger, grupo gbe — é uma língua de ordem sujeito-verbo-objeto (SVO) e tonal, como o fon.',
      culture_tip:
        '“Wòe zɔ” (bem-vindo, literalmente algo como “você andou bem”) é como o Wiktionary registra a saudação de boas-vindas em eʋe. A família extensa (ƒome) — pai, mãe, irmãos e filhos — é o centro da vida social do povo eʋe nos dois lados da fronteira entre Gana e Togo.',
      grammar_why:
        'O artigo definido “la” vem DEPOIS da palavra, nunca antes: “xɔ la” é “a casa”, nunca “la xɔ” — o Wiktionary mostra o mesmo padrão em “ànyígbá lá” (a terra). E o eʋe não distingue “ele” de “ela”: um pronome só, “eya”, serve para as duas coisas.',
      grammar_examples: [
        ['Wòe zɔ! Ƒome la.', 'Bem-vindo! A família.'],
        ['Fofo la kple nɔ la.', 'O pai e a mãe.'],
        ['Eya no tsi.', 'Ele/ela bebe água.'],
        ['Nye kpɔ nɔvi.', 'Eu vejo o irmão/a irmã.'],
      ],
      character_guide: [
        ['ɖ', 'som parecido com um “d” mais pesado', 'ɖeka (um), ɖu (comer)'],
        ['ƒ', 'um “f” dito com os dois lábios, não com o dente', 'ƒome (família)'],
        ['ɔ', 'o “ó” aberto de “avó”', 'ɔ dentro de “gbɔ̃”, “kpɔ”'],
        ['ŋ', 'o “n” de “banco”, dito sozinho no começo da palavra', 'ŋutsu (homem), ŋku (olho)'],
        ['til sobre a vogal (ã, ẽ, ɔ̃…)', 'nasalização — a vogal soa “pelo nariz”', 'gbɔ̃ (cabra), dzĩ (vermelho)'],
      ],
    },
    lessons: [
      {
        id: 'ee-u1-l1',
        title: 'Ƒome la',
        kind: 'licao',
        words: ['fofo', 'nɔ', 'nɔvi', 'vi', 'ƒome', 'ame'],
        cloze: [
          { sentence: '___ la.', answer: 'Fofo', options: ['Fofo', 'Nɔ', 'Nɔvi'], translation: 'O pai.' },
          { sentence: '___ la.', answer: 'Nɔvi', options: ['Nɔvi', 'Vi', 'Ame'], translation: 'O irmão/a irmã.' },
          { sentence: '___ la.', answer: 'Ƒome', options: ['Ƒome', 'Ame', 'Vi'], translation: 'A família.' },
        ],
        voice: {
          bot: 'Fofo kple nɔ.',
          botTranslation: 'Pai e mãe.',
          expected: ['Nɔvi kple vi.', 'nɔvi kple vi'],
          hint: 'Diga “irmão/irmã e filho/filha”, ligando com “kple”: “Nɔvi kple vi.”.',
        },
        communityPrompt: 'Escreva sobre sua família ligando duas pessoas com “kple” (e/com), como “fofo kple nɔ”.',
      },
      {
        id: 'ee-u1-l2',
        title: 'Nye, wò, eya',
        kind: 'licao',
        words: ['nye', 'wò', 'eya', 'mí', 'wo', 'ŋutsu'],
        cloze: [
          { sentence: '___ zɔ.', answer: 'Mí', options: ['Mí', 'Nye', 'Wo'], translation: 'Nós andamos.' },
          { sentence: '___ no tsi.', answer: 'Eya', options: ['Eya', 'Wò', 'Mí'], translation: 'Ele/ela bebe água.' },
          { sentence: '___ la.', answer: 'Ŋutsu', options: ['Ŋutsu', 'Nyɔnu', 'Ame'], translation: 'O homem.' },
        ],
        voice: {
          bot: 'Eya no tsi.',
          botTranslation: 'Ele/ela bebe água.',
          expected: ['Nye no tsi.', 'nye no tsi', 'no tsi'],
          hint: 'Diga que você também bebe água: “Nye no tsi.”.',
        },
        communityPrompt: 'Escreva uma frase com um pronome (nye, wò, eya, mí, wo) e o verbo “no” (beber) ou “zɔ” (andar).',
      },
      {
        id: 'ee-u1-l3',
        title: 'Prova: Ƒome la',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ƒome la: fofo, nɔ, nɔvi, kple vi.',
          botTranslation: 'A família: pai, mãe, irmão/irmã e filho/filha.',
          expected: ['Nye kpɔ ƒome la.', 'nye kpɔ'],
          hint: 'Diga que você vê a família: “Nye kpɔ ƒome la.”.',
        },
        communityPrompt: 'Escreva uma frase sobre pessoas da família usando “kple” (e) para ligar pelo menos duas palavras do vocabulário desta unidade.',
      },
    ],
  },
  {
    id: 'ee-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Dzata, gbɔ̃ kple koklo',
    emoji: '🐐',
    card: {
      id: 'ee-c2',
      title: 'Bichos, números e cores',
      emoji: '🔢',
      history:
        'Cabra, ovelha e galinha são bichos comuns nas casas eʋe do sul de Gana e do Togo; o leão (dzata) aparece sobretudo em histórias e símbolos. Os números do eʋe de 1 a 10 (ɖeka, eve, etɔ̃, ene, atɔ̃, ade, adre, enyi, asieke, ewo) têm raízes no Proto-Gbe compartilhadas com o fon e outras línguas gbe — “eve” (dois) e o fon “àwè”, por exemplo, vêm da mesma raiz proto-gbe.',
      culture_tip:
        'Uma curiosidade do eʋe escrito sem tom: “enyi” pode ser “oito” ou “vaca” — só o tom (não marcado no dia a dia) separa as duas palavras, do mesmo jeito que “asi” pode ser “mão”, “mercado” ou “esposa”.',
      grammar_why:
        'Números e adjetivos vêm DEPOIS do nome, nunca antes: “koklo eve” é “duas galinhas” (galinha-dois), nunca “eve koklo”; “xɔ gã” é “a casa grande” (casa-grande). A Wikipédia confirma essa ordem para adjetivos, numerais e demonstrativos em eʋe.',
      grammar_examples: [
        ['Koklo eve.', 'Duas galinhas.'],
        ['Xɔ gã kple xɔ sue.', 'Casa grande e casa pequena.'],
        ['Dzata la dzo.', 'O leão vai embora.'],
        ['Nye ɖu abolo eye no tsi.', 'Eu como pão e bebo água.'],
      ],
      character_guide: [
        ['dz', 'um só som, “d” e “z” juntos', 'dzata (leão), dzo (partir)'],
        ['tr', 'o “t” seguido de um “r” bem fraco', 'trɔ (virar)'],
        ['ɣ', 'um som de atrito no fundo da garganta, sem igual exato no português', 'ɣe (sol), ɣi (branco)'],
        ['ʋ', 'um “v” dito com o lábio de baixo e os dentes de cima, bem suave', 'presente em “Eʋe”, o nome da própria língua'],
      ],
    },
    lessons: [
      {
        id: 'ee-u2-l1',
        title: 'Lã siwo míekpɔna',
        kind: 'licao',
        words: ['avu', 'gbɔ̃', 'alẽ', 'koklo', 'dzata', 'kpɔ'],
        cloze: [
          { sentence: 'Nye ___ koklo.', answer: 'kpɔ', options: ['kpɔ', 'no', 'ɖu'], translation: 'Eu vejo a galinha.' },
          { sentence: '___ la.', answer: 'Gbɔ̃', options: ['Gbɔ̃', 'Alẽ', 'Avu'], translation: 'A cabra.' },
          { sentence: '___ la dzo.', answer: 'Dzata', options: ['Dzata', 'Koklo', 'Avu'], translation: 'O leão vai embora.' },
        ],
        voice: {
          bot: 'Dzata la dzo.',
          botTranslation: 'O leão vai embora.',
          expected: ['Nye kpɔ dzata.', 'nye kpɔ dzata'],
          hint: 'Diga que você vê o leão: “Nye kpɔ dzata.”.',
        },
        communityPrompt: 'Escreva uma frase com “kpɔ” (ver) e um animal do vocabulário.',
      },
      {
        id: 'ee-u2-l2',
        title: 'Ɖu, no, wɔ',
        kind: 'licao',
        words: ['ɖu', 'no', 'abolo', 'aha', 'tsi', 'wɔ'],
        cloze: [
          { sentence: 'Nye ___ abolo.', answer: 'ɖu', options: ['ɖu', 'no', 'wɔ'], translation: 'Eu como pão.' },
          { sentence: 'Fofo ___ aha.', answer: 'no', options: ['no', 'ɖu', 'kpɔ'], translation: 'O pai bebe vinho de palma.' },
          { sentence: 'Ame la ___ xɔ.', answer: 'wɔ', options: ['wɔ', 'ɖu', 'no'], translation: 'A pessoa faz/constrói a casa.' },
        ],
        voice: {
          bot: 'Nye ɖu abolo eye no tsi.',
          botTranslation: 'Eu como pão e bebo água.',
          expected: ['Nye ɖu abolo.', 'nye ɖu abolo'],
          hint: 'Diga que você come pão: “Nye ɖu abolo.”.',
        },
        communityPrompt: 'Escreva uma frase ligando dois verbos com “eye” (e), como “ɖu” (comer) e “no” (beber).',
      },
      {
        id: 'ee-u2-l3',
        title: 'Prova: Dzata, gbɔ̃ kple koklo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Xɔ gã kple xɔ sue.',
          botTranslation: 'Casa grande e casa pequena.',
          expected: ['Nye kpɔ xɔ gã.', 'nye kpɔ'],
          hint: 'Diga que você vê uma casa grande: “Nye kpɔ xɔ gã.”.',
        },
        communityPrompt: 'Escreva uma frase usando um número (ɖeka a ewo) e um animal ou objeto do vocabulário, como “koklo eve” (duas galinhas).',
      },
    ],
  },
];
