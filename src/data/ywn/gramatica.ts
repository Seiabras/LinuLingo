import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do yawanawá — só dois, de propósito: as fontes consultadas nesta entrega não
 * trazem pronomes, verbos nem uma descrição gramatical completa da língua (ver a nota longa em
 * index.ts), então em vez de inventar regras, ficam só os dois pontos que dá pra confirmar com fontes
 * específicas: a pronúncia (native-languages.org/yawanawa_guide.htm) e a formação do próprio nome do
 * povo, “Yawanawá” (pt.wikipedia.org/wiki/Yawanawá; pib.socioambiental.org/pt/Povo:Yawanawá).
 */
export const GRAMMAR_YWN: GrammarTopic[] = [
  {
    id: 'ywn-g1',
    level: 'A1.1',
    title: 'Pronúncia: vogais e consoantes',
    emoji: '🔤',
    summary: 'O alfabeto do yawanawá usa letras latinas comuns, mas algumas soam diferente do português.',
    sections: [
      {
        text: 'O guia de pronúncia consultado (native-languages.org/yawanawa_guide.htm) descreve as vogais, as vogais nasais e as consoantes do yawanawá comparando com sons do inglês. Esta tabela traz só as letras que também aparecem no vocabulário já confirmado deste pacote.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['a', 'como em “fada”', 'kaman (cachorro)'],
            ['e', 'som fechado, mais perto de um “i” que do “é” do português', 'rekin (nariz)'],
            ['i', 'como em “si”', 'viru (olho)'],
            ['u', 'como em “lua”', 'uxe (lua)'],
            ['r', 'um tepe rápido, parecido com o “r” fraco do português em “cara”', 'vari (sol)'],
            ['s', 'como em “sol”', 'saiti (festa, grito ritual)'],
            ['w', 'como em “watt”, nunca como o “v” do português', 'waka (água)'],
            ['x', 'como o “ch” de “chuva” em Portugal, ou o “sh” do inglês', 'xinaya (especialista em reza)'],
            ['y', 'como em “iogurte”', 'yawa (queixada)'],
          ],
        },
        examples: [
          ['Waka.', 'Água.'],
          ['Xinaya.', 'Especialista em reza.'],
        ],
      },
    ],
    pitfalls: [
      'Ler “w” como o “v” do português: em yawanawá soa como o “w” do inglês “watt”.',
      'Ler “x” como “ks” (tipo “táxi”): em yawanawá soa como “sh”.',
    ],
    quiz: [
      { question: 'Como soa o “x” em yawanawá, em palavras como “xinaya”?', options: ['Como “sh” do inglês', 'Como “ks” de “táxi”', 'Como “z”'], answer: 'Como “sh” do inglês', explanation: 'O guia de pronúncia descreve o “x” do yawanawá como o som “sh” do inglês “shell”.' },
      { question: 'O que quer dizer “waka”?', options: ['água', 'fogo', 'terra'], answer: 'água', explanation: '“Waka” é a palavra confirmada para “água” em native-languages.org/yawanawa_words.htm.' },
    ],
  },
  {
    id: 'ywn-g2',
    level: 'A1.1',
    title: 'De onde vem o nome “Yawanawá”',
    emoji: '🐗',
    summary: 'O nome do povo e da língua nasce da junção de duas palavras: “yawa” (queixada) e “nawa” (povo).',
    sections: [
      {
        text: 'Diferente do huni kuĩ (pacote “cbs” deste app), cujo nome mais usado — “kaxinawá” — é um exônimo de origem pejorativa, “Yawanawá” é a própria autodesignação do povo: “yawa” é o queixada, um porco-do-mato, e “nawa” quer dizer “povo” ou “gente”. Junto, o nome significa “o povo do queixada” (pt.wikipedia.org/wiki/Yawanawá; pib.socioambiental.org/pt/Povo:Yawanawá).',
        examples: [
          ['Yawa + nawa = Yawanawá.', 'Queixada + gente = o nome do povo.'],
        ],
      },
    ],
    pitfalls: ['Achar que “Yawanawá” é uma palavra única sem partes: na verdade é a soma de “yawa” (queixada) com “nawa” (gente, povo).'],
    quiz: [
      { question: 'O que significa “yawa” dentro do nome “Yawanawá”?', options: ['queixada (porco-do-mato)', 'rio', 'sol'], answer: 'queixada (porco-do-mato)', explanation: '“Yawa” é o queixada, um porco-do-mato — a primeira metade do nome do povo.' },
      { question: 'O que significa “nawa” dentro do nome “Yawanawá”?', options: ['gente, povo', 'água', 'casa'], answer: 'gente, povo', explanation: '“Nawa” quer dizer “povo” ou “gente” — a segunda metade do nome.' },
    ],
  },
];
