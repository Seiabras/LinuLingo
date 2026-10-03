import type { StorySeed } from '../types';

/**
 * Uma única história curta, por causa da escassez de fontes (ver `incomplete` em index.ts). As fontes
 * consultadas não registram nenhuma frase marúbo com gramática de conversa (saudação, pergunta, verbo
 * conjugado) — só títulos sociais e termos cosmológicos isolados, e dois compostos reais, “Yové Vai”
 * (caminho dos espíritos) e “Vei Vai” (caminho da névoa), citados por pib.socioambiental.org/pt/
 * Povo:Marubo (Instituto Socioambiental). Por isso, em vez de simular um diálogo (que exigiria inventar
 * verbos e pronomes que as fontes não confirmam), esta história usa só essas palavras e compostos reais
 * como “falas”, e as escolhas testam se quem joga reconhece o significado de cada um — nunca uma
 * combinação de palavras inventada por este curso.
 */
export const STORIES_MZR: StorySeed[] = [
  {
    id: 'mzr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Os dois caminhos',
    emoji: '🌫️',
    summary: 'Uma jornada pelos dois caminhos cosmológicos marúbo citados pelo Instituto Socioambiental: o caminho dos espíritos e o caminho da névoa.',
    cultural_context:
      'Segundo o ISA, depois da morte uma das almas da pessoa é encaminhada para o “Caminho da Névoa” (Vei Vai), que ela percorre passando por provas e perigos até chegar ao lugar onde vivem as almas de sua própria seção — trocando sua pele pela do macaco-parauacu, o Roka, num céu chamado shokó. No início, dizem os Marúbo, os vivos também podiam ir e vir pelo “Yové Vai”, um caminho até os espíritos yové.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Yové Vai.',
        translation: 'Caminho dos espíritos.',
        emoji: '✨',
        choices: [
          { text: 'Vei Vai.', translation: 'Caminho da névoa.', next: 'nevoa' },
          {
            text: 'Roka.',
            translation: 'Macaco-parauacu.',
            wrong: 'Isso nomeia o animal em que a alma troca de pele, não o outro caminho citado pelo ISA. Responda com o outro caminho: “Vei Vai.” (caminho da névoa).',
          },
        ],
      },
      nevoa: {
        text: 'Roka.',
        translation: 'Macaco-parauacu — animal em cuja pele a alma é trocada no Caminho da Névoa, segundo o ISA.',
        emoji: '🐒',
        choices: [
          { text: 'Shokó.', translation: 'O céu onde se faz essa troca.', next: 'final' },
          {
            text: 'Koka.',
            translation: 'Tio materno.',
            wrong: 'A fala era sobre o lugar da troca de pele (o céu), não sobre parentesco. Responda com “Shokó.” (o céu onde a alma troca de pele).',
          },
        ],
      },
      final: {
        text: 'Kakáya!',
        translation: 'Dono de maloca respeitado! (título de prestígio entre os Marúbo)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Os dois caminhos',
          message:
            'Você percorreu os dois caminhos cosmológicos marúbo citados pelo Instituto Socioambiental — o caminho dos espíritos (Yové Vai) e o caminho da névoa (Vei Vai) —, reconheceu o macaco Roka e o céu Shokó, e terminou lembrando do kakáya, o dono de maloca respeitado que promove festas e a paz.',
        },
      },
    },
    glossary: [
      ['Yové Vai', 'caminho dos espíritos'],
      ['Vei Vai', 'caminho da névoa'],
      ['Roka', 'macaco-parauacu'],
      ['Shokó', 'céu onde a alma troca de pele'],
      ['Kakáya', 'dono de maloca respeitado'],
    ],
  },
];
