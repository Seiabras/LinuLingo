import type { StorySeed } from '../types';

/**
 * Histórias interativas do tsakônio — uma por nível (A1.1 e A1.2), pacote incompleto. Nenhuma das duas
 * fontes consultadas (Wikcionário e o artigo da Wikipédia, ver o cabeçalho de vocabulario.ts) é um livro
 * de diálogos: a primeira história reaproveita, quase sem alteração, as quatro frases de viagem
 * REALMENTE atestadas na tabela “Sample texts” do artigo da Wikipédia (“Κιά έννι το όντα σι;”, “Κιά έννι
 * το περιγιάλλι;”, “Μη' μ' αντζίζερε όρπα!”) mais a frase “Groússa námou eíni ta Tsakónika.”, citada em
 * outro trecho do mesmo artigo. As demais falas das duas histórias foram montadas combinando só o
 * pronome “νι” com a cópula de 3ª pessoa “έννι” (também atestada, na tabela de conjugação do mesmo
 * artigo) e palavras do vocabulário — nunca palavras novas.
 */
export const STORIES_TSD: StorySeed[] = [
  {
    id: 'tsd-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Κιά έννι...;',
    emoji: '🛏️',
    summary: 'Alguém chega a uma pousada na Tsakônia e pergunta onde fica o quarto e a praia.',
    cultural_context:
      'As quatro frases centrais desta história vêm, quase sem alteração, da tabela “Sample texts” do artigo da Wikipédia em inglês sobre o tsakônio (en.wikipedia.org/wiki/Tsakonian_Greek) — frases de viagem pensadas para quem visita a região.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Κιά έννι το όντα σι;',
        translation: 'Onde fica o quarto dele/dela?',
        emoji: '🛏️',
        choices: [
          { text: 'Νι έννι τάνου.', translation: 'É em cima.', next: 'praia' },
          { text: 'Νι έννι λιούκο.', translation: 'Isto é um lobo.', wrong: 'Isso não responde onde fica o quarto. Diga onde ele fica, com “Νι έννι τάνου.” (é em cima).' },
        ],
      },
      praia: {
        text: 'Καούρ! Κιά έννι το περιγιάλλι;',
        translation: 'Bem! Onde fica a praia?',
        emoji: '🏖️',
        choices: [
          { text: 'Νι έννι κάτου.', translation: 'É embaixo.', next: 'toque' },
          { text: 'Νι έννι μάλι.', translation: 'É uma maçã.', wrong: 'Isso não indica onde fica a praia. Diga “Νι έννι κάτου.” (é embaixo).' },
        ],
      },
      toque: {
        text: "Καούρ! Μη' μ' αντζίζερε όρπα!",
        translation: 'Bem! Não me toque ali!',
        emoji: '✋',
        choices: [
          { text: 'Καούρ, καούρ.', translation: 'Tá bem, tá bem.', next: 'final' },
          { text: 'Νι έννι βάννε.', translation: 'É um cordeiro.', wrong: 'A pessoa pediu para não tocar ali — isso muda de assunto. Responda “Καούρ, καούρ.” (tá bem, tá bem).' },
        ],
      },
      final: {
        text: 'Groússa námou eíni ta Tsakónika.',
        translation: 'Nossa língua é o tsakônio.',
        emoji: '🏛️',
        ending: {
          tone: 'bom',
          title: 'Em tsakônio, com cuidado',
          message: 'Você indicou o quarto e a praia e respeitou o pedido de não tocar — e terminou lembrando: nossa língua é o tsakônio.',
        },
      },
    },
    glossary: [
      ['κιά', 'onde'],
      ['όντα', 'quarto, aposento'],
      ['περιγιάλλι', 'praia'],
      ['όρπα', 'ali, lá'],
    ],
  },
  {
    id: 'tsd-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Σχίνα, θάσσα, κούλικα',
    emoji: '⛰️',
    summary: 'Um passeio pela Tsakônia: a montanha, o mar e os animais da aldeia.',
    cultural_context:
      'A Tsakônia fica numa faixa montanhosa do leste do Peloponeso, perto do golfo de Argólida — por isso a montanha (“σχίνα”) e o mar (“θάσσα”) aparecem lado a lado na vida da região, junto com a antiga tradição pastoril de criar boi, vaca e cordeiro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Νι έννι σχίνα.',
        translation: 'Isto é uma montanha.',
        emoji: '⛰️',
        choices: [
          { text: 'Νι έννι θάσσα.', translation: 'Isto é o mar.', next: 'animais' },
          { text: 'Νι έννι ύο.', translation: 'Isto é água.', wrong: 'A cena mostra a montanha e o mar, não só água sozinha. Siga com “Νι έννι θάσσα.” (isto é o mar).' },
        ],
      },
      animais: {
        text: 'Νι έννι βου τσαι κούλικα.',
        translation: 'É um boi e uma vaca.',
        emoji: '🐂',
        choices: [
          { text: 'Νι έννι βάννε τσαι κούε.', translation: 'É um cordeiro e um cachorro.', next: 'noite' },
          { text: 'Νι έννι ουιθί.', translation: 'É uma cobra.', wrong: 'A cena é da fazenda, com boi e vaca — fale de outros animais da fazenda, como “βάννε” (cordeiro) e “κούε” (cachorro).' },
        ],
      },
      noite: {
        text: 'Σάμερε αμέρα, επφέρζι νιούτθα.',
        translation: 'Hoje é dia, ontem foi noite.',
        emoji: '🌙',
        choices: [
          { text: 'Καούρ!', translation: 'Bem!', next: 'final' },
          { text: 'Κάτου.', translation: 'Embaixo.', wrong: 'Isso não combina com o comentário sobre o dia e a noite. Diga “Καούρ!” (bem!).' },
        ],
      },
      final: {
        text: 'Νι έννι μάλι τσαι βότσχε.',
        translation: 'É uma maçã e uma uva.',
        emoji: '🍎',
        ending: {
          tone: 'bom',
          title: 'Um dia na Tsakônia',
          message: 'Montanha, mar, animais da fazenda e frutas — um pequeno retrato da vida na região onde o tsakônio ainda se fala.',
        },
      },
    },
    glossary: [
      ['σχίνα', 'montanha'],
      ['θάσσα', 'mar'],
      ['βου', 'boi'],
      ['κούλικα', 'vaca'],
    ],
  },
];
