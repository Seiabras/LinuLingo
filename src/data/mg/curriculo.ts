import type { UnitSeed } from '../types';

/**
 * Trilha do malgaxe: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_MG: UnitSeed[] = [
  {
    id: 'mg-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Manao ahoana! As primeiras palavras em malgaxe',
    emoji: '👋',
    card: {
      id: 'mg-c1',
      title: 'Uma língua da Indonésia, numa ilha ao lado da África',
      emoji: '🗺️',
      history:
        'Madagascar fica a 400 km da costa africana, mas a língua da maioria do país não é africana: é austronésia, da mesma família do indonésio, do malaio e do javanês. O parente mais próximo do malgaxe hoje é o maanyan, falado no sul de Borneo (Indonésia) — os primeiros habitantes de Madagascar chegaram de lá, cruzando o Oceano Índico, entre os séculos VII e VIII. A população da ilha hoje é geneticamente cerca de metade africana, metade austronésia, mas a língua manteve quase só a herança austronésia, com poucos empréstimos de línguas bantas.',
      culture_tip:
        'O malgaxe é a língua materna da maioria dos quase 30 milhões de habitantes de Madagascar, e é língua oficial ao lado do francês. Este curso ensina o dialeto merina, a base do malgaxe padrão/oficial, falado nos planaltos centrais ao redor da capital Antananarivo — há outros dialetos regionais pela ilha, principalmente na costa.',
      grammar_why:
        'A diferença mais marcante do malgaxe para o português não está nas palavras, mas na ORDEM da frase: o malgaxe é VOS (verbo/predicado, depois objeto, depois sujeito) — o oposto da ordem SVO do português. Por isso “Tsara izy” não é “Bem ele”, e sim “Ele está bem”: o predicado (“tsara”, bom/bem) vem primeiro, e quem está bem (“izy”, ele/ela) vem depois.',
      grammar_examples: [
        ['Tsara izy.', 'Ele/ela está bem. (lit. “bem ele/ela”)'],
        ['Manao ahoana ianao?', 'Como você está? (lit. “faz como você”)'],
      ],
      character_guide: [
        ['ts', 'som parecido com o “tch” do português, mas mais seco, sem o “i”', 'Tsara (bom), tsia (não)'],
        ['tr / dr', 'a língua toca mais atrás no céu da boca do que no português, quase um som só', 'trano (casa), rano (água, sem o “t”)'],
        ['o', 'soa como o “u” do português, nunca como o “o” de “bola” ou “avô”', 'mofo (pão, soa “mufu”), trondro (peixe, soa “trundru”)'],
      ],
    },
    lessons: [
      {
        id: 'mg-u1-l1',
        title: 'Manao ahoana, misaotra!',
        kind: 'licao',
        words: ['Manao ahoana', 'Veloma', 'Misaotra', 'Azafady', 'Eny', 'Tsia'],
        cloze: [
          { sentence: '___, Rakoto!', answer: 'Manao ahoana', options: ['Manao ahoana', 'Veloma', 'Azafady'], translation: 'Oi, Rakoto!' },
          { sentence: 'Tsara be ny andro. ___, Reny!', answer: 'Misaotra', options: ['Misaotra', 'Veloma', 'Tsia'], translation: 'O dia está muito bom. Obrigado, mamãe!' },
          { sentence: '— Manao ahoana! — ___, tsara aho.', answer: 'Eny', options: ['Eny', 'Tsia', 'Veloma'], translation: '— Oi! — Sim, eu estou bem.' },
        ],
        voice: {
          bot: 'Manao ahoana! Ahoana ianao?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Tsara aho, misaotra!', 'tsara aho', 'misaotra'],
          hint: 'Responda que está bem com “tsara aho” e agradeça com “misaotra”.',
        },
        communityPrompt: 'Escreva três frases em malgaxe: um cumprimento com “Manao ahoana”, um agradecimento com “Misaotra” e uma despedida com “Veloma”.',
      },
      {
        id: 'mg-u1-l2',
        title: 'Aho, ianao, izy',
        kind: 'licao',
        words: ['Aho', 'Ianao', 'Izy', 'Isika', 'Lehibe', 'Kely'],
        cloze: [
          { sentence: 'Tsara ___, misaotra!', answer: 'aho', options: ['aho', 'ianao', 'izy'], translation: 'Eu estou bem, obrigado!' },
          { sentence: 'Mihinana vary ___.', answer: 'isika', options: ['isika', 'aho', 'ianao'], translation: 'Nós comemos arroz.' },
          { sentence: '___ ny trano, kely ny saka.', answer: 'Lehibe', options: ['Lehibe', 'Kely', 'Tsara'], translation: 'A casa é grande, o gato é pequeno.' },
        ],
        voice: {
          bot: 'Manao ahoana ianao?',
          botTranslation: 'Como você está?',
          expected: ['Tsara aho, misaotra! Ianao?', 'tsara aho', 'misaotra'],
          hint: 'Responda com “tsara aho” e devolva a pergunta com “ianao?”.',
        },
        communityPrompt: 'Descreva algo grande (“lehibe”) e algo pequeno (“kely”) que você tem em casa, usando “manana” (ter).',
      },
      {
        id: 'mg-u1-l3',
        title: 'Prova: manao ahoana',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Manao ahoana! Manana trano lehibe ve ianao?',
          botTranslation: 'Oi! Você tem uma casa grande?',
          expected: ['Manao ahoana! Eny, manana trano lehibe aho, misaotra!', 'manao ahoana', 'manana trano lehibe', 'misaotra'],
          hint: 'Devolva o cumprimento, responda com “eny”/“tsia” e “manana trano lehibe aho” (eu tenho uma casa grande) e agradeça com “misaotra”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em malgaxe: cumprimento, como você está (“tsara aho”) e algo sobre o seu tamanho preferido de casa (“lehibe” ou “kely”).',
      },
    ],
  },
  {
    id: 'mg-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ny fianakaviana sy ny trano',
    emoji: '🏠',
    card: {
      id: 'mg-c2',
      title: '“Rahalahy” e “rahavavy”: irmãos pelo sexo de quem fala',
      emoji: '🧭',
      history:
        'O malgaxe, como várias línguas austronésias, não escolhe a palavra para “irmão”/“irmã” só pela idade ou pelo sexo do irmão: ela também muda pelo sexo de QUEM FALA. “Rahalahy” é o irmão de um HOMEM, e “rahavavy” é a irmã de uma MULHER; para o irmão de uma mulher ou a irmã de um homem, o malgaxe tem outras palavras (“anadahy”, “anabavy”), fora desta primeira versão do curso. É uma lógica bem diferente do português, que nomeia irmãos só pelo sexo deles mesmos, não pelo de quem fala.',
      culture_tip:
        'A família extensa (“fianakaviana”) tem peso grande na vida malgaxe, inclusive em cerimônias como o “famadihana” (a “virada dos ossos”, um reencontro festivo com os antepassados) — assunto para mais adiante no curso, quando a gramática já cobrir frases mais longas.',
      grammar_why:
        'O substantivo vem ANTES do adjetivo em malgaxe, o oposto do que o português faz em casos como “casa grande”/“grande casa” (onde dá pra inverter, mas o padrão neutro é substantivo primeiro mesmo): em malgaxe não tem opção, é sempre substantivo + adjetivo. É a mesma lógica da ordem VOS (o núcleo vem primeiro, o detalhe depois).',
      grammar_examples: [
        ['trano lehibe', 'casa grande (lit. “casa grande”, nesta ordem)'],
        ['Lehibe ny trano.', 'A casa é grande. (como predicado, “lehibe” pula pra frente — ver unidade 1)'],
      ],
      character_guide: [
        ['ny', 'artigo definido (“o”/“a”/“os”/“as”), antes do substantivo', 'ny trano (a casa), ny reny (a mãe)'],
        ['-ko', 'sufixo de posse, “meu/minha”, colado na palavra', 'anarako (meu nome, de “anarana” + “ko”)'],
      ],
    },
    lessons: [
      {
        id: 'mg-u2-l1',
        title: 'Ny fianakaviana',
        kind: 'licao',
        words: ['Reny', 'Dada', 'Rahalahy', 'Rahavavy', 'Sakaiza', 'Fianakaviana'],
        cloze: [
          { sentence: 'Tsara ny ___.', answer: 'reny', options: ['reny', 'dada', 'sakaiza'], translation: 'A mãe está bem.' },
          { sentence: 'Lehibe ny ___.', answer: 'dada', options: ['dada', 'reny', 'rahavavy'], translation: 'O pai é grande/alto.' },
          { sentence: 'Tsara ny ___, tsy ratsy.', answer: 'sakaiza', options: ['sakaiza', 'fianakaviana', 'rahalahy'], translation: 'O amigo é bom, não é mau.' },
        ],
        voice: {
          bot: 'Manana fianakaviana lehibe ve ianao?',
          botTranslation: 'Você tem uma família grande?',
          expected: ['Eny, manana fianakaviana lehibe aho.', 'manana', 'fianakaviana lehibe'],
          hint: 'Responda com “eny” ou “tsia” e “manana fianakaviana lehibe aho” (eu tenho uma família grande).',
        },
        communityPrompt: 'Apresente a sua família em malgaxe: cite “reny” (mãe), “dada” (pai) e “rahalahy” ou “rahavavy” (irmão/irmã), com “tsara” para dizer que estão bem.',
      },
      {
        id: 'mg-u2-l2',
        title: 'Ao an-trano',
        kind: 'licao',
        words: ['Trano', 'Rano', 'Mihinana', 'Misotro', 'Tia', 'Mandeha'],
        cloze: [
          { sentence: 'Lehibe ny ___.', answer: 'trano', options: ['trano', 'rano', 'saka'], translation: 'A casa é grande.' },
          { sentence: 'Misotro ___ aho.', answer: 'rano', options: ['rano', 'trano', 'vary'], translation: 'Eu bebo água.' },
          { sentence: '___ vary aho.', answer: 'Tia', options: ['Tia', 'Mandeha', 'Misotro'], translation: 'Eu gosto de arroz.' },
        ],
        voice: {
          bot: 'Tia vary ve ianao?',
          botTranslation: 'Você gosta de arroz?',
          expected: ['Eny, tia vary aho!', 'tia vary', 'aho'],
          hint: 'Use “tia…aho” (eu gosto de…) para responder.',
        },
        communityPrompt: 'Descreva a sua casa (“trano”) em duas ou três frases, e diga o que você come (“mihinana”) ou bebe (“misotro”).',
      },
      {
        id: 'mg-u2-l3',
        title: 'Prova: fianakaviana sy trano',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Fianakaviana sy trano?',
          botTranslation: 'Família e casa?',
          expected: ['Manana reny sy dada aho. Lehibe ny trano.', 'manana', 'lehibe ny trano'],
          hint: 'Cite os parentes com “manana…aho” (eu tenho) e descreva a casa com “lehibe ny trano” ou “kely ny trano”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
